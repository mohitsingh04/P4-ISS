import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row, Dropdown } from "react-bootstrap";
import CountUp from "react-countup";
import { API } from "../../../../context/API";

const monthNames = {
  jan: "January",
  feb: "February",
  mar: "March",
  apr: "April",
  may: "May",
  jun: "June",
  jul: "July",
  aug: "August",
  sep: "September",
  oct: "October",
  nov: "November",
  dec: "December",
};

const monthKeys = Object.keys(monthNames);

const filterOptions = [
  { key: "today", label: "Today" },
  { key: "last7", label: "Last 7 Days" },
  { key: "last30", label: "Last 30 Days" },
  { key: "6months", label: "Last 6 Months" },
  { key: "1year", label: "Last 1 Year" },
  { key: "all", label: "All Time" },
];

export default function TrafficCounter({ currentProperty }) {
  const [clickStats, setClickStats] = useState({
    current: 0,
    currentMonthName: "",
  });
  const [filter, setFilter] = useState("last7");

  const getTraffic = useCallback(async () => {
    try {
      if (currentProperty) {
        const response = await API.get(
          `/property/traffic/${currentProperty?.uniqueId}`
        );
        const data = response.data;

        const now = new Date();
        const currentMonthIndex = now.getMonth();
        const currentMonthKey = monthKeys[currentMonthIndex];
        const currentMonthName = monthNames[currentMonthKey];

        let totalClicks = 0;

        data.forEach((doc) => {
          const { month, year, daily } = doc;

          daily.forEach((dayEntry) => {
            const day = parseInt(dayEntry.day, 10);
            const clicks = dayEntry.clicks;
            const entryDate = new Date(`${month} ${day}, ${year}`);
            const diffInDays = Math.floor(
              (now - entryDate) / (1000 * 60 * 60 * 24)
            );
            const diffInMonths =
              now.getMonth() -
              entryDate.getMonth() +
              12 * (now.getFullYear() - entryDate.getFullYear());

            switch (filter) {
              case "today":
                if (
                  entryDate.getDate() === now.getDate() &&
                  entryDate.getMonth() === now.getMonth() &&
                  entryDate.getFullYear() === now.getFullYear()
                ) {
                  totalClicks += clicks;
                }
                break;
              case "last7":
                if (diffInDays >= 0 && diffInDays < 7) {
                  totalClicks += clicks;
                }
                break;
              case "last30":
                if (diffInDays >= 0 && diffInDays < 30) {
                  totalClicks += clicks;
                }
                break;
              case "6months":
                if (diffInMonths >= 0 && diffInMonths < 6) {
                  totalClicks += clicks;
                }
                break;
              case "1year":
                if (diffInMonths >= 0 && diffInMonths < 12) {
                  totalClicks += clicks;
                }
                break;
              case "all":
              default:
                totalClicks += clicks;
                break;
            }
          });
        });

        setClickStats({
          current: totalClicks,
          currentMonthName,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [filter, currentProperty]);

  useEffect(() => {
    getTraffic();
  }, [getTraffic]);

  return (
    <Col lg={6} md={6} sm={12} xl={6}>
      <Card className="custom-card ">
        <Card.Body>
          <Row>
            <div className="col">
              <div className="d-flex justify-content-between align-items-start mb-2 align-items-center">
                <h6 className="fw-normal fs-14">Traffic</h6>
              </div>
              <h3 className="mb-2 number-font fs-24">
                <CountUp end={clickStats.current} duration={1} />
              </h3>
              <Dropdown align="start" className="traffic-filter">
                <Dropdown.Toggle variant="light" className="border-0 btn-sm">
                  {filterOptions.find((f) => f.key === filter)?.label ||
                    clickStats.currentMonthName}
                </Dropdown.Toggle>
                <Dropdown.Menu className="overflow-auto">
                  {filterOptions.map((opt) => (
                    <Dropdown.Item
                      key={opt.key}
                      active={filter === opt.key}
                      onClick={() => setFilter(opt.key)}
                    >
                      {opt.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col col-auto mt-2">
              <div className="counter-icon bg-primary-gradient box-shadow-primary rounded-circle">
                <i className="fe fe-trending-up mb-5"></i>
              </div>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}
