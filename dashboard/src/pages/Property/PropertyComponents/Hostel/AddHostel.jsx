import JoditEditor from "jodit-react";
import React, { useMemo, useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { getEditorConfig } from "../../../../context/getEditorConfig";
import { useFormik } from "formik";
import { hostelValidation } from "../../../../context/ValidationSchemas";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";

export default function AddHostel({ property, authUser, getHostel }) {
  const editorConfig = useMemo(() => getEditorConfig(), []);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      userId: authUser?.uniqueId || "",
      property_id: property?.uniqueId || "",
      hostel_name: "",
      hostel_price: "",
      hostel_description: "",
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
        const response = await API.post(`/hostel`, updatedData);
        Swal.fire({
          icon: "success",
          title: "Hostel Added",
          text:
            response.data.message || "The Hostel has been added successfully!",
          timer: 2000,
        });
        getHostel();
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text:
            error.response?.data?.error ||
            "Something went wrong while adding the Hostel.",
        });
      } finally {
        setIsLoading(false);
        formik.resetForm();
      }
    },
  });

  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Title>Add Hostel</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label>Hostel Name</Form.Label>
              <Form.Select
                name="hostel_name"
                onChange={formik.handleChange}
                value={formik.values.hostel_name}
              >
                <option value="">Select Hostel</option>
                <option value="Co. Ed.">Co. Ed.</option>
                <option value="Boys">Boys</option>
                <option value="Girls.">Girls.</option>
              </Form.Select>
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
            </Form.Group>

            <Button
              type="submit"
              disabled={!formik.values.hostel_description || isLoading}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
