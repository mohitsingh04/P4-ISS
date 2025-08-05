import React from "react";
import { Card, Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";
import { couponValidation } from "../../../../context/ValidationSchemas";

export default function AddCoupon({ property, authUser, getCoupons }) {
  const getInitials = (name) =>
    name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  const generateCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 10; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    formik.setFieldValue("coupon_code", code);
  };

  const propertyInitials = getInitials(property?.property_name);

  const formik = useFormik({
    initialValues: {
      property_id: property?.uniqueId || "",
      userId: authUser?.uniqueId || "",
      coupon_code: "",
      start_from: "",
      valid_upto: "",
      discount: "",
      description: "",
    },
    validationSchema: couponValidation,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const fullCouponCode = propertyInitials + values.coupon_code;

      const payload = {
        property_id: values.property_id,
        userId: values.userId,
        coupon_code: fullCouponCode,
        start_from: values.start_from,
        valid_upto: values.valid_upto,
        discount: values.discount,
        description: values.description,
      };

      try {
        const response = await API.post("/coupons", payload);
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Coupon created successfully",
            timer: 2000,
          });
          resetForm();
          getCoupons();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error?.response?.data?.error || "Something went wrong",
        });
      }
    },
  });

  return (
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Create Coupon</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Coupon Code</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    value={propertyInitials}
                    disabled
                    style={{ maxWidth: "100px" }}
                  />
                  <Form.Control
                    type="text"
                    name="coupon_code"
                    placeholder="Enter code or Generate Code"
                    value={formik.values.coupon_code}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "coupon_code",
                        e.target.value.toUpperCase()
                      )
                    }
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.coupon_code}
                  />
                  <Button
                    variant="primary"
                    onClick={generateCode}
                    className="rounded-end"
                    type="button"
                  >
                    <i className="fe fe-zap me-1"></i>Generate
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.coupon_code}
                  </Form.Control.Feedback>
                </InputGroup>
                <div className="text-muted mt-1">
                  Final Code:{" "}
                  <strong>
                    {propertyInitials + formik.values.coupon_code}
                  </strong>
                </div>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Start From</Form.Label>
                    <Form.Control
                      type="date"
                      name="start_from"
                      value={formik.values.start_from}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.errors.start_from}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.start_from}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Valid Upto</Form.Label>
                    <Form.Control
                      type="date"
                      name="valid_upto"
                      value={formik.values.valid_upto}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.errors.valid_upto}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.valid_upto}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Discount (%)</Form.Label>
                <Form.Control
                  type="number"
                  name="discount"
                  placeholder="Enter discount percentage (example: 10)"
                  value={formik.values.discount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.discount}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.discount}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  maxLength={300}
                  name="description"
                  placeholder="Enter description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.description}
                />
                <small className="text-muted float-end">
                  {formik.values.description?.length}/300
                </small>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" variant="success">
                <i className="fe fe-check-circle me-1"></i>Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
