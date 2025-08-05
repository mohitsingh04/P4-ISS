import { Fragment } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { Basiheatmap, Colorrange, Multiseriesheatmap, Shadesheatmap } from '../../../common/Chartfunction';

const Heatmapchart = () => {
    return (
        <Fragment>
            <Pageheader homepage='Apex Heatmap Charts' activepage='Apex Charts' page='Apex Heatmap Charts' />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-basic">
                                <Basiheatmap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Multi Series Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-multiseries">
                                <Multiseriesheatmap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Color Range Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-colorrange">
                                <Colorrange />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Heatmap Range Without Shades</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-range">
                                <Shadesheatmap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Heatmapchart;