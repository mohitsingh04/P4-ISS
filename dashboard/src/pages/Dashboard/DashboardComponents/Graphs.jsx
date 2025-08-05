import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { RecentOrders, Totaltransactions } from "../../../common/OtherChartfunction";

export default function Graphs() {
  return (
    <div>
      {" "}
      <Row>
        <Col sm={12} md={12} lg={12} xl={9}>
          <Card className="custom-card">
            <Card.Header>
              <h3 className="card-title">Total Transactions</h3>
            </Card.Header>
            <Card.Body className="pb-0">
              <Totaltransactions />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={12} xl={3}>
          <Card className="custom-card ">
            <Card.Header>
              <h3 className="card-title">Recent Orders</h3>
            </Card.Header>
            <Card.Body className="pt-0 ps-0 pe-0">
              <RecentOrders />

              <Row className="sales-product-infomation pb-0 mb-0 mx-auto wd-100p mt-4 justify-content-center">
                <Col md={6} className="col text-center">
                  <p className="mb-0 d-flex justify-content-center">
                    <span className="legend bg-primary"></span>Delivered
                  </p>
                  <h3 className="mb-1 fw-bold">5238</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted mb-0">Last 6 months</p>
                  </div>
                </Col>
                <Col md={6} className="col text-center float-end">
                  <p className="mb-0 d-flex justify-content-center ">
                    <span className="legend bg-background2"></span>Cancelled
                  </p>
                  <h3 className="mb-1 fw-bold">3467</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted mb-0">Last 6 months</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
