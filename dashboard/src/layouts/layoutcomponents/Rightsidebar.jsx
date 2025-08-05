import React, { Fragment, useState } from 'react'
import ALLImages from '../../common/Imagesdata';
import { Card, ListGroup, Nav, Offcanvas, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TabcontentOne, TabcontentThree, TabcontentTwo } from '../../common/Commomarreydata';

const Rightsidebar = ({ show, handleClose }) => {

  return (
    <Fragment>
      <Offcanvas className='offcanvas-sidebar overflow-auto' show={show} onHide={handleClose} placement='end' id="offcanvassidebar">
        <Card className="custom-card tab-heading shadow-none">
          <Card.Header className="rounded-0">
            <div className="card-title">Notifications</div>
            <div className="card-options ms-auto" data-bs-theme="dark">
              <button type="button" className="btn-close text-white" aria-label={show} onClick={handleClose}></button>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav as='ul' variant="pills" className="my-3 nav-style-1 justify-content-center">
                <Nav.Item as='li'><Nav.Link eventKey="first"><i className="fe fe-user"></i>Profile</Nav.Link></Nav.Item>
                <Nav.Item as='li'><Nav.Link eventKey="second"><i className="fe fe-users "></i> Contacts</Nav.Link></Nav.Item>
                <Nav.Item as='li'><Nav.Link eventKey="third"><i className="fe fe-settings"></i>Settings</Nav.Link></Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane className='text-muted p-0 rounded-0 border-bottom-0 border-end-0' eventKey="first">
                  <Card.Body className="text-center">
                    <div className="dropdown user-pro-body">
                      <div className="">
                        <img alt="user-img" className="avatar avatar-xl rounded-circle mx-auto text-center" src={ALLImages('face6')} />
                        <span className="avatar-status profile-status bg-green"></span>
                      </div>
                      <div className="user-info mg-t-20">
                        <h6 className="fw-semibold mt-2 mb-0">Mintrona Pechon</h6>
                        <span className="mb-0 text-muted fs-12">Premium Member</span>
                      </div>
                    </div>
                  </Card.Body>
                  {TabcontentOne.map((link, index) => (
                    <Link key={index} className={`dropdown-item d-flex border-bottom${index === 0 ? ' border-top' : ''}`} to={link.to}>
                      <div className="d-flex"><i className={`fe ${link.icon} me-3 fs-20 text-muted`}></i>
                        <div className="pt-1">
                          <h6 className="mb-0">{link.title}</h6>
                          <p className="fs-12 mb-0 text-muted">{link.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Tab.Pane>
                <Tab.Pane className='text-muted p-0 rounded-0 overflow-auto border-end-0' eventKey="second">
                  <ListGroup variant="flush">
                    {TabcontentTwo.map((user, index) => (
                      <ListGroup.Item key={index} className="d-flex align-items-center">
                        <div className="me-2">
                          <img className="avatar avatar-md rounded-circle cover-image" alt="img" src={ALLImages(user.image)} />
                          <span className="avatar-status bg-success"></span>
                        </div>
                        <div className="">
                          <div className="fw-semibold">{user.name}</div>
                          <p className="mb-0 tx-12 text-muted">{user.email}</p>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane className='text-muted p-0 rounded-0 border-end-0' eventKey="third">
                  {TabcontentThree.map((section, index) => (
                    <div key={index}>
                      <a className="dropdown-item bg-white pd-y-10" href="#">{section.title}</a>
                      <Card.Body className="py-2">
                        {section.items.map(item => (
                          <div key={item.id} className="form-check form-switch form-check-md my-2">
                            <input className="form-check-input" type="checkbox" role="switch" id={`flexSwitchCheckChecked${item.id}`} defaultChecked={item.defaultChecked} />
                            <label className="form-check-label" htmlFor={`flexSwitchCheckChecked${item.id}`}>
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </Card.Body>
                    </div>
                  ))}
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Offcanvas>
    </Fragment>
  )
}

export default Rightsidebar;