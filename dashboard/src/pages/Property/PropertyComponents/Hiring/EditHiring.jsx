import React, { useCallback, useEffect, useMemo, useState } from "react";
import JoditEditor from "jodit-react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { getEditorConfig } from "../../../../context/getEditorConfig";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { HiringValidation } from "../../../../context/ValidationSchemas";
import { API } from "../../../../context/API";

export default function EditHiring({ hiring, getHiring, setIsEditing }) {
  const editorConfig = useMemo(() => getEditorConfig(), []);
  const [skills, setSkills] = useState([]);
  const [skillsInput, setSkillsInput] = useState("");
  const [qualification, setQualification] = useState([]);
  const [qualificationInput, setQualificationInput] = useState("");
  const [salary, setSalary] = useState({});
  const [currency, setCurrency] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [status, setStatus] = useState([]);

  const getStatus = useCallback(async () => {
    try {
      const response = await API.get(`/status`);
      const data = response.data;
      setStatus(data?.filter((item) => item?.name === "Hiring"));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getStatus();
  }, [getStatus]);
  const handleSkills = () => {
    try {
      if (skills.includes(skillsInput.trim())) {
        Swal.fire({
          icon: "warning",
          title: "Duplicate Entry",
          text: `"${skillsInput}" is already in the list.`,
        });
      } else if (skillsInput.trim() !== "") {
        setSkills((prev) => [...prev, skillsInput.trim()]);
        setSkillsInput("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSkillsRemove = (indexToRemove) => {
    setSkills((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const hanldeQualification = () => {
    try {
      if (qualification.includes(qualificationInput.trim())) {
        Swal.fire({
          icon: "warning",
          title: "Duplicate Entry",
          text: `"${qualificationInput}" is already in the list.`,
        });
      } else if (qualificationInput.trim() !== "") {
        setQualification((prev) => [...prev, qualificationInput.trim()]);
        setQualificationInput("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeQualificationRemove = (indexToRemove) => {
    setQualification((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleAddPrice = () => {
    if (currency && amountInput) {
      setSalary({ ...salary, [currency]: amountInput });
      setCurrency("");
      setAmountInput("");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please select a currency and enter a price.",
      });
    }
  };

  useEffect(() => {
    if (hiring) {
      setSalary(hiring?.salary);
      setSkills(hiring?.skills);
      setQualification(hiring?.qualification);
    }
  }, [hiring]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toISOString().split("T")[0];
  };

  const formik = useFormik({
    initialValues: {
      title: hiring?.title || "",
      job_description: hiring?.job_description || "",
      experience: hiring?.experience || "",
      job_type: hiring?.job_type || "",
      start_date: formatDate(hiring?.start_date) || "",
      end_date: formatDate(hiring?.end_date) || "",
      status: hiring.status || "",
    },
    enableReinitialize: true,
    validationSchema: HiringValidation,
    onSubmit: async (values) => {
      if (!salary || Object.values(salary).every((val) => !val)) {
        Swal.fire({
          icon: "warning",
          title: "Salary field is required",
        });
        return;
      }
      if (skills.length <= 0) {
        Swal.fire({
          icon: "warning",
          title: "Skill is Required",
        });
        return;
      }
      if (qualification.length <= 0) {
        Swal.fire({
          icon: "warning",
          title: "Qualification is Required",
        });
        return;
      }
      const payload = { ...values, salary, skills, qualification };
      try {
        const response = await API.patch(
          `/hiring/${hiring?.uniqueId}`,
          payload
        );
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Successfull",
            text: response?.data?.message || "Successfully Added Hiring",
          });
          formik.resetForm();
          setSalary("");
          setSkills([]);
          setQualification([]);
          getHiring();
          setIsEditing("");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error?.response?.data?.error || "Something Went Wrong",
        });
      }
    },
  });
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>Edit Hirings</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    name="title"
                    placeholder="Enter Title"
                    {...formik.getFieldProps("title")}
                    isInvalid={formik.errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Job Description</Form.Label>
                  <JoditEditor
                    value={formik.values.job_description}
                    onChange={(newContent) =>
                      formik.setFieldValue("job_description", newContent)
                    }
                    config={editorConfig}
                    className="w-100"
                  />
                  {formik.errors.job_description &&
                    formik.touched.job_description && (
                      <small className="text-danger">
                        {formik.errors.job_description}
                      </small>
                    )}
                </Form.Group>

                <Row>
                  <Col md={6} className="mb-3">
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            Skills Required
                            <OverlayTrigger
                              placement={`top-start`}
                              overlay={
                                <Tooltip
                                  className="tooltip-light"
                                  style={{ fontSize: "10px" }}
                                >
                                  Hatha Yoga, Ashtanga Yoga, etc.
                                </Tooltip>
                              }
                              key={Math.random()}
                            >
                              <i className="fe fe-info ms-1"></i>
                            </OverlayTrigger>
                          </Form.Label>
                          <InputGroup>
                            <Form.Control
                              onChange={(e) => setSkillsInput(e.target.value)}
                              value={skillsInput}
                              placeholder="Enter Skills Required"
                            />
                            <Button onClick={() => handleSkills()}>Add</Button>
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        {skills.length > 0 && (
                          <div className="tags">
                            {skills.map((item, index) => (
                              <div
                                key={index}
                                className="tag shadow-sm"
                                style={{ fontSize: "0.9rem" }}
                              >
                                <span>{item}</span>
                                <button
                                  type="button"
                                  className="tag-addon btn"
                                  onClick={() => handleSkillsRemove(index)}
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
                  <Col md={6} className="mb-3">
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            Qualification Required
                            <OverlayTrigger
                              placement={`top-start`}
                              overlay={
                                <Tooltip
                                  className="tooltip-light"
                                  style={{ fontSize: "10px" }}
                                >
                                  B.Sc. (Yoga), etc.
                                </Tooltip>
                              }
                              key={Math.random()}
                            >
                              <i className="fe fe-info ms-1"></i>
                            </OverlayTrigger>
                          </Form.Label>
                          <InputGroup>
                            <Form.Control
                              onChange={(e) =>
                                setQualificationInput(e.target.value)
                              }
                              value={qualificationInput}
                              placeholder="Enter Qualification Required"
                            />
                            <Button onClick={() => hanldeQualification()}>
                              Add
                            </Button>
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        {qualification.length > 0 && (
                          <div className="tags">
                            {qualification.map((item, index) => (
                              <div
                                key={index}
                                className="tag shadow-sm"
                                style={{ fontSize: "0.9rem" }}
                              >
                                <span>{item}</span>
                                <button
                                  type="button"
                                  className="tag-addon btn"
                                  onClick={() =>
                                    hanldeQualificationRemove(index)
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
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Experience Required</Form.Label>
                      <Form.Select
                        name="experience"
                        {...formik.getFieldProps("experience")}
                        isInvalid={
                          formik.errors.experience && formik.touched.experience
                        }
                      >
                        <option value="">--Select Experience--</option>
                        <option value="Fresher">Fresher</option>
                        <option value="0-6Month">0 - 6 Month</option>
                        <option value="1Year-3Year">1 Year - 3 Year</option>
                        <option value="3Year-5Year">3Year - 5 Year</option>
                        <option value="5Year+">5Year+</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.experience}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Job Type</Form.Label>
                      <Form.Select
                        name="job_type"
                        {...formik.getFieldProps("job_type")}
                        isInvalid={
                          formik.errors.job_type && formik.touched.job_type
                        }
                      >
                        <option value="">--Select Job Type--</option>
                        <option value="Internship">Internship</option>
                        <option value="Job">Job</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.job_type}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="start_date"
                        {...formik.getFieldProps("start_date")}
                        isInvalid={
                          formik.errors.start_date && formik.touched.start_date
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.start_date}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="end_date"
                        {...formik.getFieldProps("end_date")}
                        isInvalid={
                          formik.errors.end_date && formik.touched.end_date
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.end_date}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Row className="align-items-end mb-3">
                      <Row className="mb-3">
                        <Col>
                          <Form.Label>Salary/stipend</Form.Label>
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
                              value={amountInput}
                              onChange={(e) => setAmountInput(e.target.value)}
                              placeholder="Enter Amount"
                            />
                            <Button onClick={handleAddPrice} variant="success">
                              <i className="fe fe-plus-circle me-1"></i>Add
                              Price
                            </Button>
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {Object.keys(salary).length > 0 && (
                            <div className="tags">
                              {Object.entries(salary).map(
                                ([currency, value]) => (
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
                                        setSalary((prev) => {
                                          const updated = { ...prev };
                                          delete updated[currency];
                                          return updated;
                                        })
                                      }
                                    >
                                      <i className="fe fe-x"></i>
                                    </button>
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Status</Form.Label>
                      <Form.Select
                        name="status"
                        {...formik.getFieldProps("status")}
                      >
                        <option value="">--Select Status--</option>
                        {status?.map((item, index) => (
                          <option key={index} value={item?.parent_status}>
                            {item?.parent_status}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Button type="submit">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
