import React, { useCallback, useEffect, useState } from "react";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import ALLImages from "../../common/Imagesdata";
import { API } from "../../context/API";
import ViewProfileSkeleton from "../../components/Skeletons/ViewProfileSkeleton";

export default function ViewUser() {
  const navigator = useNavigate();
  const { objectId } = useParams();
  const [user, setUser] = useState("");
  const [userLoading, setUserLoading] = useState(true);
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  const getAuhtUser = async () => {
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
  };

  useEffect(() => {
    getAuhtUser();
  }, []);

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get("/property");
      const data = response.data;

      const filteredData = data.filter(
        (item) => item?.userId === user?.uniqueId
      );
      setProperties(filteredData);
    } catch (error) {
      console.error("Error fetching Property:", error);
    }
  }, [user]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  if (!authLoading) {
    if (!authUser?.permissions?.some((item) => item === "Read User")) {
      navigator("/dashboard/access-denied");
    }
  }

  const getUser = async () => {
    try {
      setUserLoading(true);
      const response = await API.get(`/user/${objectId}`);
      setUser(response.data);
      setUserLoading(false);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <h1 className="page-title fw-semibold fs-20 mb-0">User</h1>
          <div>
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
                Dashboard
              </Breadcrumb.Item>
              <Breadcrumb.Item
                linkAs={Link}
                linkProps={{ to: "/dashboard/user" }}
              >
                User
              </Breadcrumb.Item>
              <Breadcrumb.Item>View</Breadcrumb.Item>
              <Breadcrumb.Item active>{user?.name}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="ms-auto pageheader-btn">
          <button className="btn btn-primary" onClick={() => navigator(-1)}>
            <i className="fe fe-arrow-left"></i> Back
          </button>
        </div>
      </div>
      <Row id="user-profile">
        <Col lg={12}>
          {!userLoading ? (
            <>
              <Card className="custom-card">
                <Card.Body>
                  <div className="wideget-user">
                    <Row>
                      <Col lg={12} md={12} xl={6}>
                        <div className="wideget-user-desc d-sm-flex">
                          <div className="wideget-user-img">
                            <img
                              className="profile-ratio profile-100"
                              src={
                                user?.profile?.[0]
                                  ? user?.isGoogleLogin
                                    ? user?.profile?.[0]
                                    : `${import.meta.env.VITE_MEDIA_URL}/user/${
                                        user?.profile?.[0]
                                      }`
                                  : ALLImages("face8")
                              }
                              alt="img"
                            />
                          </div>
                          <div className="user-wrap mt-auto">
                            <h4>{user?.name}</h4>
                            <h6 className="text-muted mb-3">{user?.role}</h6>
                            <button className="btn btn-primary mt-1 mb-1 me-1">
                              <i className="fe fe-heart me-1"></i> Follow
                            </button>
                            <a
                              href={`to:${user?.email}`}
                              className="btn btn-secondary mt-1 mb-1"
                            >
                              <i className="fe fe-mail me-1"></i>
                              E-mail
                            </a>
                          </div>
                        </div>
                      </Col>
                      <Col lg={12} md={12} xl={6}>
                        <div className="text-xl-right mt-4 mt-xl-0">
                          <div>
                            {!authLoading &&
                              authUser?.permissions?.some(
                                (item) => item === "Update User"
                              ) && (
                                <Link
                                  to={`/dashboard/user/edit/${user?._id}`}
                                  className="btn btn-primary me-1"
                                >
                                  <i className="fe fe-edit"></i> Edit User
                                </Link>
                              )}
                          </div>
                        </div>
                        <div className="mt-4">
                          <div
                            className={`main-profile-contact-list float-lg-end d-lg-flex`}
                          >
                            <div className="me-5">
                              <div className="media">
                                <div className="media-icon bg-primary  me-3 mt-1">
                                  <i className="fe fe-layers fs-20"></i>
                                </div>
                                <div className="media-body">
                                  <span className="text-muted">Properties</span>
                                  <div className="fw-semibold fs-25">
                                    {properties?.length}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
              <div id="profile-log-switch">
                <Card className="custom-card">
                  <Card.Body>
                    <div className="media-heading">
                      <h5>
                        <strong>Personal Information</strong>
                      </h5>
                    </div>
                    <div className="table-responsive ">
                      <table className="table row table-borderless">
                        <tbody className="col-lg-12 col-xl-6 p-0">
                          <tr>
                            <td>
                              <strong>Full Name :</strong>{" "}
                              {user?.name || "Full Name"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Email :</strong>{" "}
                              {user?.email || "acb@expample.com"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Contact :</strong>{" "}
                              {user?.mobile_no || "0123456789"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Pincode :</strong>{" "}
                              {user?.pincode || "0123456789"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Verified :</strong>{" "}
                              <p
                                className={`badge ${
                                  user?.verified ? "bg-success" : "bg-danger"
                                }`}
                              >
                                {user?.verified ? "Verified" : "Unverified"}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                        <tbody className="col-lg-12 col-xl-6 p-0">
                          {user?.address && (
                            <tr>
                              <td>
                                <strong>Address :</strong>{" "}
                                {user?.address || "Your Address"}
                              </td>
                            </tr>
                          )}
                          {user?.city && (
                            <tr>
                              <td>
                                <strong>City :</strong>{" "}
                                {user?.city || "Your City"}
                              </td>
                            </tr>
                          )}
                          {user?.state && (
                            <tr>
                              <td>
                                <strong>State :</strong>{" "}
                                {user?.state || "Your State"}
                              </td>
                            </tr>
                          )}
                          {user?.status && (
                            <tr>
                              <td>
                                <strong>Status :</strong>{" "}
                                <p
                                  className={`badge ${
                                    user?.status === "Active"
                                      ? "bg-success"
                                      : user?.status === "Suspended"
                                      ? "bg-danger"
                                      : "bg-warning"
                                  }`}
                                >
                                  {user?.status || "Status"}
                                </p>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </>
          ) : (
            <ViewProfileSkeleton />
          )}
        </Col>
      </Row>
    </div>
  );
}
