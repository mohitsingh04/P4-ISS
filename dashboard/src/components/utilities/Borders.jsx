import { Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import ALLImages from '../../common/Imagesdata';

const Borders = () => {

    const [isHidden, setIsHidden] = useState([false]);
    const toggleHidden = (index) => {
        const updatedHidden = [...isHidden];
        updatedHidden[index] = !updatedHidden[index];
        setIsHidden(updatedHidden);
    };

    return (
        <Fragment>
            <Pageheader homepage='Borders' activepage='Utilities' page='Borders' />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Borders
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
                            <span className="border border-container"></span>
                            <span className="border-top border-container"></span>
                            <span className="border-end border-container"></span>
                            <span className="border-bottom border-container"></span>
                            <span className="border-start border-container"></span>
                        </Card.Body>
                        <div className={`card-footer border-top-0 ${isHidden[0] ? '' : 'd-none'}`}>
                            <pre><code className='language-javascript'>
                                {`
<Card.Body>
    <span className="border border-container"></span>
    <span className="border-top border-container"></span>
    <span className="border-end border-container"></span>
    <span className="border-bottom border-container"></span>
    <span className="border-start border-container"></span>
</Card.Body>
`}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Remove borders
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
                            <span className="border-0 border-container"></span>
                            <span className="border border-top-0 border-container"></span>
                            <span className="border border-end-0 border-container"></span>
                            <span className="border border-bottom-0 border-container"></span>
                            <span className="border border-start-0 border-container"></span>
                        </Card.Body>
                        <div className={`card-footer border-top-0 ${isHidden[1] ? '' : 'd-none'}`}>
                            <pre><code className='language-javascript'>
                                {`
<Card.Body>
    <span className="border-0 border-container"></span>
    <span className="border border-top-0 border-container"></span>
    <span className="border border-end-0 border-container"></span>
    <span className="border border-bottom-0 border-container"></span>
    <span className="border border-start-0 border-container"></span>
</Card.Body>
`}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={5}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Border Widths
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[2] ? 'd-none' : ''}`}>
                            <span className="border border-container border-1"></span>
                            <span className="border border-container border-2"></span>
                            <span className="border border-container border-3"></span>
                            <span className="border border-container border-4"></span>
                            <span className="border border-container border-5"></span>
                        </Card.Body>
                        <div className={`card-footer border-top-0 ${isHidden[2] ? '' : 'd-none'}`}>
                            <pre><code className='language-javascript'>
                                {`
<Card.Body>
    <span className="border border-container border-1"></span>
    <span className="border border-container border-2"></span>
    <span className="border border-container border-3"></span>
    <span className="border border-container border-4"></span>
    <span className="border border-container border-5"></span>
</Card.Body>
`}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={7}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Border colors
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
                            <span className="border border-container border-primary"></span>
                            <span className="border border-container border-secondary"></span>
                            <span className="border border-container border-success"></span>
                            <span className="border border-container border-danger"></span>
                            <span className="border border-container border-warning"></span>
                            <span className="border border-container border-info"></span>
                            <span className="border border-container border-light"></span>
                            <span className="border border-container border-dark"></span>
                            <span className="border border-container border-white"></span>
                        </Card.Body>
                        <div className={`card-footer border-top-0 ${isHidden[3] ? '' : 'd-none'}`}>
                            <pre><code className='language-javascript'>
                                {`
<Card.Body>
    <span className="border border-container border-primary"></span>
    <span className="border border-container border-secondary"></span>
    <span className="border border-container border-success"></span>
    <span className="border border-container border-danger"></span>
    <span className="border border-container border-warning"></span>
    <span className="border border-container border-info"></span>
    <span className="border border-container border-light"></span>
    <span className="border border-container border-dark"></span>
    <span className="border border-container border-white"></span>
</Card.Body>
`}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Border color Styling
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[4] ? 'd-none' : ''}`}>
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email
                                    address</label>
                                <input type="email" className="form-control border-success"
                                    id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                                Below Shows Danger Border
                            </div>
                            <div
                                className="p-3 bg-info-transparent border border-info border-start-0 rounded-end mb-1">
                                Customizing borders with background colors
                            </div>
                        </Card.Body>
                        <div className={`card-footer border-top-0 ${isHidden[4] ? '' : 'd-none'}`}>
                            <pre><code className='language-javascript'>
                                {`
<Card.Body>
<div className="mb-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email
            address</label>
        <input type="email" className="form-control border-success"
            id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
        Below Shows Danger Border
    </div>
    <div
        className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
        Customizing borders with background colors
</div>
</Card.Body>
`}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Border with opacity
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[5] ? 'd-none' : ''}`}>
                            <div className="border border-success p-2 mb-2">This is default success border</div>
                            <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 border-opacity-10">This is 10% opacity
                                success
                                border
                            </div>
                        </Card.Body>
                        <div className={`card-footer border-top-0 ${isHidden[5] ? '' : 'd-none'}`}>
                            <pre><code className='language-javascript'>
                                {`
<Card.Body>
<div className="border border-success p-2 mb-2">This is default success border</div>
    <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
        opacity
        success border
    </div>
    <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
        opacity
        success border
    </div>
    <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
        opacity
        success border
    </div>
    <div className="border border-success p-2 border-opacity-10">This is 10% opacity
        success
        border
</div>
</Card.Body>
`}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Border Radius
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[6] ? 'd-none' : ''}`}>
                            <img src={ALLImages('media28')} className="bd-placeholder-img rounded" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img rounded-top" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img rounded-end" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img rounded-bottom" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img rounded-start" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img rounded-circle" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img  rounded-pill" alt="..." />
                        </Card.Body>
                        <div className={`card-footer border-top-0 ${isHidden[6] ? '' : 'd-none'}`}>
                            <pre><code className='language-javascript'>
                                {`
<Card.Body>
    <img src={ALLImages('media28')} className="bd-placeholder-img rounded" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img rounded-top" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img rounded-end" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img rounded-bottom" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img rounded-start" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img rounded-circle" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img  rounded-pill" alt="..." />
</Card.Body>
`}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Sizes
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(7)}>Show Code<i className={`${isHidden[7] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[7] ? 'd-none' : ''}`}>
                            <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
                            <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />
                        </Card.Body>
                        <div className={`card-footer border-top-0 ${isHidden[7] ? '' : 'd-none'}`}>
                            <pre><code className='language-javascript'>
                                {`
<Card.Body>
    <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
    <img src={ALLImages('media28')} className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />
</Card.Body>
`}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    );
};

export default Borders;