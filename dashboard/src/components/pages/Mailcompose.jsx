import React, { Fragment } from "react";
import { OverlayTrigger, Tooltip, Breadcrumb, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";

const Mailcompose = () => {
  return (
    <Fragment>
      <Pageheader homepage='Mail Compose' activepage='Pages' page='Mail Compose' />
      <Row>
        <Col lg={4} xl={3} md={12} sm={12}>
          <Card className="custom-card">
            <ListGroup className='list-group-transparent mb-0 mail-inbox pb-3'>
              <div className="mt-4 mb-4 mx-4 text-center">
                <Link to={`${import.meta.env.BASE_URL}pages/mailinbox/`} className="btn btn-primary btn-lg d-grid">Inbox</Link>
              </div>
              <ListGroup.Item className="d-flex align-items-center mx-4" active><span className="icons"><i className="ri-mail-line"></i></span> Inbox <span className="ms-auto badge bg-success">14</span></ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center mx-4"><span className="icons"><i className="ri-mail-open-line"></i></span> Drafts</ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center mx-4"><span className="icons"><i className="ri-star-line"></i></span> Starred <span className="ms-auto badge bg-danger">03</span></ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center mx-4"><span className="icons"><i className="ri-mail-send-line"></i></span> Sent Mail</ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center mx-4"><span className="icons"><i className="ri-price-tag-3-line"></i></span> Tags</ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center mx-4"><span className="icons"><i className="ri-delete-bin-line"></i></span> Trash</ListGroup.Item>
            </ListGroup>
            <Card.Body className="border-top ps-0">
              <ListGroup className="list-group-transparent mb-0 mail-inbox mx-4">
                <ListGroup.Item action className="d-flex align-items-center py-2"><span className="w-3 h-3 rounded-circle bg-primary me-2"></span> Friends</ListGroup.Item>
                <ListGroup.Item action className="d-flex align-items-center py-2"><span className="w-3 h-3 rounded-circle bg-secondary me-2"></span> Family</ListGroup.Item>
                <ListGroup.Item action className="d-flex align-items-center py-2"><span className="w-3 h-3 rounded-circle bg-success me-2"></span> Social</ListGroup.Item>
                <ListGroup.Item action className="d-flex align-items-center py-2"><span className="w-3 h-3 rounded-circle bg-info me-2"></span> Office</ListGroup.Item>
                <ListGroup.Item action className="d-flex align-items-center py-2"><span className="w-3 h-3 rounded-circle bg-warning me-2"></span> Work</ListGroup.Item>
                <ListGroup.Item action className="d-flex align-items-center py-2"><span className="w-3 h-3 rounded-circle bg-danger me-2"></span> Settings</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8} xl={9} md={12} sm={12}>
          <Card className="custom-card">
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Compose new message</h3>
            </Card.Header>
            <Card.Body>
              <form>
                <Form.Group className="mb-3">
                  <Row className="align-items-center">
                    <Form.Label className="col-sm-3 col-xl-2">To</Form.Label>
                    <Col sm={9} xl={10}>
                      <Form.Control type="text" />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row className="align-items-center">
                    <Form.Label className="col-sm-3 col-xl-2 ">Subject</Form.Label>
                    <Col sm={9} xl={10}>
                      <Form.Control type="text" />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Form.Label className="col-sm-3 col-xl-2">Message</Form.Label>
                    <Col sm={9} xl={10}>
                      <Form.Control as='textarea' rows="10"></Form.Control>
                    </Col>
                  </Row>
                </Form.Group>
              </form>
            </Card.Body>
            <div className="card-footer d-sm-flex">
              <div className="my-auto">
                <OverlayTrigger overlay={<Tooltip>Attach</Tooltip>}><Link to="#" className="btn btn-outline-light me-1"><span className="ri-attachment-2 align-bottom"></span></Link></OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Link</Tooltip>}><Link to="#" className="btn btn-outline-light me-1"><span className="ri-link align-bottom"></span></Link></OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Photos</Tooltip>}><Link to="#" className="btn btn-outline-light me-1"><span className="ri-image-line align-bottom"></span></Link></OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Delete</Tooltip>}><Link to="#" className="btn btn-outline-light me-1"><span className="ri-delete-bin-line align-bottom"></span></Link></OverlayTrigger>
              </div>
              <div className="btn-list ms-auto my-1">
                <button className="btn btn-danger btn-space">Cancel</button>
                <button className="btn btn-primary btn-space">Send message</button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Mailcompose