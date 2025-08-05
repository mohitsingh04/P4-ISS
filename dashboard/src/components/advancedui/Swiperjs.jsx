import { Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Scrollbar, Mousewheel, Keyboard, EffectCube, EffectFade, EffectFlip, EffectCoverflow, Thumbs, FreeMode } from 'swiper/modules';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import ALLImages from '../../common/Imagesdata';

const Swiperjs = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span className="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <Fragment>
      <Pageheader homepage='SwiperJS' activepage='Advanced Ui' page='SwiperJS' />

      <Row className="row-sm">
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Basic Swiper
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                modules={[Autoplay]} className="swiper-basic">
                <SwiperSlide><img src={ALLImages("media7")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media6")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media5")} alt="" /></SwiperSlide>
              </Swiper>

            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Swiper With Navigation
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={ALLImages("media9")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media8")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
              </Swiper>

            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Swiper with Pagination
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide><img src={ALLImages("media2")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media1")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Dynamic Pagination
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide><img src={ALLImages("media1")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media7")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media6")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Pagination With Progress
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper pagination={{ type: 'progressbar', }} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                <SwiperSlide><img src={ALLImages("media2")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media8")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media5")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Pagination Fraction
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper pagination={{ type: 'fraction', }} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                modules={[Pagination, Navigation, Autoplay]} className="mySwiper swiper pagination-fraction ">
                <SwiperSlide><img src={ALLImages("media6")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media1")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Custom Paginatioin
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper pagination={pagination} modules={[Pagination, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper swiper custom-pagination">
                <SwiperSlide><img src={ALLImages("media2")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media5")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Scrollbar Swiper
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper scrollbar={{ hide: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Scrollbar, Autoplay]} className="mySwiper swiper scrollbar-swiper">
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media8")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media9")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Vertical Swiper
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper direction={'vertical'} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Pagination, Autoplay]} className="mySwiper swiper vertical swiper-vertical">
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media2")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media1")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Mouse Wheel Control
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                modules={[Mousewheel, Pagination, Autoplay]} className="mySwiper vertical vertical-mouse-control">
                <SwiperSlide><img src={ALLImages("media8")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media2")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Keyboard Control
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper slidesPerView={1} spaceBetween={30} keyboard={{ enabled: true, }} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                navigation={true} modules={[Keyboard, Pagination, Navigation, Autoplay]} className="mySwiper">
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media2")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media8")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Nested Swiper</div>
            </Card.Header>
            <Card.Body>
              <Swiper className="mySwiper swiper-h swiper swiper-horizontal1" spaceBetween={50} pagination={{ clickable: true, }} modules={[Pagination]}>
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
                <SwiperSlide>
                  <Swiper className="mySwiper2 swiper-v swiper vertical swiper-vertical1" direction={'vertical'} spaceBetween={50} pagination={{ clickable: true, }} modules={[Pagination]}>
                    <SwiperSlide><img src={ALLImages("media5")} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ALLImages("media1")} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ALLImages("media2")} alt="" /></SwiperSlide>
                  </Swiper>
                </SwiperSlide>
                <SwiperSlide><img src={ALLImages("media8")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media9")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Effect Cube
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper effect={'cube'} grabCursor={true} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                pagination={true} modules={[EffectCube, Pagination, Autoplay]} className="mySwiper swiper swiper-effect-cube">
                <SwiperSlide><img src={ALLImages("media2")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media4")} alt="" /></SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Effect Fade
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper spaceBetween={30} effect={'fade'} navigation={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]} className="mySwiper swiper swiper-fade">
                <SwiperSlide><img src={ALLImages("media8")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media9")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
              </Swiper>

            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Effect Flip
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                modules={[EffectFlip, Pagination, Navigation, Autoplay]} className="mySwiper">
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media2")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={ALLImages("media3")} alt="" /></SwiperSlide>
              </Swiper>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Effect Coverflow
              </div>
            </Card.Header>
            <Card.Body>
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
                <SwiperSlide><img className="img-fluid" src={ALLImages("media4")} alt="img" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={ALLImages("media1")} alt="img" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={ALLImages("media2")} alt="img" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={ALLImages("media3")} alt="img" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={ALLImages("media5")} alt="img" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={ALLImages("media6")} alt="img" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={ALLImages("media7")} alt="img" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={ALLImages("media8")} alt="img" /></SwiperSlide>
              </Swiper>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col xxl={6}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Thumbs Gallery
              </div>
            </Card.Header>
            <Card.Body>
              <Swiper
                spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper2 swiper swiper-preview" >
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media1")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media2")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media3")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media6")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media7")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media8")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media9")} alt="img" />
                </SwiperSlide>

              </Swiper>
              <Swiper onSwiper={setThumbsSwiper} autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper swiper swiper-view">
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media1")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media2")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media3")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media6")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media7")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media8")} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid rounded" src={ALLImages("media9")} alt="img" />
                </SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Swiperjs;