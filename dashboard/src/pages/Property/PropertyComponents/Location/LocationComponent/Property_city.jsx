import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";
import { cityValidation } from "../../../../../context/ValidationSchemas";

export default function PropertyCity({
  cities,
  property,
  getProperty,
  location,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const formik = useFormik({
    initialValues: {
      property_city: location?.property_city || "",
      city_name: "",
    },
    validationSchema: cityValidation,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (
        values.property_city === location?.property_city &&
        values.city_name === ""
      ) {
        Swal.fire("No Change", "Selected city is already set.", "info");
        setIsUpdating(false);
        return;
      }

      setIsLoading(true);
      try {
        let payload;
        if (values.property_city === "Other") {
          payload = {
            property_city: "",
            city_name: values.city_name,
          };
        } else {
          payload = {
            property_city: values.property_city,
            city_name: "",
          };
        }

        const response = await API.patch(
          `/property/location/${property.uniqueId}`,
          payload
        );

        if (response?.status === 200) {
          Swal.fire("Updated!", "City updated successfully.", "success");
          setIsUpdating(false);
          setShowOtherInput(false);
        } else {
          Swal.fire("Error", "Something went wrong.", "error");
        }
      } catch (error) {
        const errorMsg =
          error?.response?.data?.message || "Failed to update city.";
        Swal.fire("Error", errorMsg, "error");
      } finally {
        setIsLoading(false);
        getProperty();
      }
    },
  });

  const handleCityChange = (e) => {
    const value = e.target.value;
    formik.setFieldValue("property_city", value);
    setShowOtherInput(value === "Other");
    if (value !== "Other") {
      formik.setFieldValue("city_name", "");
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
        <Form.Label>City</Form.Label>

        {!isUpdating ? (
          <div className="input-group">
            <Form.Control
              value={location?.property_city || "N/A"}
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
                name="property_city"
                value={formik.values.property_city}
                onChange={handleCityChange}
                isInvalid={formik.errors.property_city}
              >
                <option value="">
                  {cities?.length > 0 ? "Select City" : "No cities available"}
                </option>
                {cities
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
                placeholder="Enter City Name"
                name="city_name"
                value={formik.values.city_name}
                onChange={formik.handleChange}
                isInvalid={formik.errors.city_name}
              />
            )}

            {formik.errors.property_city && (
              <Form.Text className="text-danger">
                {formik.errors.property_city}
              </Form.Text>
            )}
            {formik.errors.city_name && (
              <Form.Text className="text-danger">
                {formik.errors.city_name}
              </Form.Text>
            )}
          </Form>
        )}
      </Form.Group>
    </div>
  );
}
