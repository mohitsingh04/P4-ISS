import React, { Fragment } from "react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import ALLImages from "../../../common/Imagesdata";

const Blog = () => {
  return (
    <Fragment>
      <Pageheader homepage='Blog' activepage='Pages' page='Blog' />

      <Row className="row-cards ">
        <Col md={4}>
          <Card className="custom-card">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-7 br-tl-7" src={ALLImages('media19')} alt="Card image cap" /></Link>
            <Card.Header>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><h5 className="card-title text-primary">Blog title </h5></Link>
            </Card.Header>
            <Card.Body>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="float-end text-primary">Read more <i className="fa fa-angle-double-right"></i></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-7 br-tl-7" src={ALLImages('media12')} alt="Card image cap" /></Link>
            <Card.Header>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><h5 className="card-title text-primary">Blog title</h5></Link>
            </Card.Header>
            <Card.Body>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="float-end text-primary">Read more <i className="fa fa-angle-double-right"></i></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-7 br-tl-7" src={ALLImages('media17')} alt="Card image cap" /></Link>
            <Card.Header>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><h5 className="card-title text-primary">Blog title</h5></Link>
            </Card.Header>
            <Card.Body>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="float-end text-primary">Read more <i className="fa fa-angle-double-right"></i></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-7 br-tl-7 " src={ALLImages('media20')} alt="Card image cap" /></Link>
            <Card.Header>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><h5 className="card-title text-primary">Blog title</h5></Link>
            </Card.Header>
            <Card.Body>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="btn btn-primary btn-md">Read more</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-7 br-tl-7 " src={ALLImages('media23')} alt="Card image cap" /></Link>
            <Card.Header>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><h5 className="card-title text-primary">Blog title</h5></Link>
            </Card.Header>
            <Card.Body>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="btn btn-warning btn-md">Read more</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="custom-card">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-7 br-tl-7 " src={ALLImages('media22')} alt="Card image cap" /></Link>
            <Card.Header>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><h5 className="card-title text-primary">Blog title</h5></Link>
            </Card.Header>
            <Card.Body>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="btn btn-info btn-md">Read more</Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={3}>
          <Card className="custom-card">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-7 br-tl-7" src={ALLImages('media13')} alt="And this isn&#39;t my nose. This is a false one." /></Link>
            <Card.Body className="d-flex flex-column">
              <h4><Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>voluptatem quia voluptas.</Link></h4>
              <div className="text-muted">To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...</div>
              <div className="d-flex align-items-center pt-5 mt-auto flex-wrap">
                <img className="avatar rounded-circle avatar-md me-3 cover-image" alt="img" src={ALLImages('face1')} />
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="text-default">John Paige</Link>
                  <small className="d-block text-muted">1 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3"><i className="ri-heart-line me-1 text-primary"></i></Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3"><i className="ri-thumb-up-line text-primary"></i></Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={3}>
          <Card className="custom-card">
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-7 br-tl-7" src={ALLImages('media14')} alt="Well, I didn&#39;t vote for you." /></Link>
            <Card.Body className="d-flex flex-column">
              <h4><Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>voluptatem quia voluptas.</Link></h4>
              <div className="text-muted">Who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces.</div>
              <div className="d-flex align-items-center pt-5 mt-auto  flex-wrap">
                <img className="avatar rounded-circle avatar-md me-3 cover-image" alt="img" src={ALLImages('face2')} />
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="text-default">Anna Ogden</Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3"><i className="ri-heart-line me-1 text-primary"></i></Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3"><i className="ri-thumb-up-line text-primary"></i></Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="d-flex flex-column">
              <h4><Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>voluptatem quia voluptas</Link></h4>
              <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</div>
              <div className="d-flex align-items-center pt-5 mt-auto flex-wrap">
                <img className="avatar rounded-circle avatar-md me-3 cover-image" alt="img" src={ALLImages('face3')} />
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="text-default">Carol Paige</Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3"><i className="ri-heart-line me-1 text-primary"></i></Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3"><i className="ri-thumb-up-line text-primary"></i></Link>
                </div>
              </div>
            </Card.Body>
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-0 br-tl-0 br-5 rounded-top-0" src={ALLImages('media15')} alt="How do you know she is a witch?" /></Link>
          </Card>
        </Col>

        <Col sm={6} xl={3}>
          <Card className="custom-card">
            <Card.Body className="d-flex flex-column">
              <h4><Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}>voluptatem quia voluptas..</Link></h4>
              <div className="text-muted">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut ..</div>
              <div className="d-flex align-items-center pt-5 mt-auto flex-wrap">
                <img className="avatar rounded-circle avatar-md me-3 cover-image" alt="img" src={ALLImages('face4')} />
                <div>
                  <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="text-default">Fiona Hodges</Link>
                  <small className="d-block text-muted">5 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3"><i className="ri-heart-line me-1 text-primary"></i></Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3"><i className="ri-thumb-up-line text-primary"></i></Link>
                </div>
              </div>
            </Card.Body>
            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`}><img className="card-img-top br-tr-0 br-tl-0 br-5 rounded-top-0" src={ALLImages('media16')} alt="Shut up!" /></Link>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Blog