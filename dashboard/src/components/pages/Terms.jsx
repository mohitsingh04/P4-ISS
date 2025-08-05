import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";

const Terms = () => {
  return (
    <div>
      <Pageheader homepage='Terms' activepage='Pages' page='Terms' />

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="fs-18"><b>Welcome to Zanex</b></h5>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="fs-18"><b>Using Our Services</b></h5>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="fs-18"><b>Privacy policy</b></h5>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="fs-18"><b>Copyright </b></h5>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="fs-18"><b>Terms and Conditions</b></h5>
              <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
              <ul className="ps-0">
                <li><i className="bi bi-chevron-double-right" ></i> ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores </li>
                <li><i className="bi bi-chevron-double-right" ></i> quas molestias excepturi sint occaecati cupiditate non provident</li>
                <li><i className="bi bi-chevron-double-right" ></i> Nam libero tempore, cum soluta nobis est eligendi optio cumque</li>
                <li><i className="bi bi-chevron-double-right" ></i> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates</li>
                <li><i className="bi bi-chevron-double-right" ></i> repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus</li>
                <li><i className="bi bi-chevron-double-right" ></i> ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</li>
              </ul>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="text-start">
              <div className="terms">
                <p>Was this information is Helpful?</p>
                <Link to='#' className="btn btn-primary me-2">Yes</Link>
                <Link to='#' className="btn btn-secondary">No</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Terms