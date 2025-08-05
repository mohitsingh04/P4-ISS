import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";
import { addressValidation } from "../../../../../context/ValidationSchemas";

export default function PropertyAddress({ property, location, getProperty }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      property_address: location?.property_address || "",
    },
    validationSchema: addressValidation,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await API.patch(
          `/property/location/${property.uniqueId}`,
          {
            property_address: values.property_address,
          }
        );

        if (response?.status === 200) {
          Swal.fire(
            "Updated!",
            "Property address updated successfully.",
            "success"
          );
          setIsUpdating(false);
        } else {
          Swal.fire("Error", "Something went wrong.", "error");
        }
      } catch (error) {
        console.log(error);
        const errorMsg =
          error?.response?.data?.message ||
          "Failed to update property address.";
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
        <Form.Label>Property Address</Form.Label>

        {!isUpdating ? (
          <div className="input-group">
            <Form.Control
              value={location?.property_address || "N/A"}
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
                name="property_address"
                placeholder="Enter property address"
                value={formik.values.property_address}
                onChange={formik.handleChange}
                isInvalid={
                  formik.submitCount > 0 && !!formik.errors.property_address
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

            {formik.submitCount > 0 && formik.errors.property_address && (
              <Form.Text className="text-danger">
                {formik.errors.property_address}
              </Form.Text>
            )}
          </Form>
        )}
      </Form.Group>
    </div>
  );
}
