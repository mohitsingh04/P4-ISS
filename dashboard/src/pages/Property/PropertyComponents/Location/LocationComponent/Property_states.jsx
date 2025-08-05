import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";
import { stateValidation } from "../../../../../context/ValidationSchemas";

export default function PropertyState({
  states,
  property,
  getProperty,
  location,
  setSelectedState,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const formik = useFormik({
    initialValues: {
      property_state: location?.property_state || "",
      state_name: "",
    },
    validationSchema: stateValidation,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (
        values.property_state === location?.property_state &&
        values.state_name === ""
      ) {
        Swal.fire("No Change", "Selected state is already set.", "info");
        setIsUpdating(false);
        return;
      }

      setIsLoading(true);
      try {
        let payload;
        if (values.property_state === "Other") {
          payload = {
            property_state: "",
            state_name: values.state_name,
          };
        } else {
          payload = {
            property_state: values.property_state,
            state_name: "",
          };
        }

        const response = await API.patch(
          `/property/location/${property.uniqueId}`,
          payload
        );

        if (response?.status === 200) {
          Swal.fire("Updated!", "State updated successfully.", "success");
          setIsUpdating(false);
          setShowOtherInput(false);
        } else {
          Swal.fire("Error", "Something went wrong.", "error");
        }
      } catch (error) {
        const errorMsg =
          error?.response?.data?.message || "Failed to update state.";
        Swal.fire("Error", errorMsg, "error");
      } finally {
        setIsLoading(false);
        getProperty();
      }
    },
  });

  const handleStateChange = (e) => {
    const value = e.target.value;
    formik.setFieldValue("property_state", value);
    setSelectedState(value === "Other" ? "" : value);
    setShowOtherInput(value === "Other");
    if (value !== "Other") {
      formik.setFieldValue("state_name", "");
    }
  };

  const handleCancel = () => {
    formik.resetForm();
    setIsUpdating(false);
    setShowOtherInput(false);
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>State</Form.Label>

        {!isUpdating ? (
          <div className="input-group">
            <Form.Control
              value={location?.property_state || "N/A"}
              disabled
              readOnly
            />
            <Button onClick={() => setIsUpdating(true)}>
              <i className="fe fe-edit"></i>
            </Button>
          </div>
        ) : (
          <Form onSubmit={formik.handleSubmit}>
            <div className="input-group mb-2">
              <Form.Select
                name="property_state"
                value={formik.values.property_state}
                onChange={handleStateChange}
                isInvalid={formik.errors.property_state}
              >
                <option value="">
                  {states?.length > 0 ? "Select State" : "No states available"}
                </option>
                {states
                  ?.sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                <option value="Other">Other</option>
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

            {showOtherInput && (
              <Form.Control
                className="mb-1"
                placeholder="Enter State Name"
                name="state_name"
                value={formik.values.state_name}
                onChange={formik.handleChange}
                isInvalid={formik.errors.state_name}
              />
            )}

            {formik.errors.property_state && (
              <Form.Text className="text-danger">
                {formik.errors.property_state}
              </Form.Text>
            )}
            {formik.errors.state_name && (
              <Form.Text className="text-danger">
                {formik.errors.state_name}
              </Form.Text>
            )}
          </Form>
        )}
      </Form.Group>
    </div>
  );
}
