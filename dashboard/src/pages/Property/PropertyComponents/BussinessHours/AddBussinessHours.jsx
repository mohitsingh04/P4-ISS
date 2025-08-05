import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";

const defaultHours = {
  open: "",
  close: "",
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

export default function AddBusinessHours({ property, onAdded, authUser }) {
  const [formState, setFormState] = useState(
    days.reduce((acc, day) => {
      acc[day] = { ...defaultHours };
      return acc;
    }, {})
  );

  const [checkboxes, setCheckboxes] = useState(
    days.reduce((acc, day) => {
      acc[day] = false;
      return acc;
    }, {})
  );

  const [copySourceDay, setCopySourceDay] = useState("monday");

  const handleTimeChange = (day, time, value) => {
    setFormState((prev) => {
      const updated = {
        ...prev,
        [day]: { ...prev[day], [time]: value },
      };

      // If user edits a field directly, auto-check the box
      if (value !== "") {
        setCheckboxes((prev) => ({ ...prev, [day]: true }));
      }

      return updated;
    });
  };

  const handleCopyDay = (day, checked) => {
    setCheckboxes((prev) => ({ ...prev, [day]: checked }));

    setFormState((prev) => {
      const updated = { ...prev };
      if (checked) {
        // Copy from source day
        updated[day] = { ...prev[copySourceDay] };
      } else {
        // Clear values if unchecked
        updated[day] = { ...defaultHours };
      }
      return updated;
    });
  };

  const handleSelectAll = () => {
    const mondayTimes = formState["monday"];
    const updatedState = { ...formState };
    const updatedChecks = { ...checkboxes };

    days.forEach((day) => {
      if (day !== "monday" && day !== "sunday") {
        updatedState[day] = { ...mondayTimes };
        updatedChecks[day] = true;
      }
    });

    setFormState(updatedState);
    setCheckboxes(updatedChecks);
    setCopySourceDay("monday");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        property_id: property?.uniqueId,
        userId: authUser?.uniqueId,
        ...formState,
      };

      const response = await API.post(`/business-hours`, data);

      if (response.data.message) {
        Swal.fire({
          title: "Success",
          text: response.data.message,
          icon: "success",
        });
        onAdded?.();
      } else {
        Swal.fire({
          title: "Error",
          text: response.data.error || "Something went wrong!",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.error || "Something went wrong!",
        icon: "error",
      });
    }
  };
  const hasAnyValue = () => {
    return days.some(
      (day) => formState[day].open !== "" || formState[day].close !== ""
    );
  };

  return (
    <Card>
      <Card.Header>
        <h5 className="mb-0">Add Working Hours</h5>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {hasAnyValue() && (
            <div className="d-flex justify-content-end mb-3">
              <Button size="sm" onClick={handleSelectAll}>
                Select All (Mon → Sat)
              </Button>
            </div>
          )}

          {days.map((day) => (
            <Row className="mb-3 align-items-center" key={day}>
              <Form.Label column sm={2}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </Form.Label>
              <Col sm={2}>
                <Form.Check
                  type="checkbox"
                  checked={checkboxes[day]}
                  onChange={(e) => handleCopyDay(day, e.target.checked)}
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="time"
                  value={formState[day].open}
                  onChange={(e) =>
                    handleTimeChange(day, "open", e.target.value)
                  }
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="time"
                  value={formState[day].close}
                  onChange={(e) =>
                    handleTimeChange(day, "close", e.target.value)
                  }
                />
              </Col>
            </Row>
          ))}

          <div className="d-flex justify-content-between align-items-center">
            <Button type="submit" variant="primary">
              <i className="fe fe-check-circle me-2"></i>Submit
            </Button>
            <p className="mb-0 text-danger p-1 rounded bg-danger-subtle">
              Note: If no time is selected, that day will be considered Closed.
            </p>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
