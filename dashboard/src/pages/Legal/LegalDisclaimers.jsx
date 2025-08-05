import React, { useCallback, useEffect, useRef, useState } from "react";
import { Breadcrumb, Button, Card, Col, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import Skeleton from "react-loading-skeleton";
import { API } from "../../context/API";
import Swal from "sweetalert2";

export default function Legaldisclaimer() {
  const navigator = useNavigate();
  const editor = useRef(null);
  const [legalPolicy, setLegalPolicy] = useState("");
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);

  const getAuhtUser = async () => {
    setAuthLoading(true);
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    getAuhtUser();
  }, []);

  if (!authLoading) {
    if (
      !authUser?.permissions?.some((item) => item === "Create Legal Policy")
    ) {
      navigator("/dashboard/access-denied");
    }
  }

  const formik = useFormik({
    initialValues: {
      disclaimer: legalPolicy || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const confirmResult = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to update the legal information?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, update it!",
        cancelButtonText: "No, cancel!",
      });

      if (confirmResult.isConfirmed) {
        try {
          const response = await API.patch("/legal", values);

          Swal.fire({
            icon: "success",
            title: "Successful",
            text: response.data.message || "Successfully Updated Legal",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.response?.data?.error || "Failed To Update Legal",
          });
        }
      }
    },
  });

  const getLegal = useCallback(async () => {
    try {
      const response = await API.get("/legal");
      setLegalPolicy(response.data.disclaimer);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    getLegal();
  }, [getLegal]);

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Disclaimers</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>Legal</Breadcrumb.Item>
            <Breadcrumb.Item active>Disclaimers</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>Disclaimers</Card.Title>
            </Card.Header>
            <Card.Body>
              {loading ? (
                <div>
                  <Skeleton height={40} style={{ marginBottom: "20px" }} />
                  <Skeleton
                    count={8}
                    height={20}
                    style={{ marginBottom: "10px" }}
                  />
                </div>
              ) : (
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group controlId="disclaimer">
                    <Form.Label>Enter Disclaimers</Form.Label>
                    <JoditEditor
                      ref={editor}
                      value={formik.values.disclaimer}
                      onBlur={(newContent) =>
                        formik.setFieldValue("disclaimer", newContent)
                      }
                      onChange={(newContent) =>
                        formik.setFieldValue("disclaimer", newContent)
                      }
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="mt-3">
                    Submit
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
