import React, { Fragment } from 'react'
import ALLImages from '../../common/Imagesdata'
import Pageheader from '../../layouts/layoutcomponents/Pageheader'
import { Card, Col, Dropdown, Form, InputGroup, Nav, OverlayTrigger, Row, Tab, Tooltip } from 'react-bootstrap'
import { pane1, pane2, pane3 } from '../../common/Commomarreydata'
import { Link } from 'react-router-dom'

const Defaultchat = () => {
  return (
    <Fragment>
      <Pageheader homepage='Default Chat' activepage='Advanced Ui' page='Default Chat' />

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={5} xl={4}>
          <Card className="custom-card">
            <div className="main-content-app pt-0">
              <div className="main-content-left main-content-left-chat">

                <Card.Body>
                  <InputGroup>
                    <Form.Control type="text" placeholder="Search ..." />
                    <InputGroup.Text className="btn btn-primary">Search</InputGroup.Text>
                  </InputGroup>
                </Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Nav variant="pills" className="main-nav-line main-nav-line-chat card-body border-bottom">
                    <Nav.Link eventKey="first">Recent Chat</Nav.Link>
                    <Nav.Link eventKey="second">Calls</Nav.Link>
                    <Nav.Link eventKey="third">Contacts</Nav.Link>
                  </Nav>
                  <Tab.Content className='main-chat-list'>
                    <Tab.Pane className='main-chat-list p-0 border-0' id="ChatList" eventKey="first">
                      {pane1.map(item => (
                        <a key={item.id} className={`media ${[1, 2, 6].includes(item.id) ? 'new' : 'selected'}`} href="#">
                          <div className={`main-img-user ${[1, 2, 6].includes(item.id) ? 'online' : ''}`}>
                            <img alt="" src={ALLImages(item.image)} /> {[1, 2, 6].includes(item.id) ? (<span>{item.id == 1 ? '2' : "1"}</span>) : ''}
                          </div>
                          <div className="media-body">
                            <div className="media-contact-name">
                              <span>{item.name}</span> <span>{item.time}</span>
                            </div>
                            <p>{item.message}</p>
                          </div>
                        </a>
                      ))}
                    </Tab.Pane>
                    <Tab.Pane className='p-0 border-0' id="ChatCalls" eventKey="second">
                      {pane2.map((item, index) => (
                        <div className="d-flex align-items-center media" key={index}>
                          <div className="mb-0 me-2">
                            <div className={`main-img-user ${item.status}`}>
                              <img alt="" src={item.image} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>{item.name}</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className={`fe ${item.direction} text-${[4, 5, 7, 9].includes(item.id) ? 'danger' : 'success'} me-2`}></i>
                                <p className="text-muted tx-13">{item.time}</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link to="#"><i className={`contact-status text-${[4, 5, 7, 9].includes(item.id) ? 'danger' : 'success'} fe ${item.action}`}></i></Link>
                          </div>
                        </div>
                      ))}
                    </Tab.Pane>
                    <Tab.Pane className='p-0 border-0' id="ChatContacts" eventKey="third">
                      {pane3.map((contact) => (
                        <div key={contact.id} className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="" src={contact.image} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>{contact.name}</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted tx-13">{contact.status}</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <Link to="#"><i className="contact-status text-primary fe fe-message-square  me-2"></i></Link>
                            <Link to="#"><i className="contact-status text-success fe fe-phone-call me-2"></i></Link>
                            <Link to="#"><i className="contact-status text-danger fe fe-video me-2"></i></Link>
                          </div>
                        </div>
                      ))}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={7} xl={8}>
          <Card className="custom-card">
            <div className="main-content-app pt-0">
              <div className="main-content-body main-content-body-chat">
                <div className="main-chat-header pt-3 flex-wrap">
                  <div className="main-img-user online"><img alt="avatar" src={ALLImages('face1')} /></div>
                  <div className="main-chat-msg-name mt-2">
                    <h6 className="mb-0">Sonia Taylor</h6>
                    <span className="dot-label bg-success"></span><small className="me-3">online</small>
                  </div>
                  <Nav>
                    <Dropdown>
                      <Dropdown.Toggle className="no-caret Nav-link cursor me-2" as='a' variant="" id="dropdown-basic"><i className="fe fe-more-horizontal fs-18"></i></Dropdown.Toggle>
                      <Dropdown.Menu className='shadow' align='end'>
                        <Dropdown.Item href="#/action-1"><i className="fe fe-phone-call me-1 d-inline-flex"></i> Phone Call</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><i className="fe fe-video me-1 d-inline-flex"></i> Video Call</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i className="fe fe-user-plus me-1 d-inline-flex"></i> Add Contact</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><i className="fe fe-trash-2 me-1 d-inline-flex"></i> Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <OverlayTrigger overlay={<Tooltip>Phone Call</Tooltip>}><Nav.Link><i className="fe fe-phone-call fs-18"></i></Nav.Link></OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Video Call</Tooltip>}><Nav.Link><i className="fe fe-video fs-18"></i></Nav.Link></OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Add Contact</Tooltip>}><Nav.Link><i className="fe fe-user-plus fs-18"></i></Nav.Link></OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Delete</Tooltip>}><Nav.Link><i className="fe fe-trash-2 fs-18"></i></Nav.Link></OverlayTrigger>
                  </Nav>
                </div>
                {/* <!-- main-chat-header --> */}
                <div className="main-chat-body" id="ChatBody">
                  <div className="content-inner">
                    <label className="main-chat-time"><span>3 days ago</span></label>
                    <div className="media flex-row-reverse chat-right">
                      <div className="main-img-user online"><img alt="avatar" src={ALLImages('face2')} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Nulla consequat massa quis enim. Donec pede justo, fringilla vel...
                        </div>
                        <div className="main-msg-wrapper">
                          rhoncus ut, imperdiet a, venenatis vitae, justo...
                        </div>
                        <div>
                          <span>9:48 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="media chat-left">
                      <div className="main-img-user online"><img alt="avatar" src={ALLImages('face1')} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                        <div>
                          <span>9:32 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="media flex-row-reverse chat-right">
                      <div className="main-img-user online"><img alt="avatar" src={ALLImages('face2')} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Nullam dictum felis eu pede mollis pretium
                        </div>
                        <div>
                          <span>11:22 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div><label className="main-chat-time"><span>Yesterday</span></label>
                    <div className="media chat-left">
                      <div className="main-img-user online"><img alt="avatar" src={ALLImages('face1')} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </div>
                        <div>
                          <span>9:32 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="media flex-row-reverse chat-right">
                      <div className="main-img-user online"><img alt="avatar" src={ALLImages('face2')} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        </div>
                        <div className="main-msg-wrapper">
                          Nullam dictum felis eu pede mollis pretium
                        </div>
                        <div>
                          <span>9:48 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div><label className="main-chat-time"><span>Today</span></label>
                    <div className="media chat-left">
                      <div className="main-img-user online"><img alt="avatar" src={ALLImages('face1')} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Maecenas tempus, tellus eget condimentum rhoncus
                        </div>
                        <div className="pd-0">
                          <img alt="avatar" className="w-10 h-10 mb-1 me-2" src={ALLImages('media3')} />
                          <img alt="avatar" className="w-10 h-10 mb-1 me-2" src={ALLImages('media4')} />
                          <img alt="avatar" className="w-10 h-10 mb-1 me-2" src={ALLImages('media5')} />
                        </div>
                        <div>
                          <span>10:12 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="media flex-row-reverse chat-right">
                      <div className="main-img-user online"><img alt="avatar" src={ALLImages('face2')} /></div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Maecenas tempus, tellus eget condimentum rhoncus
                        </div>
                        <div className="main-msg-wrapper">
                          Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
                        </div>
                        <div>
                          <span>09:40 am</span> <Link to="#"><i className="icon ion-android-more-horizontal"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-chat-footer">
                  <Nav>
                    <OverlayTrigger overlay={<Tooltip>Add Photo</Tooltip>}><Nav.Link><i className="fe fe-image"></i></Nav.Link></OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Attach a File</Tooltip>}><Nav.Link><i className="fe fe-paperclip"></i></Nav.Link></OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Emoji</Tooltip>}><Nav.Link><i className="bi bi-emoji-smile"></i></Nav.Link></OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Record Voice</Tooltip>}><Nav.Link><i className="fe fe-mic"></i></Nav.Link></OverlayTrigger>
                  </Nav>

                  <Form.Control placeholder="Type your message here..." type="text" />
                  <Link className="main-msg-send" to="#"><i className="bi bi-send-fill text-primary"></i></Link>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  )
}

export default Defaultchat