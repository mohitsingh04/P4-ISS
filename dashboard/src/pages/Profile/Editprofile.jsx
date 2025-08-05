import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Row, Card, Form, Breadcrumb } from "react-bootstrap";
import EditPasswordAndContact from "./EditProfileComponents/EditPasswordAndContact";
import { API } from "../../context/API";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import PhoneInput from "react-phone-input-2";
import { EditProfileValidation } from "../../context/ValidationSchemas";
import EditProfileImage from "./EditProfileComponents/EditProfileImage";
import EditProfileSkeleton from "../../components/Skeletons/EditProfileSkeleton";

const Editprofile = () => {
  const navigator = useNavigate();
  const { objectId } = useParams();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  const getCountries = async () => {
    try {
      const response = await API.get(`/countries`);
      setCountries(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  const getStates = async () => {
    try {
      const response = await API.get("/states");
      setStates(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  const getCities = async () => {
    try {
      const response = await API.get("/cities");
      setCities(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getCountries();
    getStates();
    getCities();
  }, []);

  const getProfile = async () => {
    try {
      setAuthLoading(true);
      const response = await API.get(`/user/${objectId}`);
      setAuthUser(response.data);
      setSelectedState(response?.data?.state);
      setSelectedCountry(response?.data?.country);
      setAuthLoading(false);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (selectedState) {
      const filtered = cities.filter(
        (city) => city.state_name === selectedState
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }, [selectedState, cities]);

  useEffect(() => {
    if (selectedCountry) {
      const filtered = states.filter(
        (state) => state?.country_name === selectedCountry
      );
      setFilteredStates(filtered);
    } else {
      setFilteredStates([]);
    }
  }, [selectedCountry, states]);

  const formik = useFormik({
    initialValues: {
      name: authUser?.name || "",
      email: authUser?.email || "",
      mobile_no: authUser?.mobile_no || "",
      address: authUser?.address || "",
      pincode: authUser?.pincode || "",
      country: authUser?.country || "",
      state: authUser?.state || "",
      city: authUser?.city || "",
    },
    validationSchema: EditProfileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setBtnLoading(true);
      try {
        const response = await API.patch(`/user/${objectId}`, values);
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: response.data.message,
          }).then(() => {
            navigator("/dashboard/profile");
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
      } finally {
        setBtnLoading(false);
      }
    },
  });

  return (
    <Fragment>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Edit Profile</h1>
          {!authLoading ? (
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
                Dashboard
              </Breadcrumb.Item>
              <Breadcrumb.Item
                linkAs={Link}
                linkProps={{ to: "/dashboard/profile" }}
              >
                Profile
              </Breadcrumb.Item>
              <Breadcrumb.Item>Edit</Breadcrumb.Item>
              <Breadcrumb.Item active>{authUser?.name}</Breadcrumb.Item>
            </Breadcrumb>
          ) : (
            <Skeleton />
          )}
        </div>
        <div className="ms-auto pageheader-btn">
          <button className="btn btn-primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </button>
        </div>
      </div>
      <Row>
        <EditPasswordAndContact authUser={authUser} authLoading={authLoading} />
        <Col xl={8} md={12} sm={12}>
          <EditProfileImage authUser={authUser} authLoading={authLoading} />
          {!authLoading ? (
            <Card className="custom-card">
              <Card.Header>
                <h3 className="card-title">Edit Profile</h3>
              </Card.Header>
              <Form onSubmit={formik.handleSubmit}>
                <Card.Body className="py-2">
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="name"
                          placeholder="Full Name"
                          {...formik.getFieldProps("name")}
                          autoComplete="on"
                        />
                        {formik.errors.name && (
                          <small className="text-danger">
                            {formik.errors.name}
                          </small>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="Email">Email</Form.Label>
                        <Form.Control
                          type="email"
                          id="Email"
                          placeholder="Email"
                          {...formik.getFieldProps("email")}
                          autoComplete="on"
                        />
                        {formik.errors.email && (
                          <small className="text-danger">
                            {formik.errors.email}
                          </small>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact</Form.Label>
                    <PhoneInput
                      country={"in"}
                      value={formik.values.mobile_no}
                      onChange={(mobile_no) =>
                        formik.setFieldValue("mobile_no", mobile_no)
                      }
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
                  <Row>
                    <Col lg={6} md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="address">Address</Form.Label>
                        <Form.Control
                          type="text"
                          id="address"
                          placeholder="Address"
                          {...formik.getFieldProps("address")}
                          autoComplete="on"
                        />
                        {formik.errors.address && (
                          <small className="text-danger">
                            {formik.errors.address}
                          </small>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="pincode">Pincode</Form.Label>
                        <Form.Control
                          type="text"
                          id="pincode"
                          placeholder="Pincode"
                          {...formik.getFieldProps("pincode")}
                        />
                        {formik.errors.pincode && (
                          <small className="text-danger">
                            {formik.errors.pincode}
                          </small>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="country">Country</Form.Label>
                        <Form.Select
                          id="country"
                          value={selectedCountry}
                          {...formik.getFieldProps("country")}
                          onChange={(e) => {
                            formik.setFieldValue("country", e.target.value);
                            setSelectedCountry(e.target.value);
                          }}
                        >
                          <option value="" disabled>
                            --Select Country--
                          </option>
                          {countries?.map((opt, index) => (
                            <option key={index} value={opt?.country_name}>
                              {opt?.country_name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="state">State</Form.Label>
                        <Form.Select
                          id="state"
                          value={selectedState}
                          {...formik.getFieldProps("state")}
                          onChange={(e) => {
                            formik.setFieldValue("state", e.target.value);
                            setSelectedState(e.target.value);
                          }}
                        >
                          <option value="" disabled>
                            --Select State--
                          </option>
                          {filteredStates?.map((opt, index) => (
                            <option key={index} value={opt?.name}>
                              {opt?.name}
                            </option>
                          ))}
                        </Form.Select>
                        {formik.errors.state && (
                          <small className="text-danger">
                            {formik.errors.state}
                          </small>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="city">City</Form.Label>
                        <Form.Select
                          id="city"
                          {...formik.getFieldProps("city")}
                        >
                          <option value="">--Select City--</option>
                          {filteredCities?.map((opt, index) => (
                            <option key={index} value={opt?.name}>
                              {opt?.name}
                            </option>
                          ))}
                        </Form.Select>
                        {formik.errors.city && (
                          <small className="text-danger">
                            {formik.errors.city}
                          </small>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <button type="submit" className="btn btn-success">
                    <i className="fe fe-user-check me-1"></i>{" "}
                    {btnLoading ? "Saving..." : "Save"}
                  </button>
                </Card.Footer>
              </Form>
            </Card>
          ) : (
            <EditProfileSkeleton />
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Editprofile;
