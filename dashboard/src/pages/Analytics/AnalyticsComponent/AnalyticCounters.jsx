import React, { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";
import { Card, Col, Row } from "react-bootstrap";
import TrafficCounter from "./Counters/TrafficCounter";
import EnquiryCounter from "./Counters/EnquiryCounter";
import { API } from "../../../context/API";

const staticAnalyticsInfo = [
  {
    title: "Enrollments",
    icon: "fe fe-dollar-sign",
    iconColor: "bg-secondary-gradient box-shadow-secondary",
  },
];

const mydata = [
  {
    value: Math.floor(Math.random() * 1000),
    diff: Math.floor(Math.random() * 1000),
  },
];

export default function AnalyticCounters({ currentProperty }) {
  const [rank, setRank] = useState("");
  const getRank = useCallback(async () => {
    if (currentProperty) {
      try {
        const response = await API.get(
          `/property/rank/${currentProperty?.uniqueId}`
        );
        setRank(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [currentProperty]);

  useEffect(() => {
    getRank();
  }, [getRank]);
  return (
    <div>
      <Row className="total-sales-card-section">
        <TrafficCounter currentProperty={currentProperty} />
        <EnquiryCounter currentProperty={currentProperty} />
        <Col lg={6} md={6} sm={12} xl={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <Row>
                <div className="col">
                  <h6 className="fw-normal fs-14">YP Rank</h6>
                  <h3 className="mb-2 number-font fs-24">
                    <CountUp end={rank?.rank} duration={1.5} />
                  </h3>
                  <p className="text-muted mb-0">
                    Last Rank
                    <span
                      className={`${
                        rank?.lastRank < rank?.rank
                          ? "text-danger"
                          : "text-primary"
                      } ms-1`}
                    >
                      <i
                        className={`${
                          rank?.lastRank < rank?.rank
                            ? "ri-arrow-down-s-line bg-danger"
                            : "ri-arrow-up-s-line bg-primary"
                        } text-white rounded-circle fs-13 p-0 fw-semibold align-bottom`}
                      ></i>
                      <CountUp
                        end={rank?.lastRank}
                        duration={1.5}
                        className="mx-1"
                      />
                    </span>
                  </p>
                </div>
                <div className="col col-auto mt-2">
                  <div
                    className={`counter-icon bg-success-gradient box-shadow-success rounded-circle`}
                  >
                    <i className={`fe fe-briefcase mb-5`}></i>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xl={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <Row>
                <div className="col">
                  <h6 className="fw-normal fs-14">Enrollments</h6>
                  <h3 className="mb-2 number-font fs-24">
                    <CountUp end={0} duration={1.5} />
                  </h3>
                  <p className="text-muted mb-0">
                    <span className={0 > 0 ? "text-danger" : "text-primary"}>
                      <i
                        className={`${
                          0 > 0
                            ? "ri-arrow-down-s-line bg-danger"
                            : "ri-arrow-up-s-line bg-primary"
                        } text-white rounded-circle fs-13 p-0 fw-semibold align-bottom`}
                      ></i>
                      <CountUp end={0} duration={1.5} className="mx-1" />
                    </span>
                    Last Month
                  </p>
                </div>
                <div className="col col-auto mt-2">
                  <div
                    className={`counter-icon bg-secondary-gradient box-shadow-secondary rounded-circle`}
                  >
                    <i className={`fe fe-dollar-sign mb-5`}></i>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
