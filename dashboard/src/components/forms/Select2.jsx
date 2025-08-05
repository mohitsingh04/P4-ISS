import { Fragment, useState } from 'react';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Select from 'react-select'
import { BasicSelect, MultipleSelect, TemptingData } from '../../common/Commomarreydata';

const Select2 = () => {

    const [isEnabled, setIsEnabled] = useState(true);

    const handleEnableClick = () => {
        setIsEnabled(true);
    };

    const handleDisableClick = () => {
        setIsEnabled(false);
    };
    return (
        <Fragment>
            <Pageheader homepage='Select2' activepage='Forms' page='Select2' />

            <Row className="row-sm">
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Basic Select2 </div>
                        </Card.Header>
                        <Card.Body>
                            <Select options={BasicSelect} classNamePrefix="Select2" placeholder='Selection 1' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Multiple Select </div>
                        </Card.Header>
                        <Card.Body>
                            <Select options={MultipleSelect} classNamePrefix="Select2" isClearable={false} isMulti defaultValue={MultipleSelect[0]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Single Select With Placeholder </div>
                        </Card.Header>
                        <Card.Body>
                            <Select options={BasicSelect} classNamePrefix="Select2" defaultValue={BasicSelect[0]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Multiple Select With Placeholder </div>
                        </Card.Header>
                        <Card.Body>
                            <Select options={MultipleSelect} classNamePrefix="Select2" isClearable={false} isMulti defaultValue={MultipleSelect[0]} />
                        </Card.Body>
                    </Card>
                </Col><Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Templating </div>
                        </Card.Header>
                        <Card.Body className='basic-multi-select1'>
                            <Select options={TemptingData} classNamePrefix="Select2" defaultValue={TemptingData[0]} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Templating Selection </div>
                        </Card.Header>
                        <Card.Body>
                            <Select options={TemptingData} classNamePrefix="Select2" defaultValue={TemptingData[0]} />

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Disabling a Select2 control </div>
                        </Card.Header>
                        <Card.Body className="vstack gap-3">
                            {isEnabled ? (
                                <>
                                    <Select isMulti isClearable={false} options={BasicSelect} classNamePrefix="Select2" placeholder="Selection 1" menuPlacement='top' />
                                    <Select isMulti isClearable={false} options={BasicSelect} classNamePrefix="Select2" placeholder="Selection 1" menuPlacement='top' />
                                </>
                            ) : (
                                <>
                                    <Select isMulti isClearable={false} options={BasicSelect} classNamePrefix="Select2" placeholder="Selection 1" isDisabled menuPlacement='top' />
                                    <Select isMulti isClearable={false} options={BasicSelect} classNamePrefix="Select2" placeholder="Selection 1" isDisabled menuPlacement='top' />
                                </>
                            )}
                            <div className="btn-list">
                                <Button variant='primary-light' onClick={handleEnableClick}>Enable</Button>
                                <Button onClick={handleDisableClick}>Disable</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Select2;