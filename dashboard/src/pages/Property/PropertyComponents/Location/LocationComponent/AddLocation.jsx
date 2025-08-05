import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { API } from "../../../../../context/API";
import Swal from "sweetalert2";
import { locationValidation } from "../../../../../context/ValidationSchemas";
import { useState } from "react";

export default function AddLocation({
  countries,
  states,
  cities,
  setSelectedCountry,
  property,
  setSelectedState,
  getLocation,
}) {
  const [showOtherCountry, setShowOtherCountry] = useState(false);
  const [showOtherState, setShowOtherState] = useState(false);
  const [showOtherCity, setShowOtherCity] = useState(false);

  const formik = useFormik({
    initialValues: {
      property_address: "",
      property_pincode: "",
      property_country: "",
      property_state: "",
      property_city: "",
      property_id: property?.uniqueId || "",
      country_name: "",
      state_name: "",
      city_name: "",
    },
    validationSchema: locationValidation,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const submissionData = { ...values };

        // If country_name provided, blank property_country
        if (values.country_name?.trim() !== "") {
          submissionData.property_country = "";
        }

        if (values.state_name?.trim() !== "") {
          submissionData.property_state = "";
        }

        if (values.city_name?.trim() !== "") {
          submissionData.property_city = "";
        }

        const response = await API.post("/location", submissionData);
        console.log("Location added:", response.data);

        Swal.fire(
          "Success",
          response.data.message || "Location added successfully!",
          "success"
        );
        getLocation();
        resetForm();
        setShowOtherCountry(false);
        setShowOtherState(false);
        setShowOtherCity(false);
      } catch (error) {
        console.error("Error adding location:", error);
        Swal.fire(
          "Error",
          error.response?.data?.error || "Failed to add location.",
          "error"
        );
      }
    },
  });

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="property_address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full address"
                name="property_address"
                value={formik.values.property_address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.property_address}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.property_address}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="property_pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pincode"
                name="property_pincode"
                value={formik.values.property_pincode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.property_pincode}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.property_pincode}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="property_country">
              <Form.Label>Country</Form.Label>
              <Form.Select
                name="property_country"
                value={formik.values.property_country}
                onChange={(e) => {
                  const value = e.target.value;
                  formik.setFieldValue("property_country", value);
                  setSelectedCountry(value === "Other" ? "" : value);
                  setShowOtherCountry(value === "Other");
                }}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.property_country}
              >
                <option value="">Select Country</option>
                {countries
                  ?.sort((a, b) => a.country_name.localeCompare(b.country_name))
                  .map((country, idx) => (
                    <option key={idx} value={country?.country_name}>
                      {country?.country_name}
                    </option>
                  ))}
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.property_country}
              </Form.Control.Feedback>
            </Form.Group>
            {showOtherCountry && (
              <Form.Group controlId="country_name" className="mt-2">
                <Form.Label>Enter Country Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter country name"
                  name="country_name"
                  value={formik.values.country_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.country_name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.country_name}
                </Form.Control.Feedback>
              </Form.Group>
            )}
          </Col>
          <Col md={4}>
            <Form.Group controlId="property_state">
              <Form.Label>State</Form.Label>
              <Form.Select
                name="property_state"
                value={formik.values.property_state}
                onChange={(e) => {
                  const value = e.target.value;
                  formik.setFieldValue("property_state", value);
                  setSelectedState(value === "Other" ? "" : value);
                  setShowOtherState(value === "Other");
                }}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.property_state}
              >
                <option value="">Select State</option>
                {states
                  ?.sort((a, b) => a.name.localeCompare(b.name))
                  .map((state, idx) => (
                    <option key={idx} value={state?.name}>
                      {state?.name}
                    </option>
                  ))}
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.property_state}
              </Form.Control.Feedback>
            </Form.Group>
            {showOtherState && (
              <Form.Group controlId="state_name" className="mt-2">
                <Form.Label>Enter State Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter state name"
                  name="state_name"
                  value={formik.values.state_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.state_name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.state_name}
                </Form.Control.Feedback>
              </Form.Group>
            )}
          </Col>
          <Col md={4}>
            <Form.Group controlId="property_city">
              <Form.Label>City</Form.Label>
              <Form.Select
                name="property_city"
                value={formik.values.property_city}
                onChange={(e) => {
                  const value = e.target.value;
                  formik.setFieldValue("property_city", value);
                  setShowOtherCity(value === "Other");
                }}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.property_city}
              >
                <option value="">Select City</option>
                {cities
                  ?.sort((a, b) => a.name.localeCompare(b.name))
                  .map((city, idx) => (
                    <option key={idx} value={city?.name}>
                      {city?.name}
                    </option>
                  ))}
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {formik.errors.property_city}
              </Form.Control.Feedback>
            </Form.Group>
            {showOtherCity && (
              <Form.Group controlId="city_name" className="mt-2">
                <Form.Label>Enter City Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city name"
                  name="city_name"
                  value={formik.values.city_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.city_name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.city_name}
                </Form.Control.Feedback>
              </Form.Group>
            )}
          </Col>
        </Row>

        <Button type="submit">
          <i className="fe fe-check-circle me-1"></i> Submit Location
        </Button>
      </Form>
    </>
  );
}
