import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import CreatableSelect from "react-select/creatable";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Card,
  Col,
  Form,
  InputGroup,
  Row,
  Button,
  Breadcrumb,
} from "react-bootstrap";
import { getEditorConfig } from "../../context/getEditorConfig";
import { API } from "../../context/API";
import { Link, useNavigate, useParams } from "react-router-dom";
import ALLImages from "../../common/Imagesdata";
import Swal from "sweetalert2";

export default function UpdateEvent() {
  const { objectId } = useParams();
  const navigator = useNavigate();
  const editorConfig = useMemo(() => getEditorConfig(), []);
  const [entranceType, setEntranceType] = useState("");
  const [currency, setCurrency] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [prices, setPrices] = useState({});
  const [categories, setCategories] = useState([]);
  const [yogatypes, setYogaTypes] = useState([]);
  const [yogaOptions, setYogaOptions] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authUser, setAuthUser] = useState("");
  const [event, setEvent] = useState("");
  const [status, setStatus] = useState([]);

  const getStatus = useCallback(async () => {
    try {
      const response = await API.get(`/status`);
      const data = response.data;
      setStatus(data.filter((item) => item.name === "Events"));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  const getAuthUser = async () => {
    setAuthLoading(true);
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          error.message
      );
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  if (!authLoading) {
    if (!authUser?.permissions?.some((item) => item === "Update Event")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getEvent = useCallback(async () => {
    try {
      const response = await API.get(`/event/${objectId}`);
      setEvent(response.data);
      console.log(response.data);
      setPrices(response.data.prices);
      setEntranceType(response.data.entrance_type);
    } catch (error) {
      console.log(error);
    }
  }, [objectId]);

  useEffect(() => {
    getEvent();
  }, [getEvent]);

  const getYogaTypes = useCallback(async () => {
    try {
      const response = await API.get(`/yoga-types`);
      setYogaTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getYogaTypes();
  }, [getYogaTypes]);

  //   console.log(entranceType)

  useEffect(() => {
    if (yogatypes?.length > 0) {
      const options = yogatypes.map((type) => ({
        value: type.yoga_type.toLowerCase(),
        label: type.yoga_type.toLowerCase(),
      }));
      setYogaOptions(options);
    }
  }, [yogatypes]);

  const getCategoies = useCallback(async () => {
    try {
      const response = await API.get(`/category`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(entranceType, prices);

  useEffect(() => {
    getCategoies();
  }, [getCategoies]);

  const getYogaTypeById = (id) => {
    const type = yogatypes.find((item) => item.uniqueId === id);
    return type?.yoga_type;
  };

  const formik = useFormik({
    initialValues: {
      title: event?.event_title || "",
      description: event?.event_description || "",
      entrance_type: event?.entrance_type || "",
      event_start_date: event?.event_start_date?.slice(0, 10) || "",
      event_end_date: event?.event_end_date?.slice(0, 10) || "",
      visibility_start_date: event?.visibility_start_date?.slice(0, 10) || "",
      visibility_end_date: event?.visibility_end_date?.slice(0, 10) || "",
      event_difficulty_level: Number(event?.event_difficulty_level) || "",
      yoga_type: getYogaTypeById(event?.yoga_type) || "",
      address: event?.address || "",
      duration_value: event?.duration?.split(" ")?.[0] || "",
      duration_type: event?.duration?.split(" ")?.[1] || "",
      featured_image: null,
      status: event.status || "",
    },

    enableReinitialize: true,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("userId", authUser?.uniqueId);
      formData.append("event_title", values.title);
      formData.append("event_start_date", values.event_start_date);
      formData.append("event_end_date", values.event_end_date);
      formData.append("event_difficulty_level", values.event_difficulty_level);
      formData.append("yoga_type", values.yoga_type);
      formData.append("visibility_end_date", values.visibility_end_date);
      formData.append("visibility_start_date", values.visibility_start_date);
      formData.append("entrance_type", values.entrance_type);
      formData.append("event_description", values.description);
      formData.append("address", values.address);
      formData.append(
        "price",
        entranceType === "paid" ? JSON.stringify(prices) : "{}"
      );
      formData.append(
        "duration",
        `${values.duration_value} ${values.duration_type}`
      );
      formData.append("status", values.status);
      if (featuredImage) {
        formData.append("featured_image", featuredImage);
      }

      try {
        const response = await API.patch(`/event/${objectId}`, formData);
        Swal.fire({
          icon: "success",
          title: "Successfull",
          text: response.data.message,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: error.response.data.error,
        });
      } finally {
        navigator(`/dashboard/events`);
      }
    },
  });

  const handleAddPrice = () => {
    if (currency && priceInput) {
      setPrices({ ...prices, [currency]: priceInput });
      setCurrency("");
      setPriceInput("");
    }
  };

  const handleFeaturedImageChange = (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      const isValidType =
        file.type === "image/jpeg" || file.type === "image/png";
      if (isValidType) {
        setFeaturedImage(file);
        setFeaturedImagePreview(URL.createObjectURL(file));
        formik.setFieldValue("featured_image", file);
      } else {
        setFeaturedImage(null);
        setFeaturedImagePreview(null);
        formik.setFieldValue("featured_image", null);
      }
    }
  };
  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Events</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>Events</Breadcrumb.Item>
            <Breadcrumb.Item active>{event?.event_title}</Breadcrumb.Item>
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
              <Card.Title>Update Event</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.title && !!formik.errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <JoditEditor
                    value={formik.values.description}
                    config={editorConfig}
                    onBlur={(newContent) =>
                      formik.setFieldValue("description", newContent)
                    }
                  />
                  {formik.touched.description && formik.errors.description && (
                    <div className="text-danger mt-1">
                      {formik.errors.description}
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Entrance Type</Form.Label>
                  <Form.Select
                    name="entrance_type"
                    value={formik.values.entrance_type}
                    onChange={(e) => {
                      const val = e.target.value;
                      formik.handleChange(e);
                      setEntranceType(val);
                    }}
                    isInvalid={
                      formik.touched.entrance_type &&
                      !!formik.errors.entrance_type
                    }
                  >
                    <option value="">Select</option>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.entrance_type}
                  </Form.Control.Feedback>
                </Form.Group>

                {entranceType === "paid" && (
                  <Row className="align-items-end mb-3">
                    <Col md={6}>
                      <Form.Label>Currency</Form.Label>
                      <InputGroup>
                        <Form.Select
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                        >
                          <option value="">Select Currency</option>
                          <option value="INR">₹ INR</option>
                          <option value="DOLLAR">$ Dollar</option>
                          <option value="EURO">€ Euro</option>
                        </Form.Select>
                        <Form.Control
                          type="number"
                          value={priceInput}
                          onChange={(e) => setPriceInput(e.target.value)}
                          placeholder="Enter price"
                        />
                        <Button onClick={handleAddPrice} variant="success">
                          <i className="fe fe-plus-circle me-1"></i>Add Price
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      {prices && Object.keys(prices).length > 0 && (
                        <div className="tags">
                          {Object.entries(prices).map(([currency, value]) => (
                            <div
                              key={currency}
                              className="tag shadow-sm"
                              style={{ fontSize: "0.9rem" }}
                            >
                              <span>
                                {currency === "INR" && "₹"}
                                {currency === "DOLLAR" && "$"}
                                {currency === "EURO" && "€"}
                                {value}
                              </span>
                              <button
                                type="button"
                                className="tag-addon btn"
                                onClick={() => {
                                  const updated = { ...prices };
                                  delete updated[currency];
                                  setPrices(updated);
                                }}
                              >
                                <i className="fe fe-x"></i>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </Col>
                  </Row>
                )}

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Event Start Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="event_start_date"
                        value={formik.values.event_start_date}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.event_start_date &&
                          !!formik.errors.event_start_date
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.event_start_date}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Event End Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="event_end_date"
                        value={formik.values.event_end_date}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.event_end_date &&
                          !!formik.errors.event_end_date
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.event_end_date}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Visibility Start Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="visibility_start_date"
                        value={formik.values.visibility_start_date}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.visibility_start_date &&
                          !!formik.errors.visibility_start_date
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.visibility_start_date}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Visibility End Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="visibility_end_date"
                        value={formik.values.visibility_end_date}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.visibility_end_date &&
                          !!formik.errors.visibility_end_date
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.visibility_end_date}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Event Level</Form.Label>
                      <Form.Select
                        name="event_difficulty_level"
                        value={formik.values.event_difficulty_level}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.event_difficulty_level &&
                          !!formik.errors.event_difficulty_level
                        }
                      >
                        <option value="">Select Level</option>
                        {categories
                          .filter(
                            (item) =>
                              item?.parent_category?.toLowerCase() ===
                              "difficulty level"
                          )
                          .map((cat) => (
                            <option value={cat?.uniqueId}>
                              {cat.category_name}
                            </option>
                          ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.event_difficulty_level}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Status</Form.Label>
                      <Form.Select
                        name="status"
                        value={formik.values.status}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.status && !!formik.errors.status
                        }
                      >
                        <option value="">Select Level</option>
                        {status.map((sta) => (
                          <option value={sta.parent_status}>
                            {sta.parent_status}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.status}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Yoga Type</Form.Label>
                      <CreatableSelect
                        isClearable
                        isSearchable
                        options={yogaOptions}
                        value={
                          yogaOptions.find(
                            (opt) => opt.value === formik.values.yoga_type
                          ) || {
                            label: formik.values.yoga_type,
                            value: formik.values.yoga_type,
                          }
                        }
                        onChange={(selectedOption) => {
                          formik.setFieldValue(
                            "yoga_type",
                            selectedOption ? selectedOption.value : ""
                          );
                        }}
                        onCreateOption={(inputValue) => {
                          formik.setFieldValue("yoga_type", inputValue);
                        }}
                        placeholder="Select or type a yoga type"
                      />
                      {formik.touched.yoga_type && formik.errors.yoga_type && (
                        <div className="text-danger mt-1">
                          {formik.errors.yoga_type}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.address && !!formik.errors.address
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Duration</Form.Label>
                      <Form.Control
                        type="number"
                        name="duration_value"
                        placeholder="e.g. 3"
                        value={formik.values.duration_value}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.duration_value &&
                          !!formik.errors.duration_value
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.duration_value}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Duration Type</Form.Label>
                      <Form.Select
                        name="duration_type"
                        value={formik.values.duration_type}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.duration_type &&
                          !!formik.errors.duration_type
                        }
                      >
                        <option value="">Select</option>
                        <option value="Hours">Hours</option>
                        <option value="Days">Days</option>
                        <option value="Weeks">Weeks</option>
                        <option value="Months">Months</option>
                        <option value="Years">Years</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.duration_type}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Featured Image (JPG/PNG only)</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/jpeg,image/png"
                        onChange={handleFeaturedImageChange}
                        isInvalid={
                          formik.touched.featured_image &&
                          !!formik.errors.featured_image
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.featured_image}
                      </Form.Control.Feedback>

                      <div className="mt-3">
                        <strong>Preview:</strong>
                        <br />
                        <img
                          src={
                            featuredImagePreview
                              ? featuredImagePreview
                              : event?.featured_image?.[0]
                              ? `${import.meta.env.VITE_MEDIA_URL}/events/${
                                  event?.featured_image?.[0]
                                }`
                              : ALLImages("face8")
                          }
                          alt="Featured Preview"
                          className="w-100 banner-ratio border rounded border-primary"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <Button type="submit" variant="primary">
                  Update Event
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
