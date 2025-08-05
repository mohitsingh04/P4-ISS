import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";
import AddFaq from "./AddFaq";
import EditFaq from "./EditFaq";

export default function Faq() {
  const { objectId } = useParams();
  const [faqs, setFaqs] = useState([]);
  const [propertyId, setPropertyId] = useState(null);
  const [isUpdating, setIsUpdating] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const propertyResponse = await API.get(`/property/${objectId}`);
      setPropertyId(propertyResponse.data.uniqueId);

      const faqResponse = await API.get(
        `/property/faq/${propertyResponse.data.uniqueId}`
      );
      setFaqs(faqResponse.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [objectId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (faqId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await API.delete(`/faqs/${faqId}`);
          setFaqs(faqs.filter((faq) => faq.uniqueId !== faqId));
          Swal.fire({
            icon: "success",
            title: "Deleted",
            text: "FAQ deleted successfully",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete FAQ",
          });
        }
      }
    });
  };

  return (
    <div>
      {!isUpdating ? (
        <>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h5 className="m-0">View FAQ</h5>
                </Card.Header>
                <Card.Body>
                  {faqs.length === 0 ? (
                    <p>No FAQs available</p>
                  ) : (
                    <Accordion>
                      {faqs.map((faq, index) => (
                        <Accordion.Item
                          eventKey={index.toString()}
                          key={faq.uniqueId}
                        >
                          <Accordion.Header>
                            <div className="d-flex justify-content-between w-100 align-items-center">
                              <span>{faq.question}</span>
                              <div className="d-flex gap-2">
                                <span
                                  onClick={() => setIsUpdating(faq.uniqueId)}
                                  className="btn btn-sm btn-primary"
                                >
                                  <i className="fe fe-edit"></i>
                                </span>
                                <span
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleDelete(faq.uniqueId)}
                                >
                                  <i className="fe fe-trash-2"></i>
                                </span>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <AddFaq propertyId={propertyId} fetchData={fetchData} />
        </>
      ) : (
        <EditFaq
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
          fetchData={fetchData}
        />
      )}
    </div>
  );
}
