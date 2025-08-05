import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { getEditorConfig } from "../../../../context/getEditorConfig";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { accomodationValidation } from "../../../../context/ValidationSchemas";
import { API } from "../../../../context/API";

export default function EditAccomodation({
  accomodation,
  getAccomodation,
  setIsUpdating,
}) {
  const editorConfig = useMemo(() => getEditorConfig(), []);
  const [currency, setCurrency] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [prices, setPrices] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (accomodation?.accomodation_price) {
      setPrices(accomodation?.accomodation_price || {});
    }
  }, [accomodation]);

  const addPrice = () => {
    if (!currency || !priceInput) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: !currency
          ? "Please select a currency."
          : "Please enter a price value.",
      });
      return;
    }

    setPrices((prev) => ({
      ...prev,
      [currency]: Number(priceInput),
    }));
    setPriceInput("");
    setCurrency("");
  };

  const removePrice = (key) => {
    const newPrices = { ...prices };
    delete newPrices[key];
    setPrices(newPrices);
  };

  const formik = useFormik({
    initialValues: {
      property_id: accomodation?.property_id || "",
      accomodation_name: accomodation?.accomodation_name || "CoEd.",
      accomodation_description: accomodation?.accomodation_description || "",
    },
    validationSchema: accomodationValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsLoading(true);
      const updatedData = {
        ...values,
        accomodation_price: prices,
      };

      try {
        const response = await API.patch(
          `/accomodation/${accomodation?.uniqueId}`,
          updatedData
        );
        Swal.fire({
          icon: "success",
          title: "Accomodation Updated",
          text:
            response.data.message ||
            "The Accomodation details have been updated successfully!",
          timer: 2000,
        });
        setIsUpdating("");
        getAccomodation();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text:
            error.response?.data?.error ||
            "Something went wrong while updating the Accomodation.",
        });
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <div>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Edit Accomodation</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                  <Form.Label>Accomodation Name</Form.Label>
                  <Form.Select
                    name="accomodation_name"
                    onChange={formik.handleChange}
                    value={formik.values.accomodation_name}
                    disabled
                  >
                    <option value="">Select Accomodation</option>
                    <option value="Co. Ed.">Co. Ed.</option>
                  </Form.Select>
                  {formik.errors.accomodation_name && (
                    <p>{formik.errors?.accomodation_name}</p>
                  )}
                  {formik.errors.accomodation_description && (
                    <p>{formik.errors?.accomodation_description}</p>
                  )}
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col>
                        <Form.Label>Prices</Form.Label>
                        <InputGroup>
                          <Form.Select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                          >
                            <option value="">--select currency--</option>
                            <option value="INR">₹ INR</option>
                            <option value="DOLLAR">$ DOLLAR</option>
                            <option value="EURO">€ EURO</option>
                          </Form.Select>
                          <Form.Control
                            type="number"
                            placeholder="Enter price"
                            value={priceInput}
                            onChange={(e) => setPriceInput(e.target.value)}
                          />
                          <Button onClick={addPrice}>Add Price</Button>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="tags py-2">
                          {Object.entries(prices).map(([key, value]) => (
                            <div className="tag" key={key}>
                              <span>
                                {key === "DOLLAR"
                                  ? "$"
                                  : key === "INR"
                                  ? "₹"
                                  : key === "EURO" && "€"}
                                {value}
                              </span>
                              <button
                                type="button"
                                className="tag-addon btn"
                                onClick={() => removePrice(key)}
                              >
                                <i className="fe fe-x"></i>
                              </button>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Accomodation Description</Form.Label>
                  <JoditEditor
                    value={formik.values.accomodation_description}
                    name="accomodation_description"
                    onBlur={() =>
                      formik.setFieldTouched("accomodation_description", true)
                    }
                    onChange={(newContent) =>
                      formik.setFieldValue(
                        "accomodation_description",
                        newContent
                      )
                    }
                    config={editorConfig}
                  />
                </Form.Group>

                <Button type="submit" disabled={isLoading}>
                  Submit
                </Button>
                <Button
                  variant="danger"
                  className="ms-1"
                  onClick={() => setIsUpdating("")}
                >
                  Cancel
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
