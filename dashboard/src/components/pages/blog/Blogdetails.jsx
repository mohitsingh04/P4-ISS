import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Dropdown, Row, Card, Nav, FormGroup, ListGroup, Form, InputGroup, } from "react-bootstrap";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import ALLImages from "../../../common/Imagesdata";

const Blogdetails = () => {
  return (
    <Fragment>
      <Pageheader homepage='Blog Details' activepage='Pages' page='Blog Details' />
      <Row>
        <Col xl={8}>
          <Card className="custom-card">
            <img className="card-img-top br-bl-0 br-br-0" src={ALLImages('media27')} alt="Card image cap" />
            <Card.Body>
              <div className="d-md-flex">
                <Link to="#" className="d-flex me-4 mb-2"><i className="fe fe-calendar fs-16 me-1 p-3 bg-secondary-transparent text-secondary rounded-3"></i>
                  <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">Sep-25-2021</div>
                </Link>
                <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="d-flex mb-2"><i className="fe fe-user fs-16 me-1 p-3 bg-primary-transparent text-primary rounded-3"></i>
                  <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">Harry Fisher</div>
                </Link>
                <div className="ms-auto">
                  <Link to="#" className="d-flex mb-2"><i className="fe fe-message-square fs-16 me-1 p-3 bg-success-transparent text-success rounded-3"></i>
                    <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">13 Comments </div>
                  </Link>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <h3><Link to="#"> Voluptatem quia voluptas</Link></h3>
              <p className="card-text">Some quick example text to build on the card title and make up the
                bulk of the card's content.</p>
              <p> Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation
                ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the
                writer, no fun for the reader.”No matter what industry
                you’re working in, as a blogger, you should live and die by this statement.</p>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising
                pain was born and I will give you a complete account of the system, and expound the
                actual teachings of the great explorer of the
                truth, the master-builder of human happiness. No one rejects, dislikes, or avoids
                pleasure itself, because it is pleasure.</p>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Comments</div>
            </Card.Header>
            <Card.Body className="pb-0">
              <div className="media mb-5 overflow-visible d-block d-sm-flex">
                <div className="me-3 mb-2">
                  <Link to={`${import.meta.env.BASE_URL}pages/profile/`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face5')} /> </Link>
                </div>
                <div className="media-body overflow-visible">
                  <div className="border mb-5 p-4 br-5">
                    <nav className="nav float-end">
                      <Dropdown>
                        <Dropdown.Toggle className="no-caret nav-link text-muted fs-16 p-0 ps-4" variant="" id="dropdown-basic"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                        <Dropdown.Menu align='end' className="">
                          <Dropdown.Item href="#/action-1"><i className="fe fe-edit me-1 d-inline-flex"></i> Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-2"><i className="fe fe-corner-up-left me-1 d-inline-flex"></i> Reply</Dropdown.Item>
                          <Dropdown.Item href="#/action-3"><i className="fe fe-flag me-1 d-inline-flex"></i> Report Abuse</Dropdown.Item>
                          <Dropdown.Item href="#/action-4"><i className="fe fe-trash-2 me-1 d-inline-flex"></i> Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </nav>
                    <h5 className="mt-0">Florinda Carasco</h5>
                    <span><i className="fe fe-thumb-up text-danger"></i></span>
                    <p className="font-13 text-muted">Lorem ipsum dolor sit amet, quis Neque porro
                      quisquam est, nostrud exercitation ullamco laboris commodo consequat.
                      There’s an old maxim that states, “No fun for the writer, no fun for the
                      reader.”No matter
                      what industry you’re working in, as a blogger, you should live and die
                      by this statement.</p>
                    <Link className="like" to="#"> <span className="badge btn-danger p-2 me-2"><i className="fe fe-heart mx-1"></i>Like</span></Link>
                    <span className="reply" id="1">
                      <Link to="#"><span className="badge btn-primary p-2"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                    </span>
                  </div>
                  <div className="media mb-5 overflow-visible d-sm-flex d-block">
                    <div className="me-3 mb-2">
                      <Link to={`${import.meta.env.BASE_URL}pages/profile/`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face2')} /> </Link>
                    </div>
                    <div className="media-body border p-4 overflow-visible br-5">
                      <nav className="nav float-end">
                        <Dropdown>
                          <Dropdown.Toggle className="no-caret nav-link text-muted fs-16 p-0 ps-4" variant="" id="dropdown-basic"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                          <Dropdown.Menu align='end' className="">
                            <Dropdown.Item href="#/action-1"><i className="fe fe-edit me-1 d-inline-flex"></i> Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><i className="fe fe-corner-up-left me-1 d-inline-flex"></i> Reply</Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><i className="fe fe-flag me-1 d-inline-flex"></i> Report Abuse</Dropdown.Item>
                            <Dropdown.Item href="#/action-4"><i className="fe fe-trash-2 me-1 d-inline-flex"></i> Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </nav>
                      <h5 className="mt-0">Mozelle Belt</h5>
                      <span><i className="fe fe-thumb-up text-danger"></i></span>
                      <p className="font-13 text-muted">Nostrud exercitation ullamco laboris
                        commodo consequat. There’s an old maxim that states, “No fun for the
                        writer, no fun for the reader.”No matter what industry you’re
                        working in, as a blogger, you should
                        live and die by this statement.</p>
                      <Link className="like" to="#"><span className="badge btn-danger p-2 me-2"><i className="fe fe-heart mx-1"></i>Like</span></Link>
                      <span className="reply" id="2">
                        <Link to="#"><span className="badge btn-primary p-2"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media mb-5 overflow-visible d-block d-sm-flex">
                <div className="me-3 mb-2">
                  <Link to={`${import.meta.env.BASE_URL}pages/profile/`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face15')} /> </Link>
                </div>
                <div className="media-body overflow-visible">
                  <div className="border mb-5 p-4 br-5">
                    <nav className="nav float-end">
                      <Dropdown>
                        <Dropdown.Toggle className="no-caret nav-link text-muted fs-16 p-0 ps-4" variant="" id="dropdown-basic"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                        <Dropdown.Menu align='end' className="">
                          <Dropdown.Item href="#/action-1"><i className="fe fe-edit me-1 d-inline-flex"></i> Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-2"><i className="fe fe-corner-up-left me-1 d-inline-flex"></i> Reply</Dropdown.Item>
                          <Dropdown.Item href="#/action-3"><i className="fe fe-flag me-1 d-inline-flex"></i> Report Abuse</Dropdown.Item>
                          <Dropdown.Item href="#/action-4"><i className="fe fe-trash-2 me-1 d-inline-flex"></i> Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </nav>
                    <h5 className="mt-0">Alina Bernier</h5>
                    <p className="font-13 text-muted">Very nice ! On the other hand, we denounce
                      with righteous indignation and dislike men who are so beguiled and
                      demoralized by the </p>
                    <Link className="like" to="#"><span className="badge btn-danger p-2 me-2"><i className="fe fe-heart mx-1"></i>Like</span></Link>
                    <span className="reply" id="3">
                      <Link to="#"><span className="badge btn-primary p-2"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="media mb-5 overflow-visible d-block d-sm-flex">
                <div className="me-3 mb-2">
                  <Link to={`${import.meta.env.BASE_URL}pages/profile/`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face5')} /> </Link>
                </div>
                <div className="media-body overflow-visible">
                  <div className="border mb-5 p-4 br-5">
                    <nav className="nav float-end">
                      <Dropdown>
                        <Dropdown.Toggle className="no-caret nav-link text-muted fs-16 p-0 ps-4" variant="" id="dropdown-basic"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                        <Dropdown.Menu align='end' className="">
                          <Dropdown.Item href="#/action-1"><i className="fe fe-edit me-1 d-inline-flex"></i> Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-2"><i className="fe fe-corner-up-left me-1 d-inline-flex"></i> Reply</Dropdown.Item>
                          <Dropdown.Item href="#/action-3"><i className="fe fe-flag me-1 d-inline-flex"></i> Report Abuse</Dropdown.Item>
                          <Dropdown.Item href="#/action-4"><i className="fe fe-trash-2 me-1 d-inline-flex"></i> Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </nav>
                    <h5 className="mt-0">Florinda Carasco</h5>
                    <span><i className="fe fe-thumb-up text-danger"></i></span>
                    <p className="font-13 text-muted">Lorem ipsum dolor sit amet, quis Neque porro
                      quisquam est, nostrud exercitation ullamco laboris commodo consequat.
                      There’s an old maxim that states, “No fun for the writer, no fun for the
                      reader.”No matter
                      what industry you’re working in, as a blogger, you should live and die
                      by this statement.</p>
                    <Link className="like" to="#"><span className="badge btn-danger p-2 me-2"><i className="fe fe-heart mx-1"></i>Like</span></Link>
                    <span className="reply" id="4">
                      <Link to="#"><span className="badge btn-primary p-2"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                    </span>
                  </div>
                  <div className="media mb-5 overflow-visible d-block d-sm-flex">
                    <div className="me-3 mb-2">
                      <Link to={`${import.meta.env.BASE_URL}pages/profile/`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face2')} /> </Link>
                    </div>
                    <div className="media-body overflow-visible">
                      <div className="border p-4 mb-5 br-5">
                        <nav className="nav float-end">
                          <Dropdown>
                            <Dropdown.Toggle className="no-caret nav-link text-muted fs-16 p-0 ps-4" variant="" id="dropdown-basic"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                            <Dropdown.Menu align='end' className="">
                              <Dropdown.Item href="#/action-1"><i className="fe fe-edit me-1 d-inline-flex"></i> Edit</Dropdown.Item>
                              <Dropdown.Item href="#/action-2"><i className="fe fe-corner-up-left me-1 d-inline-flex"></i> Reply</Dropdown.Item>
                              <Dropdown.Item href="#/action-3"><i className="fe fe-flag me-1 d-inline-flex"></i> Report Abuse</Dropdown.Item>
                              <Dropdown.Item href="#/action-4"><i className="fe fe-trash-2 me-1 d-inline-flex"></i> Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </nav>
                        <h5 className="mt-0">Mozelle Belt</h5>
                        <span><i className="fe fe-thumb-up text-danger"></i></span>
                        <p className="font-13 text-muted">Nostrud exercitation ullamco laboris
                          commodo consequat. There’s an old maxim that states, “No fun for
                          the writer, no fun for the reader.”No matter what industry
                          you’re working in, as a blogger, you
                          should live and die by this statement.</p>
                        <Link className="like" to="#"><span className="badge btn-danger p-2 me-2"><i className="fe fe-heart mx-1"></i>Like</span></Link>
                        <span className="reply" id="5">
                          <Link to="#"><span className="badge btn-primary p-2"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                        </span>
                      </div>
                      <div className="media overflow-visible d-block d-sm-flex">
                        <div className="me-3 mb-2">
                          <Link to={`${import.meta.env.BASE_URL}pages/profile/`}> <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face9')} /> </Link>
                        </div>
                        <div className="media-body border p-4 overflow-visible br-5">
                          <nav className="nav float-end">
                            <Dropdown>
                              <Dropdown.Toggle className="no-caret nav-link text-muted fs-16 p-0 ps-4" variant="" id="dropdown-basic"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                              <Dropdown.Menu align='end' className="z-0">
                                <Dropdown.Item href="#/action-1"><i className="fe fe-edit me-1 d-inline-flex"></i> Edit</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><i className="fe fe-corner-up-left me-1 d-inline-flex"></i> Reply</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><i className="fe fe-flag me-1 d-inline-flex"></i> Report Abuse</Dropdown.Item>
                                <Dropdown.Item href="#/action-4"><i className="fe fe-trash-2 me-1 d-inline-flex"></i> Delete</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </nav>
                          <h5 className="mt-0">Alina Bernier</h5>
                          <span><i className="fe fe-thumb-up text-danger"></i></span>
                          <p className="font-13 text-muted">Nostrud exercitation ullamco
                            laboris commodo consequat. There’s an old maxim that states,
                            “No fun for the writer, no fun for the reader.”No matter
                            what industry you’re working in, as a blogger,
                            you should live and die by this statement.</p>
                          <Link className="like" to="#"><span className="badge btn-danger p-2 me-2"><i className="fe fe-heart mx-1"></i>Like</span></Link>
                          <span className="reply" id="6">
                            <Link to="#"><span className="badge btn-primary p-2"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Add a Comments</div>
            </Card.Header>
            <Card.Body>
              <Form className="form-horizontal  m-t-20" action={`${import.meta.env.BASE_URL}dashboard/`}>
                <Form.Group className="mb-3">
                  <Col xs={12}>
                    <Form.Control type="text" required="" placeholder="Username*" />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Col xs={12}>
                    <Form.Control type="email" required="" placeholder="Email*" />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Col xs={12}>
                    <Form.Control as='textarea' rows="5" placeholder="Your Comment*" />
                  </Col>
                </Form.Group>
                <div className="">
                  <Link to="#" className="btn btn-primary btn-rounded  waves-effect waves-light">Submit</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Body>
              <InputGroup>
                <Form.Control type="text" className="border-end-0" placeholder="Search ..." />
                <InputGroup.Text className="btn btn-outline-light bg-transparent border-start-0 text-muted">
                  <i className="fe fe-search" aria-hidden="true"></i>
                </InputGroup.Text>
              </InputGroup>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Categories</div>
            </Card.Header>
            <Card.Body>
              <ListGroup >
                <ListGroup.Item className="border list-icon rounded-bottom-0"><Link href="#" className="text-dark mx-3"> Business</Link> <span className="product-label">11</span></ListGroup.Item>
                <ListGroup.Item className="border list-icon rounded-0 border-top-0"><Link href="#" className="text-dark mx-3"> Gadgets</Link> <span className="product-label">46</span></ListGroup.Item>
                <ListGroup.Item className="border list-icon rounded-0 border-top-0"><Link href="#" className="text-dark mx-3"> Fashion</Link> <span className="product-label">25</span></ListGroup.Item>
                <ListGroup.Item className="border list-icon rounded-top-0 border-top-0"><Link href="#" className="text-dark mx-3"> Political</Link> <span className="product-label">73</span></ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Professional Blog Writers</div>
            </Card.Header>
            <Card.Body>
              <div className="">
                <div className="d-flex overflow-visible">
                  <img className="avatar bradius avatar-xl me-3" src={ALLImages('face1')} alt="avatar-img" />
                  <div className="media-body valign-middle my-auto">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="fw-semibold text-dark">Simon Sais</Link>
                    <p className="text-muted mb-0">There are many variations of passages of Lorem
                      Ipsum available ...</p>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-4">
                  <img className="avatar bradius avatar-xl me-3" src={ALLImages('face3')} alt="avatar-img" />
                  <div className="media-body valign-middle my-auto">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="fw-semibold text-dark">Cherry Blossom</Link>
                    <p className="text-muted mb-0">There are many variations of passages of Lorem
                      Ipsum available ...</p>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-4">
                  <img className="avatar bradius avatar-xl me-3" src={ALLImages('face5')} alt="avatar-img" />
                  <div className="media-body valign-middle my-auto">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="fw-semibold text-dark">Ivan Notheridiya</Link>
                    <p className="text-muted mb-0">There are many variations of passages of Lorem
                      Ipsum available ...</p>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-4">
                  <img className="avatar bradius avatar-xl me-3" src={ALLImages('face15')} alt="avatar-img" />
                  <div className="media-body valign-middle my-auto">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="fw-semibold text-dark">Manny Jah</Link>
                    <p className="text-muted mb-0">There are many variations of passages of Lorem
                      Ipsum available ...</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="custom-card recent-posts">
            <Card.Header>
              <div className="card-title">Recent Posts</div>
            </Card.Header>
            <Card.Body>
              <div className="">
                <div className="d-sm-flex overflow-visible d-xl-block d-xxl-flex">
                  <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="display-contents"> <img src={ALLImages('media19')} alt="" className="card-aside-column br-5 cover-image" />
                    <div className="ps-3 flex-column my-auto display-text-contents">
                      <h4>Generator on the Internet..</h4>
                      <div className="text-muted">Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit anim id est
                        laborum....</div>
                    </div>
                  </Link>

                </div>
                <div className="d-sm-flex overflow-visible d-xl-block d-xxl-flex mt-4">
                  <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="display-contents"> <img src={ALLImages('media20')} alt="" className="card-aside-column br-5 cover-image" />
                    <div className="ps-3 flex-column my-auto display-text-contents">
                      <h4>Voluptatem quia voluptas...</h4>
                      <div className="text-muted">Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit anim id est
                        laborum....</div>
                    </div>
                  </Link>

                </div>
                <div className="d-sm-flex overflow-visible d-xl-block d-xxl-flex mt-4">
                  <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="display-contents"> <img src={ALLImages('media22')} alt="" className="card-aside-column br-5 cover-image" />
                    <div className="ps-3 flex-column my-auto display-text-contents">
                      <h4>Generator on the Internet..</h4>
                      <div className="text-muted">Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit anim id est
                        laborum....</div>
                    </div>
                  </Link>

                </div>
                <div className="d-sm-flex overflow-visible d-xl-block d-xxl-flex mt-4">
                  <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="display-contents"> <img src={ALLImages('media23')} alt="" className="card-aside-column br-5 cover-image" />
                    <div className="ps-3 flex-column my-auto display-text-contents">
                      <h4>Generator on the Internet..</h4>
                      <div className="text-muted">Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit anim id est
                        laborum....</div>
                    </div>
                  </Link>

                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Tags</div>
            </Card.Header>
            <Card.Body>
              <div className="tags">
                <Link to="#" className="tag">Development</Link>
                <Link to="#" className="tag">Design</Link>
                <Link to="#" className="tag">Technology</Link>
                <Link to="#" className="tag">Popular</Link>
                <Link to="#" className="tag">Codiegniter</Link>
                <Link to="#" className="tag">JavaScript</Link>
                <Link to="#" className="tag">Bootstrap</Link>
                <Link to="#" className="tag">PHP</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Blogdetails