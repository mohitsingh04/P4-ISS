import { Fragment, useState } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import Slider from 'rc-slider';
import { LabeledTwoThumbs, Marks, MinMaxSlider, ProgrameticSlider, StepSlider, UpdatingMarks } from '../../../common/Sliderfunction';
import RangeSlider from "react-range-slider-input";
import { connect } from 'react-redux';


const Rangeslider = ({ local_varaiable }) => {

    const [isHidden, setIsHidden] = useState([false]);
    const toggleHidden = (index) => {
        const updatedHidden = [...isHidden];
        updatedHidden[index] = !updatedHidden[index];
        setIsHidden(updatedHidden);
    };

    function valuetext(value) {
        return `${value}°C`;
    }
    return (
        <Fragment>
            <Pageheader homepage='Range Slider' activepage='Form Elements' page='Range Slider' />

            <Row className="row-sm">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'> Default Range </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
                            <input type="range" className="form-range" id="customRange1" />
                        </Card.Body>
                        <div className={`${isHidden[0] ? '' : 'd-none'} card-footer border-top-0`}>
                            {/* <!-- Prism Code --> */}

                            <pre><code className='language-javascript'>
                                {`
        <Card.Body>
        <input type="range" className="form-range" id="customRange1" />
        </Card.Body>
                `}
                            </code></pre>

                            {/* <!-- Prism Code --> */}
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'> Disabled Range </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
                            <input type="range" className="form-range" id="disabledRange" disabled />
                        </Card.Body>
                        <div className={`${isHidden[1] ? '' : 'd-none'} card-footer border-top-0`}>
                            {/* <!-- Prism Code --> */}

                            <pre><code className='language-javascript'>
                                {`
        <Card.Body>
        <input type="range" className="form-range" id="disabledRange" disabled />
        </Card.Body>
                `}
                            </code></pre>

                            {/* <!-- Prism Code --> */}
                        </div>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">Mui - Slider:</h6>
            <Row className='row-sm'>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'> Range With Min and Max Values </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[2] ? 'd-none' : ''}`}>
                            <MinMaxSlider />
                        </Card.Body>
                        <div className={`${isHidden[2] ? '' : 'd-none'} card-footer border-top-0`}>
                            {/* <!-- Prism Code --> */}

                            <pre><code className='language-javascript'>
                                {`
        <Card.Body>
        <input type="range" className="form-range" min="0" max="5" id="customRange2" />
        </Card.Body>
                `}
                            </code></pre>

                            {/* <!-- Prism Code --> */}
                        </div>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'> Range With Steps </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
                            <StepSlider />
                        </Card.Body>
                        <div className={`${isHidden[3] ? '' : 'd-none'} card-footer border-top-0`}>
                            {/* <!-- Prism Code --> */}

                            <pre><code className='language-javascript'>
                                {`
        <Card.Body>
        <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
        </Card.Body>
                `}
                            </code></pre>

                            {/* <!-- Prism Code --> */}
                        </div>
                    </Card>
                </Col>
            </Row>

            <h6 className="mb-3">rc - Slider:</h6>
            <Row className="row-sm">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'> Default-Styling </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[4] ? 'd-none' : ''}`}>
                            <Slider min={0} max={20} defaultValue={3} />
                        </Card.Body>
                        <div className={`${isHidden[4] ? '' : 'd-none'} card-footer border-top-0`}>
                            {/* <!-- Prism Code --> */}

                            <pre><code className='language-javascript'>
                                {`
        <Card.Body>
        <Slider min={0} max={20} defaultValue={3} />
        </Card.Body>
                `}
                            </code></pre>

                            {/* <!-- Prism Code --> */}
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'> Basic Rangeslider With Reverse value </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[5] ? 'd-none' : ''}`}>
                            <Slider min={0} max={20} reverse defaultValue={3} />
                        </Card.Body>
                        <div className={`${isHidden[5] ? '' : 'd-none'} card-footer border-top-0`}>
                            {/* <!-- Prism Code --> */}

                            <pre><code className='language-javascript'>
                                {`
        <Card.Body>
        <Slider min={0} max={20} reverse defaultValue={3} />
        </Card.Body>
                `}
                            </code></pre>

                            {/* <!-- Prism Code --> */}
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'> Multiple Rangesliders with fixed value </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[6] ? 'd-none' : ''} mb-3`}>
                            <Slider min={20} defaultValue={20} marks={{ 20: 20, 40: 40, 100: 100 }} step={null} />
                        </Card.Body>
                        <div className={`${isHidden[6] ? '' : 'd-none'} card-footer border-top-0`}>
                            {/* <!-- Prism Code --> */}

                            <pre><code className='language-javascript'>
                                {`
        <Card.Body>
        <Slider min={20} defaultValue={20} marks={{ 20: 20, 40: 40, 100: 100 }} step={null} />
        </Card.Body>
                `}
                            </code></pre>

                            {/* <!-- Prism Code --> */}
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card ProgrameticSliderchange">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'> Programmatic change </div>
                        </Card.Header>
                        <Card.Body className='mb-2'>
                            <ProgrameticSlider />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'>Basic Slider</div>
                        </Card.Header>
                        <Card.Body>
                            <RangeSlider />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'>Fit Handles</div>
                        </Card.Header>
                        <Card.Body>
                            <RangeSlider />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'>Rounded Styling</div>
                        </Card.Header>
                        <Card.Body>
                            <RangeSlider id="range-slider-yellow" />
                        </Card.Body>
                    </Card>
                </Col>

                {/* <Row> */}
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'>Square Styling</div>
                        </Card.Header>
                        <Card.Body>
                            <RangeSlider id="range-slider-ab" className="margin-lg" step={"any"} rangeSlideDisabled={true} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'>Labeled with Two thumbs</div>
                        </Card.Header>
                        <Card.Body>
                            <LabeledTwoThumbs rtl={local_varaiable.dir == 'rtl'} />
                        </Card.Body>
                    </Card>
                </Col>
                {/* </Row> */}
            </Row>

            <h6 className="mb-3">noUiSlider Colors:</h6>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Primary
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="primary-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    color="primary"
                                    className=''
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Secondary
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="secondary-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    color="secondary"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Warning
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="warning-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Info
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="info-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Success
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="success-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Danger
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="danger-colored-slider">
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
})

export default connect(mapStateToProps, {})(Rangeslider);