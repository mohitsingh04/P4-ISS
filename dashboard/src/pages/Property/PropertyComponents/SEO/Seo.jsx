import React, { useCallback, useEffect, useState } from "react";
import AddSeo from "./AddSeo";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import { Card, Col, Row, ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import EditSeo from "./EditSeo";

export default function Seo() {
  const { objectId } = useParams();
  const [seo, setSeo] = useState(null);
  const [property, setProperty] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [objectId]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  const getSeo = useCallback(async () => {
    if (property) {
      try {
        const response = await API.get(`/seo/property/${property?.uniqueId}`);
        setSeo(response.data);
      } catch (error) {
        console.error(
          error.response.data.error ||
            error.response.data.message ||
            error.message
        );
      }
    }
  }, [property]);

  useEffect(() => {
    getSeo();
  }, [getSeo]);

  const deleteSeo = async (id) => {
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
          const response = await API.delete(`/seo/${id}`);
          Swal.fire({
            title: "Deleted!",
            text: response.data.message || "The SEO details have been deleted.",
            icon: "success",
          });
          window.location.reload();
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: error.response.data.error || "Failed to delete SEO details.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      {seo ? (
        !isUpdating ? (
          <Row>
            <Col>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <h5 className="m-0">SEO Details</h5>
                  <div>
                    <Button
                      className="btn-sm"
                      onClick={() => setIsUpdating(true)}
                    >
                      <i className="fe fe-edit me-1"></i>Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="btn-sm ms-1"
                      onClick={() => deleteSeo(seo?._id)}
                    >
                      <i className="fe fe-trash-2 me-1"></i>Delete
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Title:</strong> {seo.title}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Slug:</strong> {seo.slug}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Primary Focus Keywords:</strong>{" "}
                      {seo.primary_focus_keyword.map((k) => k.value).join(", ")}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>JSON Schema:</strong> {seo.json_schema}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Meta Description:</strong>
                      <div className="mt-2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html:
                              showMore || seo.meta_description.length <= 300
                                ? seo.meta_description
                                : seo.meta_description.substring(0, 300) +
                                  "...",
                          }}
                        />
                        {seo.meta_description.length > 300 && (
                          <Button
                            variant="link"
                            className="p-0 ms-2"
                            onClick={() => setShowMore(!showMore)}
                          >
                            {showMore ? "Show Less" : "Show More"}
                          </Button>
                        )}
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <EditSeo
            seo={seo}
            getSeo={getSeo}
            property={property}
            setIsUpdating={setIsUpdating}
          />
        )
      ) : (
        <AddSeo property={property} getSeo={getSeo} />
      )}
    </div>
  );
}
