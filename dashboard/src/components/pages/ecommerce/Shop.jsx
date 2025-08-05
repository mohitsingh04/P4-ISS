import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { Pagination, Row, Card, InputGroup, Form, Col, OverlayTrigger, Tooltip, } from "react-bootstrap";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import { colorsData, shopBrand, shopCatagory, shopType } from "../../../common/Commomarreydata";
import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, setSelectedItem } from "../../../common/redux/Action";

const Shop = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.products);


  const handleItemClick = (item) => {
    dispatch(setSelectedItem(item));
  };

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const allIds = [...cart.map(item => item.id), ...products.map(item => item.id)];
  const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, id: nextId }));
  };


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(products);

  // Function to handle search
  useEffect(() => {
    const filteredResults = products.filter(item =>
      item.itemname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm, products]);

  return (
    <Fragment>
      <Pageheader homepage='Shop' activepage='E-commerce' page='Shop' />

      <Row className="row-cards">
        <Col xl={3} lg={4}>
          <Row>
            <Col md={12} lg={12}>
              <Form className="shop__filter card custom-card">
                <Card.Header>
                  <h3 className="card-title"> Colors </h3>
                </Card.Header>
                <Card.Body>
                  <Row className="gutters-xs">
                    {colorsData.map((color, index) => (
                      <div className="col-auto" key={index}>
                        <label className="colorinput">
                          <input name="color" type="radio" value={color.value} className="colorinput-input" defaultChecked={index === 0} />
                          <span className={`colorinput-color ${color.className}`}></span>
                        </label>
                      </div>
                    ))}
                  </Row>
                </Card.Body>
              </Form>
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
            </Col>
          </Row>
        </Col>
        <Col xl={9} lg={8}>
          <Card className="custom-card">
            <Row className="card-body p-2">
              <Col sm={12}>
                <InputGroup>
                  <Form.Control type="text" placeholder="Search ..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  <InputGroup.Text className="btn btn-primary">Search</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Card>
          <Row>

            {searchResults.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">No data</td>
              </tr>
            ) : (
              searchResults.map((item, index) => (
                <Col key={index} md={6} sm={6} xl={4}>
                  <Card className="custom-card item-card">

                    {/* Check if item has discount */}
                    {[2, 4, 9].includes(item.id) ? (<span className="ribbon1"> <span>{item.id == 9 ? '30%' : "25%"}</span> </span>) : ''}

                    {/* Check if item is new */}
                    {item.id == 1 && (<div className="ribbone">  <div className="ribbon"><span>new</span></div> </div>)}


                    <Card.Body className="product-grid6 p-0">
                      <div className="product-image6">

                        <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingdetail/`} onClick={() => handleItemClick(item)}>
                          <img className="img-fluid w-100" src={item.imagesrc} alt="img" />
                        </Link>

                      </div>
                      <div className="product-content text-center">
                        <div className="mb-2 text-warning">

                          {/* Star rating icons */}
                          {[1, 2, 3, 4, 5].map((_star, index) => (<i key={index} className={`ri-star-${index < 3 ? 'fill' : 'line'} fs-16`}></i>))}

                        </div>
                        <h4 className="title"><Link to="#">{item.itemname}</Link></h4>

                        {/* Show price with discount if available */}

                        <div className="price">${item.newprice}<span className="ms-4">{item.oldprice}</span></div>
                      </div>

                      <ul className="icons">
                        {/* Icons for Quick View, Wishlist, and Add to Cart */}
                        <li><OverlayTrigger overlay={<Tooltip>Quick View</Tooltip>}><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingdetail/`} className="btn" onClick={() => handleItemClick(item)}><i className="ri-eye-line"></i></Link></OverlayTrigger></li>
                        <li><OverlayTrigger overlay={<Tooltip>Add to Wishlist</Tooltip>}><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist/`} className="btn" onClick={() => handleAddToWishlist(item)}><i className="ri-heart-line"></i></Link></OverlayTrigger></li>
                        <li><OverlayTrigger overlay={<Tooltip>Add to Cart</Tooltip>}><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart/`} className="btn" onClick={() => handleAddToCart(item)}><i className="ri-shopping-cart-2-fill"></i></Link></OverlayTrigger></li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
          <div className="mb-5">
            <div className="float-end">
              <Pagination>
                <Pagination.Item disabled>Prev</Pagination.Item>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Shop;