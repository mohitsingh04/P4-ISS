import React from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";
import { Datacrypto } from "../../common/Commomarreydata";


const Cryptocurrencies = () => {
  return (
    <div>
      <Pageheader homepage='Crypto-currencies' activepage='Advanced Ui' page='Crypto-currencies' />

      <Row>
        <Col md={12}>
          <Card className="border-0">
            <div className="table-responsive">
              <Table className="table table-bordered  card-table">
                <tbody>
                  <tr className="border-bottom">
                    <th >Name</th>
                    <th >Icon</th>
                    <th >Price</th>
                    <th className="text-center">% 24h</th>
                    <th>Market Cap</th>
                    <th>Circulating Supply</th>
                    <th>Volume 24H</th>
                    <th>CMGR/Month</th>
                    <th>Inflation</th>
                  </tr>
                  {Datacrypto.map((list, index) => (
                    <tr
                      key={index}
                      className="border-bottom"
                    >
                      <td>{list.NAME}</td>
                      <td className="text-center"><img src={list.ICON} className="w-4 h-4" alt="" /></td>
                      <td>{list.PRICE}</td>
                      <td className={`text-center text-${list.Color}`}>{list.HOUR} </td>
                      <td>{list.MARKETCAP}</td>
                      <td>{list.CIRCULATINGSUPPLY}</td>
                      <td className="ight">{list.VOLUME24H}</td>
                      <td>{list.CMGR}</td>
                      <td className="text-center">{list.INFLATION}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cryptocurrencies