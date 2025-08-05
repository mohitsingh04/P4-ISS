import { Fragment } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { Bubble3D, Simplebubble } from '../../../common/Chartfunction';

const Bubblechart = () => {
    return (
        <Fragment>
            <Pageheader homepage='Apex Bubble Charts' activepage='Apex Charts' page='Apex Bubble Charts' />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Simple Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-simple">
                                <Simplebubble />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>3D Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-3d">
                                <Bubble3D />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Bubblechart;