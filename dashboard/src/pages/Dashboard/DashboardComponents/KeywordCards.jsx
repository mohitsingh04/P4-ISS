import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function KeywordCards() {
  return (
    <div>
      <Row>
        <Col xl={4} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Header>
              <div>
                <h3 className="card-title">Timeline</h3>
              </div>
            </Card.Header>
            <Card.Body className="pb-0 pt-4">
              <div className="activity1">
                <div className="activity-blog">
                  <div className="activity-img rounded-circle bg-primary-transparent text-primary">
                    <i className="ri-user-add-fill fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Mr John </span>{" "}
                      </b>{" "}
                      Started following you
                      <span className="d-flex text-muted fs-11">
                        01 June 2020
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-primary text-fixed-white">
                        1m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="activity-blog">
                  <div className="activity-img rounded-circle bg-secondary-transparent text-secondary">
                    <i className="ri-chat-1-fill fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Lily </span>{" "}
                      </b>{" "}
                      1 Commented applied{" "}
                      <span className="d-flex text-muted fs-11">
                        01 July 2020
                      </span>{" "}
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-danger text-fixed-white">
                        3m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="activity-blog">
                  <div className="activity-img rounded-circle bg-success-transparent text-success">
                    <i className="ri-thumb-up-fill fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Kevin </span>{" "}
                      </b>{" "}
                      liked your site{" "}
                      <span className="d-flex text-muted fs-11">
                        05 July 2020
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-warning text-fixed-white">
                        5m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="activity-blog">
                  <div className="activity-img rounded-circle bg-info-transparent text-info">
                    <i className="ri-mail-fill fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Andrena </span>{" "}
                      </b>{" "}
                      posted a new article
                      <span className="d-flex text-muted fs-11">
                        09 October 2020
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-info text-fixed-white">5m</span>
                    </div>
                  </div>
                </div>
                <div className="activity-blog">
                  <div className="activity-img rounded-circle bg-danger-transparent text-danger">
                    <i className="ri-shopping-bag-fill fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Sonia </span>{" "}
                      </b>{" "}
                      Delivery in progress
                      <span className="d-flex text-muted fs-11">
                        12 October 2020
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-warning text-fixed-white">
                        5m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h4 className="card-title">Browser Usage</h4>
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
        <Col xl={4} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h4 className="card-title">Daily Activity</h4>
            </Card.Header>
            <Card.Body className="pb-0">
              <ul className="task-list">
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6 className="fs-14">
                    Task Finished
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
                    New Comment
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
                    New Comment
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
                    Task Overdue
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
                    Task Overdue
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
      </Row>
    </div>
  );
}
