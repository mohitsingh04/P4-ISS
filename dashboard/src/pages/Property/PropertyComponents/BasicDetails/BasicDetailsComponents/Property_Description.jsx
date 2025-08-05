import React, { useEffect, useCallback, useState, useMemo } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";
import { getEditorConfig } from "../../../../../context/getEditorConfig";

export default function Property_Description() {
  const { objectId } = useParams();
  const [property, setProperty] = useState({});
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isUpdatingDescription, setIsUpdatingDescription] = useState(false);
  const editorConfig = useMemo(() => getEditorConfig(), []);

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.error("Failed to fetch property:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch property data",
      });
    }
  }, [objectId]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  const handleUpdate = async (values) => {
    try {
      const response = await API.patch(`/property/${objectId}`, values);
      Swal.fire({
        icon: "success",
        title: "Updated",
        text: response.data.message || "Property updated successfully",
      }).then(() => {
        setIsUpdatingDescription(false);
        getProperty();
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.error || "Update failed",
      });
    }
  };

  const descriptionFormik = useFormik({
    initialValues: {
      property_description: property?.property_description || "",
    },
    onSubmit: handleUpdate,
    enableReinitialize: true,
  });

  return (
    <Card.Footer>
      <Row>
        <Col>
          <Form.Group>
            <div className="d-flex justify-content-between align-items-center">
              <Form.Label className="fw-bold">Description</Form.Label>
              {!isUpdatingDescription && (
                <Button
                  size="sm"
                  onClick={() => setIsUpdatingDescription(true)}
                  className="btn-sm p-2"
                >
                  <i className="fe fe-edit me-1"></i>Edit
                </Button>
              )}
            </div>

            <div className="d-flex">
              {isUpdatingDescription ? (
                <Form
                  onSubmit={descriptionFormik.handleSubmit}
                  className="w-100"
                >
                  <JoditEditor
                    value={descriptionFormik.values.property_description}
                    onChange={(newContent) =>
                      descriptionFormik.setFieldValue(
                        "property_description",
                        newContent
                      )
                    }
                    config={editorConfig}
                    className="w-100"
                  />
                  <div className="mt-3">
                    <Button variant="success" type="submit">
                      <i className="fe fe-check-circle me-1"></i>Submit
                    </Button>
                    <Button
                      variant="danger"
                      className="ms-2"
                      onClick={() => setIsUpdatingDescription(false)}
                    >
                      <i className="fe fe-x me-1"></i>Cancel
                    </Button>
                  </div>
                </Form>
              ) : (
                <div>
                  <div
                    className="description-text"
                    dangerouslySetInnerHTML={{
                      __html: showFullDescription
                        ? property?.property_description
                        : property?.property_description
                            ?.split(" ")
                            .slice(0, 300)
                            .join(" ") +
                          (property?.property_description?.split(" ").length >
                          300
                            ? "..."
                            : ""),
                    }}
                  />
                  {property?.property_description?.split(" ").length > 300 &&
                    !showFullDescription && (
                      <Button
                        variant="link"
                        size="sm"
                        className="mt-2"
                        onClick={() => setShowFullDescription(true)}
                      >
                        Show More
                      </Button>
                    )}
                </div>
              )}
            </div>
          </Form.Group>
        </Col>
      </Row>
    </Card.Footer>
  );
}
