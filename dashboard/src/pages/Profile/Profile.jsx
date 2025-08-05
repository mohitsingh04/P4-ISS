import React, { useEffect, useState } from "react";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ALLImages from "../../common/Imagesdata";
import { API } from "../../context/API";
import ViewProfileSkeleton from "../../components/Skeletons/ViewProfileSkeleton";

const Profile = () => {
  const [authUser, setAuthUser] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const navigator = useNavigate();
  const getAuthUser = async () => {
    try {
      setAuthLoading(true);
      const response = await API.get("/profile");
      setAuthUser(response.data);
      setAuthLoading(false);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  };

  useEffect(() => {
    getAuthUser();
  }, []);
  return (
    <div>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div className="">
          <h1 className="page-title fw-semibold fs-20 mb-0">Profile</h1>
          <div className="">
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard" }}>
                Dashboard
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Profile</Breadcrumb.Item>
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
          {!authLoading ? (
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
                                authUser?.profile?.[0]
                                  ? authUser?.isGoogleLogin
                                    ? authUser?.profile?.[0]
                                    : `${import.meta.env.VITE_MEDIA_URL}/user/${
                                        authUser?.profile?.[0]
                                      }`
                                  : ALLImages("face8")
                              }
                              alt="img"
                            />
                          </div>
                          <div className="user-wrap mt-auto">
                            <h4>{authUser?.name}</h4>
                            <h6 className="text-muted mb-3">
                              {authUser?.role}
                            </h6>
                            <button className="btn btn-primary mt-1 mb-1 me-1">
                              <i className="fe fe-heart"></i> Follow
                            </button>
                            <a
                              href={`to:${authUser?.email}`}
                              className="btn btn-secondary mt-1 mb-1"
                            >
                              <i className="fe fe-mail"></i> E-mail
                            </a>
                          </div>
                        </div>
                      </Col>
                      <Col lg={12} md={12} xl={6}>
                        <div className="text-xl-right mt-4 mt-xl-0 d-flex justify-content-end">
                          <div>
                            <Link
                              to={`/dashboard/profile/${authUser?._id}`}
                              className="btn btn-primary me-1"
                            >
                              <i className="fe fe-edit"></i> Edit Profile
                            </Link>
                          </div>
                          <div>
                            <Link
                              to={`/forgot-password`}
                              className="btn btn-success me-1"
                            >
                              <i className="fe fe-lock me-1"></i>Create password
                            </Link>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div
                            className={`main-profile-contact-list float-lg-end d-lg-flex`}
                          >
                            <div className="me-5">
                              <div className="media">
                                <div className="media-icon bg-primary  me-3 mt-1">
                                  <i className="fe fe-file-plus fs-20"></i>
                                </div>
                                <div className="media-body">
                                  <span className="text-muted">Posts</span>
                                  <div className="fw-semibold fs-25">328</div>
                                </div>
                              </div>
                            </div>
                            <div className="me-5 mt-5 mt-md-0">
                              <div className="media">
                                <div className="media-icon bg-success me-3 mt-1">
                                  <i className="fe fe-users  fs-20"></i>
                                </div>
                                <div className="media-body">
                                  <span className="text-muted">Followers</span>
                                  <div className="fw-semibold fs-25">937k</div>
                                </div>
                              </div>
                            </div>
                            <div className="me-0 mt-5 mt-md-0">
                              <div className="media">
                                <div className="media-icon bg-orange me-3 mt-1">
                                  <i className="fe fe-wifi fs-20"></i>
                                </div>
                                <div className="media-body">
                                  <span className="text-muted">Following</span>
                                  <div className="fw-semibold fs-25">2,876</div>
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
                              {authUser?.name || "Full Name"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Email :</strong>{" "}
                              {authUser?.email || "acb@expample.com"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Contact :</strong>{" "}
                              {authUser?.mobile_no || "0123456789"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Country :</strong>{" "}
                              {authUser?.country || "Country"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Pincode :</strong>{" "}
                              {authUser?.pincode || "0123456789"}
                            </td>
                          </tr>
                        </tbody>
                        <tbody className="col-lg-12 col-xl-6 p-0">
                          {authUser?.address && (
                            <tr>
                              <td>
                                <strong>Address :</strong>{" "}
                                {authUser?.address || "Your Address"}
                              </td>
                            </tr>
                          )}
                          {authUser?.city && (
                            <tr>
                              <td>
                                <strong>City :</strong>{" "}
                                {authUser?.city || "Your City"}
                              </td>
                            </tr>
                          )}
                          {authUser?.state && (
                            <tr>
                              <td>
                                <strong>State :</strong>{" "}
                                {authUser?.state || "Your State"}
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
};

export default Profile;
