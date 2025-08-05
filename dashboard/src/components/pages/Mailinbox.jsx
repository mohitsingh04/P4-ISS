import React, { Fragment } from "react";
import { Dropdown, DropdownDivider, ListGroup, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col, Card, } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";
import { emailData } from "../../common/Commomarreydata";

const Mailinbox = () => {
  return (
    <Fragment>
      <Pageheader homepage='Mail Inbox' activepage='Pages' page='Mail Inbox' />
      <Row>
        <Col md={12} lg={4} xl={3}>
          <Card className="custom-card">
            <ListGroup className='list-group-transparent mb-0 mail-inbox pb-3'>
              <div className="mt-4 mb-4 mx-4 text-center">
                <Link to={`${import.meta.env.BASE_URL}pages/mailcompose/`} className="btn btn-primary btn-lg d-grid">Compose</Link>
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
        <Col md={12} lg={8} xl={9}>
          <Card className="custom-card">
            <Card.Body className="p-6">
              <div className="inbox-body">
                <div className="mail-option">
                  <div className="chk-all p-0 border-0">
                    <div className="btn-group me-1">
                      <Dropdown>
                        <Dropdown.Toggle variant="" className="btn btn-outline-light border" id="dropdown-basic">All</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">None</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Read</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Unread</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <Link to="#" className="btn btn-outline-light"> <i className="ri-restart-line fs-16 align-middle"></i></Link>
                  </div>
                  <div className="btn-group">
                    <Dropdown>
                      <Dropdown.Toggle variant="" className="btn btn-outline-light border" id="dropdown-basic">More</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><i className="fe fe-pencil me-2"></i> Mark as Read</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i className="fe fe-ban me-2"></i> Spam</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i className="fe fe-trash-o me-2"></i>Delete</Dropdown.Item>
                        <DropdownDivider />
                        <Dropdown.Item href="#/action-3">Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <ul className="unstyled inbox-pagination float-end d-flex">
                    <li className="my-auto me-1"><span>1-50 of 234</span></li>

                    <li>
                      <a className="np-btn" href="#"><i className="ri-arrow-right-s-line pagination-right"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="table-responsive">
                  <table className="table table-inbox table-hover text-nowrap mb-0 border">
                    <tbody>
                      {emailData.map(email => (
                        <tr key={email.id} className="unread">
                          <td className="inbox-small-cells">
                            <label className="custom-control custom-checkbox mb-0">
                              <input className="form-check-input" type="checkbox" id={`checkboxNoLabel${email.id}`} value="" aria-label="..." />
                            </label>
                          </td>
                          <td className="inbox-small-cells"><i className={`bi bi-star-fill ${[1, 5, 8, 12].includes(email.id) ? 'text-warning' : 'inbox-started'}`}></i></td>
                          <td className="inbox-small-cells"><i className={`bi bi-bookmark-fill ${[3, 13, 17, 18].includes(email.id) ? 'text-danger' : ''}`}></i></td>
                          <td className="view-message dont-show fw-semibold">{email.sender}</td>
                          <td className="view-message">{email.subject}</td>
                          <td className="view-message text-end fw-semibold">{email.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>
              </div>
            </Card.Body>
          </Card>
          <Pagination className="mb-4">
            <Pagination.Item disabled>Prev</Pagination.Item>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
          </Pagination>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Mailinbox