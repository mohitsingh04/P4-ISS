import React, { useCallback, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { API } from "../../../context/API";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export default function Competion({ currentProperty, allProperties }) {
  const [currentLocation, setCurrentLocation] = useState("");
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const getCategories = useCallback(async () => {
    try {
      const response = await API.get(`/category`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategoryToRelatedId = (id) => {
    const category = categories.find((item) => item.uniqueId === Number(id));
    return category ? category?.category_name : "Unknown";
  };

  const colors = ["primary", "secondary", "success", "danger", "info"];

  const getCurrentLocation = useCallback(async () => {
    if (currentProperty) {
      try {
        const response = await API.get(
          `/property/location/${currentProperty?.uniqueId}`
        );
        setCurrentLocation(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [currentProperty]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  const getAllLocations = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get(`/locations`);
      const data = response.data;
      let filtered = data;

      if (currentLocation) {
        filtered = data.filter(
          (item) =>
            item.property_id !== currentLocation.property_id &&
            item.property_city === currentLocation.property_city
        );
      }

      const combined = filtered
        .map((location) => {
          const matchedProperty = allProperties.find(
            (property) => property.uniqueId === Number(location.property_id)
          );
          if (matchedProperty) {
            return { location, property: matchedProperty };
          }
          return null;
        })
        .filter((item) => item !== null);

      setCompetitions(combined?.slice(0, 5));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [currentLocation, allProperties]);

  useEffect(() => {
    getAllLocations();
  }, [getAllLocations]);

  return (
    <div>
      <Card className="custom-card overflow-hidden">
        <Card.Header>
          <div>
            <h3 className="card-title">Competitions</h3>
          </div>
        </Card.Header>
        <Card.Body className="pb-0 pt-2">
          <div className="activity1">
            {!loading ? (
              competitions.map((item, index) => (
                <div
                  className="activity-blog d-flex justify-content-between"
                  key={index}
                >
                  <div
                    className={`activity-img rounded-circle bg-${colors[index]}-transparent text-${colors[index]}`}
                  >
                    <i className="ri-user-add-fill fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <Link
                        to={`/dashboard/${item?.property?.property_slug}`}
                        className="fw-bold"
                      >
                        {item?.property?.property_name}
                      </Link>
                      <span className="d-flex text-muted fs-11">
                        {item?.location?.property_city}
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span
                        className={`badge bg-${colors[index]} text-fixed-white`}
                      >
                        {getCategoryToRelatedId(item?.property?.category)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Skeleton count={5} height={50} className="mb-2" />
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
