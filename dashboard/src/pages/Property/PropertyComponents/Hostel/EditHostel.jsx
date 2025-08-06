import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { getEditorConfig } from "../../../../context/getEditorConfig";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { hostelValidation } from "../../../../context/ValidationSchemas";
import { API } from "../../../../context/API";

export default function EditHostel({ hostel, getHostel, setIsUpdating }) {
  const editorConfig = useMemo(() => getEditorConfig(), []);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      property_id: hostel?.property_id || "",
      hostel_name: hostel?.hostel_name || "",
      hostel_price: hostel?.hostel_price || "",
      hostel_description: hostel?.hostel_description || "",
    },
    validationSchema: hostelValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsLoading(true);

      const updatedData = {
        ...values,
      };

      if (values.hostel_price !== "") {
        updatedData.hostel_price = Number(values.hostel_price);
      } else {
        delete updatedData.hostel_price;
      }

      try {
        const response = await API.patch(
          `/hostel/${hostel?.uniqueId}`,
          updatedData
        );
        Swal.fire({
          icon: "success",
          title: "Hostel Updated",
          text:
            response.data.message ||
            "The Hostel details have been updated successfully!",
          timer: 2000,
        });
        setIsUpdating("");
        getHostel();
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text:
            error.response?.data?.error ||
            "Something went wrong while updating the Hostel.",
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Edit Hostel</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                  <Form.Label>Hostel Name</Form.Label>
                  <Form.Control
                    name="hostel_name"
                    onChange={formik.handleChange}
                    value={formik.values.hostel_name}
                    disabled
                  />
                  {formik.errors.hostel_name && (
                    <p>{formik.errors.hostel_name}</p>
                  )}
                </Form.Group>

                <Form.Group className="mt-3 mb-3">
                  <Form.Label>Price (INR)</Form.Label>
                  <Form.Control
                    type="number"
                    name="hostel_price"
                    placeholder="Enter price in INR"
                    value={formik.values.hostel_price}
                    onChange={formik.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Hostel Description</Form.Label>
                  <JoditEditor
                    value={formik.values.hostel_description}
                    name="hostel_description"
                    onBlur={() =>
                      formik.setFieldTouched("hostel_description", true)
                    }
                    onChange={(newContent) =>
                      formik.setFieldValue("hostel_description", newContent)
                    }
                    config={editorConfig}
                  />
                  {formik.errors.hostel_description && (
                    <p>{formik.errors.hostel_description}</p>
                  )}
                </Form.Group>

                <Button type="submit" disabled={isLoading}>
                  Submit
                </Button>
                <Button
                  variant="danger"
                  className="ms-1"
                  onClick={() => setIsUpdating("")}
                >
                  Cancel
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
