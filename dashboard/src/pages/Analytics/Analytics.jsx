import React, { useCallback, useEffect, useState } from "react";
import { Col, Row, Card, Breadcrumb, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../context/API";
import Competion from "./AnalyticsComponent/Competion";
import AnalyticEnquiry from "./AnalyticsComponent/AnalyticEnquiry";
import AnalyticCounters from "./AnalyticsComponent/AnalyticCounters";
import PropertyScore from "./AnalyticsComponent/Scores/PropertyScore";
import SeoScore from "./AnalyticsComponent/Scores/SeoScore";
import AnalyticGraph from "./AnalyticsComponent/Chart/AnalyticGraph";

const Analytics = () => {
  const { objectId } = useParams();
  const [allProperties, setAllProperties] = useState([]);
  const [currentProperty, setCurrentProeprty] = useState("");
  const navigator = useNavigate();

  const getRank = useCallback(async () => {
    try {
      const response = await API.get(`/analytics/rank/all`);
      console.log(response.data.message);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }, []);

  useEffect(() => {
    getRank();
  }, [getRank]);

  const getAllProperties = useCallback(async () => {
    try {
      const response = await API.get(`/property`);
      const data = response.data;
      setAllProperties(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllProperties();
  }, [getAllProperties]);

  const getCurrentProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setCurrentProeprty(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [objectId]);

  useEffect(() => {
    getCurrentProperty();
  }, [getCurrentProperty]);

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div className="">
          <h1 className="page-title fw-semibold fs-20 mb-0">Analytics</h1>
          <div className="">
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
                Dashboard
              </Breadcrumb.Item>
              <Breadcrumb.Item
                linkAs={Link}
                linkProps={{ to: "/dashboard/property" }}
              >
                Property
              </Breadcrumb.Item>
              <Breadcrumb.Item>Analytics</Breadcrumb.Item>
              <Breadcrumb.Item
                linkAs={Link}
                linkProps={{
                  to: `/dashboard/property/view/${currentProperty?._id}`,
                }}
              >
                {currentProperty?.property_name}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div>
          <Button onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col lg={6} md={6} sm={12} xl={6}>
          <AnalyticCounters currentProperty={currentProperty} />
        </Col>
        <Col lg={6} md={6} sm={12} xl={6}>
          <Row className="total-sales-card-section">
            <PropertyScore currentProperty={currentProperty} />
            <SeoScore currentProperty={currentProperty} />
          </Row>
        </Col>
      </Row>

      <Row>
        <AnalyticGraph currentProperty={currentProperty} />
        <Col xl={4} md={12}>
          <Competion
            currentProperty={currentProperty}
            allProperties={allProperties}
          />
        </Col>
      </Row>

      {/* <Row>
        <Col xl={4} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h4 className="card-title">Keyword</h4>
            </Card.Header>
            <Card.Body className="pt-2 pb-2">
              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-sm-flex me-1">
                  <i className="ri-chrome-fill bg-secondary-gradient text-fixed-white me-2 logo-icon"></i>
                  <p className="fs-16 my-auto ">Chrome</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-sm-flex text-end">
                    <span className="my-auto fs-16">35,502</span>
                    <span className="text-success fs-15 ms-3">
                      <i className="fe fe-arrow-up"></i>12.75%
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-sm-flex me-1">
                  <i className="ri-opera-fill text-fixed-white bg-danger-gradient me-2 logo-icon"></i>
                  <p className="fs-16 my-auto ">Opera</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-sm-flex text-end">
                    <span className="my-auto fs-16">12,563</span>
                    <span className="text-danger fs-15 ms-3">
                      <i className="fe fe-arrow-down"></i>15.12%
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-sm-flex me-1">
                  <i className="ri-firefox-fill text-fixed-white bg-purple-gradient me-2 logo-icon"></i>
                  <p className="fs-16 my-auto ">IE</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-sm-flex text-end">
                    <span className="my-auto fs-16">14,635</span>
                    <span className="text-success fs-15 ms-3">
                      <i className="fe fe-arrow-up"></i>15,63%
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-sm-flex me-1">
                  <i className="ri-edge-fill text-fixed-white bg-info-gradient me-2 logo-icon"></i>
                  <p className="fs-16 my-auto ">Firefox</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-sm-flex text-end">
                    <span className="my-auto fs-16">15,453</span>
                    <span className="text-success fs-15 ms-3">
                      <i className="fe fe-arrow-up"></i>23.70%
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-sm-flex me-1">
                  <i className="ri-android-fill text-fixed-white bg-success-gradient me-2 logo-icon"></i>
                  <p className="fs-16 my-auto ">Android</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-sm-flex text-end">
                    <span className="my-auto fs-16">25,364</span>
                    <span className="text-danger fs-15 ms-3">
                      <i className="fe fe-arrow-down"></i>24.37%
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={8} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h4 className="card-title">Compare</h4>
            </Card.Header>
            <Card.Body className="pb-0">
              <ul className="task-list">
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6 className="fs-14">
                    Moksha Yoga Center
                    <span className="text-muted fs-11 mx-2">29 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Adam Berry finished task on
                    <Link to="#" className="fw-semibold text-primary">
                      {" "}
                      Project Management
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-secondary"></i>
                  <h6 className="fs-14">
                    Adam Yoga Center
                    <span className="text-muted fs-11 mx-2">25 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Victoria commented on Project{" "}
                    <Link to="#" className="fw-semibold text-primary">
                      {" "}
                      AngularJS Template
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6 className="fs-14">
                    Mohit Singh Yoga Center
                    <span className="text-muted fs-11 mx-2">25 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Victoria commented on Project{" "}
                    <Link to="#" className="fw-semibold text-primary">
                      {" "}
                      AngularJS Template
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-secondary"></i>
                  <h6 className="fs-14">
                    Lalit Yoga Center
                    <span className="text-muted fs-11 mx-2">14 Oct 2020</span>
                  </h6>
                  <p className="text-muted mb-0 fs-12">
                    Petey Cruiser finished task{" "}
                    <Link to="#" className="fw-semibold text-primary">
                      {" "}
                      Integrated management
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6 className="fs-14">
                    Ankit Yoga Center
                    <span className="text-muted fs-11 mx-2">29 Oct 2020</span>
                  </h6>
                  <p className="text-muted mb-0 fs-12">
                    Petey Cruiser finished task{" "}
                    <Link to="#" className="fw-semibold text-primary">
                      {" "}
                      Integrated management
                    </Link>
                  </p>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      <Row>
        <Col xl={12}>
          <AnalyticEnquiry currentProperty={currentProperty} />
        </Col>
      </Row>
    </div>
  );
};

export default Analytics;
