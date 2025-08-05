import { useCallback, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../context/API";

export default function EventView() {
  const navigator = useNavigate();
  const { objectId } = useParams();
  const [event, setEvent] = useState("");
  const [yogaTypes, setYogaTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const getAuthUser = async () => {
    setAuthLoading(true);
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          error.message
      );
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  if (!authLoading) {
    if (!authUser?.permissions?.some((item) => item === "Read Event")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getCategoies = useCallback(async () => {
    try {
      const response = await API.get(`/category`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getCategoies();
  }, [getCategoies]);

  const getCategoryById = (id) => {
    const category = categories.find((item) => item.uniqueId === id);
    return category?.category_name;
  };

  const getYogaTypes = useCallback(async () => {
    try {
      const response = await API.get(`/yoga-types`);
      setYogaTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getYogaTypes();
  }, [getYogaTypes]);

  const getYogaTypeById = (id) => {
    const type = yogaTypes.find((item) => item.uniqueId === id);
    return type?.yoga_type;
  };

  const getEvent = useCallback(async () => {
    try {
      const response = await API.get(`/event/${objectId}`);
      setEvent(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [objectId]);

  useEffect(() => {
    getEvent();
  }, [getEvent]);

  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">Events</h1>
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>Events</Breadcrumb.Item>
            <Breadcrumb.Item active>{event?.event_title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Button variant="primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </Button>
        </div>
      </div>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>{event?.event_title || "Event View"}</Card.Title>
            </Card.Header>
            <Card.Body>
              {event?.featured_image?.[0] && (
                <Card.Img
                  variant="top"
                  src={`${import.meta.env.VITE_MEDIA_URL}/events/${
                    event.featured_image[0]
                  }`}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              )}
              {event ? (
                <>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event.event_description,
                    }}
                  ></p>
                  <Table bordered responsive className="mt-4">
                    <tbody>
                      <tr>
                        <th>Event Start</th>
                        <td>
                          {new Date(
                            event.event_start_date
                          ).toLocaleDateString()}
                        </td>
                      </tr>
                      <tr>
                        <th>Event End</th>
                        <td>
                          {new Date(event.event_end_date).toLocaleDateString()}
                        </td>
                      </tr>
                      <tr>
                        <th>Visibility Start</th>
                        <td>
                          {new Date(
                            event.visibility_start_date
                          ).toLocaleDateString()}
                        </td>
                      </tr>
                      <tr>
                        <th>Visibility End</th>
                        <td>
                          {new Date(
                            event.visibility_end_date
                          ).toLocaleDateString()}
                        </td>
                      </tr>
                      <tr>
                        <th>Difficulty</th>
                        <td>{getCategoryById(event.event_difficulty_level)}</td>
                      </tr>
                      <tr>
                        <th>Duration</th>
                        <td>{event.duration}</td>
                      </tr>
                      <tr>
                        <th>Yoga Type</th>
                        <td>{getYogaTypeById(event.yoga_type)}</td>
                      </tr>
                      <tr>
                        <th>Entrance</th>
                        <td>{event.entrance_type}</td>
                      </tr>
                      {event.prices && (
                        <tr>
                          <th>Prices</th>
                          <td>
                            {Object.entries(event.prices).map(
                              ([currency, value]) => (
                                <div key={currency}>
                                  <strong>{currency}:</strong> {value}
                                </div>
                              )
                            )}
                          </td>
                        </tr>
                      )}
                      <tr>
                        <th>Status</th>
                        <td>{event.status}</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>{event.address}</td>
                      </tr>
                    </tbody>
                  </Table>
                </>
              ) : (
                <p>Loading event details...</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
