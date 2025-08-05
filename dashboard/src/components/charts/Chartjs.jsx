import { Fragment } from 'react';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { Chartjsbar, Chartjsbubble, Chartjsdonut, Chartjsline, Chartjsmixed, Chartjspie, Chartjspolar, Chartjsradial, Chartjsscatter } from '../../common/Chartfunction';

const Chartjs = () => {
    return (
        <Fragment>
            <Pageheader homepage='Chartjs' activepage='Charts' page='Chartjs' />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Line Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Chartjsline />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Chartjsbar />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Pie Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Chartjspie />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Doughnut Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Chartjsdonut />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Mixed Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Chartjsmixed />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Polar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Chartjspolar />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Radial Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Chartjsradial />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Scatter Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Chartjsscatter />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Bubble Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Chartjsbubble />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Chartjs;