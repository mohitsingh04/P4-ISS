import React, { Fragment } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";
import { Datainvoice } from "../../common/Commomarreydata";


const Invoice = () => {
  return (
    <Fragment>
      <Pageheader homepage='Invoice' activepage='Pages' page='Invoice' />
      <Row>
        <Col md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div className="clearfix">
                <div className="float-start">
                  <h3 className="card-title mb-0 fs-16">#INV-526</h3>
                </div>
                <div className="float-end">
                  <h3 className="card-title fs-16">Date: 12-09-2019</h3>
                </div>
              </div>
              <hr className="mb-2 mt-1" />
              <Row>
                <Col lg={6}>
                  <p className="h3">Invoice Form:</p>
                  <address>
                    Street Address<br />
                    State, City<br />
                    Region, Postal Code<br />
                    yourdomain@example.com
                  </address>
                </Col>
                <Col lg={6} className="text-end">
                  <p className="h3">Invoice To:</p>
                  <address>
                    Street Address<br />
                    State, City<br />
                    Region, Postal Code<br />
                    ypurdomain@example.com
                  </address>
                </Col>
              </Row>
              <div className="table-responsive push">
                <table className="table text-nowrap table-hover border">
                  <tbody>
                    <tr className=" ">
                      <th className="text-center fw-semibold"></th>
                      <th className="fw-semibold">Item</th>
                      <th className="text-center fw-semibold">Quantity</th>
                      <th className="text-end fw-semibold">Unit Price</th>
                      <th className="text-end fw-semibold">Sub Total</th>
                    </tr>
                    <tr>
                      <td className="text-center">1</td>
                      <td>
                        <p className="font-w600 mb-1">Logo Design</p>
                        <div className="text-muted">
                          <div className="text-muted">Sed ut perspiciatis unde omnis iste
                            natus error sit voluptatem accusantium doloremque laudantium
                          </div>
                        </div>
                      </td>
                      <td className="text-center">2</td>
                      <td className="text-end">$674</td>
                      <td className="text-end">$1,308</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>
                        <p className="font-w600 mb-1">Website wireframe for 2 pages</p>
                        <div className="text-muted">At vero eos et accusamus et iusto odio
                          dignissimos ducimus qui blanditiis praesentium voluptatum</div>
                      </td>
                      <td className="text-center">4</td>
                      <td className="text-end">$1,500</td>
                      <td className="text-end">$6,000</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>
                        <p className="font-w600 mb-1">PSD to HTML coding</p>
                        <div className="text-muted">Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        </div>
                      </td>
                      <td className="text-center">3</td>
                      <td className="text-end">$530</td>
                      <td className="text-end">$1,690</td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>
                        <p className="font-w600 mb-1">E-commerce Development</p>
                        <div className="text-muted">When our power of choice is untrammelled and
                          when nothing prevents our being able</div>
                      </td>
                      <td className="text-center">2</td>
                      <td className="text-end">$800</td>
                      <td className="text-end">$1,600</td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>
                        <p className="font-w600 mb-1">Design and layout of 2 pages in Photoshop
                        </p>
                        <div className="text-muted">Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                      </td>
                      <td className="text-center">2</td>
                      <td className="text-end">$720</td>
                      <td className="text-end">$1,440</td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="fw-bold text-uppercase text-end">Total</td>
                      <td className="fw-bold text-end h4">$12,038</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
            <div className="card-footer text-end">
              <button type="button" className="btn btn-primary mb-1 me-2" onClick={() => window.print()}><i className="si si-wallet"></i> Pay Invoice</button>
              <button type="button" className="btn btn-success mb-1 me-2" onClick={() => window.print()}><i className="si si-paper-plane"></i> Send Invoice</button>
              <button type="button" className="btn btn-info mb-1 me-2" onClick={() => window.print()}><i className="si si-printer"></i> Print Invoice</button>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Invoice