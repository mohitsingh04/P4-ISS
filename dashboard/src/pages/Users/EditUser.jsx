import React, { useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import Dropdown from "react-dropdown-select";
import { API } from "../../context/API";
import { EditUserValidation } from "../../context/ValidationSchemas";
import RoleData from "../../JSONS/Role.json";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import EditSkeleton from "../../components/Skeletons/EditSkeleton";

export default function EditUser() {
  const { objectId } = useParams();
  const navigator = useNavigate();
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const [permissionData, setPermissionData] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [status, setStatus] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [responseLoading, setResponseLoading] = useState(false);
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
    if (!authUser?.permissions?.some((item) => item === "Update User")) {
      navigator("/dashboard/access-denied");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setPermissionsLoading(true);
      try {
        const [userRes, statesRes, permissionsRes, statusRes] =
          await Promise.all([
            API.get(`/user/${objectId}`),
            API.get(`/states`),
            API.get(`/permissions`),
            API.get(`/status`),
          ]);
        const formattedUserPermissions = userRes?.data?.permissions?.map(
          (perm) => ({
            label: perm,
            value: perm,
          })
        );
        userRes.data.permissions = formattedUserPermissions;
        setUser(userRes.data);
        setSelectedState(userRes.data.state);
        setStates(statesRes.data);
        const formattedPermissions = permissionsRes?.data.map((perm) => ({
          label: perm.name,
          value: perm.name,
        }));
        setPermissionData(formattedPermissions);
        setStatus(statusRes.data.filter((item) => item.name === "User"));
      } catch (error) {
        console.error(
          error.response.data.error ||
            error.response.data.message ||
            error.message
        );
      } finally {
        setLoading(false);
        setPermissionsLoading(false);
      }
    };

    fetchData();
  }, [objectId]);

  useEffect(() => {
    if (selectedState) {
      const getCities = async () => {
        try {
          const response = await API.get(`/cities`);
          const data = response.data;
          setCity(data.filter((item) => item.state_name === selectedState));
        } catch (error) {
          console.error(
            error.response.data.error ||
              error.response.data.message ||
              error.message
          );
        }
      };
      getCities();
    }
  }, [selectedState]);

  const formik = useFormik({
    initialValues: {
      name: user.name || "",
      email: user.email || "",
      mobile_no: user.mobile_no || "",
      pincode: user.pincode || "",
      address: user.address || "",
      state: user.state || "",
      city: user.city || "",
      role: user.role || "",
      status: user.status || "",
      permission: user?.permissions || [],
    },
    validationSchema: EditUserValidation,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setResponseLoading(true);
      try {
        const formattedValues = {
          ...values,
          permission: values.permission.map((perm) => perm.value),
        };
        const response = await API.patch(`/user/${objectId}`, formattedValues);
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Updated User",
            text: response.data.message || "User Updated Successfully",
          }).then(() => {
            navigator(`/dashboard/user/view/${objectId}`);
          });
        }
      } catch (error) {
        console.log("API Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.error || "Error Occurred",
        });
      } finally {
        setResponseLoading(false);
      }
    },
  });
  useEffect(() => {
    if (permissionData.length > 0) {
      const allSelected = permissionData.every((perm) =>
        formik.values.permission?.some((sel) => sel.value === perm.value)
      );
      setSelectAll(allSelected);
    }
  }, [formik.values.permission, permissionData]);

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    if (checked) {
      formik.setFieldValue("permission", permissionData);
    } else {
      formik.setFieldValue("permission", []);
    }
  };

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
          <h1 className="page-title fw-semibold fs-20 mb-0">Edit User</h1>
          <div>
            {!loading ? (
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
                <Breadcrumb.Item>Edit</Breadcrumb.Item>
                <Breadcrumb.Item active>{user?.name}</Breadcrumb.Item>
              </Breadcrumb>
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
        <div className="ms-auto pageheader-btn">
          <button className="btn btn-primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </button>
        </div>
      </div>
      <Row>
        <Col lg={12}>
          {!loading ? (
            <Card>
              <Card.Header>
                <h5 className="mb-0">Edit User</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      isInvalid={formik.errors.name}
                      autoComplete="off"
                    />
                    {formik.errors.name && (
                      <small className="text-danger">
                        {formik.errors.name}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      disabled
                      className="bg-white"
                      autoComplete="off"
                    />
                    {formik.errors.email && (
                      <small className="text-danger">
                        {formik.errors.email}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact</Form.Label>
                    <PhoneInput
                      country={"in"}
                      value={formik.values.mobile_no}
                      onChange={(mobile_no) =>
                        formik.setFieldValue("mobile_no", mobile_no)
                      }
                      inputProps={{ name: "mobile_no", disabled: true }}
                      inputClass="input100 w-100 border"
                      inputStyle={{ height: "45px" }}
                      buttonClass="bg-white border"
                    />
                    {formik.errors.mobile_no && (
                      <small className="text-danger">
                        {formik.errors.mobile_no}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="pincode">Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      name="pincode"
                      id="pincode"
                      placeholder="Enter Pincode"
                      onChange={formik.handleChange}
                      value={formik.values.pincode}
                    />
                    {formik.errors.pincode && (
                      <small className="text-danger">
                        {formik.errors.pincode}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="address">Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter Address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      autoComplete="off"
                    />
                    {formik.errors.address && (
                      <small className="text-danger">
                        {formik.errors.address}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="state">State</Form.Label>
                    <Form.Select
                      name="state"
                      id="state"
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                        formik.handleChange(e);
                      }}
                      value={formik.values.state}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </Form.Select>
                    {formik.errors.state && (
                      <small className="text-danger">
                        {formik.errors.state}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="city">City</Form.Label>
                    <Form.Select
                      name="city"
                      id="city"
                      onChange={formik.handleChange}
                      value={formik.values.city}
                    >
                      <option value="">Select City</option>
                      {city.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </Form.Select>
                    {formik.errors.city && (
                      <small className="text-danger">
                        {formik.errors.city}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="role">Role</Form.Label>
                    <Form.Select
                      name="role"
                      id="role"
                      onChange={formik.handleChange}
                      value={formik.values.role}
                    >
                      <option value="">Select Role</option>
                      {RoleData.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </Form.Select>
                    {formik.errors.role && (
                      <small className="text-danger">
                        {formik.errors.role}
                      </small>
                    )}
                  </Form.Group>
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
                          multi
                          keepSelectedInList={false}
                          placeholder="Choose Permissions"
                          values={formik.values.permission}
                          onChange={(value) =>
                            formik.setFieldValue("permission", value)
                          }
                          labelField="label"
                          valueField="value"
                        />
                        <Form.Check
                          type="checkbox"
                          id="Select All Permissions"
                          label="Select All Permissions"
                          className="mt-2"
                          checked={selectAll}
                          onChange={handleSelectAllChange}
                        />
                      </>
                    )}
                    {formik.errors.permission && (
                      <small className="text-danger">
                        {formik.errors.permission}
                      </small>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="status">Status</Form.Label>
                    <Form.Select
                      name="status"
                      id="status"
                      onChange={formik.handleChange}
                      value={formik.values.status}
                    >
                      <option value="">Select Status</option>
                      {status.map((item, index) => (
                        <option value={item.parent_status} key={index}>
                          {item?.parent_status}
                        </option>
                      ))}
                    </Form.Select>
                    {formik.errors.status && (
                      <small className="text-danger">
                        {formik.errors.status}
                      </small>
                    )}
                  </Form.Group>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={responseLoading || permissionsLoading}
                  >
                    <i className="fe fe-user-check me-1"></i>
                    {responseLoading ? "Updating..." : "Update"}
                  </button>
                </Form>
              </Card.Body>
            </Card>
          ) : (
            <EditSkeleton />
          )}
        </Col>
      </Row>
    </div>
  );
}
