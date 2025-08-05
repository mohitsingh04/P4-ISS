import React, { useState, useEffect, useMemo } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import Dropdown from "react-dropdown-select";
import { seoValidation } from "../../../../context/ValidationSchemas";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";
import { getEditorConfig } from "../../../../context/getEditorConfig";

export default function EditSeo({ seo, getSeo, property, setIsUpdating }) {
  const [metaDescription, setMetaDescription] = useState(
    seo?.meta_description || ""
  );
  const editorConfig = useMemo(() => getEditorConfig(), []);
  const [jsonSchema, setJsonSchema] = useState(seo?.json_schema || "");

  useEffect(() => {
    setMetaDescription(seo?.meta_description || "");
    setJsonSchema(seo?.json_schema || "");
  }, [seo]);

  const formik = useFormik({
    initialValues: {
      title: property?.property_name || "",
      slug: property?.property_slug || "",
      meta_description: seo?.meta_description || "",
      primary_focus_keyword: seo?.primary_focus_keyword || [],
      json_schema: seo?.json_schema || "",
    },
    validationSchema: seoValidation,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      values.meta_description = metaDescription;
      try {
        const response = await API.patch(`/seo/${seo._id}`, values);
        Swal.fire({
          icon: "success",
          title: "Updated Successfully",
          text: response.data.message || "SEO updated successfully",
        });
        setIsUpdating(false);
        getSeo();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.error || "Failed to update SEO",
        });
      }
    },
  });

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <h5 className="m-0">Edit SEO</h5>
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
                      Slug <span className="text-danger">(cannot edit)</span>
                    </Form.Label>
                    <Form.Control
                      name="slug"
                      placeholder="Enter slug"
                      value={formik.values.slug}
                      disabled
                    />
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
                      placeholder="Primary Focus Keyword 3 Allowed"
                      create
                      searchable
                      multi
                      onChange={(value) =>
                        formik.setFieldValue("primary_focus_keyword", value)
                      }
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
                  value={metaDescription}
                  onChange={(content) => {
                    setMetaDescription(content);
                    formik.setFieldValue("meta_description", content);
                  }}
                  config={editorConfig}
                />
                {formik.errors.meta_description && (
                  <div className="text-danger">
                    {formik.errors.meta_description}
                  </div>
                )}
              </Form.Group>

              <Button type="submit">
                <i className="fe fe-check-circle me-1"></i>Update
              </Button>
              <Button
                variant="danger"
                className="ms-1"
                onClick={() => setIsUpdating(false)}
              >
                <i className="fe fe-x me-1"></i>Cancel
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
