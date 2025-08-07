import React, { useCallback, useEffect, useState } from "react";
import AddTeam from "./AddTeam";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import { Card, Col, Row, Button } from "react-bootstrap";
import ALLImages from "../../../../common/Imagesdata";
import Swal from "sweetalert2";
import EditTeam from "./EditTeam";

export default function Team() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [team, setTeam] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState("");

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [objectId]);

  const getTeam = useCallback(async () => {
    try {
      if (property) {
        const response = await API.get(`/team/property/${property?.uniqueId}`);
        setTeam(response.data);
      }
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, [property]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  useEffect(() => {
    getTeam();
  }, [getTeam]);

  const handleDelete = async (teamId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This team will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await API.delete(`/team/${teamId}`);
          getTeam();
          Swal.fire({
            title: "Deleted!",
            text: response.data.message || "team has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: error.response.data.error || "Something went wrong.",
            icon: "error",
          });
        }
      }
    });
  };

  const capitalize = (str) =>
    str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();

  return (
    <div>
      {!isAdding ? (
        !isUpdating ? (
          <Row>
            <Col>
              <Card>
                <Card.Header className="d-flex justify-content-between">
                  <Card.Title className="mb-0">View Team</Card.Title>
                  <Button className="btn-sm" onClick={() => setIsAdding(true)}>
                    <i className="fe fe-plus me-1"></i>Add Team
                  </Button>
                </Card.Header>
                <Card.Body>
                  {team.length <= 0 ? (
                    <div className="text-center text-muted py-5">
                      <h5>No team found.</h5>
                      <p>Please click "Add Team" to add a new team member.</p>
                    </div>
                  ) : (
                    <Row>
                      {team?.map((team) => (
                        <Col
                          md={6}
                          lg={4}
                          xl={3}
                          key={team._id?.$oid || team._id}
                        >
                          <Card className="overflow-hidden position-relative">
                            <div className="position-relative">
                              <div
                                className={`position-absolute top-0 start-0 m-2 badge z-1 ${
                                  team.status === "Suspended"
                                    ? "bg-danger"
                                    : team.status === "Active"
                                    ? "bg-success"
                                    : "bg-warning"
                                }`}
                              >
                                {team.status}
                              </div>
                              <div>
                                <img
                                  src={
                                    team?.profile?.[0]
                                      ? `${import.meta.env.VITE_MEDIA_URL}/${
                                          team?.profile?.[0]
                                        }`
                                      : ALLImages("face8")
                                  }
                                  alt="Profile"
                                  className="img-fluid w-100 profile-ratio"
                                />
                              </div>
                            </div>

                            <Card.Body className="d-flex flex-column p-3">
                              <div className="d-flex justify-content-between mb-2 text-muted small fw-medium">
                                <span>{team.designation}</span>
                                <span>{team.experience}</span>
                              </div>
                              <h5 className="fw-bold mb-3 text-capitalize">
                                {capitalize(team.name)}
                              </h5>
                              <div className="d-flex justify-content-between mt-auto">
                                <Button
                                  size="sm"
                                  onClick={() => setIsUpdating(team)}
                                >
                                  <i className="fe fe-edit me-1"></i>Edit
                                </Button>
                                <Button
                                  size="sm"
                                  variant="danger"
                                  onClick={() => handleDelete(team._id)}
                                >
                                  <i className="fe fe-trash-2 me-1"></i>Delete
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <EditTeam
            team={isUpdating}
            setIsEditing={setIsUpdating}
            getTeam={getTeam}
          />
        )
      ) : (
        <AddTeam
          property={property}
          setIsAdding={setIsAdding}
          getTeam={getTeam}
        />
      )}
    </div>
  );
}
