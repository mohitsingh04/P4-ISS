import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { API } from "../../../context/API";
import { Link } from "react-router-dom";

export default function AnalyticEnquiry({ currentProperty }) {
  const [enquiry, setEnquiry] = useState([]);
  const getEnquiry = useCallback(async () => {
    if (currentProperty) {
      try {
        const response = await API.get(
          `/property/enquiry/${currentProperty?.uniqueId}`
        );
        setEnquiry(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [currentProperty]);

  useEffect(() => {
    getEnquiry();
  }, [getEnquiry]);
  return (
    <div>
      <Card className="custom-card">
        <Card.Header className="justify-content-between">
          <div className="card-title">Enquiry</div>
        </Card.Header>
        <Card.Body>
          <div className="table-responsive deals-table">
            <Table responsive striped hover>
              <thead className="border-top">
                <tr>
                  <th className="bg-transparent border-bottom-0 w-5 text-uppercase">
                    S.no
                  </th>
                  <th className="bg-transparent border-bottom-0 text-uppercase">
                    Name
                  </th>
                  <th className="bg-transparent border-bottom-0 text-uppercase">
                    Date
                  </th>
                  <th className="bg-transparent border-bottom-0 text-uppercase">
                    City
                  </th>
                  <th className="bg-transparent border-bottom-0 text-uppercase">
                    Status
                  </th>
                  <th className="bg-transparent border-bottom-0 text-uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {enquiry?.slice(0, 5).map((item, index) => (
                  <tr key={index} className="border-bottom">
                    <td className="text-muted fs-15 fw-semibold">
                      {index + 1}.
                    </td>
                    <td>
                      <div className="d-flex">
                        <div className="ms-2 mt-0 mt-sm-2 d-block">
                          <h6 className="mb-0 fs-14 fw-semibold">
                            {item.name}
                          </h6>
                          <span className="fs-12 text-muted">{item.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-muted fs-15 fw-semibold">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </td>

                    <td className="text-muted fs-15 fw-semibold">
                      {item.city}
                    </td>
                    <td
                      className={`text-${
                        item.status === "Active"
                          ? "success"
                          : item.status === "Suspended"
                          ? "danger"
                          : "primary"
                      } fs-15 fw-semibold`}
                    >
                      {item.status}
                    </td>
                    <td>
                      <div className="btn-list">
                        <Link
                          to={`/dashboard/enquiry/view/${item?._id}`}
                          className="btn-icon btn btn-primary btn-wave waves-effect waves-light"
                        >
                          <i className="fe fe-eye lh-1"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
