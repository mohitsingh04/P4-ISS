import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import SunEditor from 'suneditor-react';

const Suneditor = () => {
    return (
        <Fragment>
            <Pageheader homepage='Sun Editor' activepage='Form-Editor' page='Sun Editor' />

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Quill Snow Editor
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SunEditor />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Suneditor;