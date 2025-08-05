import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../../../../context/API";
import { countryValidation } from "../../../../../context/ValidationSchemas";

export default function PropertyCountry({
  countries,
  property,
  getProperty,
  location,
  setSelectedCountry,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [showOtherInput, setShowOtherInput] = useState(false);

  const formik = useFormik({
    initialValues: {
      property_country: location?.property_country || "",
      country_name: "",
    },
    validationSchema: countryValidation,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        let payload;
        if (values.property_country === "Other") {
          payload = {
            property_country: "",
            country_name: values.country_name,
          };
        } else {
          payload = {
            property_country: values.property_country,
            country_name: "",
          };
        }

        const response = await API.patch(
          `/property/location/${property?.uniqueId}`,
          payload
        );

        if (response?.status === 200) {
          Swal.fire("Updated!", "Country updated successfully.", "success");
          setIsUpdating(false);
          setShowOtherInput(false);
        } else {
          Swal.fire("Error", "Something went wrong.", "error");
        }
      } catch (error) {
        console.log(error);
        const errorMsg =
          error?.response?.data?.message || "Failed to update country.";
        Swal.fire("Error", errorMsg, "error");
      } finally {
        setIsLoading(false);
        getProperty();
      }
    },
  });

  const handleCountryChange = (e) => {
    const value = e.target.value;
    formik.setFieldValue("property_country", value);
    setSelectedCountry(value === "Other" ? "" : value);
    setShowOtherInput(value === "Other");
    if (value !== "Other") {
      formik.setFieldValue("country_name", "");
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
        <Form.Label>Country</Form.Label>

        {!isUpdating ? (
          <div className="input-group">
            <Form.Control
              value={location?.property_country || "N/A"}
              disabled
            />
            <Button onClick={() => setIsUpdating(true)}>
              <i className="fe fe-edit"></i>
            </Button>
          </div>
        ) : (
          <Form onSubmit={formik.handleSubmit}>
            <div className="input-group mb-2">
              <Form.Select
                name="property_country"
                value={formik.values.property_country}
                onChange={handleCountryChange}
                isInvalid={
                  formik.touched.property_country &&
                  !!formik.errors.property_country
                }
              >
                <option value="">Select Country</option>
                {countries
                  ?.sort((a, b) => a.country_name.localeCompare(b.country_name))
                  .map((item) => (
                    <option key={item._id} value={item.country_name}>
                      {item.country_name}
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
                placeholder="Enter Country Name"
                name="country_name"
                value={formik.values.country_name}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.country_name && !!formik.errors.country_name
                }
              />
            )}

            {formik.errors.property_country && (
              <Form.Text className="text-danger">
                {formik.errors.property_country}
              </Form.Text>
            )}
            {formik.errors.country_name && (
              <Form.Text className="text-danger">
                {formik.errors.country_name}
              </Form.Text>
            )}
          </Form>
        )}
      </Form.Group>
    </div>
  );
}
