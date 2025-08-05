import React, { useCallback, useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { RecentOrders } from "./ScoreChart";
import { API } from "../../../../context/API";
import Skeleton from "react-loading-skeleton";

export default function SeoScore({ currentProperty }) {
  const [seoScore, setSeoScore] = useState("");
  const [loading, setLoading] = useState(true);
  const getseoScore = useCallback(async () => {
    if (currentProperty) {
      setLoading(true);
      try {
        const response = await API.get(
          `/property/seo/score/${currentProperty?.uniqueId}`
        );
        setSeoScore(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [currentProperty]);

  useEffect(() => {
    getseoScore();
  }, [getseoScore]);

  return (
    <Col sm={12} md={12} lg={12} xl={6}>
      <Card className="custom-card ">
        <Card.Body className="pt-0 ps-0 pe-0">
          {!loading ? (
            <RecentOrders
              name="SEO"
              value={seoScore?.seo_score || 0}
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
