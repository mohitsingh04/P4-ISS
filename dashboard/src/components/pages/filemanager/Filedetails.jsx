import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card } from "react-bootstrap";
import "yet-another-react-lightbox/styles.css";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import ALLImages from "../../../common/Imagesdata";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

const Filedetails = () => {

  const imageIds = ['file1', 'file2', 'file3', 'file4', 'file5', 'file6'];


  return (
    <Fragment>

      <Pageheader homepage='File Details' activepage='Filemanager' page='File Details' />

      <Row className="row-sm">
        <Col xl={8} lg={12} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className="p-3">
              <Link to="#"><img src={ALLImages('file8')} alt="img" className="br-5 w-100" /></Link>
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <h5 className="mb-3">Recent Files</h5>
              <div className="swiper-overflow">
                <Swiper effect={'coverflow'}
                  grabCursor={true}
                  slidesPerView={4}
                  autoplay={{ delay: 2500, disableOnInteraction: false, }}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true }}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper swiper swiper-overflow">
                  <SwiperSlide><img className="img-fluid" src={ALLImages("media5")} alt="img" /></SwiperSlide>
                  <SwiperSlide><img className="img-fluid" src={ALLImages("media1")} alt="img" /></SwiperSlide>
                  <SwiperSlide><img className="img-fluid" src={ALLImages("media2")} alt="img" /></SwiperSlide>
                  <SwiperSlide><img className="img-fluid" src={ALLImages("media3")} alt="img" /></SwiperSlide>
                  <SwiperSlide><img className="img-fluid" src={ALLImages("media4")} alt="img" /></SwiperSlide>
                  <SwiperSlide><img className="img-fluid" src={ALLImages("media9")} alt="img" /></SwiperSlide>
                  <SwiperSlide><img className="img-fluid" src={ALLImages("media6")} alt="img" /></SwiperSlide>
                  <SwiperSlide><img className="img-fluid" src={ALLImages("media1")} alt="img" /></SwiperSlide>
                </Swiper>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <h5 className="mb-3">File details</h5>
              <div className="">
                <Row>
                  <Col xl={12}>
                    <div className="table-responsive">
                      <table className="table mb-0 table-bordered text-nowrap border-bottom">
                        <tbody>
                          <tr>
                            <th>File Name</th>
                            <td>image.jpg</td>
                          </tr>
                          <tr>
                            <th>Uploaded</th>
                            <td>10-10-2021</td>
                          </tr>
                          <tr>
                            <th>Size</th>
                            <td>25 MB</td>
                          </tr>
                          <tr>
                            <th>Dimensions</th>
                            <td>1000 x 350</td>
                          </tr>
                          <tr>
                            <th>Resolution Unit</th>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th>File Type</th>
                            <td>jpg</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-5 text-center">
                      <button type="button" className="btn btn-icon  btn-info-light me-2 bradius"><i className="fe fe-edit"></i></button>
                      <button type="button" className="btn btn-icon  btn-danger-light me-2 bradius"><i className="fe fe-trash"></i></button>
                      <button type="button" className="btn btn-icon  btn-success-light me-2 bradius"><i className="fe fe-download fs-14"></i></button>
                      <button type="button" className="btn btn-icon  btn-warning-light bradius"><i className="fe fe-share-2 fs-14"></i></button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="pb-2">
              <h6 className="mb-3">Recent Files</h6>
              <Row>
                {imageIds.map((imageId, index) => (
                  <Col key={index} xs={4} sm={4} md={4} xl={4} className="border-bottom-0">
                    <Link to={`${import.meta.env.BASE_URL}apps/gallery/`}>
                      <img className="br-5 w-100 mb-3" src={ALLImages(imageId)} alt={`Thumb-${index + 1}`} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Filedetails;