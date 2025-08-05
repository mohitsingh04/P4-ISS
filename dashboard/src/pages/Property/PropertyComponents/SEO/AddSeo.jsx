import React, { useEffect, useMemo, useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import Dropdown from "react-dropdown-select";
import { seoValidation } from "../../../../context/ValidationSchemas";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";
import { getEditorConfig } from "../../../../context/getEditorConfig";

export default function AddSeo({ property, getSeo }) {
  const [metaDescription, setMetaDescription] = useState("");
  const [jsonSchema, setJsonSchema] = useState("");
  const editorConfig = useMemo(() => getEditorConfig(), []);

  function stripHtml(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }

  useEffect(() => {
    if (property?.property_description) {
      const plainText = stripHtml(property.property_description);
      setMetaDescription(plainText.slice(0, 160));
    }
  }, [property]);
  const formik = useFormik({
    initialValues: {
      property_id: property?.uniqueId || "",
      title: property?.property_name || "",
      slug: property?.property_slug || "",
      meta_description: metaDescription || "",
      primary_focus_keyword: [],
      json_schema: "",
    },
    validationSchema: seoValidation,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const response = await API.post(`/seo`, values);
        Swal.fire({
          icon: "success",
          title: "Successfully",
          text: response.data.message || "SEO added Successfully",
        });
        getSeo();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.error || "Failed To Add SEO",
        });
      }
    },
  });

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <h5 className="m-0">Add SEO</h5>
          </Card.Header>
          <Card.Body>
            <Form
              onSubmit={formik.handleSubmit}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>
                      Title <span className="text-danger">(cannot Edit)</span>
                    </Form.Label>
                    <Form.Control
                      name="title"
                      placeholder="Enter title"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.title}
                      disabled
                    />
                    {formik.errors.title && (
                      <div className="text-danger">{formik.errors.title}</div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>
                      Slug <span className="text-danger">(cannot Edit)</span>
                    </Form.Label>
                    <Form.Control
                      name="slug"
                      placeholder="Enter slug"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.slug}
                      disabled
                    />
                    {formik.errors.slug && (
                      <div className="text-danger">{formik.errors.slug}</div>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Primary Focus Keyword</Form.Label>
                    <Dropdown
                      options={[]}
                      values={formik.values.primary_focus_keyword}
                      className="form-control"
                      name="primary_focus_keyword"
                      placeholder="Primary Focus Keyword 2 Allowed "
                      create
                      searchable
                      multi
                      onChange={(value) =>
                        formik.setFieldValue("primary_focus_keyword", value)
                      }
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.primary_focus_keyword && (
                      <div className="text-danger">
                        {formik.errors.primary_focus_keyword}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>JSON Schema</Form.Label>
                <textarea
                  className="form-control"
                  name="json_schema"
                  rows={3}
                  value={jsonSchema}
                  onChange={(e) => {
                    setJsonSchema(e.target.value);
                    formik.setFieldValue("json_schema", e.target.value);
                  }}
                  placeholder="Enter JSON Schema"
                />
                <small className="text-muted float-end">
                  {jsonSchema.length} characters
                </small>
                {formik.errors.json_schema && (
                  <div className="text-danger">{formik.errors.json_schema}</div>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Meta Description</Form.Label>
                <JoditEditor
                  key={metaDescription}
                  value={metaDescription}
                  onBlur={(content) => {
                    formik.setFieldValue("meta_description", content);
                    setMetaDescription(content);
                  }}
                  config={editorConfig}
                />
                {formik.errors.meta_description && (
                  <div className="text-danger">
                    {formik.errors.meta_description}
                  </div>
                )}
              </Form.Group>

              <Button type="submit" className="mt-3">
                <i className="fe fe-check-circle me-1"></i>Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
