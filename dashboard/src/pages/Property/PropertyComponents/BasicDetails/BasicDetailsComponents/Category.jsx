import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";

export default function Category({ property, getProperty }) {
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
            item.status === "Active" && item.parent_category === "Academic Type"
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

  const getCategoryToRelatedId = (id) => {
    const val = category.find((item) => item.uniqueId === Number(id));
    return val ? val?.category_name : "Unknown";
  };

  const formik = useFormik({
    initialValues: {
      category: property?.category?.toString() || "",
    },
    validationSchema: Yup.object({
      category: Yup.string().required("Category is required"),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await API.patch(`property/${property._id}`, {
          category: values.category,
        });

        if (response?.status === 200) {
          Swal.fire("Updated!", "Category updated successfully.", "success");
          setIsUpdating(false);
        } else {
          Swal.fire("Error", "Something went wrong.", "error");
        }
      } catch (error) {
        const errorMsg =
          error?.response?.data?.message || "Failed to update category.";
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
        <Form.Label>Academic Type</Form.Label>

        {!isUpdating ? (
          <div className="input-group">
            <Form.Control
              value={getCategoryToRelatedId(property?.category) || "N/A"}
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
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                isInvalid={formik.submitCount > 0 && !!formik.errors.category}
              >
                <option value="">Select Category</option>
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

            {formik.errors.category && (
              <Form.Text className="text-danger">
                {formik.errors.category}
              </Form.Text>
            )}
          </Form>
        )}
      </Form.Group>
    </div>
  );
}
