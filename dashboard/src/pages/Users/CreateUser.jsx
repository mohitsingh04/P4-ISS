import React, { useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Dropdown from "react-dropdown-select";
import PhoneInput from "react-phone-input-2";
import Swal from "sweetalert2";
import RoleData from "../../JSONS/Role.json";
import { API } from "../../context/API";
import { CreateUserValidation } from "../../context/ValidationSchemas";

export default function CreateUser() {
  const navigator = useNavigate();
  const [permissionData, setPermissionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [permissionsLoading, setPermissionsLoading] = useState(true);
  const [selectAll, setSelectAll] = useState(false);

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
    if (!authUser?.permissions?.some((item) => item === "Create User")) {
      navigator("/dashboard/access-denied");
    }
  }

  useEffect(() => {
    const fetchPermissions = async () => {
      setPermissionsLoading(true);
      try {
        const response = await API.get("/permissions");
        const data = response.data;
        const formattedPermissions = data.map((perm) => ({
          label: perm.name,
          value: perm.name,
        }));
        setPermissionData(formattedPermissions);
      } catch (error) {
        console.error("Error fetching permissions:", error);
      } finally {
        setPermissionsLoading(false);
      }
    };

    fetchPermissions();
  }, []);

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    if (checked) {
      formik.setFieldValue("permission", permissionData);
    } else {
      formik.setFieldValue("permission", []);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile_no: "",
      role: "",
      permission: [],
    },
    validationSchema: CreateUserValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const formattedValues = {
          ...values,
          permission: values.permission.map((perm) => perm.value), // <- key change here
        };

        const response = await API.post("/user/new", formattedValues);
        Swal.fire({
          title: "Success",
          text: response.data.message || "User created successfully!",
          icon: "success",
        }).then(() => {
          navigator("/dashboard/user");
        });
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.response.data.error || "Error Occured!",
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (permissionData.length > 0) {
      const allSelected = permissionData.every((perm) =>
        formik.values.permission.some(
          (selected) => selected.value === perm.value
        )
      );
      setSelectAll(allSelected);
    }
  }, [formik.values.permission, permissionData]);

  useEffect(() => {
    if (formik.values.role === "Super Admin" && permissionData.length > 0) {
      formik.setFieldValue("permission", permissionData);
      setSelectAll(true);
    }
  }, [formik.values.role, permissionData]);

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Create User</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/user" }}
            >
              User
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Create</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i>Back
          </Button>
        </div>
      </div>

      <Row>
        <Col className="mx-auto">
          <Card>
            <Card.Header>
              <h5 className="mb-0">Create User</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter full name"
                        {...formik.getFieldProps("name")}
                        isInvalid={formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        {...formik.getFieldProps("email")}
                        isInvalid={formik.errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact</Form.Label>
                      <PhoneInput
                        country={"in"}
                        value={formik.values.mobile_no}
                        onChange={(phone) =>
                          formik.setFieldValue("mobile_no", phone)
                        }
                        inputClass="w-100 border"
                        inputProps={{
                          name: "mobile_no",
                          required: true,
                        }}
                        isInvalid={formik.errors.mobile_no}
                      />
                      {formik.errors.mobile_no && (
                        <div className="text-danger">
                          {formik.errors.mobile_no}
                        </div>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Role</Form.Label>
                      <Form.Select
                        name="role"
                        {...formik.getFieldProps("role")}
                        isInvalid={formik.touched.role && formik.errors.role}
                      >
                        <option value="">Select Role</option>
                        {RoleData.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.role}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Permissions</Form.Label>
                  {permissionsLoading ? (
                    <div>Loading permissions...</div>
                  ) : permissionData.length === 0 ? (
                    <div>No permissions available</div>
                  ) : (
                    <>
                      <Dropdown
                        options={permissionData}
                        multi={true}
                        values={formik.values.permission}
                        onChange={(values) => {
                          formik.setFieldValue("permission", values);
                        }}
                        placeholder="Choose Permissions"
                        labelField="label"
                        valueField="value"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Select All Permissions"
                        className="mt-2"
                        checked={selectAll}
                        onChange={handleSelectAllChange}
                      />
                    </>
                  )}
                  {formik.errors.permission && (
                    <div className="text-danger">
                      {formik.errors.permission}
                    </div>
                  )}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading || permissionsLoading}
                >
                  <i className="fe fe-send me-1"></i>{" "}
                  {loading ? "Adding User..." : "Submit"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
