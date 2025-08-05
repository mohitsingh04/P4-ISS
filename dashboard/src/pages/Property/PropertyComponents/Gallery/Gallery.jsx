import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../../context/API";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import AddGallery from "./AddGallery";
import AddImagesInGallery from "./AddImagesInGallery";
import RemoveGallery from "./RemoveGallery";
import Swal from "sweetalert2";

export default function Gallery() {
  const { objectId } = useParams();
  const [property, setProperty] = useState("");
  const [authUser, setAuthUser] = useState("");
  const [galleries, setGalleries] = useState([]);
  const [isAdding, setIsAdding] = useState("");
  const [removing, setRemoving] = useState("");
  const [isEditTitle, setIsEditTitle] = useState("");
  const [title, setTitle] = useState("");
  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0,
    slides: [],
  });

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

  const getGalleries = useCallback(async () => {
    try {
      if (property?.uniqueId) {
        const response = await API.get(
          `/property/gallery/${property.uniqueId}`
        );
        setGalleries(response.data);
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
    getAuthUser();
  }, []);

  useEffect(() => {
    if (property) {
      getGalleries();
    }
  }, [property, getGalleries]);

  const openLightbox = (index, slides) => {
    setLightbox({ open: true, index, slides });
  };

  const deleteGallery = async (uniqueId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This gallery will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await API.delete(`/gallery/${uniqueId}`);
        Swal.fire({
          title: "Deleted!",
          text: response.data.message || "Gallery has been deleted.",
          icon: "success",
        });
        getGalleries();
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error",
          text:
            error.response.data.error || "Something went wrong while deleting.",
          icon: "error",
        });
      }
    }
  };

  useEffect(() => {
    setTitle(isEditTitle?.title);
  }, [isEditTitle]);

  const handleChangeTitle = async () => {
    try {
      const payload = { title: title, uniqueId: isEditTitle.uniqueId };
      const response = await API.patch(`/gallery/update/title`, payload);
      Swal.fire({
        icon: "success",
        title: "Successfull",
        text: response.data.message,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error.response.data.error,
      });
    } finally {
      setIsEditTitle("");
      setTitle("");
      getGalleries();
    }
  };

  return (
    <>
      {!isAdding ? (
        !removing ? (
          <div>
            {galleries.length > 0 ? (
              galleries.map((galleryItem, gIndex) => {
                const webpImages = galleryItem.gallery.filter((img) =>
                  img.toLowerCase().endsWith(".webp")
                );
                const slides = webpImages.map((img) => ({
                  src: `${import.meta.env.VITE_MEDIA_URL}/${img}`,
                }));

                return (
                  <Card key={gIndex} className="mb-4">
                    <Card.Header className="d-flex justify-content-between">
                      <Card.Title className="mb-0">
                        {isEditTitle.uniqueId === galleryItem.uniqueId ? (
                          <InputGroup>
                            <Form.Control
                              type="text"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              className="form-control"
                              placeholder="Enter the Title"
                            />
                            <Button onClick={handleChangeTitle}>
                              <i className="fe fe-check-circle"></i>
                            </Button>
                          </InputGroup>
                        ) : (
                          <>
                            {galleryItem.title}
                            <button
                              className="btn p-0"
                              onClick={() => setIsEditTitle(galleryItem)}
                            >
                              <i className="fe fe-edit text-primary"></i>
                            </button>
                          </>
                        )}
                      </Card.Title>
                      <div>
                        {galleryItem?.gallery?.length < 16 && (
                          <Button
                            size="sm"
                            onClick={() => setIsAdding(galleryItem)}
                          >
                            <i className="fe fe-plus me-1"></i>Add Images
                          </Button>
                        )}
                        <Button
                          variant="secondary"
                          onClick={() => setRemoving(galleryItem)}
                          size="sm"
                          className="ms-1"
                        >
                          <i className="fe fe-x me-1"></i>Remove Images
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          className="ms-1"
                          onClick={() => deleteGallery(galleryItem.uniqueId)}
                        >
                          <i className="fe fe-trash-2 me-1"></i>Delete Gallery
                        </Button>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Row className="g-3">
                        {webpImages.map((img, index) => (
                          <Col key={index} md={3} sm={6} xs={12}>
                            <img
                              src={`${import.meta.env.VITE_MEDIA_URL}/${img}`}
                              className="img-fluid profile-ratio w-100 rounded shadow-sm"
                              alt={`gallery-${gIndex}-img-${index}`}
                              onClick={() => openLightbox(index, slides)}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <Card>
                <Card.Body>No gallery found.</Card.Body>
              </Card>
            )}

            <Lightbox
              open={lightbox.open}
              close={() => setLightbox({ ...lightbox, open: false })}
              index={lightbox.index}
              slides={lightbox.slides}
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
              zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }}
            />

            <AddGallery
              authUser={authUser}
              property={property}
              getGallery={getGalleries}
            />
          </div>
        ) : (
          <RemoveGallery
            galleryData={removing}
            setRemoving={setRemoving}
            property={property}
            getGallery={getGalleries}
          />
        )
      ) : (
        <AddImagesInGallery
          gallery={isAdding}
          setAddingMore={setIsAdding}
          refreshGallery={getGalleries}
        />
      )}
    </>
  );
}
