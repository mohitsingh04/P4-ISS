import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { API } from "../../../../context/API";
import EditHostel from "./EditHostel";
import AddHostel from "./AddHostel";
import AddHostelImages from "./AddHostelImages";

import Lightbox from "yet-another-react-lightbox";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import RemoveHostelImages from "./RemoveHostelImages";
import Swal from "sweetalert2";

export default function Hostel() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [authuser, setAuthUser] = useState("");
  const [hostel, setHostel] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");
  const [isAddingImages, setIsAddingImages] = useState("");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [removing, setRemoving] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxImages, setLightboxImages] = useState([]);

  const getProperty = useCallback(async () => {
    try {
      const response = await API.get(`/property/${objectId}`);
      setProperty(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [objectId]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  const getAuthUser = useCallback(async () => {
    try {
      const response = await API.get("/profile");
      setAuthUser(response.data);
    } catch (error) {
      console.error(
        error.response.data.error ||
          error.response.data.message ||
          error.message
      );
    }
  }, []);

  useEffect(() => {
    getAuthUser();
  }, [getAuthUser]);

  const getHostel = useCallback(async () => {
    try {
      if (property) {
        const response = await API.get(`/hostel/${property?.uniqueId}`);
        setHostel(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  }, [property]);

  useEffect(() => {
    getHostel();
  }, [getHostel]);

  const deleteHostel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the accommodation!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await API.delete(`/hostel/${id}`);

        Swal.fire({
          title: "Deleted!",
          text: response.data.message || "Accommodation has been deleted.",
          icon: "success",
        });
        getHostel();
      } catch (error) {
        console.error("Delete error:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete accommodation.",
          icon: "error",
        });
      }
    }
  };
  return (
    <div>
      {!isUpdating ? (
        !removing ? (
          !isAddingImages ? (
            <Row>
              <Col md={12}>
                {hostel?.map((item, index) => (
                  <Card key={index}>
                    <Card.Header className="d-flex justify-content-between">
                      <Card.Title>{item?.hostel_name}</Card.Title>
                      <div className="d-flex gap-1">
                        {item.hostel_images?.length < 16 && (
                          <Button
                            size="sm"
                            onClick={() => setIsAddingImages(item)}
                          >
                            Add Images
                          </Button>
                        )}
                        {item.hostel_images.length > 0 && (
                          <Button
                            size="sm"
                            variant="danger"
                            className="ms-1"
                            onClick={() => setRemoving(item)}
                          >
                            <i className="fe fe-x me-1"></i>Remove Images
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => setIsUpdating(item)}
                        >
                          Edit Hostel
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => deleteHostel(item._id)}
                        >
                          Delete Hostel
                        </Button>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col>
                          <div className="tags py-2">
                            <div className="tag">
                              <span>₹ {item?.hostel_price}</span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div>
                            <div
                              className="description-text"
                              dangerouslySetInnerHTML={{
                                __html: showFullDescription
                                  ? item?.hostel_description
                                  : item?.hostel_description
                                      ?.split(" ")
                                      .slice(0, 300)
                                      .join(" ") +
                                    (item?.hostel_description?.split(" ")
                                      .length > 300
                                      ? "..."
                                      : ""),
                              }}
                            />
                            {item?.hostel_description?.split(" ").length >
                              300 &&
                              !showFullDescription && (
                                <Button
                                  variant="link"
                                  size="sm"
                                  className="mt-2"
                                  onClick={() => setShowFullDescription(true)}
                                >
                                  Show More
                                </Button>
                              )}
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                    {item?.hostel_images?.length > 0 && (
                      <Card.Footer>
                        <Row>
                          {item.hostel_images
                            .filter((item) => item.endsWith(".webp"))
                            .map((img, index) => (
                              <Col
                                key={index}
                                xs={6}
                                md={3}
                                className="mb-2 position-relative"
                              >
                                <img
                                  src={`${
                                    import.meta.env.VITE_MEDIA_URL
                                  }/${img}`}
                                  alt={`Hostel Image ${index + 1}`}
                                  className="w-100 rounded profile-ratio"
                                  onClick={() => {
                                    setLightboxImages(
                                      item?.hostel_images
                                        ?.filter((item) =>
                                          item.endsWith(".webp")
                                        )
                                        .map((src) => ({
                                          src: `${
                                            import.meta.env.VITE_MEDIA_URL
                                          }/${src}`,
                                        }))
                                    );
                                    setLightboxIndex(index);
                                  }}
                                />
                              </Col>
                            ))}
                          <Lightbox
                            open={lightboxIndex !== null}
                            close={() => setLightboxIndex(null)}
                            index={lightboxIndex}
                            slides={lightboxImages}
                            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                          />
                        </Row>
                      </Card.Footer>
                    )}
                  </Card>
                ))}
              </Col>
            </Row>
          ) : (
            <AddHostelImages
              setAddingImages={setIsAddingImages}
              hostel={isAddingImages}
              getHostel={getHostel}
            />
          )
        ) : (
          <RemoveHostelImages
            hostel={removing}
            setRemoving={setRemoving}
            getHostelData={getHostel}
          />
        )
      ) : (
        <EditHostel
          hostel={isUpdating}
          getHostel={getHostel}
          setIsUpdating={setIsUpdating}
        />
      )}
      {!isUpdating && !removing && !isAddingImages && (
        <AddHostel
          property={property}
          authUser={authuser}
          getHostel={getHostel}
        />
      )}
    </div>
  );
}
