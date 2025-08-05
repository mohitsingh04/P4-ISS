import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";

export default function EstablishmentYear({ property, getProperty }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      est_year: property?.est_year || "",
    },
    validationSchema: Yup.object({
      est_year: Yup.number()
        .typeError("Year must be a number")
        .required("Establishment year is required")
        .min(1800, "Enter a valid year")
        .max(new Date().getFullYear(), "Enter a valid year"),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await API.patch(`property/${property._id}`, {
          est_year: values.est_year,
        });

        if (response?.status === 200) {
          Swal.fire(
            "Updated!",
            "Establishment year updated successfully.",
            "success"
          );
          setIsUpdating(false);
        } else {
          Swal.fire("Error", "Something went wrong while updating.", "error");
        }
      } catch (error) {
        const errMsg =
          error?.response?.data?.message ||
          "Failed to update establishment year.";
        Swal.fire("Error", errMsg, "error");
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
        <Form.Label>Establishment Year</Form.Label>
        {!isUpdating ? (
          <div className="input-group">
            <Form.Control value={property?.est_year || "N/A"} disabled />
            <Button onClick={() => setIsUpdating(true)}>
              <i className="fe fe-edit"></i>
            </Button>
          </div>
        ) : (
          <Form onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <Form.Control
                type="number"
                name="est_year"
                value={formik.values.est_year}
                onChange={formik.handleChange}
                isInvalid={formik.submitCount > 0 && !!formik.errors.est_year}
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
            {formik.errors.est_year && (
              <Form.Text className="text-danger">
                {formik.errors.est_year}
              </Form.Text>
            )}
          </Form>
        )}
      </Form.Group>
    </div>
  );
}
