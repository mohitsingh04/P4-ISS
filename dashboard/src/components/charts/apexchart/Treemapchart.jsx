import { Fragment } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { Basictreemap, Colorrangetree, Distributedtree, Multidimensional } from '../../../common/Chartfunction';


const Treemapchart = () => {
    return (
        <Fragment>
            <Pageheader homepage='Apex Treemap Charts' activepage='Apex Charts' page='Apex Treemap Charts' />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Treemap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="treemap-basic">
                                <Basictreemap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Multi Dimensional Treemap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="treemap-multi">
                                <Multidimensional />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Distributed Treemap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="treemap-distributed">
                                <Distributedtree />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Treemap with color ranges</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="treemap-colorranges">
                                <Colorrangetree />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Treemapchart;