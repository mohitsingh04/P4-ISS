import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import { Button, Card, Col, Row } from "react-bootstrap";

import Lightbox from "yet-another-react-lightbox";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import AddCertifications from "./AddCertifications";
import AddNewCertifications from "./AddNewCertifications";
import RemoveCertifications from "./RemoveCertifications";

export default function Certifications() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [authUser, setAuthUser] = useState("");
  const [certifications, setCertifications] = useState("");
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [addingMore, setAddingMore] = useState(false);
  const [removing, setRemoving] = useState(false);

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

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  const getCertifications = useCallback(async () => {
    try {
      if (property) {
        const response = await API.get(`/certifications/${property?.uniqueId}`);
        setCertifications(response.data);
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
    getCertifications();
  }, [getCertifications]);

  const getAuthUser = async () => {
    try {
      const response = await API.get(`/profile`);
      setAuthUser(response.data);
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

  const filteredImages =
    certifications?.certifications?.filter((img) =>
      img.toLowerCase().endsWith(".webp")
    ) || [];

  const slides = filteredImages.map((img) => ({
    src: `${import.meta.env.VITE_MEDIA_URL}${img}`,
  }));

  return (
    <div>
      {certifications ? (
        !addingMore ? (
          !removing ? (
            <Row>
              <Col>
                <Card>
                  <Card.Header className="d-flex justify-content-between">
                    <Card.Title className="mb-0">View Certificaions</Card.Title>
                    <div>
                      {filteredImages.length < 8 && (
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => setAddingMore(true)}
                        >
                          <i className="ri-trophy-line me-1"></i>Add
                          Certifications
                        </Button>
                      )}
                      {filteredImages.length > 0 && (
                        <Button
                          size="sm"
                          variant="danger"
                          className="ms-1"
                          onClick={() => setRemoving(true)}
                        >
                          <i className="fe fe-award me-1"></i>Remove
                          Certifications
                        </Button>
                      )}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    {filteredImages.length > 0 ? (
                      <Row className="g-3">
                        {filteredImages.map((certifications, index) => (
                          <Col key={index} md={3} sm={6} xs={12}>
                            <img
                              src={`${
                                import.meta.env.VITE_MEDIA_URL
                              }${certifications}`}
                              className="img-fluid profile-ratio w-100 rounded shadow-sm"
                              alt={`certifications-${index}`}
                              onClick={() => {
                                setLightboxIndex(index);
                                setOpenLightbox(true);
                              }}
                            />
                          </Col>
                        ))}
                      </Row>
                    ) : (
                      "No Certification Available"
                    )}

                    <Lightbox
                      open={openLightbox}
                      close={() => setOpenLightbox(false)}
                      index={lightboxIndex}
                      slides={slides}
                      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                      zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ) : (
            <RemoveCertifications
              certifications={certifications}
              getCertifications={getCertifications}
              property={property}
              setRemoving={setRemoving}
            />
          )
        ) : (
          <AddNewCertifications
            property={property}
            setAddingMore={setAddingMore}
            getCertifications={getCertifications}
          />
        )
      ) : (
        <AddCertifications
          property={property}
          authUser={authUser}
          getCertifications={getCertifications}
        />
      )}
    </div>
  );
}
