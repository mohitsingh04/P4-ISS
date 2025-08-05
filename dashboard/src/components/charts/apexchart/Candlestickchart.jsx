import { Fragment } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { Candlebrush, Candleline, Candlexaxis } from '../../../common/Chartfunction';

const Candlestickchart = () => {
    return (
        <Fragment>
            <Pageheader homepage='Apex Candlestick Charts' activepage='Apex Charts' page='Apex Candlestick Charts' />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick Synced With Brush Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Candlebrush />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick With Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="candlestick-line">
                                <Candleline />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick With Cateory X-axis</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="candlestick-categoryx">
                                <Candlexaxis />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Fragment>
    );
};

export default Candlestickchart;