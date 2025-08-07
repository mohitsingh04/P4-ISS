import React, { useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CounterCards from "../DashboardComponents/CounterCards";
import { API } from "../../../context/API";

export default function PropertyManager({ authUser, properties }) {
  const [authProperties, setAuthProperties] = useState([]);
  const [propertyExams, setPropertyExam] = useState([]);
  const [review, setReview] = useState([]);
  const [team, setTeam] = useState([]);
  const [faq, setFaq] = useState([]);

  // Fetch all team and filter by property_id
  const getTeam = useCallback(async () => {
    try {
      const response = await API.get(`/team`);
      const propertyIds = authProperties.map((property) => property.uniqueId);
      const filteredTeam = response.data.filter((team) =>
        propertyIds.includes(team.property_id)
      );
      setTeam(filteredTeam);
    } catch (error) {
      console.log(error);
    }
  }, [authProperties]);

  // Fetch all reviews and filter by property_id
  const getReview = useCallback(async () => {
    try {
      const response = await API.get(`/review`);
      const propertyIds = authProperties.map((property) => property.uniqueId);
      const filteredReviews = response.data.filter((review) =>
        propertyIds.includes(review.property_id)
      );
      setReview(filteredReviews);
    } catch (error) {
      console.log(error);
    }
  }, [authProperties]);

  // Fetch all FAQs and filter by property_id
  const getFaq = useCallback(async () => {
    try {
      const response = await API.get(`/faqs`);
      const propertyIds = authProperties.map((property) => property.uniqueId);
      const filteredFaqs = response.data.filter((faq) =>
        propertyIds.includes(faq.property_id)
      );
      setFaq(filteredFaqs);
    } catch (error) {
      console.log(error);
    }
  }, [authProperties]);

  // Fetch all property Exam and filter by property_id
  const getPropertyExam = useCallback(async () => {
    try {
      const response = await API.get(`/property-exam`);
      const propertyIds = authProperties.map((property) => property.uniqueId);
      const filteredExam = response.data.filter((exam) =>
        propertyIds.includes(exam.property_id)
      );
      setPropertyExam(filteredExam);
    } catch (error) {
      console.log(error);
    }
  }, [authProperties]);

  // Set authProperties based on user
  useEffect(() => {
    if (properties && authUser) {
      const filteredProperties = properties.filter(
        (item) => item?.userId === authUser?.uniqueId
      );
      setAuthProperties(filteredProperties);
    }
  }, [properties, authUser]);

  // Fetch data when authProperties changes
  useEffect(() => {
    if (authProperties.length > 0) {
      getTeam();
      getReview();
      getFaq();
      getPropertyExam();
    }
  }, [authProperties, getTeam, getReview, getFaq, getPropertyExam]);

  const data = [
    {
      title: "Property",
      count: authProperties?.length || 0,
      icon: "fe-layers",
      color: "primary",
    },
    {
      title: "Exams",
      count: propertyExams?.length || 0,
      icon: "fe-cpu",
      color: "light",
    },
    {
      title: "Team",
      count: team?.length || 0,
      icon: "fe-users",
      color: "danger",
    },
    {
      title: "Reviews",
      count: review?.length || 0,
      icon: "fe-star",
      color: "warning",
    },
    {
      title: "FAQ`s",
      count: faq?.length || 0,
      icon: "fe-book-open",
      color: "secondary",
    },
  ];

  return (
    <div>
      <Row>
        {data.map((item, index) => (
          <Col lg={6} md={6} sm={12} xl={3} key={index}>
            <CounterCards cardData={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
