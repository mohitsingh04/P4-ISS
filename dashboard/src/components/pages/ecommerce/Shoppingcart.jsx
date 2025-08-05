import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import { shoppingcartData } from "../../../common/Commomarreydata";
import { addToCheckout, addToWishlist, removeFromCart, updateCartQuantity } from "../../../common/redux/Action";
import { useDispatch, useSelector } from "react-redux";
import ALLImages from "../../../common/Imagesdata";

const Shoppingcart = () => {

  const dispatch = useDispatch();
  const reduxCart = useSelector(state => state.cart);
  const [localCart, setLocalCart] = useState(shoppingcartData);
  const combinedCart = [...localCart, ...reduxCart];

  useEffect(() => {
    setLocalCart(localCart.filter(item => !reduxCart.some(reduxItem => reduxItem.id === item.id)));
  }, [reduxCart]);


  const handleDelete = (id) => {
    setLocalCart(localCart.filter(item => item.id !== id));
    dispatch(removeFromCart(id));
  };

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const handleCheckout = () => {
    const combinedItems = [...localCart, ...reduxCart];
    dispatch(addToCheckout(combinedItems));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setLocalCart(prevLocalCart =>
      prevLocalCart.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );

    dispatch(updateCartQuantity(id, newQuantity));
  };

  const isEmpty = combinedCart.length === 0;

  return (
    <Fragment>
      <Pageheader homepage='Shopping Cart' activepage='E-commerce' page='ShoppingCart' />

      <Row>
        <Col xl={8} lg={12}>
          <Card className="cart custom-card">
            <Card.Header>
              <h3 className="card-title">Shopping Cart</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                {isEmpty ? (
                  <div className="text-center">
                    <img src={ALLImages('png13')} alt='' />
                    <h6>Your Shopping Cart is Empty</h6>
                    <p>Add Some items to make me happy 😃</p>
                  </div>
                ) : (
                  <table className="table table-bordered table-vcenter text-nowrap mb-0">
                    <thead>
                      <tr className="border-top">
                        <th className="w-5">Product</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th className="w-150">Quantity</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {combinedCart.map(item => (
                        <tr key={item.id}>
                          <td>
                            <img src={item.imagesrc} alt="" className="cart-img" />
                          </td>
                          <td>{item.itemname}</td>
                          <td className="fw-bold">${item.newprice}</td>
                          <td className="product-quantity-container">
                            <div className="input-group rounded flex-nowrap border">
                              <button className="btn btn-icon btn-light input-group-text flex-fill product-quantity-minus border-0" onClick={() => updateQuantity(item.id, item.quantity - 1)}><i className="ri-subtract-line"></i></button>
                              <span className="m-2 text-center w-100" aria-label="quantity">{item.quantity}</span>
                              <button className="btn btn-icon btn-light input-group-text flex-fill product-quantity-plus border-0" onClick={() => updateQuantity(item.id, item.quantity + 1)}><i className="ri-add-line"></i></button>
                            </div>
                          </td>
                          <td>
                            <OverlayTrigger overlay={<Tooltip>Save for Wishlist</Tooltip>}><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist/`} className="btn btn-icon btn-secondary-transparent btn-wave waves-effect waves-light me-1" onClick={() => handleAddToWishlist(item)}><i className="ri-heart-line"></i></Link></OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}><Link to="#" className="btn btn-icon btn-info-transparent btn-wave waves-effect waves-light me-1" onClick={() => handleDelete(item.id)}><i className="ri-delete-bin-7-line"></i></Link></OverlayTrigger>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={12}>
          <Card className="custom-card">
            <Card.Header>
              <h3 className="card-title">Have coupon?</h3>
            </Card.Header>
            <Card.Body>
              <form>
                <div className="form-group">
                  <div className="input-group"> <input type="text" className="form-control coupon" placeholder="Coupon code" />
                    <span className="input-group-btn">
                      <button className="btn btn-primary btn-apply coupon rounded-0 rounded-end-2 py-2">Apply</button>
                    </span> </div>
                </div>
              </form>
            </Card.Body>
          </Card>
          <div className="card custom-card">
            <Card.Header>
              <h3 className="card-title">Price Details</h3>
            </Card.Header>
            <Card.Body>
              <table className="table border-top-0">
                <tbody>
                  <tr>
                    <td className="border-top-0 border-bottom-0">Sub Total</td>
                    <td className="text-end fw-bold border-top-0 border-bottom-0">
                      $4,360
                    </td>
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
                    <td className="text-end fs-20 fw-bold border-top-0 border-bottom-0">
                      $3,976
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <div className="card-footer">
              <div className="btn-list">
                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shop/`} className="btn btn-primary"><i className="fa fa-arrow-left me-1"></i>Continue Shopping</Link>
                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/checkout/`} className="btn btn-success float-sm-end" onClick={handleCheckout}>Check out<i className="fa fa-arrow-right me-1"></i></Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Shoppingcart;