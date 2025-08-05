import React, { Fragment, useState } from 'react'
import { Card, Col, Pagination, Row, Tab, Tabs } from 'react-bootstrap';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';

const Paginations = () => {
    //show code
    const [isHidden, setIsHidden] = useState([false]);
    const toggleHidden = (index) => {
        const updatedHidden = [...isHidden];
        updatedHidden[index] = !updatedHidden[index];
        setIsHidden(updatedHidden);
    };
    return (
        <Fragment>
            <Pageheader homepage="Pagination" activepage="UI Elements" page='Pagination' />

            <Row className="row-sm">
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Basic Pagination
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
                            <Pagination>
                                <Pagination.Item disabled>Previous</Pagination.Item>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>Next</Pagination.Item>
                            </Pagination>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[0] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<Pagination>
    <Pagination.Item disabled>Previous</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>Next</Pagination.Item>
</Pagination>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Pagination With Icons
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
                            <Pagination>
                                <Pagination.Item><i className="bi bi-caret-left"></i></Pagination.Item>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item><i className="bi bi-caret-right"></i></Pagination.Item>
                            </Pagination>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[1] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <Pagination>
        <Pagination.Item><i className="bi bi-caret-left"></i></Pagination.Item>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item><i className="bi bi-caret-right"></i></Pagination.Item>
    </Pagination>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Pagination Sizing
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[2] ? 'd-none' : ''} d-flex flex-wrap justify-content-between gap-2`}>
                            <Pagination size="sm">
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                            </Pagination>
                            <Pagination>
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                            </Pagination>
                            <Pagination size="lg">
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                            </Pagination>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[2] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <Pagination size="sm">
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
    </Pagination>
    <Pagination>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
    </Pagination>
    <Pagination size="lg">
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
    </Pagination>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Center & Right Aligned Pagination
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
                            <Pagination className="justify-content-center">
                                <Pagination.Item disabled>Previous</Pagination.Item>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>Next</Pagination.Item>
                            </Pagination>
                            <Pagination className="justify-content-end mb-0">
                                <Pagination.Item disabled>Previous</Pagination.Item>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>Next</Pagination.Item>
                            </Pagination>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[3] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <Pagination className="justify-content-center">
        <Pagination.Item disabled>Previous</Pagination.Item>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>Next</Pagination.Item>
    </Pagination>
    <Pagination className="justify-content-end mb-0">
        <Pagination.Item disabled>Previous</Pagination.Item>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>Next</Pagination.Item>
    </Pagination>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Active and disabled states
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[4] ? 'd-none' : ''} d-flex flex-wrap`}>
                            <Pagination className="me-3">
                                <Pagination.Item disabled>Previous</Pagination.Item>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item active>{2}</Pagination.Item>
                                <Pagination.Item>Next</Pagination.Item>
                            </Pagination>
                            <Pagination>
                                <Pagination.Item disabled>Previous</Pagination.Item>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item active>{2}</Pagination.Item>
                                <Pagination.Item>Next</Pagination.Item>
                            </Pagination>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[4] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <Pagination className="me-3">
        <Pagination.Item disabled>Previous</Pagination.Item>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item active>{2}</Pagination.Item>
        <Pagination.Item>Next</Pagination.Item>
    </Pagination>
    <Pagination>
        <Pagination.Item disabled>Previous</Pagination.Item>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item active>{2}</Pagination.Item>
        <Pagination.Item>Next</Pagination.Item>
    </Pagination>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Pagination Style-1
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[5] ? 'd-none' : ''}`}>
                            <nav aria-label="Page navigation" className="pagination-style-1">
                                <Pagination className="mb-0 flex-wrap">
                                    <Pagination.Item disabled><i className="ri-arrow-left-s-line align-middle"></i></Pagination.Item>
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item active>{2}</Pagination.Item>
                                    <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                                    <Pagination.Item>{21}</Pagination.Item>
                                    <Pagination.Item><i className="ri-arrow-right-s-line align-middle"></i></Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[5] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<nav aria-label="Page navigation" className="pagination-style-1">
    <Pagination className="mb-0 flex-wrap">
        <Pagination.Item disabled><i className="ri-arrow-left-s-line align-middle"></i></Pagination.Item>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item active>{2}</Pagination.Item>
        <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
        <Pagination.Item>{21}</Pagination.Item>
        <Pagination.Item><i className="ri-arrow-right-s-line align-middle"></i></Pagination.Item>
    </Pagination>
</nav>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Pagination Style-2
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[6] ? 'd-none' : ''}`}>
                            <nav aria-label="Page navigation" className="pagination-style-2">
                                <Pagination className="pagination-style-2 mb-0 flex-wrap">
                                    <Pagination.Item disabled>Prev</Pagination.Item>
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                                    <Pagination.Item>{17}</Pagination.Item>
                                    <Pagination.Item className="pagination-next">next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[6] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <nav aria-label="Page navigation" className="pagination-style-2">
        <Pagination className="pagination-style-2 mb-0 flex-wrap">
            <Pagination.Item disabled>Prev</Pagination.Item>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
            <Pagination.Item>{17}</Pagination.Item>
            <Pagination.Item className="pagination-next">next</Pagination.Item>
        </Pagination>
    </nav>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Pagination Style-3
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(7)}>Show Code<i className={`${isHidden[7] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[7] ? 'd-none' : ''}`}>
                            <nav aria-label="Page navigation" className="pagination-style-3">
                                <Pagination className="pagination-style-3 mb-0 flex-wrap">
                                    <Pagination.Item disabled>Prev</Pagination.Item>
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                                    <Pagination.Item>{16}</Pagination.Item>
                                    <Pagination.Item className="pagination-next">next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[7] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<nav aria-label="Page navigation" className="pagination-style-3">
    <Pagination className="pagination-style-3 mb-0 flex-wrap">
        <Pagination.Item disabled>Prev</Pagination.Item>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
        <Pagination.Item>{16}</Pagination.Item>
        <Pagination.Item className="pagination-next">next</Pagination.Item>
    </Pagination>
</nav>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Pagination Style-4
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(8)}>Show Code<i className={`${isHidden[8] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[8] ? 'd-none' : ''}`}>
                            <nav aria-label="Page navigation" className="pagination-style-4">
                                <Pagination className="pagination-style-4 mb-0 flex-wrap">
                                    <Pagination.Item disabled>Prev</Pagination.Item>
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                                    <Pagination.Item>{16}</Pagination.Item>
                                    <Pagination.Item>{17}</Pagination.Item>
                                    <Pagination.Item className="pagination-next">next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[8] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <nav aria-label="Page navigation" className="pagination-style-4">
        <Pagination className="pagination-style-4 mb-0 flex-wrap">
            <Pagination.Item disabled>Prev</Pagination.Item>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
            <Pagination.Item>{16}</Pagination.Item>
            <Pagination.Item>{17}</Pagination.Item>
            <Pagination.Item className="pagination-next">next</Pagination.Item>
        </Pagination>
    </nav>
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

export default Paginations;