import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Basicarea, Datetimexaxis, Github, Negative, Nullarea, Spiline, Stacked } from '../../../common/Chartfunction';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';

const Areachart = () => {
    return (
        <Fragment>
            <Pageheader homepage='Apex Area Charts' activepage='Apex Charts' page='Apex Area Charts' />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-basic">
                                <Basicarea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Spline Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-spline">
                                <Spiline />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Area Chart With Negative Values</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-negative">
                                <Negative />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-stacked">
                                <Stacked />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Area Chart With Null Values</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-null">
                                <Nullarea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Datetimexaxis />
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Selection-Github Style Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className='Github_style'>
                            <Github />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Areachart;