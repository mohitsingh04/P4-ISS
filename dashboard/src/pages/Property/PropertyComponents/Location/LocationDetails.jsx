import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Property_Address from "./LocationComponent/Property_Address";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import PropertyPincode from "./LocationComponent/Property_pincode";
import PropertyCountry from "./LocationComponent/PropertyCountry";
import PropertyState from "./LocationComponent/Property_states";
import PropertyCity from "./LocationComponent/Property_city";
import AddLocation from "./LocationComponent/AddLocation";

export default function LocationDetails() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [location, setLocation] = useState("");
  const [countries, setCountries] = useState([]);
  const [allStates, setAllStates] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  const getCountries = async () => {
    try {
      const response = await API.get(`/countries`);
      const data = response.data;
      setCountries(data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const getStates = async () => {
    try {
      const response = await API.get(`/states`);
      setAllStates(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    const newFiltered = allStates.filter(
      (item) => item.country_name === selectedCountry
    );
    setFilteredStates(newFiltered);
  }, [selectedCountry, allStates]);

  const getCities = async () => {
    try {
      const response = await API.get(`/cities`);
      setAllCities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  useEffect(() => {
    const newFiltered = allCities.filter(
      (item) => item.state_name === selectedState
    );
    setFilteredCities(newFiltered);
  }, [selectedState, allCities]);

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

  const getLocation = useCallback(async () => {
    if (property) {
      try {
        const response = await API.get(
          `/property/location/${property?.uniqueId}`
        );
        setLocation(response.data);
        setSelectedCountry(response.data.property_country);
        setSelectedState(response.data.property_state);
      } catch (error) {
        console.error(
          error.response.data.error ||
            error.response.data.message ||
            error.message
        );
      }
    }
  }, [property]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);
  useEffect(() => {
    getLocation();
  }, [getLocation]);
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>Location</Card.Title>
            </Card.Header>
            <Card.Body>
              {!location ? (
                <AddLocation
                  property={property}
                  getLocation={getLocation}
                  countries={countries}
                  states={filteredStates}
                  cities={filteredCities}
                  setSelectedCountry={setSelectedCountry}
                  setSelectedState={setSelectedState}
                />
              ) : (
                <>
                  <Row>
                    <Col md={6}>
                      <Property_Address
                        property={property}
                        location={location}
                        getProperty={getProperty}
                      />
                    </Col>
                    <Col md={6}>
                      <PropertyPincode
                        property={property}
                        location={location}
                        getProperty={getProperty}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <PropertyCountry
                        countries={countries}
                        property={property}
                        location={location}
                        getProperty={getProperty}
                        setSelectedCountry={setSelectedCountry}
                      />
                    </Col>
                    <Col md={4}>
                      <PropertyState
                        states={filteredStates}
                        property={property}
                        location={location}
                        getProperty={getProperty}
                        setSelectedState={setSelectedState}
                      />
                    </Col>
                    <Col md={4}>
                      <PropertyCity
                        property={property}
                        location={location}
                        getProperty={getProperty}
                        cities={filteredCities}
                      />
                    </Col>
                  </Row>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
