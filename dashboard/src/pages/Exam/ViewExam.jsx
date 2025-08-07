import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Table,
  Spinner,
  Image,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../context/API";

export default function ViewExam() {
  const navigate = useNavigate();
  const { objectId } = useParams();

  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => setShowMore((prev) => !prev);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await API.get(`/exam/${objectId}`);
        setExam(response.data);
      } catch (error) {
        console.error("Error fetching exam:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExam();
  }, [objectId]);

  const getShortText = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent.slice(0, 300);
  };

  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);

  const getAuhtUser = async () => {
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
    getAuhtUser();
  }, []);

  useEffect(() => {
    if (!authLoading && !authUser?.permissions?.includes("Read Exam")) {
      navigate("/dashboard/access-denied");
    }
  }, [authLoading, authUser, navigate]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="text-center py-5">
        <p>Exam not found.</p>
        <Button variant="primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Exams</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/dashboard/exam" }}
            >
              Exams
            </Breadcrumb.Item>
            <Breadcrumb.Item active>View Exam</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigate(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h5 className="mb-0">View Exam</h5>
            </Card.Header>

            <Card.Body>
              <Table responsive striped borderless>
                <tbody>
                  <tr>
                    <th>Exam Name</th>
                    <td>{exam.exam_name}</td>
                  </tr>
                  <tr>
                    <th>Short Name</th>
                    <td>{exam.exam_short_name}</td>
                  </tr>
                  <tr>
                    <th>Upcoming Exam Date</th>
                    <td>{exam.upcoming_exam_date}</td>
                  </tr>
                  <tr>
                    <th>Result Date</th>
                    <td>{exam.result_date}</td>
                  </tr>
                  <tr>
                    <th>Application Form Date</th>
                    <td>{exam.application_form_date}</td>
                  </tr>
                  <tr>
                    <th>Application Form Link</th>
                    <td>
                      <a
                        href={exam.application_form_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exam.application_form_link}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Exam Form Link</th>
                    <td>
                      <a
                        href={exam.exam_form_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exam.exam_form_link}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Exam Mode</th>
                    <td>{exam.exam_mode}</td>
                  </tr>
                </tbody>
              </Table>

              <Row className="mt-4">
                <Col md={6} className="mb-3">
                  <h6>Exam Logo</h6>
                  {exam.exam_logo ? (
                    <Image
                      src={`${import.meta.env.VITE_MEDIA_URL}/exam/${
                        exam?.exam_logo?.[0]
                      }`}
                      alt="Exam Logo"
                      fluid
                      thumbnail
                      style={{ maxHeight: "200px" }}
                    />
                  ) : (
                    <p>No logo available</p>
                  )}
                </Col>
                <Col md={6} className="mb-3">
                  <h6>Featured Image</h6>
                  {exam.featured_image ? (
                    <Image
                      src={`${import.meta.env.VITE_MEDIA_URL}/exam/${
                        exam.featured_image?.[0]
                      }`}
                      alt="Featured Exam"
                      fluid
                      thumbnail
                      style={{ maxHeight: "200px" }}
                    />
                  ) : (
                    <p>No featured image available</p>
                  )}
                </Col>
              </Row>
            </Card.Body>

            <Card.Footer>
              <h5>Description</h5>
              {exam.description &&
              getShortText(exam.description).length >= 300 ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: showMore
                        ? exam.description
                        : exam.description.slice(0, 300) + "...",
                    }}
                  />
                  <Button
                    variant="link"
                    size="sm"
                    className="px-0"
                    onClick={toggleReadMore}
                  >
                    {showMore ? "Read Less" : "Read More"}
                  </Button>
                </>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: exam.description }} />
              )}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
