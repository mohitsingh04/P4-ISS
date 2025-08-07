import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";

export default function SchoolType({ property, getProperty }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const response = await API.get(`/category`);
      const data = response.data;
      setCategory(
        data.filter(
          (item) =>
            item.status === "Active" &&
            item.parent_category.toLowerCase() === "school type"
        )
      );
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const formik = useFormik({
    initialValues: {
      school_type: property?.school_type?.toString() || "",
    },
    validationSchema: Yup.object({
      school_type: Yup.string().required("School Type is required"),
    }),
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await API.patch(`/property/${property._id}`, {
          school_type: values.school_type,
        });

        if (response?.status === 200) {
          Swal.fire("Updated!", "School type updated successfully.", "success");
          setIsUpdating(false);
        } else {
          Swal.fire("Error", "Something went wrong.", "error");
        }
      } catch (error) {
        const errorMsg =
          error?.response?.data?.message || "Failed to update school type.";
        Swal.fire("Error", errorMsg, "error");
      } finally {
        setIsLoading(false);
        getProperty();
      }
    },
  });

  const getCategoryToRelatedId = (id) => {
    const val = category.find((item) => item.uniqueId === Number(id));
    return val ? val?.category_name : "Unknown";
  };

  const handleCancel = () => {
    formik.resetForm();
    setIsUpdating(false);
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>School Type</Form.Label>

        {!isUpdating ? (
          <div className="input-group">
            <Form.Control
              value={getCategoryToRelatedId(property?.school_type) || "N/A"}
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
                name="school_type"
                value={formik.values.school_type}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.school_type && !!formik.errors.school_type
                }
              >
                <option value="">Select School Type</option>
                {category.map((item) => (
                  <option key={item._id} value={item.uniqueId?.toString()}>
                    {item.category_name}
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
            <Form.Control.Feedback type="invalid">
              {formik.errors.school_type}
            </Form.Control.Feedback>
          </Form>
        )}
      </Form.Group>
    </div>
  );
}
