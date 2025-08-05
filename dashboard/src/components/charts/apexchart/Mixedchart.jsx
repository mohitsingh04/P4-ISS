import { Fragment } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { Linearea, Linecolumnarea, Mixedlinecolumn, MultipleYaxis } from '../../../common/Chartfunction';


const Mixedchart = () => {
    return (
        <Fragment>
            <Pageheader homepage='Apex Mixed Charts' activepage='Apex Charts' page='Apex Mixed Charts' />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Line & Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linecolumn">
                                <Mixedlinecolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Y-Axis Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-multiple-y">
                                <MultipleYaxis />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Line & Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linearea">
                                <Linearea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Line,Column & Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-all">
                                <Linecolumnarea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Mixedchart;