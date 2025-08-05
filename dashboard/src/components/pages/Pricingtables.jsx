import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";


const Pricingtables = () => {
  return (
    <div>
      <Pageheader homepage='Pricing Tables' activepage='Pages' page='Pricing Tables' />
      <Row>
        <Col sm={6} xl={3}>
          <div className="panel price panel-color overflow-hidden plan-card text-center">
            <div className="pt-4">
              <div className="mb-4"><i className="ri-rocket-fill plan-icon bg-primary"></i></div>
              <h3 className="text-uppercase fw-semibold rounded-0  card-category bg-primary-transparent fs-18">Starter Pack</h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead"><strong>$15 /</strong>  month</p>
            </div>
            <ListGroup variant="flush" className="text-center">
              <ListGroup.Item className="rounded-0"><strong> 2 Free</strong> Domain Name</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>3 </strong> One-Click Apps</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> 1 </strong> Databases</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>Money </strong> BackGuarantee</ListGroup.Item>
              <ListGroup.Item className="rounded-0 order-bottom-0"><strong> 24/7</strong> support</ListGroup.Item>
            </ListGroup>
            <div className="panel-footer text-center">
              <Link className="btn btn-lg btn-primary" to="#">Sign Up Now</Link>
            </div>
          </div>
        </Col>
        <Col sm={6} xl={3}>
          <div className="panel price panel-color overflow-hidden plan-card text-center">
            <div className="pt-4">
              <div className="mb-4"><i className="ri-secure-payment-fill plan-icon bg-success"></i></div>
              <h3 className="text-uppercase fw-semibold rounded-0  text-success card-category bg-success-transparent  fs-18">Professional Pack</h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead"><strong>$25 /</strong> month</p>
            </div>
            <ListGroup variant="flush" className="text-center">
              <ListGroup.Item className="rounded-0"><strong> 3 Free</strong> Domain Name</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>4 </strong> One-Click Apps</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> 2 </strong> Databases</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>Money </strong> BackGuarantee</ListGroup.Item>
              <ListGroup.Item className="rounded-0 order-bottom-0"><strong> 24/7</strong> support</ListGroup.Item>
            </ListGroup>
            <div className="panel-footer text-center">
              <Link className="btn btn-lg btn-success" to="#">Sign Up Now</Link>
            </div>
          </div>
        </Col>
        <Col sm={6} xl={3}>
          <div className="panel price panel-color overflow-hidden plan-card text-center">
            <div className="pt-4">
              <div className="mb-4"><i className="ri-umbrella-fill plan-icon bg-orange"></i></div>
              <h3 className="text-uppercase fw-semibold rounded-0  text-orange card-category bg-secondary-transparent  fs-18">Enterprise Pack</h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead"><strong>$99 /</strong> month</p>
            </div>
            <ListGroup variant="flush" className="text-center">
              <ListGroup.Item className="rounded-0"><strong> 5 Free</strong> Domain Name</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>8 </strong> One-Click Apps</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> 2 </strong> Databases</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>Money </strong> BackGuarantee</ListGroup.Item>
              <ListGroup.Item className="rounded-0 order-bottom-0"><strong> 24/7</strong> support</ListGroup.Item>
            </ListGroup>
            <div className="panel-footer text-center">
              <Link className="btn btn-lg btn-secondary" to="#">Sign Up Now</Link>
            </div>
          </div>
        </Col>
        <Col sm={6} xl={3}>
          <div className="panel price panel-color overflow-hidden plan-card text-center">
            <div className="pt-4">
              <div className="mb-4"><i className="ri-money-cny-circle-line plan-icon bg-info"></i></div>
              <h3 className="text-uppercase fw-semibold rounded-0  text-info card-category bg-info-transparent  fs-18">Unlimited Pack</h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead"><strong>$35 /</strong>  month</p>
            </div>
            <ListGroup variant="flush" className="text-center">
              <ListGroup.Item className="rounded-0"><strong> 4 Free</strong> Domain Name</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>6 </strong> One-Click Apps</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> 2 </strong> Databases</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>Money </strong> BackGuarantee</ListGroup.Item>
              <ListGroup.Item className="rounded-0 order-bottom-0"><strong> 24/7</strong> support</ListGroup.Item>
            </ListGroup>
            <div className="panel-footer text-center">
              <Link className="btn btn-lg btn-info" to="#">Sign Up Now</Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={6} xl={3}>
          <Card>
            <Card.Body className="text-center">
              <div className="card-category">Free</div>
              <div className="display-5 my-4 fs-40">$0</div>
              <ul className="list-unstyled leading-loose">
                <li><strong>4</strong> Ads</li>
                <li><i className="fe fe-check text-success me-2 d-inline-flex"></i> 30 days</li>
                <li><i className="fe fe-x text-danger me-2 d-inline-flex "></i> Private Messages</li>
                <li><i className="fe fe-x text-danger me-2 d-inline-flex"></i> Urgent Ads</li>
              </ul>
              <div className="text-center mt-4">
                <Link to="#" className="btn btn-primary ">Choose plan</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <Card.Body className="text-center">
              <div className="card-category">Unlimited</div>
              <div className="display-5 my-4 fs-40">$150</div>
              <ul className="list-unstyled leading-loose">
                <li><strong>Unlimited</strong> Ads</li>
                <li><i className="fe fe-check text-success me-2 d-inline-flex"></i> 365 Days</li>
                <li><i className="fe fe-check text-success me-2 d-inline-flex"></i> Private Messages</li>
                <li><i className="fe fe-check text-success me-2 d-inline-flex"></i> Urgent ads</li>
              </ul>
              <div className="text-center mt-4">
                <Link to="#" className="btn btn-info ">Choose plan</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <div className="card-status bg-success"></div>
            <Card.Body className="text-center">
              <div className="card-category">Premium</div>
              <div className="display-5 my-4 fs-40">$65</div>
              <ul className="list-unstyled leading-loose">
                <li><strong>50</strong> Ads</li>
                <li><i className="fe fe-check text-success me-2 d-inline-flex"></i> 60 Days</li>
                <li><i className="fe fe-x text-danger me-2 d-inline-flex"></i> Private Messages</li>
                <li><i className="fe fe-x text-danger me-2 d-inline-flex"></i> Urgent ads</li>
              </ul>
              <div className="text-center mt-4">
                <Link to="#" className="btn btn-success ">Choose plan</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <Card.Body className="text-center">
              <div className="card-category">Enterprise</div>
              <div className="display-5 my-4 fs-40">$100</div>
              <ul className="list-unstyled leading-loose">
                <li><strong>100</strong> Ads</li>
                <li><i className="fe fe-check text-success me-2 d-inline-flex"></i> 180 days</li>
                <li><i className="fe fe-check text-success me-2 d-inline-flex"></i> Private Messages</li>
                <li><i className="fe fe-x text-danger me-2 d-inline-flex"></i> Urgent ads</li>
              </ul>
              <div className="text-center mt-4">
                <Link to="#" className="btn btn-danger">Choose plan</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h4 className="card-title mb-3 mt-2 fs-16 fw-semibold mb-">Pricing cards 4 colums</h4>
      <Row>
        <Col sm={6} xl={3}>
          <div className="panel price panel-color overflow-hidden">
            <div className="panel-heading bg-primary p-0 text-center ">
              <h3 className="text-fixed-white">Personal</h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead"><strong>$15 /</strong>  month</p>
            </div>
            <ListGroup variant="flush" className="text-center">
              <ListGroup.Item className="rounded-0"><strong> 2 Free</strong> Domain Name</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>3 </strong> One-Click Apps</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> 1 </strong> Databases</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>Money </strong> BackGuarantee</ListGroup.Item>
              <ListGroup.Item className="rounded-0 order-bottom-0"><strong> 24/7</strong> support</ListGroup.Item>
            </ListGroup>
            <div className="panel-footer text-center">
              <Link className="btn btn-lg btn-primary" to="#">Purchase Now!</Link>
            </div>
          </div>
        </Col>
        <Col sm={6} xl={3}>
          <div className="panel price panel-color overflow-hidden">
            <div className="panel-heading bg-info  p-0 text-center">
              <h3 className="text-fixed-white">Team</h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead"><strong>$25 /</strong> month</p>
            </div>
            <ListGroup variant="flush" className="text-center">
              <ListGroup.Item className="rounded-0"><strong> 3 Free</strong> Domain Name</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>4 </strong> One-Click Apps</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> 2 </strong> Databases</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> Money </strong> BackGuarantee</ListGroup.Item>
              <ListGroup.Item className="rounded-0 order-bottom-0"><strong> 24/7</strong> support</ListGroup.Item>
            </ListGroup>
            <div className="panel-footer text-center">
              <Link className="btn btn-lg btn-info" to="#">Purchase Now!</Link>
            </div>
          </div>
        </Col>
        <Col sm={6} xl={3}>
          <div className="panel price panel-color overflow-hidden">
            <div className="panel-heading bg-success p-0 text-center">
              <h3 className="text-fixed-white">Business</h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead"><strong>$99 /</strong> month</p>
            </div>
            <ListGroup variant="flush" className="text-center">
              <ListGroup.Item className="rounded-0"><strong> 5 Free</strong> Domain Name</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong>8 </strong> One-Click Apps</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> 2 </strong> Databases</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> Money </strong> BackGuarantee</ListGroup.Item>
              <ListGroup.Item className="rounded-0 order-bottom-0"><strong> 24/7</strong> support</ListGroup.Item>
            </ListGroup>
            <div className="panel-footer text-center">
              <Link className="btn btn-lg btn-success" to="#">Purchase Now!</Link>
            </div>
          </div>
        </Col>
        <Col sm={6} xl={3}>
          <div className="panel price panel-color overflow-hidden">
            <div className="panel-heading bg-danger p-0 text-center">
              <h3 className="text-fixed-white">Corporate</h3>
            </div>
            <div className="panel-body text-center">
              <p className="lead"><strong>$35 /</strong>  month</p>
            </div>
            <ListGroup variant="flush" className="text-center">
              <ListGroup.Item className="rounded-0"><strong> 4 Free</strong> Domain Name</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> 6 </strong> One-Click Apps</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> 2 </strong> Databases</ListGroup.Item>
              <ListGroup.Item className="rounded-0"><strong> Money </strong> BackGuarantee</ListGroup.Item>
              <ListGroup.Item className="rounded-0 order-bottom-0"><strong> 24/7</strong> support</ListGroup.Item>
            </ListGroup>
            <div className="panel-footer text-center">
              <Link className="btn btn-lg btn-danger" to="#">Purchase Now!</Link>
            </div>
          </div>
        </Col>
      </Row>
      <h4 className="card-title mb-3 mt-2 fs-16 fw-semibold mb-">Column pricing table</h4>
      <Row>
        <Col sm={6} xl={3}>
          <Card>
            <Card.Body className="text-center pricing bg-primary br-5">
              <div className="card-category">Basic</div>
              <div className="display-3 my-4 fs-40">$10</div>
              <ul className="list-unstyled leading-loose">
                <li><strong>2 </strong> FreeDomain Name</li>
                <li><strong>2</strong> One-Click Apps</li>
                <li><strong>1</strong>  Databases</li>
                <li><strong>Money</strong> BackGuarantee</li>
                <li><strong>24/7</strong> Support</li>
              </ul>
              <div className="text-center mt-4">
                <Link to="#" className="btn btn-light d-grid">Buy Now</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <Card.Body className="text-center pricing bg-info br-5">
              <div className="card-category">Premium</div>
              <div className="display-3 my-4 fs-40">$49</div>
              <ul className="list-unstyled leading-loose">
                <li><strong>3 </strong> FreeDomain Name</li>
                <li><strong>5</strong> One-Click Apps</li>
                <li><strong>3</strong>  Databases</li>
                <li><strong>Money</strong> BackGuarantee</li>
                <li><strong>24/7</strong> Support</li>
              </ul>
              <div className="text-center mt-4">
                <Link to="#" className="btn btn-light d-grid">Buy Now</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <Card.Body className="text-center pricing bg-success br-5">
              <div className="card-category">Enterprise</div>
              <div className="display-3 my-4 fs-40">$99</div>
              <ul className="list-unstyled leading-loose">
                <li><strong>10 </strong> FreeDomain Name</li>
                <li><strong>10</strong> One-Click Apps</li>
                <li><strong>8</strong>  Databases</li>
                <li><strong>Money</strong> BackGuarantee</li>
                <li><strong>24/7</strong> Support</li>
              </ul>
              <div className="text-center mt-4">
                <Link to="#" className="btn btn-light d-grid">Buy Now</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <Card.Body className="text-center  pricing bg-danger br-5">
              <div className="card-category">Unlimited</div>
              <div className="display-3 my-4 fs-40">$139</div>
              <ul className="list-unstyled leading-loose">
                <li><strong>12 </strong> FreeDomain Name</li>
                <li><strong>10</strong> One-Click Apps</li>
                <li><strong>6</strong>  Databases</li>
                <li><strong>Money</strong> BackGuarantee</li>
                <li><strong>24/7</strong> Support</li>
              </ul>
              <div className="text-center mt-4">
                <Link to="#" className="btn btn-light d-grid">Buy Now</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Pricingtables;