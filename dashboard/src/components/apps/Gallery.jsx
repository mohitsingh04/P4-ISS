import React, { useState } from "react";
import { Row, Col, Card, Pagination, } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";
import { Link } from 'react-router-dom';
import ALLImages from "../../common/Imagesdata";


//lightbox
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const images = Array.from({ length: 8 }, (_, i) => `media${i + 1}`);
  return (
    <div>
      <Pageheader homepage='Gallery' activepage='Apps' page='Gallery' />
      <Card className="demo-gallery custom-card">
        <Card.Header>
          <Card.Title as='h6'>Light Gallery</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row className="list-unstyled lightgallery">
            {images.map((img, index) => (
              <Col key={index} lg={3} md={3} sm={6} className="col-12">
                <Link to="#" onClick={() => setOpen(true)} className="glightbox card">
                  <img src={ALLImages(img)} alt={`image-${index + 1}`} />
                </Link>
              </Col>
            ))}
            {open && (
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }}
                slides={images.map(imageName => ({ src: ALLImages(imageName) }))}
              />
            )}
          </Row>
        </Card.Body>
      </Card>

      <Row className="row mb-5">
        <Col className=" mt-1 d-none d-md-block" md={6}>
          1 - 10 of 234 photos
        </Col>
        <Col md={6}>
          <div className="float-end">
            <Pagination>
              <Pagination.Prev disabled>Prev </Pagination.Prev>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Next>Next </Pagination.Next>
            </Pagination>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Gallery