import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Underconstruction = () => {
  const navigator = useNavigate();
  return (
    <Fragment>
      <Container>
        <Row className="text-center mx-auto mt-7 launch_date">
          <Col
            lg={8}
            sm={12}
            className="center-block align-items-center construction mx-auto "
          >
            <Card className="text-white bg-transparent border-0">
              <Card.Body className="mt-6 mt-sm-0">
                <h1 className="display-2 mb-0 fw-semibold text-primary fs-64 mt-4">
                  Coming Soon
                </h1>
                <p className="text-primary">
                  we apologize for your in-convenience....any quaries contact me{" "}
                </p>
                <h5 className="text-primary">
                  <strong>Contact:</strong> yogprerna@gmail.com
                </h5>
                <div className="mt-4">
                  <Button onClick={() => navigator(-1)}>Back</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Underconstruction;
