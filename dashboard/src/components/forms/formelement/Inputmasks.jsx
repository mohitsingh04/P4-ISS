import { Fragment } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { NumericFormat, PatternFormat } from 'react-number-format';


const Inputmasks = () => {
    return (
        <Fragment>
            <Pageheader homepage='Input Masks' activepage='Form Elements' page='Input Masks' />

            <Row className="row-sm">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Format-1 </div>
                        </Card.Header>
                        <div className="card-body mask">
                            <NumericFormat className='form-control' value="20020220" allowLeadingZeros thousandSeparator="," />
                        </div>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Format-2 </div>
                        </Card.Header>
                        <Card.Body>
                            <PatternFormat className='form-control' value={123123} format="### ###" />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className="row-sm">

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Format-3 </div>
                        </Card.Header>
                        <Card.Body>
                            <PatternFormat className='form-control' value="411111" valueIsNumericString format="#### #### #### ####" mask="_" />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Number Formatting </div>
                        </Card.Header>
                        <Card.Body>
                            <NumericFormat className='form-control' type="text" value={1231231} thousandsGroupStyle="lakh" thousandSeparator="," />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className="row-sm">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'>Time Format</div>
                        </Card.Header>
                        <Card.Body>
                            <PatternFormat className='form-control' format="##:##:##" value="" placeholder='hh:mm:ss' valueIsNumericString={true} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Phone Number </div>
                        </Card.Header>
                        <Card.Body>
                            <PatternFormat className='form-control' format="+91- India (###) ###-####" value="" valueIsNumericString={true} placeholder='+91-India' />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className="row-sm">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> With Prefix </div>
                        </Card.Header>
                        <Card.Body>
                            <PatternFormat className='form-control' value='' prefix="Spruko" format="SPT - ###-##" placeholder='SPT - Card no.' />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Delimiter </div>
                        </Card.Header>
                        <Card.Body>
                            <PatternFormat className='form-control' value='' prefix="Spruko" format="### ### ### ####" placeholder='1234 567 890 1234' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Inputmasks;