
import React from "react";
import { ProgressBar, Row, Col, Card } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";

const Services = () => {
  return (
    <div>
      <Pageheader homepage='Services' activepage='Pages' page='Services' />
      <Row>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card className="service">
            <Card.Body>
              <div className="item-box text-center">
                <div className=" text-center  mb-1 text-primary"><i className="ri-group-line"></i></div>
                <div className="item-box-wrap">
                  <h5 className="mb-2">Creative solutions</h5>
                  <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card className="service">
            <Card.Body>
              <div className="item-box text-center">
                <div className=" text-center text-danger mb-1 "><i className="ri-timer-2-line"></i></div>
                <div className="item-box-wrap">
                  <h5 className="mb-2">Trace your time</h5>
                  <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card className="service">
            <Card.Body>
              <div className="item-box text-center">
                <div className=" text-center text-success mb-1 "><i className="ri-building-4-line"></i></div>
                <div className="item-box-wrap">
                  <h5 className="mb-2">Business FrameWork</h5>
                  <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3}>
          <Card className="service">
            <Card.Body>
              <div className="item-box text-center">
                <div className="text-center text-warning mb-1 "><i className="ri-share-forward-line"></i></div>
                <div className="item-box-wrap">
                  <h5 className="mb-2">Shares</h5>
                  <p className="text-muted mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={2} lg={3} className="feature">
                  <div className="fa-stack fa-lg fa-1x border btn-primary mb-3">
                    <i className="ri-earth-fill fa-stack-1x fs-20"></i>
                  </div>
                </Col>
                <Col xl={10} lg={9}>
                  <div className="mt-1">
                    <h6 className="fw-semibold">Web design</h6>
                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                      making it look like readable English.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={2} lg={3} className="feature">
                  <div className="fa-stack fa-lg fa-1x border bg-warning mb-3">
                    <i className="ri-building-4-line fa-stack-1x fs-20"></i>
                  </div>
                </Col>
                <Col xl={10} lg={9}>
                  <div className="mt-1">
                    <h6 className="fw-semibold">Web Development</h6>
                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                      making it look like readable English.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={2} lg={3} className="feature">
                  <div className="fa-stack fa-lg fa-1x border bg-pink mb-3">
                    <i className="ri-file-word-line fa-stack-1x fs-20"></i>
                  </div>
                </Col>
                <Col xl={10} lg={9}>
                  <div className="mt-1">
                    <h6 className="fw-semibold">Wordpress</h6>
                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                      making it look like readable English.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={2} lg={3} className="feature">
                  <div className="fa-stack fa-lg fa-1x border bg-danger mb-3">
                    <i className="ri-camera-fill fa-stack-1x fs-20"></i>
                  </div>
                </Col>
                <Col xl={10} lg={9}>
                  <div className="mt-1">
                    <h6 className="fw-semibold">photography</h6>
                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                      making it look like readable English.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={2} lg={3} className="feature">
                  <div className="fa-stack fa-lg fa-1x border bg-purple mb-3">
                    <i className="ri-edit-box-line  fa-stack-1x fs-20"></i>
                  </div>
                </Col>
                <Col xl={10} lg={9}>
                  <div className="mt-1">
                    <h6 className="fw-semibold">Development</h6>
                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                      making it look like readable English.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={2} lg={3} className="feature">
                  <div className="fa-stack fa-lg fa-1x border bg-success mb-3">
                    <i className="ri-firefox-fill fa-stack-1x fs-20"></i>
                  </div>
                </Col>
                <Col xl={10} lg={9}>
                  <div className="mt-1">
                    <h6 className="fw-semibold">Android</h6>
                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                      making it look like readable English.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Header>
              <h3 className="card-title">Our services</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                <Row className="mt-3">
                  <Col md={6}>
                    <label>Web Design</label>
                    <div className="progress progress-md mb-3">
                      <div className="progress-bar  bg-primary w-50">50%</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Web Development</label>
                    <div className="progress progress-md mb-3">
                      <div className="progress-bar bg-warning w-70">70%</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Wordpress</label>
                    <div className="progress progress-md mb-3">
                      <div className="progress-bar  bg-pink w-80">80%</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Photography</label>
                    <div className="progress progress-md mb-3">
                      <div className="progress-bar bg-danger w-75">75%</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Development</label>
                    <div className="progress progress-md mb-3 mb-md-0">
                      <div className="progress-bar bg-purple w-65">65%</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <label>Android</label>
                    <div className="progress progress-md mb-0">
                      <div className="progress-bar bg-success w-70">69%</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Services;