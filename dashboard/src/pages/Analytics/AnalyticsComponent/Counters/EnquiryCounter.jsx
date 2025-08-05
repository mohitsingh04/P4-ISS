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

export default function EnquiryCounter({ currentProperty }) {
  const [enquiryStats, setEnquiryStats] = useState({
    current: 0,
    currentMonthName: "",
  });
  const [filter, setFilter] = useState("last7");

  const getEnquiry = useCallback(async () => {
    try {
      if (currentProperty) {
        const response = await API.get(
          `/property/enquiry/count/${currentProperty?.uniqueId}`
        );
        const data = response.data;

        const now = new Date();
        const currentMonthIndex = now.getMonth();
        const currentMonthKey = monthKeys[currentMonthIndex];
        const currentMonthName = monthNames[currentMonthKey];

        let totalEnquiry = 0;

        data.forEach((doc) => {
          const { month, year, daily } = doc;

          daily.forEach((dayEntry) => {
            const day = parseInt(dayEntry.day, 10);
            const enquiries = dayEntry.enquiries;
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
                  totalEnquiry += enquiries;
                }
                break;
              case "last7":
                if (diffInDays >= 0 && diffInDays < 7) {
                  totalEnquiry += enquiries;
                }
                break;
              case "last30":
                if (diffInDays >= 0 && diffInDays < 30) {
                  totalEnquiry += enquiries;
                }
                break;
              case "6months":
                if (diffInMonths >= 0 && diffInMonths < 6) {
                  totalEnquiry += enquiries;
                }
                break;
              case "1year":
                if (diffInMonths >= 0 && diffInMonths < 12) {
                  totalEnquiry += enquiries;
                }
                break;
              case "all":
              default:
                totalEnquiry += enquiries;
                break;
            }
          });
        });

        setEnquiryStats({
          current: totalEnquiry,
          currentMonthName,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [filter, currentProperty]);

  useEffect(() => {
    getEnquiry();
  }, [getEnquiry]);

  return (
    <Col lg={6} md={6} sm={12} xl={6}>
      <Card className="custom-card ">
        <Card.Body>
          <Row>
            <div className="col">
              <div className="d-flex justify-content-between align-items-start mb-2 align-items-center">
                <h6 className="fw-normal fs-14">Enquiry</h6>
              </div>
              <h3 className="mb-2 number-font fs-24">
                <CountUp end={enquiryStats.current} duration={1} />
              </h3>
              <Dropdown align="start">
                <Dropdown.Toggle variant="light" className="border-0 btn-sm">
                  {filterOptions.find((f) => f.key === filter)?.label ||
                    enquiryStats.currentMonthName}
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
              <div className="counter-icon bg-danger-gradient box-shadow-danger rounded-circle">
                <i className="ri-rocket-line mb-5"></i>
              </div>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}
