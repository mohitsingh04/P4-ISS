import React, { useState } from "react";
import { Button, Card, Col, Form, Row, Badge, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import Dropdown from "react-dropdown-select";
import Swal from "sweetalert2";
import { API } from "../../../../context/API";

export default function AddAmenities({
  getAmenities,
  property,
  amenitiesData,
}) {
  const [selectedCategory, setSelectedCategory] = useState("Mandatory");
  const [parkingType, setParkingType] = useState([]);
  const [wifiType, setWifiType] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [amenities, setAmenities] = useState(() =>
    Object.fromEntries(
      Object.entries(amenitiesData).map(([category, items]) => [
        category,
        Object.fromEntries(items.map((amenity) => [amenity, null])),
      ])
    )
  );

  const handleSelection = (category, amenity, value) => {
    setAmenities((prev) => ({
      ...prev,
      [category]: { ...prev[category], [amenity]: value },
    }));

    if (amenity === "Parking" && !value) setParkingType([]);
    if (amenity === "WiFi" && !value) setWifiType([]);
  };

  const formatAmenitiesForSubmission = () => {
    const formattedAmenities = {};
    Object.entries(amenities).forEach(([category, amenityList]) => {
      const selected = Object.entries(amenityList)
        .filter(([_, value]) => value === true)
        .map(([amenity]) => {
          if (amenity === "WiFi" && wifiType.length) {
            return { [amenity]: wifiType.map((i) => i.value) };
          } else if (amenity === "Parking" && parkingType.length) {
            return { [amenity]: parkingType.map((i) => i.value) };
          }
          return { [amenity]: true };
        });
      if (selected.length > 0) formattedAmenities[category] = selected;
    });
    return [formattedAmenities];
  };

  const formik = useFormik({
    initialValues: {
      propertyId: property?.uniqueId,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (isSubmitting) return;

      const formattedAmenities = formatAmenitiesForSubmission();

      const isEmpty =
        formattedAmenities.length === 0 ||
        Object.keys(formattedAmenities[0]).length === 0;

      const hasWiFiSelected =
        amenities["Basic Facilities"]?.WiFi === true && wifiType.length === 0;

      const hasParkingSelected =
        amenities["Mandatory"]?.Parking === true && parkingType.length === 0;

      if (isEmpty || hasWiFiSelected || hasParkingSelected) {
        let message = "Please select at least one amenity.";
        if (hasWiFiSelected)
          message = "You selected WiFi. Please choose at least one WiFi type.";
        else if (hasParkingSelected)
          message =
            "You selected Parking. Please choose at least one Parking type.";

        Swal.fire({
          title: "Warning",
          text: message,
          icon: "warning",
        });
        return;
      }

      setIsSubmitting(true);

      try {
        const payload = {
          propertyId: values.propertyId,
          selectedAmenities: formattedAmenities,
        };

        const response = await API.post("/amenities", payload);

        if (response) {
          Swal.fire({
            title: "Success",
            text: response.data.message,
            icon: "success",
          });
          getAmenities();
        }
      } catch (error) {
        const msg =
          error?.response?.data?.error ||
          "An error occurred while saving amenities";
        Swal.fire({ title: "Error", text: msg, icon: "error" });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const renderAmenityItem = (category, amenity) => {
    const isSelected = amenities[category][amenity];

    return (
      <div key={amenity} className="amenity-item">
        <Card className="m-0 border-0 border-bottom border-top rounded-0">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-0">{amenity}</h6>
                {isSelected && (
                  <Badge bg="success" className="mt-1">
                    Enabled
                  </Badge>
                )}
              </div>
              <div className="d-flex gap-2">
                <Button
                  variant={isSelected === false ? "danger" : "outline-danger"}
                  size="sm"
                  onClick={() => handleSelection(category, amenity, false)}
                  className="d-flex align-items-center gap-1"
                >
                  <i className="fe fe-x-circle"></i> No
                </Button>
                <Button
                  variant={isSelected === true ? "success" : "outline-success"}
                  size="sm"
                  onClick={() => handleSelection(category, amenity, true)}
                  className="d-flex align-items-center gap-1"
                >
                  <i className="fe fe-check-circle"></i> Yes
                </Button>
              </div>
            </div>

            {category === "Transportation" &&
              amenity === "Parking" &&
              isSelected && (
                <div className="mt-3">
                  <Form.Label className="mb-2">
                    Select Parking Types:
                  </Form.Label>
                  <Dropdown
                    multi
                    options={[
                      { label: "Indoor", value: "Indoor" },
                      { label: "Outdoor", value: "Outdoor" },
                    ]}
                    onChange={(values) => setParkingType(values)}
                    values={parkingType}
                    keepSelectedInList={false}
                    placeholder="Select Parking Types"
                    className="w-100"
                  />
                </div>
              )}

            {category === "Basic Facilities" &&
              amenity === "WiFi" &&
              isSelected && (
                <div className="mt-3">
                  <Form.Label className="mb-2">Select WiFi Types:</Form.Label>
                  <Dropdown
                    multi
                    options={[
                      { label: "Free", value: "Free" },
                      { label: "Paid", value: "Paid" },
                    ]}
                    onChange={(values) => setWifiType(values)}
                    values={wifiType}
                    placeholder="Select WiFi Types"
                    className="w-100"
                    keepSelectedInList={false}
                  />
                </div>
              )}
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <Row className="py-4">
      <Col>
        <Form onSubmit={formik.handleSubmit}>
          <Card>
            <Card.Header className="bg-primary text-white py-3">
              <h4 className="mb-0">Add Property Amenities</h4>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="d-flex flex-column flex-md-row">
                <div
                  className="categories-sidebar border-end"
                  style={{ minWidth: "320px" }}
                >
                  <div className="p-0">
                    <h5 className="p-3">Categories</h5>
                    <div className="list-group">
                      {Object.entries(amenitiesData).map(
                        ([category, items]) => (
                          <Button
                            key={category}
                            variant="link"
                            className={`list-group-item list-group-item-action rounded-0 d-flex justify-content-between align-items-center ${
                              selectedCategory === category ? "active" : ""
                            }`}
                            style={{ minHeight: "70px" }}
                            onClick={() => setSelectedCategory(category)}
                          >
                            <span>{category}</span>
                            <div className="d-flex align-items-center">
                              <Badge
                                bg={
                                  selectedCategory === category
                                    ? "light text-primary"
                                    : "secondary"
                                }
                              >
                                {items.length}
                              </Badge>
                              <i
                                className={`fe fe-chevron-right ms-2 ${
                                  selectedCategory === category
                                    ? "text-white"
                                    : ""
                                }`}
                              ></i>
                            </div>
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1 p-4 px-0">
                  <h5 className="mb-4 px-4">{selectedCategory}</h5>
                  <div className="amenities-list">
                    {amenitiesData[selectedCategory].map((amenity) =>
                      renderAmenityItem(selectedCategory, amenity)
                    )}
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className="bg-light">
              <div className="d-flex justify-content-end">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="px-4"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Saving...
                    </>
                  ) : (
                    <p className="p-0 m-0">
                      <i className="fe fe-check-circle me-1"></i>
                      Save Amenities
                    </p>
                  )}
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Form>
      </Col>
    </Row>
  );
}
