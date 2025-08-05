import React, { useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CounterCards from "../DashboardComponents/CounterCards";
import { API } from "../../../context/API";

export default function PropertyManager({ authUser, properties }) {
  const [authProperties, setAuthProperties] = useState([]);
  const [propertyCourse, setPropertyCourse] = useState([]);
  const [review, setReview] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [faq, setFaq] = useState([]);

  // Fetch all teachers and filter by property_id
  const getTeachers = useCallback(async () => {
    try {
      const response = await API.get(`/teacher`);
      const propertyIds = authProperties.map((property) => property.uniqueId);
      const filteredTeachers = response.data.filter((teacher) =>
        propertyIds.includes(teacher.property_id)
      );
      setTeachers(filteredTeachers);
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

  // Fetch all property courses and filter by property_id
  const getPropertyCourse = useCallback(async () => {
    try {
      const response = await API.get(`/property-course`);
      const propertyIds = authProperties.map((property) => property.uniqueId);
      const filteredCourses = response.data.filter((course) =>
        propertyIds.includes(course.property_id)
      );
      setPropertyCourse(filteredCourses);
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
      getTeachers();
      getReview();
      getFaq();
      getPropertyCourse();
    }
  }, [authProperties, getTeachers, getReview, getFaq, getPropertyCourse]);

  const data = [
    {
      title: "Property",
      count: authProperties?.length || 0,
      icon: "fe-layers",
      color: "primary",
    },
    {
      title: "Courses",
      count: propertyCourse?.length || 0,
      icon: "fe-cpu",
      color: "light",
    },
    {
      title: "Teachers",
      count: teachers?.length || 0,
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
