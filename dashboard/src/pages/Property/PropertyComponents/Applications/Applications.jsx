import React, { useCallback, useEffect, useState } from "react";
import { API } from "../../../../context/API";
import { useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

export default function Applications() {
  const { objectId } = useParams();
  const [applications, setApplication] = useState([]);
  const [property, setProperty] = useState("");
  const [allUser, setAllUser] = useState([]);
  const [allHiring, setAllHiring] = useState([]);
  const [allResume, setAllResume] = useState([]);

  const getAllResume = useCallback(async () => {
    try {
      const response = await API.get(`/profile/doc/resume`);
      setAllResume(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllResume();
  }, [getAllResume]);

  const getAllHirings = useCallback(async () => {
    if (property) {
      try {
        const response = await API.get(`/hiring/${property?.uniqueId}`);
        setAllHiring(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [property]);

  useEffect(() => {
    getAllHirings();
  }, [getAllHirings]);

  const getAllUsers = useCallback(async () => {
    try {
      const response = await API.get(`/profile/users`);
      setAllUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const getUserDetail = (id) => {
    const user = allUser?.find((item) => item.uniqueId === id);
    return user;
  };
  const getHiringDetail = (id) => {
    const hiring = allHiring?.find((item) => item.uniqueId === id);
    return hiring;
  };
  const getResumeDetail = (id) => {
    const resume = allResume?.find((item) => item.userId === id);
    return resume;
  };

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [objectId]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  const getApplication = useCallback(async () => {
    if (property) {
      try {
        const response = await API.get(
          `/apply/applications/${property?.uniqueId}`
        );
        setApplication(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [property]);

  useEffect(() => {
    getApplication();
  }, [getApplication]);

  return (
    <div>
      {applications?.length > 0 ? (
        applications.map((item, index) => (
          <Row key={index} className="mb-3">
            <Col md={12}>
              <Card>
                <Card.Header>
                  <Card.Title>
                    {getHiringDetail(item?.hiringId)?.title}
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <h5>
                        <strong>Name:</strong>{" "}
                        {getUserDetail(item?.userId)?.name}
                      </h5>
                      <p>
                        <strong>Email:</strong>{" "}
                        {getUserDetail(item?.userId)?.email}
                      </p>
                      <p>
                        <strong>Mobile No:</strong>{" "}
                        {getUserDetail(item?.userId)?.mobile_no}
                      </p>
                    </Col>
                    <Col
                      md={4}
                      className="d-flex align-items-center justify-content-end"
                    >
                      <a
                        href={`${import.meta.env?.VITE_MEDIA_URL}${
                          getResumeDetail(item?.userId)?.resume
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        View CV
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))
      ) : (
        <Row className="mt-4">
          <Col md={12}>
            <Card className="text-center">
              <Card.Body>
                <h5 className="mb-0 text-muted">No applications yet.</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}
