import React, { Fragment, useState } from "react";
import { Col, Row, Card, OverlayTrigger, Tooltip, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import { defaultWishlistdata } from "../../../common/Commomarreydata";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishlist, setSelectedItem } from "../../../common/redux/Action";
import ALLImages from "../../../common/Imagesdata";


const Wishlist = () => {

	const reduxWishlist = useSelector(state => state.wishlist);

	const [localWishlist, setLocalWishlist] = useState(defaultWishlistdata);
	const combinedWishlist = [...localWishlist, ...reduxWishlist];

	const cart = useSelector(state => state.cart);
	const products = useSelector(state => state.products);


	const dispatch = useDispatch();

	const handleDelete = (id) => {
		setLocalWishlist(localWishlist.filter(item => item.id !== id));
		dispatch(removeFromWishlist(id));
	};

	const handleItemClick = (item) => {
		dispatch(setSelectedItem(item));
	};

	const allIds = [...cart.map(item => item.id), ...products.map(item => item.id)];
	const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

	const handleAddToCart = (item) => {
		dispatch(addToCart({ ...item, id: nextId }));
	};

	const isEmpty = combinedWishlist.length === 0;

	return (
		<Fragment>

			<Pageheader homepage='Wishlist' activepage='E-commerce' page='Wishlist' />
			<Row>
				<Col xl={12} md={12}>
					<Card className="cart custom-card">
						<Card.Header>
							<h3 className="card-title">My Wish List</h3>
						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								{isEmpty ? (
									<div className="text-center">
										<img src={ALLImages('png13')} alt='' />
										<h5>Your Wishlist is Empty</h5>
										<h6>Add Some items to make me happy 😃</h6>
									</div>
								) : (
									<table className="table table-bordered table-vcenter text-nowrap border">
										<thead>
											<tr className="border-top">
												<th className="w-15">Product</th>
												<th className="w-5">Title</th>
												<th className="w-15">Price</th>
												<th className="w-10">Status</th>
												<th className="w-10">Action</th>
											</tr>
										</thead>
										<tbody>
											{combinedWishlist.map(item => (
												<tr key={item.id}>
													<td>
														<img src={item.imagesrc} alt="" className="cart-img" />
													</td>
													<td>{item.itemname}</td>
													<td className="fw-bold">{item.newprice}</td>
													<td>
														<span className={`badge bg-${item.status === 'Stock' ? 'success' : 'danger'}`}>
															{item.status}
														</span>
													</td>
													<td className="btn-list">
														<OverlayTrigger overlay={<Tooltip>Quick View</Tooltip>}><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingdetail/`} className="btn btn-icon btn-primary-transparent btn-wave waves-effect waves-light" onClick={() => handleItemClick(item)}><i className="fe fe-eye fs-13"></i></Link></OverlayTrigger>
														<OverlayTrigger overlay={<Tooltip>Add to cart</Tooltip>}><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart/`} className="btn btn-icon btn-info-transparent btn-wave waves-effect waves-light" onClick={() => handleAddToCart(item)}><i className="fe fe-shopping-cart fs-13"></i></Link></OverlayTrigger>
														<OverlayTrigger overlay={<Tooltip>Delete</Tooltip>}><Link to="#" className="btn btn-icon btn-danger-transparent btn-wave waves-effect waves-light" onClick={() => handleDelete(item.id)}><i className="fe fe-trash fs-13"></i></Link></OverlayTrigger>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								)}
							</div>
							{!isEmpty && (
								<div className="float-end mt-4">
									<Pagination>
										<Pagination.Item disabled>Prev</Pagination.Item>
										<Pagination.Item active>{1}</Pagination.Item>
										<Pagination.Item>{2}</Pagination.Item>
										<Pagination.Item>{3}</Pagination.Item>
										<Pagination.Item>Next</Pagination.Item>
									</Pagination>
								</div>
							)}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	)
}

export default Wishlist
