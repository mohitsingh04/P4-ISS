import React, { useCallback, useEffect, useState } from "react";
import AddAmenities from "./AddAmenities";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import EditAmenities from "./EditAmenities";
const amenitiesData = {
  Mandatory: [
    "Classrooms",
    "Library",
    "Computer Lab",
    "Hostel Accommodation",
    "Mess/Dining Hall",
    "Security & Surveillance",
    "Medical Facility",
    "Fire Safety Measures",
    "CCTV Surveillance",
  ],
  "Basic Facilities": [
    "WiFi",
    "Power Backup",
    "Wheelchair Accessibility",
    "Clean Drinking Water",
  ],
  "General Services": [
    "Student Counseling",
    "24/7 Security",
    "Reception/Help Desk",
    "Study Area",
    "Luggage Storage for Boarders",
    "Language Support / Translator",
  ],
  "Training Facilities": [
    "Parade Ground",
    "Obstacle Course",
    "Indoor Sports Hall",
    "Shooting Range (Air Rifle)",
    "Drill Instructor-Led Sessions",
    "Swimming Pool",
    "Sports Coaching",
    "Academic Coaching Classes",
    "Interview Preparation Rooms",
    "Library with Reference Books",
    "Science and Computer Labs",
  ],
  "Common Area": ["Student Lounge", "Assembly Hall", "Garden/Lawn"],
  "Outdoor & Recreational": [
    "Playground",
    "Running Track",
    "Sports Fields (Football, Hockey, Cricket)",
    "Cultural Activities",
    "Nature Walks",
    "Adventure Training Camps",
    "Annual Sports Meet",
  ],
  "Food and Drink": [
    "Mess Facility",
    "Canteen",
    "Nutritious Meals Provided",
    "Special Diet Options",
  ],
  Transportation: [
    "Parking",
    "School Bus Service",
    "Pickup & Drop Service",
    "Transport for Competitions & Events",
    "Local Sightseeing Tours (Educational)",
    "Public Transport Assistance",
  ],
};

export default function Amenities() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [amenities, setAmenities] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  const getAmenities = useCallback(async () => {
    try {
      if (property) {
        const response = await API.get(
          `/property/amenities/${property?.uniqueId}`
        );
        setAmenities(response.data);
      }
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [property]);

  useEffect(() => {
    getAmenities();
  }, [getAmenities]);

  const selected = amenities?.selectedAmenities?.[0];

  return (
    <div>
      {!selected ? (
        <AddAmenities
          property={property}
          getAmenities={getAmenities}
          amenitiesData={amenitiesData}
        />
      ) : !isEditing ? (
        <Row>
          <Col>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <Card.Title>Amenities</Card.Title>
                <div>
                  <Button size="sm" onClick={() => setIsEditing(true)}>
                    <i className="fe fe-edit me-1"></i>Edit Amenities
                  </Button>
                </div>
              </Card.Header>

              {Object.entries(amenitiesData).map(([category, items], index) => (
                <Card.Body key={index}>
                  <Card>
                    <Card.Header>
                      <Card.Title>{category}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      {items.map((item, i) => {
                        const itemStatus = selected?.[category]?.find(
                          (a) => a[item] !== undefined
                        );

                        const value = itemStatus?.[item];

                        if (Array.isArray(value) && value.length > 0) {
                          return (
                            <Button
                              key={i}
                              variant="outline-success"
                              className="btn my-1 me-2 fw-bold"
                            >
                              {item}: {value.join(", ")}
                              <Badge bg="success" className="badge ms-2">
                                <i className="fe fe-check"></i>
                              </Badge>
                            </Button>
                          );
                        } else if (value === true) {
                          return (
                            <Button
                              key={i}
                              variant="outline-success"
                              className="btn my-1 me-2 fw-bold"
                            >
                              {item}
                              <Badge bg="success" className="badge ms-2">
                                <i className="fe fe-check"></i>
                              </Badge>
                            </Button>
                          );
                        } else {
                          return (
                            <Button
                              key={i}
                              variant="outline-danger"
                              className="btn my-1 me-2 fw-bold"
                            >
                              {item}
                              <Badge bg="danger" className="badge ms-2">
                                <i className="fe fe-x"></i>
                              </Badge>
                            </Button>
                          );
                        }
                      })}
                    </Card.Body>
                  </Card>
                </Card.Body>
              ))}
            </Card>
          </Col>
        </Row>
      ) : (
        <EditAmenities
          property={property}
          amenities={amenities}
          getAmenities={getAmenities}
          existingAmenity={amenities}
          amenitiesData={amenitiesData}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}
