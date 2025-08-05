import { Fragment } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { Apexscatter, Datetimescatter, Imagefillescatter } from '../../../common/Chartfunction';

const Scatterchart = () => {
    return (
        <Fragment>
            <Pageheader homepage='Apex Scatter Charts' activepage='Apex Charts' page='Apex Scatter Charts' />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-basic">
                                <Apexscatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Datetime Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-datetime">
                                <Datetimescatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Image Fill Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-image">
                                <Imagefillescatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Scatterchart;