import React, { useEffect, useState, useCallback } from "react";
import { Col, Card } from "react-bootstrap";
import { AnalyticChart } from "./AnalyticChart";
import { API } from "../../../../context/API";
import Skeleton from "react-loading-skeleton";

export default function AnalyticGraph({ currentProperty }) {
  const [traffic, setTraffic] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTrafficAndEnquiries = useCallback(async () => {
    if (!currentProperty?.uniqueId) return;

    try {
      const trafficRes = await API.get(
        `/property/traffic/${currentProperty.uniqueId}`
      );
      const allTrafficDocs = trafficRes.data;

      const enquiryRes = await API.get(
        `/property/enquiry/count/${currentProperty.uniqueId}`
      );
      const allEnquiryDocs = enquiryRes.data;

      const trafficDayMap = {};
      const enquiryDayMap = {};

      allTrafficDocs.forEach((doc) => {
        doc.daily.forEach(({ day, clicks }) => {
          if (!trafficDayMap[day]) trafficDayMap[day] = 0;
          trafficDayMap[day] += clicks;
        });
      });

      allEnquiryDocs.forEach((doc) => {
        doc.daily.forEach(({ day, enquiries }) => {
          if (!enquiryDayMap[day]) enquiryDayMap[day] = 0;
          enquiryDayMap[day] += enquiries;
        });
      });

      const mergedTraffic = Object.entries(trafficDayMap)
        .map(([day, clicks]) => ({ day, clicks }))
        .sort((a, b) => parseInt(a.day) - parseInt(b.day));

      const mergedEnquiries = Object.entries(enquiryDayMap)
        .map(([day, enquiries]) => ({ day, enquiries }))
        .sort((a, b) => parseInt(a.day) - parseInt(b.day));

      setTraffic(mergedTraffic);
      setEnquiries(mergedEnquiries);
    } catch (error) {
      console.error("Error fetching traffic and enquiry data:", error);
    } finally {
      setLoading(false);
    }
  }, [currentProperty]);

  useEffect(() => {
    getTrafficAndEnquiries();
  }, [getTrafficAndEnquiries]);

  return (
    <Col sm={12} md={12} lg={12} xl={8}>
      <Card className="custom-card">
        <Card.Header>
          <h3 className="card-title">Traffic & Enquiries (Last Month)</h3>
        </Card.Header>
        <Card.Body className="pb-0">
          {loading ? (
            <Skeleton height={200} className="mb-4" />
          ) : (
            <AnalyticChart trafficData={traffic} enquiryData={enquiries} />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
