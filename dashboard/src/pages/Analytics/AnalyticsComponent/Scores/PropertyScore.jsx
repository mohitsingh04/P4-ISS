import React, { useCallback, useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { RecentOrders } from "./ScoreChart";
import { API } from "../../../../context/API";
import Skeleton from "react-loading-skeleton";

export default function PropertyScore({ currentProperty }) {
  const [propertyScore, setPropertScore] = useState("");
  const [loading, setLoading] = useState(true);
  const getPropertyScore = useCallback(async () => {
    if (currentProperty) {
      setLoading(true);
      try {
        const response = await API.get(
          `/property/score/${currentProperty?.uniqueId}`
        );
        setPropertScore(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [currentProperty]);

  useEffect(() => {
    getPropertyScore();
  }, [getPropertyScore]);

  return (
    <Col sm={12} md={12} lg={12} xl={6}>
      <Card className="custom-card ">
        <Card.Body className="pt-0 ps-0 pe-0">
          {!loading ? (
            <RecentOrders
              name="Property"
              value={propertyScore?.property_score || 0}
              maxValue={100}
            />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
