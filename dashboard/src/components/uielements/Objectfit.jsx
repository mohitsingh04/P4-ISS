import { Fragment, useState } from 'react';
import { Card, Col, Row, Tab, Tabs } from 'react-bootstrap';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import ALLImages from '../../common/Imagesdata';

const Objectfit = () => {

    const [isHidden, setIsHidden] = useState([false]);
    const toggleHidden = (index) => {
        const updatedHidden = [...isHidden];
        updatedHidden[index] = !updatedHidden[index];
        setIsHidden(updatedHidden);
    };
    return (
        <Fragment>
            <Pageheader homepage="Object Fit" activepage="UI Elements" page='Object Fit' />

            <Row className="row-sm">
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit Contain</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[0] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-contain border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[0] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-contain border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit Cover</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[1] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-cover border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[1] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-cover border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit Fill</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[2] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-fill border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[2] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-fill border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit Scale Down</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[3] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-scale border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[3] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-scale border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit None</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[4] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-none border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[4] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-none border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit Contain (SM - responsive)</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[5] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-sm-contain border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[5] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-sm-contain border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit Contain (MD - responsive)</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[6] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-md-contain border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[6] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-md-contain border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit Contain (LG - responsive)</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(7)}>Show Code<i className={`${isHidden[7] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[7] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-lg-contain border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[7] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-lg-contain border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit Contain (XL - responsive)</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(8)}>Show Code<i className={`${isHidden[8] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[8] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-xl-contain border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[8] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-xl-contain border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Object Fit Contain (XXL - responsive)</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(9)}>Show Code<i className={`${isHidden[9] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[9] ? 'd-none' : ''} object-fit-container`}>
                            <img src={ALLImages("media16")} className="object-fit-xxl-contain border rounded" alt="..." />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[9] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<img src={ALLImages("media16")} className="object-fit-xxl-contain border rounded" alt="..." />
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Object Fit Contain Video
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(10)}>Show Code<i className={`${isHidden[10] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[10] ? 'd-none' : ''} object-fit-container`}>
                            <video className="object-fit-contain rounded border" autoPlay loop muted>
                                <source src={ALLImages("Video1")} type="video/mp4" />
                            </video>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[10] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <video className="object-fit-contain rounded border" autoPlay loop muted>
        <source src={ALLImages("Video1")} type="video/mp4" />
    </video>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Object Fit Cover Video
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(11)}>Show Code<i className={`${isHidden[11] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[11] ? 'd-none' : ''} object-fit-container`}>
                            <video className="object-fit-cover rounded border" autoPlay loop muted>
                                <source src={ALLImages("Video1")} type="video/mp4" />
                            </video>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[11] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <video className="object-fit-cover rounded border" autoPlay loop muted>
        <source src={ALLImages("Video1")} type="video/mp4" />
    </video>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Object Fit Fill Video
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(12)}>Show Code<i className={`${isHidden[12] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[12] ? 'd-none' : ''} object-fit-container`}>
                            <video className="object-fit-fill rounded border" autoPlay loop muted>
                                <source src={ALLImages("Video1")} type="video/mp4" />
                            </video>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[12] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <video className="object-fit-fill rounded border" autoPlay loop muted>
        <source src={ALLImages("Video1")} type="video/mp4" />
    </video>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Object Fit Scale Video
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(13)}>Show Code<i className={`${isHidden[13] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[13] ? 'd-none' : ''} object-fit-container`}>
                            <video className="object-fit-scale rounded border" autoPlay loop muted>
                                <source src={ALLImages("Video1")} type="video/mp4" />
                            </video>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[13] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <video className="object-fit-scale rounded border" autoPlay loop muted>
        <source src={ALLImages("Video1")} type="video/mp4" />
    </video>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Object Fit None Video
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(14)}>Show Code<i className={`${isHidden[14] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[14] ? 'd-none' : ''} object-fit-container`}>
                            <video className="object-fit-none rounded border" autoPlay loop muted>
                                <source src={ALLImages("Video1")} type="video/mp4" />
                            </video>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[14] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<video className="object-fit-none rounded border" autoPlay loop muted>
    <source src={ALLImages("Video1")} type="video/mp4" />
</video>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Objectfit;