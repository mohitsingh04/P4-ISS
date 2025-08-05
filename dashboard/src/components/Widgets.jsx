import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from "../layouts/layoutcomponents/Pageheader";
import ALLImages from "../common/Imagesdata";
import { WeekOrder1, WeekOrder2, WeekOrder3, WeekOrder4 } from "../common/OtherChartfunction";

const Widgets = () => {

  return (

    <div>
      <Pageheader homepage='Widgets' activepage='Widgets' page='Widgets' />


      <Row>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <i className="ri-firefox-fill text-primary fs-50"></i>
              <h6 className="mb-2">Total Visit</h6>
              <h2 className="mb-2 number-font">834</h2>
              <p className="text-muted fs-14">Sed ut perspiciatis unde omnis accusantium doloremque</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <i className="ri-money-dollar-circle-line text-secondary fs-50"></i>
              <h6 className="mb-2">Cost per Click</h6>
              <h2 className="mb-2  number-font">$34,516</h2>
              <p className="text-muted fs-14">Sed ut perspiciatis unde omnis accusantium doloremque</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <i className="ri-chat-3-line text-success fs-50"></i>
              <h6 className="mb-2">Investment</h6>
              <h2 className="mb-2 number-font">80%</h2>
              <p className="text-muted fs-14">Sed ut perspiciatis unde omnis accusantium doloremque</p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <i className="ri-pie-chart-2-fill text-info fs-50"></i>
              <h6 className="mb-2">Revenue</h6>
              <h2 className="mb-2  number-font">70k</h2>
              <p className="text-muted fs-14">Sed ut perspiciatis unde omnis accusantium doloremque</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="bg-primary img-card box-primary-shadow">
            <Card.Body>
              <div className="d-flex">
                <div className="text-white">
                  <h2 className="mb-0 number-font text-fixed-white">23,536</h2>
                  <p className="text-white mb-0 text-fixed-white">Total Requests </p>
                </div>
                <div className="ms-auto"> <i
                  className="ri-send-plane-fill text-fixed-white fs-30 me-2 mt-2"></i> </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="bg-secondary img-card box-secondary-shadow">
            <Card.Body>
              <div className="d-flex">
                <div className="text-white">
                  <h2 className="mb-0 number-font text-fixed-white">45,789</h2>
                  <p className="text-white mb-0 text-fixed-white">Total Revenue</p>
                </div>
                <div className="ms-auto"> <i
                  className="ri-bar-chart-fill text-fixed-white fs-30 me-2 mt-2"></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="bg-success img-card box-success-shadow">
            <Card.Body>
              <div className="d-flex">
                <div className="text-white">
                  <h2 className="mb-0 number-font text-fixed-white">89,786</h2>
                  <p className="text-white mb-0 text-fixed-white">Total Profit</p>
                </div>
                <div className="ms-auto">
                  <i className="ri-money-dollar-circle-line fs-30 me-2 mt-2"></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="bg-info img-card box-info-shadow">
            <Card.Body>
              <div className="d-flex">
                <div className="text-white">
                  <h2 className="mb-0 number-font text-fixed-white">43,336</h2>
                  <p className="text-white mb-0 text-fixed-white">Monthly Sales</p>
                </div>
                <div className="ms-auto"> <i
                  className="ri-shopping-cart-fill text-fixed-white fs-30 me-2 mt-2"></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-order">
                <h6 className="mb-2">New faces</h6>
                <h2 className="text-end "><i
                  className="ri-group-fill icon-size float-start fs-26 text-primary text-primary-shadow"></i><span>3,672</span>
                </h2>
                <p className="mb-0">Monthly faces<span className="float-end">50%</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-widget">
                <h6 className="mb-2">Total Tax</h6>
                <h2 className="text-end"><i
                  className="ri-briefcase-2-fill icon-size float-start fs-26 text-success text-success-shadow"></i><span>$89,265</span>
                </h2>
                <p className="mb-0">Monthly Income<span className="float-end">$7,893</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-widget">
                <h6 className="mb-2">Total Profit</h6>
                <h2 className="text-end"><i
                  className="icon-size ri-chat-poll-fill   float-start fs-26 text-warning text-warning-shadow"></i><span>$23,987</span>
                </h2>
                <p className="mb-0">Monthly Profit<span className="float-end">$4,678</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="card-widget">
                <h6 className="mb-2">Total Sales</h6>
                <h2 className="text-end"><i
                  className="ri-shopping-cart-2-fill icon-size float-start fs-26 text-danger text-danger-shadow"></i><span>46,486</span>
                </h2>
                <p className="mb-0">Monthly Sales<span className="float-end">3,756</span></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={3} md={12} lg={6}>
          <Card className="custom-card">
            <Card.Body className="text-center">
              <h6 className=""><span className="text-primary"><i
                className="fe fe-file-text mx-2 fs-20 text-primary-shadow  align-middle"></i></span>Total
                Projects</h6>
              <h4 className="text-dark counter mt-0 mb-3 number-font">7,896</h4>
              <div className="progress h-1 mt-0 mb-2">
                <div className="progress-bar progress-bar-striped bg-primary w-70" role="progressbar">
                </div>
              </div>
              <Row className="mt-4">
                <div className="col text-center"> <span className="text-muted">Weekly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">8</h4>
                </div>
                <div className="col text-center"> <span className="text-muted">Monthly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font2">23</h4>
                </div>
                <div className="col text-center"> <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font3">31</h4>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={12} lg={6}>
          <Card className="overflow-hidden">
            <Card.Body className="text-center">
              <h6 className=""><span className="text-secondary"><i
                className="ri-group-line mx-2 fs-20 text-secondary-shadow align-middle"></i></span>Total
                Employees</h6>
              <h4 className="text-dark counter mt-0 mb-3 number-font">2,897</h4>
              <div className="progress h-1 mt-0 mb-2">
                <div className="progress-bar progress-bar-striped  bg-secondary w-50"
                  role="progressbar"></div>
              </div>
              <Row className="mt-4">
                <div className="col text-center"> <span className="text-muted">Male</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">378</h4>
                </div>
                <div className="col text-center"> <span className="text-muted">Female</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">689</h4>
                </div>
                <div className="col text-center"> <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">1,069</h4>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={12} lg={6}>
          <Card className="overflow-hidden">
            <Card.Body className="text-center">
              <h6 className=""><span className="text-success"><i
                className="fe fe-award mx-2 fs-20 text-success-shadow  align-middle"></i></span>Ongoing
                Projects</h6>
              <h4 className="text-dark counter mt-0 mb-3 number-font">1,567</h4>
              <div className="progress h-1 mt-0 mb-2">
                <div className="progress-bar progress-bar-striped  bg-success w-60" role="progressbar">
                </div>
              </div>
              <Row className="mt-4">
                <div className="col text-center"> <span className="text-muted">Weekly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">5</h4>
                </div>
                <div className="col text-center"> <span className="text-muted">Monthly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">20</h4>
                </div>
                <div className="col text-center"> <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">25</h4>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={12} lg={6}>
          <Card className="overflow-hidden">
            <Card.Body className="text-center">
              <h6 className=""><span className="text-info"><i
                className="fe fe-tag mx-2 fs-20 text-info-shadow  align-middle"></i></span>Total
                Tasks</h6>
              <h4 className="text-dark counter mt-0 mb-3 number-font">4,293</h4>
              <div className="progress h-1 mt-0 mb-2">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info w-40"
                  role="progressbar"></div>
              </div>
              <Row className="mt-4">
                <div className="col text-center"> <span className="text-muted">Weekly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">35</h4>
                </div>
                <div className="col text-center"> <span className="text-muted">Monthly</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">56</h4>
                </div>
                <div className="col text-center"> <span className="text-muted">Total</span>
                  <h4 className="fw-normal mt-2 mb-0 number-font1">91</h4>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={2} md={6}>
          <Card className="custom-card border-top-card border-top-primary">
            <Card.Body>
              <div className="text-center">
                <span className="avatar avatar-md bg-primary shadow-sm avatar-rounded mb-2">
                  <i className="ri-briefcase-2-line fs-16"></i>
                </span>
                <p className="fs-14 fw-semibold mb-2">Total Sales</p>
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                  <h5 className="mb-0 fw-semibold">15,800</h5>
                  <span className="badge bg-success-transparent rounded-pill ms-1">+25.8%</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} md={6}>
          <Card className="custom-card border-top-card border-top-secondary">
            <Card.Body>
              <div className="text-center">
                <span className="avatar avatar-md bg-secondary shadow-sm avatar-rounded mb-2">
                  <i className="ri-bill-line fs-16"></i>
                </span>
                <p className="fs-14 fw-semibold mb-2">Total Tax</p>
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                  <h5 className="mb-0 fw-semibold">$12,650</h5>
                  <span className="badge bg-success-transparent rounded-pill ms-1">+12.2%</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} md={6}>
          <Card className="custom-card border-top-card border-top-success">
            <Card.Body>
              <div className="text-center">
                <span className="avatar avatar-md bg-success shadow-sm avatar-rounded mb-2">
                  <i className="ri-wallet-2-line fs-16"></i>
                </span>
                <p className="fs-14 fw-semibold mb-2">Total Income</p>
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                  <h5 className="mb-0 fw-semibold">$14,800</h5>
                  <span className="badge bg-success-transparent rounded-pill ms-1">+7.45%</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} md={6}>
          <Card className="custom-card border-top-card border-top-info">
            <Card.Body>
              <div className="text-center">
                <span className="avatar avatar-md bg-info shadow-sm avatar-rounded mb-2">
                  <i className="ri-line-chart-line fs-16"></i>
                </span>
                <p className="fs-14 fw-semibold mb-2">Total Expenses</p>
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                  <h5 className="mb-0 fw-semibold">$7,566</h5>
                  <span className="badge bg-danger-transparent rounded-pill ms-1">-3.21%</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} md={6}>
          <Card className="custom-card border-top-card border-top-warning">
            <Card.Body>
              <div className="text-center">
                <span className="avatar avatar-md bg-warning shadow-sm avatar-rounded mb-2">
                  <i className="ri-money-dollar-box-line fs-16"></i>
                </span>
                <p className="fs-14 fw-semibold mb-2">Sales Profit</p>
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                  <h5 className="mb-0 fw-semibold">$7,474</h5>
                  <span className="badge bg-success-transparent rounded-pill ms-1">+36.03%</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} md={6}>
          <Card className="custom-card border-top-card border-top-danger">
            <Card.Body>
              <div className="text-center">
                <span className="avatar avatar-md bg-danger shadow-sm avatar-rounded mb-2">
                  <i className="ri-profile-line fs-16"></i>
                </span>
                <p className="fs-14 fw-semibold mb-2">Opex Ratio</p>
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                  <h5 className="mb-0 fw-semibold">8:14</h5>
                  <span className="badge bg-success-transparent rounded-pill ms-1">+0.89%</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-cards">
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Header className="pb-0 border-bottom-0">
              <h3 className="card-title">Total Revenue</h3>
            </Card.Header>
            <Card.Body className="pt-0">
              <h3 className="d-inline-block mb-2">46,789</h3>
              <div className="progress h-2 mt-2 mb-2">
                <div className="progress-bar bg-primary w-50" role="progressbar"></div>
              </div>
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-up text-success"></i>
                  <span>12% increase</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Header className="pb-0 border-bottom-0">
              <h3 className="card-title">Total Requests</h3>
            </Card.Header>
            <Card.Body className="pt-0">
              <h3 className="d-inline-block mb-2">23,536</h3>
              <div className="progress h-2 mt-2 mb-2">
                <div className="progress-bar bg-success w-50" role="progressbar"></div>
              </div>
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-down text-success"></i>
                  <span>5% decrease</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Header className="pb-0 border-bottom-0">
              <h3 className="card-title">Requests Answered</h3>
            </Card.Header>
            <Card.Body className="pt-0">
              <h3 className="d-inline-block mb-2">32,784</h3>
              <div className="progress h-2 mt-2 mb-2">
                <div className="progress-bar bg-warning w-50" role="progressbar"></div>
              </div>
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-up text-warning"></i>
                  <span>10% increase</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="custom-card">
            <Card.Header className="pb-0 border-bottom-0">
              <h3 className="card-title">Support Cost</h3>
            </Card.Header>
            <Card.Body className="pt-0">
              <h3 className="d-inline-block mb-2">14,563</h3>
              <div className="progress h-2 mt-2 mb-2">
                <div className="progress-bar bg-danger w-50" role="progressbar"></div>
              </div>
              <div className="float-start">
                <div className="mt-2">
                  <i className="fa fa-caret-down text-danger"></i>
                  <span>15% decrease</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12} lg={6} xl={6} xxl={3}>
          <Card className="widgets-cards bg-primary box-primary-shadow">
            <Card.Body className="d-sm-flex text-center align-items-center p-1">
              <WeekOrder1 />
              <div className="wrp text-wrapper text-fixed-white">
                <p className="mt-0">$8758</p>
                <p className="mt-1 mb-0">This Week Orders</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} xxl={3}>
          <Card className="widgets-cards bg-success box-success-shadow">
            <Card.Body className="d-sm-flex text-center align-items-center p-1">
              <WeekOrder2 />
              <div className="wrp text-wrapper text-fixed-white">
                <p className="mt-0">6477</p>
                <p className=" mt-1 mb-0">This Week Views</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} xxl={3}>
          <Card className="widgets-cards bg-warning box-warning-shadow">
            <Card.Body className="d-sm-flex text-center align-items-center p-1">
              <WeekOrder3 />
              <div className="wrp text-wrapper text-fixed-white">
                <p className="mt-0">7847</p>
                <p className=" mt-1 mb-0">This Week Earnings</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} xxl={3}>
          <Card className="widgets-cards bg-danger box-danger-shadow">
            <Card.Body className="d-sm-flex text-center align-items-center p-1">
              <WeekOrder4 />
              <div className="wrp text-wrapper text-fixed-white">
                <p className="mt-0">345</p>
                <p className=" mt-1 mb-0">This Week Comments</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6} md={12} xl={6} xxl={3}>
          <Card className="custom-card">
            <Row>
              <div className="col-4">
                <div
                  className="circle-icon bg-primary text-center align-self-center box-primary-shadow">
                  <img src={ALLImages('circle')} alt="img" className="card-img-absolute" />
                  <i className="ri-user-line fs-30  text-fixed-white mt-4 icon"></i>
                </div>
              </div>
              <div className="col-8">
                <Card.Body className="p-2 pb-3">
                  <h3 className="mb-2 fw-normal mt-2">17,533</h3>
                  <h5 className="fw-normal mb-0">Total Followers</h5>
                </Card.Body>
              </div>
            </Row>
          </Card>
        </Col>
        <Col sm={12} lg={6} md={12} xl={6} xxl={3}>
          <Card className="custom-card">
            <Row>
              <div className="col-4">
                <div
                  className="circle-icon circle-icon bg-secondary align-items-center text-center box-secondary-shadow">
                  <img src={ALLImages('circle')} alt="img" className="card-img-absolute" />
                  <i className="ri-heart-line fs-30 text-fixed-white mt-4  icon"></i>
                </div>
              </div>
              <div className="col-8">
                <Card.Body className="p-2 pb-3">
                  <h3 className="mb-2 fw-normal mt-2">10,257</h3>
                  <h5 className="fw-normal mb-0">Total Likes</h5>
                </Card.Body>
              </div>
            </Row>
          </Card>
        </Col>
        <Col sm={12} lg={6} md={12} xl={6} xxl={3}>
          <Card className="custom-card">
            <Row>
              <div className="col-4">
                <div
                  className="circle-icon  circle-icon bg-success align-items-center text-center box-success-shadow">
                  <img src={ALLImages('circle')} alt="img" className="card-img-absolute" />
                  <i className="ri-chat-1-line fs-30 text-fixed-white mt-4  icon"></i>
                </div>
              </div>
              <div className="col-8">
                <Card.Body className="p-2 pb-3">
                  <h3 className="mb-2 fw-normal mt-2">87</h3>
                  <h5 className="fw-normal mb-0">Total Comments</h5>
                </Card.Body>
              </div>
            </Row>
          </Card>
        </Col>
        <Col sm={12} lg={6} md={12} xl={6} xxl={3}>
          <Card className="custom-card">
            <Row>
              <div className="col-4">
                <div
                  className="circle-icon circle-icon bg-danger align-items-center text-center box-danger-shadow">
                  <img src={ALLImages('circle')} alt="img" className="card-img-absolute" />
                  <i className="ri-mail-line fs-30 text-fixed-white mt-4  icon"></i>
                </div>
              </div>
              <div className="col-8">
                <Card.Body className="p-2 pb-3">
                  <h3 className="mb-2 fw-normal mt-2">485</h3>
                  <h5 className="fw-normal mb-0">Total Posts</h5>
                </Card.Body>
              </div>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={4}>
          <Card className="custom-card">
            <Card.Header className="border-bottom">
              <h5 className="card-title">Sales Summary</h5>
            </Card.Header>
            <Card.Body>
              <Row className="clearfix mb-3">
                <div className="col">
                  <div className="float-start">
                    <h5 className="mb-0 fs-16"><strong>Total Revenue</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </div>
                <div className="col">
                  <div className="float-end">
                    <h4 className="fw-bold fs-18 mb-0 mt-2 text-primary">$15300</h4>
                  </div>
                </div>
              </Row>
              <Row className="clearfix  mb-3">
                <div className="col">
                  <div className="float-start">
                    <h5 className="mb-0 fs-16"><strong>Total Tax</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </div>
                <div className="col">
                  <div className="float-end">
                    <h4 className="fw-bold fs-18 mt-2 mb-0 text-success">$1625</h4>
                  </div>
                </div>
              </Row>
              <Row className="clearfix mb-3">
                <div className="col">
                  <div className="float-start">
                    <h5 className="mb-0 fs-16"><strong>Total Income</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </div>
                <div className="col">
                  <div className="float-end">
                    <h4 className="fw-bold fs-18 mt-2 mb-0 text-warning">70%</h4>
                  </div>
                </div>
              </Row>
              <Row className="clearfix mb-3">
                <div className="col">
                  <div className="float-start">
                    <h5 className="mb-0 fs-16"><strong>Total Income</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </div>
                <div className="col">
                  <div className="float-end">
                    <h4 className="fw-bold fs-18 mt-2 mb-0 text-danger">50%</h4>
                  </div>
                </div>
              </Row>
              <Row className="clearfix mb-3">
                <div className="col">
                  <div className="float-start">
                    <h5 className="mb-0 fs-16"><strong>Total Loss</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </div>
                <div className="col">
                  <div className="float-end">
                    <h4 className="fw-bold fs-18 mt-2 mb-0 text-info">30%</h4>
                  </div>
                </div>
              </Row>
              <Row className="clearfix mb-0">
                <div className="col">
                  <div className="float-start">
                    <h5 className="mb-0 fs-16"><strong>Total Loss</strong></h5>
                    <small className="text-muted">weekly profit</small>
                  </div>
                </div>
                <div className="col">
                  <div className="float-end">
                    <h4 className="fw-bold fs-18 mt-2 mb-0 text-secondary">55%</h4>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h5 className="card-title">Visitors</h5>
            </Card.Header>
            <Card.Body>
              <div className="media mb-3 mt-0">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face5')} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">Nathaniel Bustos</Link>
                  <div className="text-muted small">Manager</div>
                </div>
                <button type="button" className="btn btn-primary btn-sm d-block ms-auto">Follow</button>
              </div>
              <div className="media mb-3">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face4')} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">Latanya Kinard</Link>
                  <div className="text-muted small">Web Designer</div>
                </div>
                <button type="button" className="btn btn-secondary btn-sm d-block ms-auto">Follow</button>
              </div>
              <div className="media mb-3">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face20')} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">George Lujan</Link>
                  <div className="text-muted small">Founder</div>
                </div>
                <button type="button" className="btn btn-warning btn-sm d-block ms-auto">Follow</button>
              </div>
              <div className="media mb-3 mt-0">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face8')} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">Bustos</Link>
                  <div className="text-muted small">Manager</div>
                </div>
                <button type="button" className="btn btn-success btn-sm d-block ms-auto">Follow</button>
              </div>
              <div className="media mb-3">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face4')} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">Latanya Kinard</Link>
                  <div className="text-muted small">Web Designer</div>
                </div>
                <button type="button" className="btn btn-secondary btn-sm d-block ms-auto">Follow</button>
              </div>
              <div className="media mb-0">
                <div className="d-flex me-3">
                  <Link to="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face19')} /> </Link>
                </div>
                <div className="media-body">
                  <Link to="#" className="text-dark">Samantha</Link>
                  <div className="text-muted small">Manager</div>
                </div>
                <button type="button" className="btn btn-danger btn-sm d-block ms-auto">Follow</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} sm={12} md={12} className="p-l-0 p-r-0">
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Traffic Sources
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-bordered table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Browser</th>
                      <th>Sessions</th>
                      <th>Views</th>
                      <th>Traffic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span
                            className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                            <i className="ri-google-fill fs-18 text-fixed-white"></i>
                          </span>
                          <div className="fw-semibold">Google</div>
                        </div>
                      </td>
                      <td>
                        <span><i
                          className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>23,379</span>
                      </td>
                      <td>
                        <span>16,890</span>
                      </td>
                      <td>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-primary" role="progressbar"
                            style={{ width: "34%" }} aria-valuenow="34" aria-valuemin="0"
                            aria-valuemax="100">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span
                            className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                            <i className="ri-safari-line fs-18 text-fixed-white"></i>
                          </span>
                          <div className="fw-semibold">Safari</div>
                        </div>

                      </td>
                      <td>
                        <span><i
                          className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>78,973</span>
                      </td>
                      <td>
                        <span>29,906</span>
                      </td>
                      <td>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-primary" role="progressbar"
                            style={{ width: "58%" }} aria-valuenow="58" aria-valuemin="0"
                            aria-valuemax="100">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span
                            className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                            <i className="ri-opera-fill fs-18 text-fixed-white"></i>
                          </span>
                          <div className="fw-semibold">Opera</div>
                        </div>

                      </td>
                      <td>
                        <span><i
                          className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>12,457</span>
                      </td>
                      <td>
                        <span>8,674</span>
                      </td>
                      <td>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-primary" role="progressbar"
                            style={{ width: "62%" }} aria-valuenow="62" aria-valuemin="0"
                            aria-valuemax="100">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span
                            className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                            <i className="ri-edge-fill fs-18 text-fixed-white"></i>
                          </span>
                          <div className="fw-semibold">Edge</div>
                        </div>

                      </td>
                      <td>
                        <span><i
                          className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>8,570</span>
                      </td>
                      <td>
                        <span>4,980</span>
                      </td>
                      <td>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-primary" role="progressbar"
                            style={{ width: "71%" }} aria-valuenow="71" aria-valuemin="0"
                            aria-valuemax="100">
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span
                            className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                            <i className="ri-firefox-fill fs-18 text-fixed-white"></i>
                          </span>
                          <div className="fw-semibold">Firefox</div>
                        </div>

                      </td>
                      <td>
                        <span><i
                          className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>6,135</span>
                      </td>
                      <td>
                        <span>4,436</span>
                      </td>
                      <td>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-primary" role="progressbar"
                            style={{ width: "48%" }} aria-valuenow="48" aria-valuemin="0"
                            aria-valuemax="100">
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="">
        <Col lg={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Skill Set</div>
            </Card.Header>
            <Card.Body className="mt-0">
              <div className="chats-wrap media-list">
                <div className="chat-details mb-1 pt-0 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal fs-16">Html</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>85</b>%</span>
                  </h4>
                  <div className="progress progress-sm mt-1">
                    <div className="progress-bar  bg-primary w-80"></div>
                  </div>
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal fs-16"> Wordpress</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>46</b>%</span>
                  </h4>
                  <div className="progress progress-sm mt-1">
                    <div className="progress-bar bg-success w-45"></div>
                  </div>
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal fs-16"> jQuery</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>56</b>%</span>
                  </h4>
                  <div className="progress progress-sm mt-1">
                    <div className="progress-bar bg-warning w-65"></div>
                  </div>
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal fs-16"> Photoshop</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>90</b>%</span>
                  </h4>
                  <div className="progress progress-sm mt-1">
                    <div className="progress-bar bg-danger w-75"></div>
                  </div>
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal fs-16">Angular js</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>30</b>%</span>
                  </h4>
                  <div className="progress progress-sm mt-1">
                    <div className="progress-bar bg-info w-30"></div>
                  </div>
                </div>
                <div className="chat-details mb-1 p-3">
                  <h4 className="mb-0">
                    <span className="h5 fw-normal fs-16">React js</span>
                    <span className="float-end p-1  btn btn-sm text-default">
                      <b>46</b>%</span>
                  </h4>
                  <div className="progress progress-sm mt-1">
                    <div className="progress-bar bg-secondary w-45"></div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} sm={12} lg={8} >
          <Card className="custom-card">
            <Card.Header>
              <h3 className="card-title">Best Pictures for Today</h3>
            </Card.Header>
            <Card.Body className="pb-3">
              <div>
                <Row className="img-gallery" id="lightgallery">
                  {["media1", "media2", "media3", "media4", "media5", "media6"].map((image, index) => (
                    <Col sm={4} className="col-12 mb-3" key={index}>
                      <Link to={`${import.meta.env.BASE_URL}apps/gallery/`} className="d-block link-overlay">
                        <img className="d-block img-fluid br-5" src={ALLImages(image)} alt="" />
                        <span className="link-overlay-bg">
                          <i className="fa fa-search"></i>
                        </span>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

  )
}

export default Widgets