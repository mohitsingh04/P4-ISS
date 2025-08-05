import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";
import { pincodeValidation } from "../../../../../context/ValidationSchemas";

export default function PropertyPincode({ property, location, getProperty }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      property_pincode: location?.property_pincode || "",
    },
    validationSchema: pincodeValidation,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await API.patch(
          `/property/location/${property.uniqueId}`,
          {
            property_pincode: values.property_pincode,
          }
        );

        if (response?.status === 200) {
          Swal.fire("Updated!", "Pincode updated successfully.", "success");
          setIsUpdating(false);
        } else {
          Swal.fire("Error", "Something went wrong.", "error");
        }
      } catch (error) {
        const errorMsg =
          error?.response?.data?.message || "Failed to update pincode.";
        Swal.fire("Error", errorMsg, "error");
      } finally {
        setIsLoading(false);
        getProperty();
      }
    },
  });

  const handleCancel = () => {
    formik.resetForm();
    setIsUpdating(false);
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>Property Pincode</Form.Label>

        {!isUpdating ? (
          <div className="input-group">
            <Form.Control
              value={location?.property_pincode || "N/A"}
              disabled
            />
            <Button onClick={() => setIsUpdating(true)}>
              <i className="fe fe-edit"></i>
            </Button>
          </div>
        ) : (
          <Form onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <Form.Control
                type="text"
                name="property_pincode"
                placeholder="Enter pincode"
                value={formik.values.property_pincode}
                onChange={formik.handleChange}
                isInvalid={
                  formik.submitCount > 0 && !!formik.errors.property_pincode
                }
              />

              <Button variant="success" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  <i className="fe fe-check-circle"></i>
                )}
              </Button>

              <Button variant="danger" onClick={handleCancel}>
                <i className="fe fe-x"></i>
              </Button>
            </div>

            {formik.submitCount > 0 && formik.errors.property_pincode && (
              <Form.Text className="text-danger">
                {formik.errors.property_pincode}
              </Form.Text>
            )}
          </Form>
        )}
      </Form.Group>
    </div>
  );
}
