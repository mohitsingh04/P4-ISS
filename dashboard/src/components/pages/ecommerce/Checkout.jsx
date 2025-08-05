import React, { Fragment, useState } from "react";
import { Tab, Row, Col, Card, InputGroup, Form, Nav, Button, } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { Country, defaultcheckoutitem, shoppingcartData } from "../../../common/Commomarreydata";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import Select from 'react-select'
import Swal from "sweetalert2";
import ALLImages from "../../../common/Imagesdata";
import { useSelector } from "react-redux";


const Checkout = () => {

  function Placeorder() {
    Swal.fire({
      allowOutsideClick: true,
      imageUrl: ALLImages('png12'),
      title: 'Hurray !..Your Order Has Been confirmed',
      text: 'Order Has Been Placed Successfully Now You Can Track Your Order ...',
      imageHeight: 100,
      imageAlt: 'Template image',
    })
  }

  const cartItems = useSelector(state => state.cart);

  const [localCart, _setLocalCart] = useState(shoppingcartData);
  const reduxCart = useSelector(state => state.cart);
  const combinedItems = [...localCart, ...reduxCart];
  const actionType = useSelector(state => state.actionType);
  let content;

  if (actionType === 'shoppingCartCheckOut') {
    content = combinedItems.map((item, index) => (
      <div className="d-flex mb-4" key={index}>
        <div className="d-sm-flex">
          <img className="avatar img-fluid avatar-xl border p-0 br-7" src={item.imagesrc} alt="img" />
          <div className="ms-sm-3 mt-2">
            <h4 className="mb-1 fw-semibold fs-14"><Link to="#">{item.itemname}</Link></h4>
            <div className="mb-2 text-warning fs-14">
              <div className="mb-2 text-warning fs-14">
                <i className="ri-star-fill fs-16"></i>
                <i className="ri-star-fill fs-16"></i>
                <i className="ri-star-fill fs-16"></i>
                <i className="ri-star-half-line fs-16"></i>
                <i className="ri-star-line fs-16"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="ms-auto my-auto">
          <span className="me-4 my-auto fs-16 fw-semibold">${item.newprice}</span>
        </div>
      </div>
    ));
  } else {
    content = actionType === 'shopDetailsBuyNow' ? (
      cartItems.map((item, index) => (
        <div className="d-flex mb-4" key={index}>
          <div className="d-sm-flex">
            <img className="avatar img-fluid avatar-xl border p-0 br-7" src={item.imagesrc} alt="img" />
            <div className="ms-sm-3 mt-2">
              <h4 className="mb-1 fw-semibold fs-14"><Link to="#">{item.itemname}</Link></h4>
              <div className="mb-2 text-warning fs-14">
                <div className="mb-2 text-warning fs-14">
                  <i className="ri-star-fill fs-16"></i>
                  <i className="ri-star-fill fs-16"></i>
                  <i className="ri-star-fill fs-16"></i>
                  <i className="ri-star-half-line fs-16"></i>
                  <i className="ri-star-line fs-16"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-auto my-auto">
            <span className="me-4 my-auto fs-16 fw-semibold">{item.newprice}</span>
          </div>
        </div>
      ))
    ) : (
      defaultcheckoutitem.map((item, index) => (
        <div className="d-flex mb-4" key={index}>
          <div className="d-sm-flex">
            <img className="avatar img-fluid avatar-xl border p-0 br-7" src={item.imagesrc} alt="img" />
            <div className="ms-sm-3 mt-2">
              <h4 className="mb-1 fw-semibold fs-14"><Link to="#">{item.itemname}</Link></h4>
              <div className="mb-2 text-warning fs-14">
                <div className="mb-2 text-warning fs-14">
                  <i className="ri-star-fill fs-16"></i>
                  <i className="ri-star-fill fs-16"></i>
                  <i className="ri-star-fill fs-16"></i>
                  <i className="ri-star-half-line fs-16"></i>
                  <i className="ri-star-line fs-16"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-auto my-auto">
            <span className="me-4 my-auto fs-16 fw-semibold">{item.newprice}</span>
          </div>
        </div>
      ))
    );
  }

  return (
    <Fragment>

      <Pageheader homepage='Checkout' activepage='E-commerce' page='Checkout' />
      <Row>
        <Col xl={8} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <h3 className="card-title">Billing Information</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Company Name <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Company name" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address <span className="text-red">*</span></Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Country <span className="text-red">*</span></Form.Label>
                    <Select options={Country} classNamePrefix="Select2" placeholder='--Select--' />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Address <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Home Address" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City <span className="text-red">*</span></Form.Label>
                    <Form.Control type="text" placeholder="City" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Postal Code <span className="text-red">*</span></Form.Label>
                    <Form.Control type="number" placeholder="ZIP Code" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header>
              <h3 className="card-title">Payment Information</h3>
            </Card.Header>
            <Card.Body>
              <div className="card-pay">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Nav as='ul' variant="" className="tabs-menu">
                    <Nav.Item as='li' className="m-0"> <Nav.Link eventKey="first" className="rounded-0"><i className="ri-bank-card-line align-bottom fs-16"></i> Credit Card</Nav.Link> </Nav.Item>
                    <Nav.Item as='li' className="m-0"> <Nav.Link eventKey="second" className="rounded-0"><i className="ri-paypal-fill align-bottom fs-16"></i> Paypal</Nav.Link> </Nav.Item>
                    <Nav.Item as='li' className="m-0"> <Nav.Link eventKey="third" className="rounded-0"><i className="ri-bank-fill align-bottom fs-16"></i> Bank Transfer</Nav.Link> </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="bg-danger-transparent-2 text-danger br-3 mb-4" role="alert">
                        Please Enter Valid Details</div>
                      <Form.Group className="mb-3">
                        <Form.Label>Card Holder Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Card number</Form.Label>
                        <InputGroup>
                          <Form.Control type="text" placeholder="Search for..." />
                          <InputGroup.Text className="btn btn-success shadow-none">
                            <i className="ri-visa-fill"></i> &nbsp;
                            <i className="ri-bank-card-fill"></i> &nbsp;
                            <i className="ri-mastercard-fill"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                      <Row>
                        <Col sm={8}>
                          <Form.Group className="mb-3">
                            <Form.Label>Expiration</Form.Label>
                            <InputGroup>
                              <Form.Control type="number" placeholder="MM" name="Month" />
                              <Form.Control type="number" placeholder="YY" name="Year" />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col sm={4}>
                          <Form.Group>
                            <Form.Label>CVV <i
                              className="fa fa-question-circle"></i></Form.Label>
                            <Form.Control type="number" required="" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Link to="#" className="btn  btn-lg btn-primary mt-2">Confirm</Link>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                      <p>Paypal is easiest way to pay online</p>
                      <p><Link to="#" className="btn btn-primary"><i
                        className="fa fa-paypal"></i> Log in my Paypal</Link></p>
                      <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt. </p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

                      <p>Bank account details</p>
                      <dl className="card-text">
                        <dt>BANK: </dt>
                        <dd> THE UNION BANK 0456</dd>
                      </dl>
                      <dl className="card-text">
                        <dt>Account Number: </dt>
                        <dd> 67542897653214</dd>
                      </dl>
                      <dl className="card-text">
                        <dt>IBAN: </dt>
                        <dd>543218769</dd>
                      </dl>
                      <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12} >
          <Card className="custom-card cart">
            <Card.Header>
              <h3 className="card-title">Your Order</h3>
            </Card.Header>
            <Card.Body>
              <div className={actionType === 'shoppingCartCheckOut' ? 'dynamic_checkout' : ''}>
                {content}
              </div>
              <table className="table mt-4">
                <tbody>
                  <tr>
                    <td className="border-top-0 border-bottom-0">Sub Total</td>
                    <td className="text-end fw-bold border-top-0 border-bottom-0">$4,360</td>
                  </tr>
                  <tr>
                    <td className="border-top-0 border-bottom-0">Discount</td>
                    <td className="text-end fw-bold border-top-0 border-bottom-0">5%</td>
                  </tr>
                  <tr>
                    <td className="border-top-0 border-bottom-0">Shipping</td>
                    <td className="text-end fw-bold border-top-0 border-bottom-0">Free</td>
                  </tr>
                  <tr>
                    <td className="fs-20 fw-bold border-top-0 border-bottom-0">Total</td>
                    <td className="text-end fs-20 fw-bold border-top-0 border-bottom-0">$3,976</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <div className="card-footer text-end">
              <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shop/`} className="btn btn-primary" onClick={Placeorder}>Place Order</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Checkout;
