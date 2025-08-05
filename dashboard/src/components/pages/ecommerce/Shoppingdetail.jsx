import React, { Fragment } from "react";
import { Tab, Row, Col, Card, Form, Carousel, Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import { CartData, shopBrand, shopCatagory, shopType } from "../../../common/Commomarreydata";
import ALLImages from "../../../common/Imagesdata";
import Select from 'react-select'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, buynow } from "../../../common/redux/Action";

const Shoppingdetail = () => {

  const selectedItem = useSelector(state => state.selectedItem);

  const localshopdetails = [{ id: 30, imagesrc: ALLImages('png10'), itemname: 'Lenovo Headset 330 Pentium Quad Core', newprice: '$1,399' }]

  const dispatch = useDispatch();

  const handleBuyNow = () => {
    if (selectedItem) {
      dispatch(buynow(selectedItem));
    }
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addToCart(selectedItem));
    }
  };

  return (
    <Fragment>
      <Pageheader homepage='Shopping detail' activepage='E-commerce' page='Shopping detail' />

      <Row>
        <Col lg={8} md={12}>
          <Card className="productdesc custom-card">
            <Card.Body>
              <div className="productdec text-center">
                <div className="bg-light-gray p-4 text-center br-5">
                  {selectedItem ? (
                    <img alt='Selected Product' src={selectedItem.imagesrc} />
                  ) : (
                    <img alt='Default Product' src={localshopdetails[0].imagesrc} />
                  )}
                </div>
              </div>
              <div className="text-center mt-5 pb-5 border-bottom">
                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart/`} className="btn btn-primary me-2" onClick={handleAddToCart}><i className="ri-shopping-cart-fill"> </i>Add to cart</Link>
                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/checkout/`} className="btn btn-secondary" onClick={handleBuyNow}><i className="ri-shopping-cart-fill"> </i> Buy Now</Link>
              </div>

              <div className="mt-4 mb-4">
                <h3>{selectedItem ? selectedItem.itemname : localshopdetails[0].itemname}</h3>
                <h5 className="mb-3 mt-2">Description</h5>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <p>On the other hand, we denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized .</p>
              </div>
              <div className="panel panel-primary">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className="tab-menu-heading">
                    <div className="tabs-menu">
                      <Nav ass='ul' variant="pills" >
                        <Nav.Item as='li'><Nav.Link eventKey="first">Specification</Nav.Link></Nav.Item>
                        <Nav.Item as='li'><Nav.Link eventKey="second">Dimensions</Nav.Link></Nav.Item>
                        <Nav.Item as='li'><Nav.Link eventKey="third">Reviews<Badge bg="secondary" className="ms-1">2</Badge></Nav.Link></Nav.Item>
                      </Nav>
                    </div>
                  </div>
                  <div className="panel-body tabs-menu-body">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">

                        <h4 className="mb-3 mt-2 fs-18">General</h4>
                        <ul className="list-unstyled mb-0">
                          <li className="row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Brand</Col>
                            <Col sm={3} lg={8} xl={3}>CASAMOTION</Col>
                          </li>
                          <li className=" row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Model Number </Col>
                            <Col sm={3} lg={8} xl={3}>AHLF016</Col>
                          </li>
                          <li className="p-b-20 row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Model Name </Col>
                            <Col sm={3} lg={8} xl={3}>casamotion</Col>
                          </li>
                          <li className="p-b-20 row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Suitable For </Col>
                            <Col sm={3} lg={8} xl={3}>Table, Floor</Col>
                          </li>
                          <li className="p-b-20 row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Material </Col>
                            <Col sm={3} lg={8} xl={3}>Wood</Col>
                          </li>
                          <li className="p-b-20 row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Color</Col>
                            <Col sm={3} lg={8} xl={3}>Brown</Col>
                          </li>
                        </ul>

                      </Tab.Pane>
                      <Tab.Pane eventKey="second">

                        <ul className="list-unstyled mb-0">
                          <li className="row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Width</Col>
                            <Col sm={3} lg={8} xl={3}>6.1 inch</Col>
                          </li>
                          <li className=" row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Height</Col>
                            <Col sm={3} lg={8} xl={3}>24 inch</Col>
                          </li>
                          <li className="p-b-20 row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Depth</Col>
                            <Col sm={3} lg={8} xl={3}>6.1 inch</Col>
                          </li>
                          <li className="p-b-20 row">
                            <Col sm={3} lg={4} xl={3} className="text-muted">Other Dimensions</Col>
                            <Col sm={3} lg={8} xl={3}>15.5*15.5*24CM</Col>
                          </li>
                        </ul>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">

                        <div className="media mb-3">
                          <div className=" me-3">
                            <Link to="#">
                              <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face5')} /> </Link>
                          </div>
                          <div className="media-body">
                            <h5 className="mt-0 mb-0">Gavin Murray</h5>
                            <div className="text-warning mb-0">
                              <i className="ri-star-fill fs-16"></i>
                              <i className="ri-star-fill fs-16"></i>
                              <i className="ri-star-fill fs-16"></i>
                              <i className="ri-star-half-line fs-16"></i>
                              <i className="ri-star-line fs-16"></i>
                            </div>
                            <p className="font-13 text-muted mb-0">Good Looking.........</p>
                            <Link to="#"><span className="badge btn-light rounded-pill">Reply</span></Link>
                          </div>
                        </div>
                        <div className="media mb-4">
                          <div className=" me-3">
                            <Link to="#">
                              <img className="media-object rounded-circle thumb-sm" alt="64x64" src={ALLImages('face15')} /> </Link>
                          </div>
                          <div className="media-body">
                            <h5 className="mt-0 mb-0">Paul Smith</h5>
                            <div className="text-warning mb-0">
                              <i className="ri-star-fill fs-16"></i>
                              <i className="ri-star-fill fs-16"></i>
                              <i className="ri-star-fill fs-16"></i>
                              <i className="ri-star-half-line fs-16"></i>
                              <i className="ri-star-line fs-16"></i>
                            </div>
                            <p className="font-13 text-muted mb-0">Very nice ! On the other
                              hand, we denounce with righteous indignation and dislike men
                              who are so beguiled and demoralized by the </p>
                            <Link to="#"><span className="badge btn-light rounded-pill">Reply</span></Link>
                          </div>
                        </div>
                        <h5 className="mb-3 fs-16">Add Review</h5>
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
                              <Form.Control as='textarea' rows="5" defaultValue='Your Review*' />
                            </Col>
                          </Form.Group>
                          <div className="">
                            <Link to="#" className="btn btn-primary btn-rounded  waves-effect waves-light">Submit</Link>
                          </div>
                        </Form>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title"> Categories &amp; Fliters</div>
            </Card.Header>
            <Card.Body>
              <div className="custom-checkbox custom-control mb-2">
                <input className="form-check-input me-1" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." defaultChecked />
                <label className="custom-control-label">Mens</label>
              </div>
              <div className="custom-checkbox mb-2 custom-control">
                <input className="form-check-input me-1" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..." />
                <label className="custom-control-label">Womens</label>
              </div>
              <div className="custom-checkbox mb-2 custom-control">
                <input className="form-check-input me-1" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." />
                <label className="custom-control-label">Kids</label>
              </div>
              <div className="custom-checkbox mb-2 custom-control">
                <input className="form-check-input me-1" type="checkbox" id="checkboxNoLabel4" value="" aria-label="..." />
                <label className="custom-control-label">Others</label>
              </div>
              <Form.Group className="mt-3">
                <Form.Label>Category</Form.Label>
                <Select options={shopCatagory} classNamePrefix="Select2" placeholder='--Select--' />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>Brand</Form.Label>
                <Select options={shopBrand} classNamePrefix="Select2" placeholder='--Select--' />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>Type</Form.Label>
                <Select options={shopType} classNamePrefix="Select2" placeholder='--Select--' />
              </Form.Group>
              <Form.Group className="mt-2 mb-3">
                <Form.Label>Color</Form.Label>
                <Select options={shopBrand} classNamePrefix="Select2" placeholder='--Select--' />
              </Form.Group>
              <Link className="btn btn-primary mt-1 me-2" to="#">Apply Filter</Link>
              <Link className="btn btn-danger mt-1" to="#">Search Now</Link>
            </Card.Body>
          </Card>
          <Card className="productdesc-1 custom-card">
            <Card.Body className="bg_gray">
              <Carousel className="p-2 border">
                {CartData.map(product => (
                  <Carousel.Item key={product.id}>
                    <img className="pro_img br-5 w-100" alt="Product" src={product.imagesrc} />
                    <div className="carouselproduct mt-4 text-center pb-4">
                      <h5 className=""><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shop/`} className="fs-16">{product.itemname}</Link></h5>
                      <ul className="product_price list-unstyled">
                        <li className="old_price border-bottom-0">${product.oldPrice.toFixed(2)}</li>
                        <li className="new_price border-bottom-0">${product.newprice.toFixed(2)}</li>
                      </ul>
                      <div className="mb-3 mt-2 text-warning">
                        {Array.from({ length: 5 }, (_, index) => (
                          <i key={index} className={`ri-star-${index < product.stars ? 'fill' : 'line'} fs-16`}></i>
                        ))}
                      </div>
                      <Link to="#" className={`btn btn-${product.buttonColor}`}><i className="ri-shopping-cart-fill"></i> {product.buttonText}</Link>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Shoppingdetail