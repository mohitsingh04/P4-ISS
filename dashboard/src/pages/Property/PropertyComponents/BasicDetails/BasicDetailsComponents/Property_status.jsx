import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";

export default function Property_status({ property, getProperty }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusList, setStatusList] = useState([]);

  const getStatusList = async () => {
    try {
      const response = await API.get("/status");
      const data = response.data;
      setStatusList(data.filter((item) => item.name === "Property"));
    } catch (error) {
      console.error("Failed to fetch status list", error);
    }
  };

  useEffect(() => {
    getStatusList();
  }, []);

  const formik = useFormik({
    initialValues: {
      status: property?.status || "",
    },
    validationSchema: Yup.object({
      status: Yup.string().required("Status is required"),
    }),
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await API.patch(`property/${property._id}`, {
          status: values.status,
        });

        if (response?.status === 200) {
          Swal.fire(
            "Updated!",
            "Property status updated successfully.",
            "success"
          );
          setIsUpdating(false);
        } else {
          Swal.fire("Error", "Something went wrong while updating.", "error");
        }
      } catch (error) {
        const errMsg =
          error?.response?.data?.message || "Failed to update property status.";
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
        <Form.Label>Status</Form.Label>

        {!isUpdating ? (
          <div className="input-group">
            <Form.Control
              value={property?.status || "N/A"}
              className={`${
                property?.status === "Active"
                  ? "bg-success-subtle"
                  : property?.status === "Suspended"
                  ? "bg-danger-subtle"
                  : "bg-warning-subtle"
              }`}
              disabled
            />
            <Button onClick={() => setIsUpdating(true)}>
              <i className="fe fe-edit"></i>
            </Button>
          </div>
        ) : (
          <Form onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <Form.Select
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                isInvalid={formik.submitCount > 0 && !!formik.errors.status}
              >
                <option value="">Select Status</option>
                {statusList.map((item, index) => (
                  <option key={index} value={item.parent_status}>
                    {item.parent_status}
                  </option>
                ))}
              </Form.Select>

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

            {formik.errors.status && (
              <Form.Text className="text-danger">
                {formik.errors.status}
              </Form.Text>
            )}
          </Form>
        )}
      </Form.Group>
    </div>
  );
}
