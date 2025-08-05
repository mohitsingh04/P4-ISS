import React, { Fragment } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";
import { aboutcompany, company } from "../../common/Commomarreydata";
import ALLImages from "../../common/Imagesdata";

const Aboutcompany = () => {
  return (
    <Fragment>
      <Pageheader homepage='About company' activepage='Pages' page='About company' />
      <Row>
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body className="p-4 text-dark">
              <div className="statistics-info">
                <Row className="text-center">
                  <Col lg={3} sm={6} className="mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon bg-primary-gradient box-shadow-primary">
                        <i className="ri-group-line lh-1"></i>
                      </div>
                      <h6 className="mb-2">Total Employees</h6>
                      <h3 className="counter mb-0">2569</h3>
                    </div>
                  </Col>
                  <Col lg={3} sm={6} className="mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon bg-secondary-gradient box-shadow-secondary">
                        <i className="ri-pie-chart-fill lh-1"></i>
                      </div>
                      <h6 className="mb-2">Total Sales</h6>
                      <h3 className="counter  mb-0">1765</h3>
                    </div>
                  </Col>
                  <Col lg={3} sm={6} className=" mt-4 mb-4">
                    <div className="counter-statuss">
                      <div className="counter-icon bg-success-gradient box-shadow-success">
                        <i className="ri-file-3-line lh-1"></i>
                      </div>
                      <h6 className="mb-2">Total Projects</h6>
                      <h3 className="counter mb-0">846</h3>
                    </div>
                  </Col>
                  <Col lg={3} sm={6} className="mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon bg-danger-gradient box-shadow-danger">
                        <i className="fe fe-trending-up lh-1"></i>
                      </div>
                      <h6 className="mb-2">Total Growth</h6>
                      <h3 className="counter  mb-0">7253</h3>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div className="custom-card card">
            <Card.Body className="pabout">
              <h2 className="mb-3 fw-semibold">Why Zanex ?</h2>
              <h5 className="leading-normal">majority have suffered alteration in some form, by injected humour</h5>
              <p className="leading-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered  by injected humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to as  necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).</p>
              <Link to="#" className="btn btn-primary  mt-2">View More</Link>
            </Card.Body>
          </div>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body className="pabout">
              <h2 className="mb-3 fw-semibold">What is Our Services?</h2>
              <h5 className="leading-normal">majority have suffered alteration in some form, by injected humour</h5>
              <p className="leading-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered  by injected humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to as  necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).</p>
              <Link to="#" className="btn btn-primary mt-2">View More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12} lg={6} xl={3}>
          <Card className="custom-card text-center overflow-hidden">
            <img src={ALLImages('media1')} alt="img" className="" />
            <Card.Body>
              <h4 className="mb-3">Company history</h4>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and you a complete account of the system</p>
              <Link to="#" className="btn btn-primary">-Read More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12} lg={6} xl={3}>
          <Card className="custom-card text-center overflow-hidden">
            <img src={ALLImages('media2')} alt="img" className="" />
            <Card.Body>
              <h4 className="mb-3">About Team</h4>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and you a complete account of the system</p>
              <Link to="#" className="btn btn-secondary">-Read More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12} lg={6} xl={3}>
          <Card className="custom-card text-center overflow-hidden">
            <img src={ALLImages('media6')} alt="img" className="" />
            <Card.Body>
              <h4 className="mb-3">Company growth</h4>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and you a complete account of the system</p>
              <Link to="#" className="btn btn-success">-Read More</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12} lg={6} xl={3}>
          <Card className="custom-card text-center overflow-hidden">
            <img src={ALLImages('media7')} alt="img" className="" />
            <Card.Body>
              <h4 className="mb-3">Our Statistics</h4>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and you a complete account of the system</p>
              <Link to="#" className="btn btn-danger">-Read More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Aboutcompany