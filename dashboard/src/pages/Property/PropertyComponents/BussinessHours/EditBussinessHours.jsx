import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { API } from "../../../../context/API";
import Swal from "sweetalert2";

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function EditBusinessHours({
  existingHours,
  property,
  setIsExisting,
  onUpdated,
}) {
  const [formState, setFormState] = useState(
    days.reduce((acc, day) => {
      acc[day] = existingHours[day] || { open: "", close: "" };
      return acc;
    }, {})
  );

  const [checkedDays, setCheckedDays] = useState(
    days.reduce((acc, day) => {
      acc[day] =
        existingHours[day] &&
        (existingHours[day].open || existingHours[day].close);
      return acc;
    }, {})
  );

  const handleTimeChange = (day, time, value) => {
    setFormState((prev) => ({
      ...prev,
      [day]: { ...prev[day], [time]: value },
    }));

    if (value !== "" && !checkedDays[day]) {
      setCheckedDays((prev) => ({
        ...prev,
        [day]: true,
      }));
    }
  };

  const handleCheckboxChange = (day) => {
    setCheckedDays((prev) => {
      const newCheckedDays = { ...prev, [day]: !prev[day] };

      if (newCheckedDays[day]) {
        // Copy the time values to the selected day when checked
        setFormState((prevState) => ({
          ...prevState,
          [day]: { ...prevState.monday }, // You can choose to copy values from any other day
        }));
      } else {
        // Clear the time values when unchecked
        setFormState((prevState) => ({
          ...prevState,
          [day]: { open: "", close: "" },
        }));
      }

      return newCheckedDays;
    });
  };

  const handleSelectAll = () => {
    const newCheckedDays = days.reduce((acc, day) => {
      // Only check days from Monday to Saturday
      if (day !== "sunday") {
        acc[day] = true;
      }
      return acc;
    }, {});

    const selectedTime = formState.monday; // Select Monday's values as the common time

    setCheckedDays(newCheckedDays);
    setFormState((prevState) => {
      const updatedState = { ...prevState };
      days.forEach((day) => {
        // Only set Monday to Saturday, skip Sunday
        if (day !== "sunday") {
          updatedState[day] = { ...selectedTime };
        }
      });
      return updatedState;
    });
  };

  const hasAnyValue = () => {
    return days.some(
      (day) => formState[day].open !== "" || formState[day].close !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.patch(
        `/business-hours/${property?.uniqueId}`,
        formState
      );

      Swal.fire({
        title: "Updated",
        text: response.data.message,
        icon: "success",
      });
      onUpdated?.();
      setIsExisting(false);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response.data.error,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    // Set initial checkbox state based on the formState values
    const updatedCheckedDays = days.reduce((acc, day) => {
      acc[day] = formState[day].open || formState[day].close;
      return acc;
    }, {});
    setCheckedDays(updatedCheckedDays);
  }, [formState]);

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <h5 className="mb-0">Edit Working Hours</h5>
        <Button variant="danger" size="sm" onClick={() => setIsExisting(false)}>
          <i className="fe fe-x me-2"></i>Cancel
        </Button>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {hasAnyValue() && (
            <div className="d-flex justify-content-end mb-3">
              <Button variant="secondary" size="sm" onClick={handleSelectAll}>
                Select All (Mon → Sat)
              </Button>
            </div>
          )}

          {days.map((day) => (
            <Row className="mb-3" key={day}>
              <Form.Label column sm={2} className="text-capitalize">
                {day}
              </Form.Label>
              <Col sm={1}>
                <Form.Check
                  type="checkbox"
                  checked={checkedDays[day]}
                  onChange={() => handleCheckboxChange(day)}
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
              <i className="fe fe-check-circle me-2"></i>Update
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
