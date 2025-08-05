import React from "react";
import { Card, Row } from "react-bootstrap";
import CountUp from "react-countup";

export default function CounterCards({ cardData }) {
  return (
    <div>
      <Card className="custom-card overflow-hidden">
        <Card.Body>
          <Row>
            <div className="col">
              <h6 className="fw-normal fs-14">{cardData?.title}</h6>
              <h3 className="mb-2 number-font fs-24">
                <CountUp start={0} end={cardData?.count} duration={1.5} />
              </h3>
              {/* <p className="text-muted mb-0">
                <span className="text-primary">
                  <i className="ri-arrow-up-s-line bg-primary text-white rounded-circle fs-13 p-0 fw-semibold align-bottom"></i>{" "}
                  3%
                </span>{" "}
                last month
              </p> */}
            </div>
            <div className="col col-auto mt-2">
              <div
                className={`counter-icon bg-${cardData?.color}-gradient box-shadow-${cardData?.color} rounded-circle ms-auto mb-0`}
              >
                <i className={`fe ${cardData?.icon} mb-5`}></i>
              </div>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
