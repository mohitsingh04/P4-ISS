import React, { useCallback, useEffect, useState } from "react";
import { Card, Table, Button, Row, Col } from "react-bootstrap";
import AddBussinessHours from "./AddBussinessHours";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import EditBusinessHours from "./EditBussinessHours";

export default function BussinessHours() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [authUser, setAuthUser] = useState("");
  const [bussinessHours, setBussinessHours] = useState(null);
  const [isExisting, setIsExisting] = useState(false);

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [objectId]);

  const getAuthUser = useCallback(async () => {
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, []);

  const getBussinessHours = useCallback(async () => {
    if (!property?.uniqueId) return;
    try {
      const response = await API.get(`/business-hours/${property.uniqueId}`);
      setBussinessHours(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [property]);

  useEffect(() => {
    getProperty();
    getAuthUser();
  }, [getProperty, getAuthUser]);

  useEffect(() => {
    getBussinessHours();
  }, [getBussinessHours]);

  const isDayOpen = (day) => {
    const open = bussinessHours?.[day]?.open;
    const close = bussinessHours?.[day]?.close;
    return open && close && open.trim() !== "" && close.trim() !== "";
  };

  const anyDayOpen = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ].some((day) => isDayOpen(day));

  const formatTime = (time) => {
    if (!time) return "";
    const [hour, minute] = time.split(":");
    const h = parseInt(hour);
    const suffix = h >= 12 ? "PM" : "AM";
    const formattedHour = ((h + 11) % 12) + 1;
    return `${formattedHour}:${minute} ${suffix}`;
  };

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <Row>
      <Col>
        {bussinessHours && anyDayOpen ? (
          !isExisting ? (
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Working Hours</h5>
                <div>
                  <Button
                    size="sm"
                    className="me-1"
                    onClick={() => setIsExisting(true)}
                  >
                    <i className="fe fe-edit me-1"></i>Edit
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <Table striped responsive className="mb-0">
                  <thead>
                    <tr className="text-muted">
                      <th>Day</th>
                      <th>Opening Time</th>
                      <th>Closing Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {days.map((day) => {
                      const open = bussinessHours?.[day]?.open;
                      const close = bussinessHours?.[day]?.close;
                      const isOpen =
                        open &&
                        close &&
                        open.trim() !== "" &&
                        close.trim() !== "";
                      const dayLabel =
                        day.charAt(0).toUpperCase() + day?.slice(1);
                      return (
                        <tr key={day}>
                          <td>{dayLabel}</td>
                          <td>{isOpen ? formatTime(open) : "Closed"}</td>
                          <td>{isOpen ? formatTime(close) : "Closed"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          ) : (
            <EditBusinessHours
              existingHours={bussinessHours}
              onUpdated={getBussinessHours}
              property={property}
              setIsExisting={setIsExisting}
            />
          )
        ) : (
          <AddBussinessHours
            property={property}
            authUser={authUser}
            onAdded={getBussinessHours}
          />
        )}
      </Col>
    </Row>
  );
}
