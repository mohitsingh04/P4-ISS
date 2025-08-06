import React, { useCallback, useEffect, useRef, useState } from "react";
import { Breadcrumb, Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { API } from "../../context/API";
import Skeleton from "react-loading-skeleton";
import ALLImages from "../../common/Imagesdata";
import ViewProfileSkeleton from "../../components/Skeletons/ViewProfileSkeleton";
import BasicDetails from "./PropertyComponents/BasicDetails/BasicDetails";
import LocationDetails from "./PropertyComponents/Location/LocationDetails";
import Faq from "./PropertyComponents/Faq/Faq";
import Reviews from "./PropertyComponents/Reviews/Reviews";
import Seo from "./PropertyComponents/SEO/Seo";
import Teacher from "./PropertyComponents/Teacher/Teacher";
import Gallery from "./PropertyComponents/Gallery/Gallery";
import Businesshours from "./PropertyComponents/BussinessHours/BussinessHours";
import Enquiry from "./PropertyComponents/Enquiry/Enquiry";
import Amenities from "./PropertyComponents/Amenities/Amenities";
import Coupon from "./PropertyComponents/Coupon/Coupon";
import Hostel from "./PropertyComponents/Hostel/Hostel";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import Exams from "./PropertyComponents/Exams/Exams";

export default function ViewProperty() {
  const navigate = useNavigate();
  const { objectId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "enquiry";
  const [authUser, setAuthUser] = useState("");
  const [categories, setCategories] = useState([]);
  const [property, setProperty] = useState("");
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);
  const [authLoading, setAuthLoading] = useState(true);

  const tabsData = [
    {
      key: "enquiry",
      label: "Enquiry",
      icon: "ri-file-list-line",
      component: <Enquiry />,
      online: true,
    },
    {
      key: "basic-details",
      label: "Basic Details",
      icon: "ri-profile-line",
      component: <BasicDetails />,
      online: true,
    },
    {
      key: "location",
      label: "Location",
      icon: "ri-map-pin-line",
      component: <LocationDetails />,
      online: false,
    },
    {
      key: "working-hours",
      label: "Working Hours",
      icon: "ri-time-line",
      component: <Businesshours />,
      online: false,
    },
    {
      key: "hostel",
      label: "Hostel",
      icon: "ri-hotel-line",
      component: <Hostel />,
      online: false,
    },
    {
      key: "amenities",
      label: "Amenties",
      icon: "ri-building-2-line",
      component: <Amenities />,
      online: false,
    },
    {
      key: "teachers",
      label: "Teachers",
      icon: "ri-user-star-line",
      component: <Teacher />,
      online: true,
    },
    {
      key: "exams",
      label: "Exams",
      icon: "ri-book-open-line",
      component: <Exams />,
      online: true,
    },
    {
      key: "gallery",
      label: "Gallery",
      icon: "ri-image-line",
      component: <Gallery />,
      online: true,
    },
    {
      key: "reviews",
      label: "Reviews",
      icon: "ri-chat-quote-line",
      component: <Reviews />,
      online: true,
    },
    {
      key: "faqs",
      label: "FAQ's",
      icon: "ri-question-answer-line",
      component: <Faq />,
      online: true,
    },
    {
      key: "seo",
      label: "SEO",
      icon: "ri-bar-chart-line",
      component: <Seo />,
      online: true,
    },
    {
      key: "coupons",
      label: "Coupons",
      icon: "ri-price-tag-3-line",
      component: <Coupon />,
      online: true,
    },

    {
      link: `/dashboard/analytics/${property?._id}`,
      label: "Analytics",
      icon: "fe fe-bar-chart",
      component: <Coupon />,
      online: true,
    },
  ];

  const getCategories = useCallback(async () => {
    try {
      const response = await API.get(`/category`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getCategoryToRelatedId = (id) => {
    const category = categories.find((item) => item.uniqueId === Number(id));
    return category ? category?.category_name : "Unknown";
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const getAuthUser = useCallback(async () => {
    setAuthLoading(true);
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    } finally {
      setAuthLoading(false);
    }
  }, []);

  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);

  if (!authLoading) {
    if (!authUser?.permissions?.some((item) => item === "Read Property")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getProperty = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    } finally {
      setLoading(false);
    }
  }, [objectId]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Property</h1>
          <div>
            {!loading ? (
              <Breadcrumb className="mb-0">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
                  Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  linkAs={Link}
                  linkProps={{ to: "/dashboard/property" }}
                >
                  Property
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {property.property_name}
                </Breadcrumb.Item>
              </Breadcrumb>
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button onClick={() => navigate(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>
      <Row>
        <Col>
          {!loading ? (
            <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
              <Card>
                <Card.Body>
                  <div className="wideget-user">
                    <Row>
                      <Col lg={12} md={12} xl={6}>
                        <div className="wideget-user-desc d-sm-flex">
                          <div className="wideget-user-img">
                            <img
                              className="profile-ratio profile-100 shadow-sm"
                              src={
                                property?.property_logo?.[0]
                                  ? `${import.meta.env.VITE_MEDIA_URL}/${
                                      property?.property_logo?.[0]
                                    }`
                                  : ALLImages("face8")
                              }
                              alt="img"
                            />
                          </div>
                          <div className="user-wrap mt-auto">
                            <h4>{property?.property_name}</h4>
                            <h6 className="text-muted mb-3">
                              {getCategoryToRelatedId(property?.category)}
                            </h6>
                            <Button className="mt-1 mb-1 me-1">
                              <i className="fe fe-heart"></i> Follow
                            </Button>
                            <a
                              href={`mailto:yogprerna@gmail.com`}
                              className="btn btn-secondary mt-1 mb-1"
                            >
                              <i className="fe fe-mail"></i> E-mail
                            </a>
                          </div>
                        </div>
                      </Col>
                      <Col lg={12} md={12} xl={6}>
                        <div className="text-xl-right mt-4 mt-xl-0">
                          <div>
                            {/* <Button variant="danger">
                              <i className="fe fe-trash-2 me-1"></i>Delete
                              Property
                            </Button> */}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
                {authUser?.role !== "Property Manager" && (
                  <Card.Footer>
                    <Nav
                      variant="pills"
                      className="tab-style-2 nav-style-2 nav-pills"
                    >
                      <Swiper
                        modules={[Navigation, Pagination]}
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={2}
                        breakpoints={{
                          640: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                          },
                          768: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                          1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                          1280: {
                            slidesPerView: 7,
                            spaceBetween: 25,
                          },
                        }}
                      >
                        {(getCategoryToRelatedId(property?.category) ===
                        "Online Yoga Studio"
                          ? tabsData.filter((tab) => tab.online === true)
                          : tabsData
                        ).map((tab, index) => (
                          <SwiperSlide>
                            <Nav.Item key={index}>
                              {tab.key ? (
                                <Nav.Link
                                  className="text-nowrap text-center p-2"
                                  eventKey={tab.key}
                                  onClick={() => handleTabChange(tab.key)}
                                >
                                  <i
                                    className={`${tab.icon} me-1 align-middle text-center`}
                                  ></i>
                                  {tab.label}
                                </Nav.Link>
                              ) : (
                                <Nav.Item className="mt-2">
                                  <Nav.Link
                                    as={Link}
                                    to={tab?.link}
                                    className="text-nowrap text-center p-2"
                                  >
                                    <i
                                      className={`${tab.icon} me-1 align-middle text-center`}
                                    ></i>
                                    {tab?.label}
                                  </Nav.Link>
                                </Nav.Item>
                              )}
                            </Nav.Item>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="w-100 d-flex justify-content-center gap-1">
                        <button
                          className="btn btn-sm btn-light"
                          onClick={() => swiperRef.current?.swiper.slidePrev()}
                        >
                          <i className="fe fe-chevron-left"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-light"
                          onClick={() => swiperRef.current?.swiper.slideNext()}
                        >
                          <i className="fe fe-chevron-right"></i>
                        </button>
                      </div>
                    </Nav>
                  </Card.Footer>
                )}
              </Card>
              <Row>
                <Col>
                  <Tab.Content className="mb-3">
                    {tabsData.map((tab) => (
                      <Tab.Pane
                        eventKey={tab.key}
                        key={tab.key}
                        className="p-0 border-0"
                      >
                        {tab.component}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          ) : (
            <ViewProfileSkeleton />
          )}
        </Col>
      </Row>
    </div>
  );
}
