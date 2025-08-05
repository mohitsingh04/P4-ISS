import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useFormik } from "formik";
import { propertyCourseValidation } from "../../../../context/ValidationSchemas";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";
import Dropdown from "react-dropdown-select";

export default function EditCourse({
  course,
  getPropertyCourses,
  setIsEditing,
}) {
  const [prices, setPrices] = useState({});
  const [currency, setCurrency] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [status, setStatus] = useState([]);
  const [bestFor, setBestFor] = useState([]);
  const [bestForInput, setBestForInput] = useState("");
  const [languages, setLanguages] = useState([]);
  const [languagesInput, setLanguagesInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [requirmentOptions, setRequirmentOptions] = useState([]);
  const [keyOutcomes, setKeyOutcomesOptions] = useState([]);
  const [mainCourse, setMainCourse] = useState([]);

  const getMainCourse = useCallback(async () => {
    try {
      const response = await API.get(`/course-detail/${course?.course_id}`);
      setMainCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMainCourse();
  }, [getMainCourse]);

  const fetchData = async () => {
    try {
      const [requrimentResponse, keyOutcomeRes, categoryRes] =
        await Promise.all([
          API.get("/requirment/all"),
          API.get("/key-outcome/all"),
          API.get("/category"),
        ]);

      const allRequirments = requrimentResponse.data.map((requirment) => ({
        label: requirment.requirment,
        value: requirment.uniqueId,
      }));
      const keyOutceData = keyOutcomeRes.data.map((keyOpt) => ({
        label: keyOpt.key_outcome,
        value: keyOpt.uniqueId,
      }));
      setCategories(categoryRes.data);
      setKeyOutcomesOptions(keyOutceData);
      setRequirmentOptions(allRequirments);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getRequirmentToRelatedId = (id) => {
    const requirments = requirmentOptions.find(
      (item) => item.value === Number(id)
    );
    return requirments ? requirments?.label : id;
  };
  const getKeyOutcomesToRelatedId = (id) => {
    const outcome = keyOutcomes.find((item) => item.value === Number(id));
    return outcome ? outcome?.label : id;
  };

  const getStatus = async () => {
    try {
      const response = await API.get(`/status`);
      const data = response.data;
      setStatus(data.filter((item) => item.name === "Course"));
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  useEffect(() => {
    if (course) {
      setPrices(course?.prices);
    }
  }, [course]);

  useEffect(() => {
    if (course?.best_for) {
      setBestFor(course?.best_for);
    }
  }, [course]);

  useEffect(() => {
    if (course?.languages) {
      setLanguages(course?.languages);
    }
  }, [course]);

  const formik = useFormik({
    initialValues: {
      course_id: course?.course_id || mainCourse?.uniqueId || "",
      course_type: course?.course_type || mainCourse?.course_type || "",
      course_name: mainCourse?.course_name || "",
      course_short_name:
        course?.course_short_name || mainCourse?.course_short_name || "",
      duration_value:
        course?.duration?.split(" ")?.[0] ||
        mainCourse?.duration?.split(" ")?.[0] ||
        "",
      duration_type:
        course?.duration?.split(" ")?.[1] ||
        mainCourse?.duration?.split(" ")?.[1] ||
        "",
      course_level: course?.course_level || mainCourse?.course_level || "",
      certification_type: mainCourse?.certification_type || "",
      status: course?.status || "",
      cerification_info: course?.cerification_info || false,
      course_format: course?.course_format || "",
      requirements:
        course?.requirements?.map((c) => ({
          label: getRequirmentToRelatedId(c),
          value: Number(c),
        })) ||
        mainCourse?.requirements?.map((c) => ({
          label: getRequirmentToRelatedId(c),
          value: Number(c),
        })) ||
        [],
      key_outcomes:
        course?.key_outcomes?.map((c) => ({
          label: getKeyOutcomesToRelatedId(c),
          value: Number(c),
        })) ||
        mainCourse?.key_outcomes?.map((c) => ({
          label: getKeyOutcomesToRelatedId(c),
          value: Number(c),
        })) ||
        [],
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: propertyCourseValidation,
    onSubmit: async (values) => {
      const data = {
        ...values,
        prices,
        duration: `${values.duration_value} ${values.duration_type}`,
        best_for: bestFor,
        languages: languages,
        final_requirement: values.requirements.map((item) => item.value),
        final_key_outcomes: values.key_outcomes.map((item) => item.value),
      };
      try {
        const response = await API.patch(
          `/property-course/${course?._id}`,
          data
        );
        Swal.fire({
          icon: "success",
          title: "Successfull",
          text: response.data.message || "Successfully added",
        });
        getPropertyCourses();
        setIsEditing(false);
        formik.resetForm();
        setPrices({});
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: error.response.data.error || "failed to add course",
          title: "Error",
        });
      }
    },
  });

  const handleAddPrice = () => {
    if (currency && priceInput) {
      setPrices({ ...prices, [currency]: priceInput });
      setCurrency("");
      setPriceInput("");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please select a currency and enter a price.",
      });
    }
  };

  const handleBestFor = () => {
    if (bestFor.includes(bestForInput.trim())) {
      Swal.fire({
        icon: "warning",
        title: "Duplicate Entry",
        text: `"${bestForInput}" is already in the list.`,
      });
    } else if (bestForInput.trim() !== "") {
      setBestFor((prev) => [...prev, bestForInput.trim()]);
      setBestForInput("");
    }
  };
  const handleBestForRemove = (indexToRemove) => {
    setBestFor((prev) => prev.filter((_, index) => index !== indexToRemove));
  };
  const handleLanguages = () => {
    if (languages.includes(languagesInput.trim())) {
      Swal.fire({
        icon: "warning",
        title: "Duplicate Entry",
        text: `"${languagesInput}" is already in the list.`,
      });
    } else if (languagesInput.trim() !== "") {
      setLanguages((prev) => [...prev, languagesInput.trim()]);
      setLanguagesInput("");
    }
  };

  const handleLanguagesRemove = (indexToRemove) => {
    setLanguages((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>Edit Course</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>
          <h5 className="mb-3 text-dark">Course Details</h5>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                  name="course_name"
                  value={formik.values.course_name}
                  onChange={(e) => formik.handleChange}
                  isInvalid={formik.errors.course_name}
                  disabled
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.course_name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Course Type</Form.Label>
                <Form.Select
                  name="course_type"
                  value={formik.values.course_type}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.course_type}
                >
                  <option value="">Select Type</option>
                  {categories
                    .filter(
                      (item) =>
                        item?.parent_category?.toLowerCase() === "course type"
                    )
                    .map((item) => (
                      <option value={item?.uniqueId}>
                        {item.category_name}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.course_type}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Short Name</Form.Label>
                <Form.Control
                  type="text"
                  name="course_short_name"
                  placeholder="e.g. WD101"
                  value={formik.values.course_short_name}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.course_short_name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.course_short_name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="number"
                  name="duration_value"
                  placeholder="e.g. 3"
                  value={formik.values.duration_value}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.duration_value}
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
                  isInvalid={formik.errors.duration_type}
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
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Course Difficulty Level</Form.Label>
                <Form.Select
                  name="course_level"
                  value={formik.values.course_level}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.course_level}
                >
                  <option value="">Select Level</option>
                  {categories
                    .filter(
                      (item) =>
                        item?.parent_category?.toLowerCase() ===
                        "difficulty level"
                    )
                    .map((item) => (
                      <option value={item?.uniqueId}>
                        {item.category_name}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.course_level}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Certification Type</Form.Label>
                <Form.Select
                  name="certification_type"
                  value={formik.values.certification_type}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.certification_type}
                >
                  <option value="">Select Certification</option>
                  {categories
                    .filter(
                      (item) =>
                        item?.parent_category?.toLowerCase() ===
                        "certification type"
                    )
                    .map((item) => (
                      <option value={item?.uniqueId}>
                        {item.category_name}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.certification_type}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Certification Type</Form.Label>
                <Form.Select
                  name="status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.status}
                >
                  <option value="">Select Status</option>
                  {status?.map((item) => (
                    <option value={item?.parent_status}>
                      {item?.parent_status}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.certification_type}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="align-items-end mb-3">
            <Col md={5}>
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
              {Object.keys(prices).length > 0 && (
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
                        onClick={() =>
                          setPrices((prev) => {
                            const updated = { ...prev };
                            delete updated[currency];
                            return updated;
                          })
                        }
                      >
                        <i className="fe fe-x"></i>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Pre-requisites
                  <OverlayTrigger
                    placement={`top-start`}
                    overlay={
                      <Tooltip
                        className="tooltip-light"
                        style={{ fontSize: "10px" }}
                      >
                        Yoga mat required", "No prior experience needed"
                      </Tooltip>
                    }
                    key={Math.random()}
                  >
                    <i className="fe fe-info ms-1"></i>
                  </OverlayTrigger>
                </Form.Label>
                <Dropdown
                  options={requirmentOptions}
                  multi
                  keepSelectedInList={false}
                  placeholder="Choose Requirments"
                  values={formik.values.requirements}
                  onChange={(value) =>
                    formik.setFieldValue("requirements", value)
                  }
                  labelField="label"
                  valueField="value"
                  searchable={true}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.requirements}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Key Outcomes (What Will You Learn)
                  <OverlayTrigger
                    placement={`top-start`}
                    overlay={
                      <Tooltip
                        className="tooltip-light"
                        style={{ fontSize: "10px" }}
                      >
                        Bullet list of learning outcomes, e.g. improved
                        flexibility, stress relief techniques
                      </Tooltip>
                    }
                    key={Math.random()}
                  >
                    <i className="fe fe-info ms-1"></i>
                  </OverlayTrigger>
                </Form.Label>
                <Dropdown
                  options={keyOutcomes}
                  multi
                  keepSelectedInList={false}
                  placeholder="Choose Key Outcomes"
                  values={formik.values.key_outcomes}
                  onChange={(value) =>
                    formik.setFieldValue("key_outcomes", value)
                  }
                  labelField="label"
                  valueField="value"
                  searchable={true}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.key_outcomes}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      Best For People{" "}
                      <OverlayTrigger
                        placement={`top-start`}
                        overlay={
                          <Tooltip
                            className="tooltip-light"
                            style={{ fontSize: "10px" }}
                          >
                            "People with back pain", "Busy professionals",
                            "Pregnant women", etc.
                          </Tooltip>
                        }
                        key={Math.random()}
                      >
                        <i className="fe fe-info ms-1"></i>
                      </OverlayTrigger>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) => setBestForInput(e.target.value)}
                        value={bestForInput}
                        placeholder="Enter Best For Peoples"
                      />
                      <Button onClick={() => handleBestFor()}>Add</Button>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  {bestFor.length > 0 && (
                    <div className="tags">
                      {bestFor.map((item, index) => (
                        <div
                          key={index}
                          className="tag shadow-sm"
                          style={{ fontSize: "0.9rem" }}
                        >
                          <span>{item}</span>
                          <button
                            type="button"
                            className="tag-addon btn"
                            onClick={() => handleBestForRemove(index)}
                          >
                            <i className="fe fe-x"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      Languages{" "}
                      <OverlayTrigger
                        placement={`top-start`}
                        overlay={
                          <Tooltip
                            className="tooltip-light"
                            style={{ fontSize: "10px" }}
                          >
                            English, Hindi, Bilingual, etc.
                          </Tooltip>
                        }
                        key={Math.random()}
                      >
                        <i className="fe fe-info ms-1"></i>
                      </OverlayTrigger>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) => setLanguagesInput(e.target.value)}
                        value={languagesInput}
                        placeholder="Enter Languages"
                      />
                      <Button onClick={() => handleLanguages()}>Add</Button>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  {languages.length > 0 && (
                    <div className="tags">
                      {languages.map((item, index) => (
                        <div
                          key={index}
                          className="tag shadow-sm"
                          style={{ fontSize: "0.9rem" }}
                        >
                          <span>{item}</span>
                          <button
                            type="button"
                            className="tag-addon btn"
                            onClick={() => handleLanguagesRemove(index)}
                          >
                            <i className="fe fe-x"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </Col>
              </Row>
            </Col>
            <Col md={6} className="mt-3">
              <Form.Group>
                <Form.Label>Course Format</Form.Label>
                <Form.Select
                  name="course_format"
                  value={formik.values.course_format}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.course_format}
                >
                  <option value="" disabled>
                    --select format--
                  </option>
                  {categories
                    .filter(
                      (item) =>
                        item?.parent_category?.toLowerCase() === "course format"
                    )
                    .map((item) => (
                      <option value={item?.uniqueId}>
                        {item.category_name}
                      </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.course_format}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Check
                type="checkbox"
                id="cerification_info"
                name="cerification_info"
                label="Cerification"
                onChange={formik.handleChange}
                checked={formik.values.cerification_info}
                isInvalid={formik.errors.cerification_info}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.cerification_info}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Button type="submit" variant="primary">
            <i className="fe fe-check-circle me-1"></i>Update Course
          </Button>
          <Button
            variant="danger"
            className="ms-1"
            onClick={() => setIsEditing(false)}
          >
            <i className="fe fe-x me-1"></i>Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
