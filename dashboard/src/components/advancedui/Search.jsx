import React, { Fragment, useEffect, useState } from "react";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";
import ALLImages from "../../common/Imagesdata";
import { Badge, Card, Col, Form, InputGroup, Pagination, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from 'react-select'
import { BabyKids, Electronics, Mens, More, Womens, searchData } from '../../common/Commomarreydata';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(searchData);

  // Function to handle search
  useEffect(() => {
    const filteredResults = searchData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm, searchData]);

  return (
    <Fragment>
      <Pageheader homepage='Search' activepage='Advanced Ui' page='Search' />

      <Row className="row-cards">
        <Col lg={12} xl={3}>
          <Row>
            <Col md={12} lg={6} xl={12}>
              <Card className="custom-card">
                <Card.Header>
                  <div className="card-title"> Categories</div>
                </Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label className="form-label mt-0">Mens</Form.Label>
                    <Select options={Mens} classNamePrefix="Select2" placeholder='--Select--' />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="form-label">Women</Form.Label>
                    <Select options={Womens} classNamePrefix="Select2" placeholder='--Select--' />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="form-label">Baby & Kids</Form.Label>
                    <Select options={BabyKids} classNamePrefix="Select2" placeholder='--Select--' />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="form-label">Electronics</Form.Label>
                    <Select options={Electronics} classNamePrefix="Select2" placeholder='--Select--' />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="form-label">Sport,Books & More </Form.Label>
                    <Select options={More} classNamePrefix="Select2" placeholder='--Select--' />
                  </Form.Group>
                  <Link to="#" className="btn btn-primary d-grid mt-4">Submit</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={6} xl={12}>
              <Card className="custom-card">
                <Card.Body className="h-100">
                  <div className="mb-4 text-center">
                    <img src={ALLImages('png5')} alt="img" className="img-fluid br-5" />
                  </div>
                  <h4 className="card-title text-center">Womens Shopping Zone</h4>
                  <div className="card-subtitle text-center">Upto 50% Discount slaes Every shopping
                    items</div>
                  <div className="text-center">
                    <div className="mt-3 ">
                      <Link to="#" className="btn btn-primary d-grid"> View More</Link>
                    </div>
                    <div className="mt-3 d-grid">
                      <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart/`} className="btn btn-secondary"><i className="fe fe-plus"></i> Add to cart</Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={12} xl={9}>
          <InputGroup>
            <Form.Control type="text" placeholder="" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <InputGroup.Text className="input-group-text btn btn-primary"><i className="fe fe-search fw-bold fs-16" aria-hidden="true"></i></InputGroup.Text>
          </InputGroup>
          <Card className="mt-4 users store border-bottom-0">
            <div className="table-responsive">
              <table className="table card-table table-vcenter text-nowrap">
                <tbody>

                  {searchResults.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center">No data</td>
                    </tr>
                  ) : (
                    searchResults.map((item, index) => (
                      <tr key={index}>
                        <td><img className="avatar avatar-md rounded-circle mt-1" src={item.image} alt={item.name} /></td>
                        <td>{item.name} {item.id == 3 || item.id == 7 ? (<Badge bg="primary" className="badge-md">New</Badge>) : ''}</td>
                        <td>
                          <div>
                            {item.rating.map((star, i) => (
                              <i key={i} className="ri-star-fill text-warning fs-18"></i>
                            ))}
                            <i className="ri-star-fill text-light  fs-18"></i>
                          </div>
                        </td>
                        <td className={`text-end text-${item.color} d-none d-md-table-cell text-nowrap`}>{item.discount}</td>
                        <td className="text-end">
                          <strong>{item.price}</strong>
                        </td>
                        <td className="text-end">
                          <Link to="#" className="btn btn-primary-light btn-sm">view</Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
          <div>

            <Pagination className='mb-5 float-end'>
              <Pagination.Item disabled>Prev</Pagination.Item>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>Next</Pagination.Item>
            </Pagination>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Search;