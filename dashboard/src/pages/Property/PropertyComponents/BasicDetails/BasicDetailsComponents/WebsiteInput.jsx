import React from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";
import { useParams } from "react-router-dom";

const WebsiteInput = ({ value, onUpdated }) => {
  const { objectId } = useParams();
  const [isEditing, setIsEditing] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      property_website: value || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const response = await API.patch(`/property/${objectId}`, values);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message || "Updated successfully",
        }).then(() => {
          setIsEditing(false);
          onUpdated();
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error?.response?.data?.error || "Update failed",
        });
      }
    },
  });

  return (
    <Form.Group>
      <Form.Label className="fw-bold">Website</Form.Label>
      <div className="input-group">
        {isEditing ? (
          <Form onSubmit={formik.handleSubmit} className="input-group">
            <Form.Control
              placeholder="www.example.com"
              className="rounded-start-0"
              name="property_website"
              value={formik.values.property_website}
              onChange={formik.handleChange}
            />
            <Button
              className="rounded-start-0"
              variant="success"
              onClick={formik.handleSubmit}
            >
              <i className="fe fe-check-circle"></i>
            </Button>
          </Form>
        ) : (
          <>
            <Form.Control type="text" value={value || "N/A"} disabled />
            <Button onClick={() => setIsEditing(true)}>
              <i className="fe fe-edit"></i>
            </Button>
          </>
        )}
      </div>
    </Form.Group>
  );
};

export default WebsiteInput;
