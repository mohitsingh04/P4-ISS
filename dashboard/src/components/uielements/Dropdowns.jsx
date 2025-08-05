import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Card, Col, Dropdown, DropdownButton, DropdownDivider, Row, Tab, Tabs } from 'react-bootstrap';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';

const Dropdowns = () => {
    // Show code

    const [isHidden, setIsHidden] = useState([false]);
    const toggleHidden = (index) => {
        const updatedHidden = [...isHidden];
        updatedHidden[index] = !updatedHidden[index];
        setIsHidden(updatedHidden);
    };

    return (
        <Fragment>
            <Pageheader homepage="Dropdowns" activepage="UI Elements" page='Dropdowns' />

            <Row>
                <Col xl={12}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Dropdowns</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    <div className="btn-group mt-2 mb-2">
                                        <Dropdown className='me-2'>
                                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                                Dropdown Button
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="btn-group mt-2 mb-2">
                                        <Dropdown className='me-2'>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                Dropdown Link
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[0] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            <div className="btn-group mt-2 mb-2">
                <Dropdown className='me-2'>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="btn-group mt-2 mb-2">
                <Dropdown className='me-2'>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Dropdown Link
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Single button dropdowns</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    {[
                                        { variant: 'primary', text: 'Action' },
                                        { variant: 'secondary', text: 'Action' },
                                        { variant: 'success', text: 'Action' },
                                        { variant: 'info', text: 'Action' },
                                        { variant: 'warning', text: 'Action' },
                                        { variant: 'danger', text: 'Action' },
                                    ].map((group, index) => (
                                        <ButtonGroup key={index} className="my-2 me-2">
                                            <Dropdown>
                                                <Dropdown.Toggle variant={group.variant} >
                                                    {group.text}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider className='my-0' />
                                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </ButtonGroup>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[1] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            {[
                { variant: 'primary', text: 'Action' },
                { variant: 'secondary', text: 'Action' },
                { variant: 'success', text: 'Action' },
                { variant: 'info', text: 'Action' },
                { variant: 'warning', text: 'Action' },
                { variant: 'danger', text: 'Action' },
            ].map((group, index) => (
                <ButtonGroup key={index} className="my-2 me-2">
                    <Dropdown>
                        <Dropdown.Toggle variant={group.variant} >
                            {group.text}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider className='my-0' />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            ))}
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Rounded Button Dropdowns</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[2] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    {[
                                        { variant: 'primary', text: 'Action' },
                                        { variant: 'secondary', text: 'Action' },
                                        { variant: 'success', text: 'Action' },
                                        { variant: 'info', text: 'Action' },
                                        { variant: 'warning', text: 'Action' },
                                        { variant: 'danger', text: 'Action' },
                                    ].map((group, index) => (
                                        <ButtonGroup key={index} className="my-2 me-2">
                                            <Dropdown>
                                                <Dropdown.Toggle variant={group.variant} className='rounded-pill'>
                                                    {group.text}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider className='my-0' />
                                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </ButtonGroup>
                                    ))}

                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[2] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            {[
            { variant: 'primary', text: 'Action' },
            { variant: 'secondary', text: 'Action' },
            { variant: 'success', text: 'Action' },
            { variant: 'info', text: 'Action' },
            { variant: 'warning', text: 'Action' },
            { variant: 'danger', text: 'Action' },
            ].map((group, index) => (
                <ButtonGroup key={index} className="my-2 me-2">
                    <Dropdown>
                        <Dropdown.Toggle variant={group.variant} className='rounded-pill'>
                            {group.text}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider className='my-0' />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            ))}

        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>

            </Row>

            <Row>
                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Outline Button Dropdowns</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    {[
                                        { variant: 'primary', text: 'Action' },
                                        { variant: 'secondary', text: 'Action' },
                                        { variant: 'success', text: 'Action' },
                                        { variant: 'info', text: 'Action' },
                                        { variant: 'warning', text: 'Action' },
                                        { variant: 'danger', text: 'Action' },
                                    ].map((group, index) => (
                                        <ButtonGroup key={index} className="my-2 me-2">
                                            <Dropdown>
                                                <Dropdown.Toggle variant={`outline-${group.variant}`}>
                                                    {group.text}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider className='my-0' />
                                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </ButtonGroup>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[3] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            {[
            { variant: 'primary', text: 'Action' },
            { variant: 'secondary', text: 'Action' },
            { variant: 'success', text: 'Action' },
            { variant: 'info', text: 'Action' },
            { variant: 'warning', text: 'Action' },
            { variant: 'danger', text: 'Action' },
            ].map((group, index) => (
                <ButtonGroup key={index} className="my-2 me-2">
                    <Dropdown>
                        <Dropdown.Toggle variant={\`outline-\${group.variant}\`}>
                            {group.text}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider className='my-0' />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            ))}
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Rounded Outline Button Dropdowns</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[4] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    {[
                                        { variant: 'primary', text: 'Action' },
                                        { variant: 'secondary', text: 'Action' },
                                        { variant: 'success', text: 'Action' },
                                        { variant: 'info', text: 'Action' },
                                        { variant: 'warning', text: 'Action' },
                                        { variant: 'danger', text: 'Action' },
                                    ].map((group, index) => (
                                        <ButtonGroup key={index} className="my-2 me-2">
                                            <Dropdown>
                                                <Dropdown.Toggle variant={`outline-${group.variant}`} className='rounded-pill'>
                                                    {group.text}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                    <Dropdown.Divider className='my-0' />
                                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </ButtonGroup>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[4] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            {[
            { variant: 'primary', text: 'Action' },
            { variant: 'secondary', text: 'Action' },
            { variant: 'success', text: 'Action' },
            { variant: 'info', text: 'Action' },
            { variant: 'warning', text: 'Action' },
            { variant: 'danger', text: 'Action' },
            ].map((group, index) => (
                <ButtonGroup key={index} className="my-2 me-2">
                    <Dropdown>
                        <Dropdown.Toggle variant={\`outline-\${group.variant}\`} className='rounded-pill'>
                            {group.text}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider className='my-0' />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            ))}
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>

            </Row>

            <Row>
                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Split Button Dropdowns</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[5] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    {[
                                        { variant: 'primary', text: 'Action' },
                                        { variant: 'secondary', text: 'Action' },
                                        { variant: 'success', text: 'Action' },
                                        { variant: 'info', text: 'Action' },
                                        { variant: 'warning', text: 'Action' },
                                        { variant: 'danger', text: 'Action' },
                                    ].map((btnGroup, index) => (
                                        <ButtonGroup key={index} className="my-2 me-2">
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant={btnGroup.variant}>{btnGroup.text}</Button>
                                                <Dropdown.Toggle split variant={btnGroup.variant} id={`dropdown-split-${index}`} />
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>Action</Dropdown.Item>
                                                    <Dropdown.Item>Another action</Dropdown.Item>
                                                    <Dropdown.Item>Something else here</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item>Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </ButtonGroup>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[5] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            {[
            { variant: 'primary', text: 'Action' },
            { variant: 'secondary', text: 'Action' },
            { variant: 'success', text: 'Action' },
            { variant: 'info', text: 'Action' },
            { variant: 'warning', text: 'Action' },
            { variant: 'danger', text: 'Action' },
            ].map((btnGroup, index) => (
                <ButtonGroup key={index} className="my-2 me-2">
                    <Dropdown as={ButtonGroup}>
                        <Button variant={btnGroup.variant}>{btnGroup.text}</Button>
                        <Dropdown.Toggle split variant={btnGroup.variant} id={\`dropdown-split-\${index}\`} />
                        <Dropdown.Menu>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            ))}
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Dropdown Sizing</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[6] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    <Dropdown as={ButtonGroup} className="my-2 me-2">
                                        <Dropdown.Toggle size='sm' variant='secondary'>
                                            Small button
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown as={ButtonGroup} className="my-2 me-2">
                                        <Button variant='success' size='sm'>Small split button</Button>
                                        <Dropdown.Toggle split size='sm' variant="success" type="button" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown as={ButtonGroup} className="my-2 me-2">
                                        <Dropdown.Toggle size='lg' variant='info'>
                                            Small button
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown as={ButtonGroup} className="my-2">
                                        <Button variant='warning' size='lg'>Small split button</Button>
                                        <Dropdown.Toggle split size='sm' variant="warning" type="button" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[6] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            <Dropdown as={ButtonGroup} className="my-2 me-2">
                <Dropdown.Toggle size='sm' variant='secondary'>
                    Small button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className="my-2 me-2">
                <Button variant='success' size='sm'>Small split button</Button>
                <Dropdown.Toggle split size='sm' variant="success" type="button" />
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className="my-2 me-2">
                <Dropdown.Toggle size='lg' variant='info'>
                    Small button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className="my-2">
                <Button variant='warning' size='lg'>Small split button</Button>
                <Dropdown.Toggle split size='sm' variant="warning" type="button" />
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Dropup</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(7)}>Show Code<i className={`${isHidden[7] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[7] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    <Dropdown as={ButtonGroup} className="my-2 me-2" drop='up'>
                                        <Dropdown.Toggle variant='primary'>
                                            Dropup
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown as={ButtonGroup} className="my-2 me-2" drop='up'>
                                        <Button variant='secondary' size='sm'>Split dropup</Button>
                                        <Dropdown.Toggle split variant="secondary" type="button" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#" >Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[7] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            <Dropdown as={ButtonGroup} className="my-2 me-2" drop='up'>
                <Dropdown.Toggle variant='primary'>
                    Dropup
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className="my-2 me-2" drop='up'>
                <Button variant='secondary' size='sm'>Split dropup</Button>
                <Dropdown.Toggle split variant="secondary" type="button" />
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#" >Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Dropup Right</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(8)}>Show Code<i className={`${isHidden[8] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[8] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">

                                    <Dropdown as={ButtonGroup} className="my-2 me-2" drop='end'>
                                        <Dropdown.Toggle variant='primary'>
                                            Dropend
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown as={ButtonGroup} className="my-2 me-2" drop='end'>
                                        <Button variant='secondary' size='sm'>Split dropend</Button>
                                        <Dropdown.Toggle split variant="secondary" type="button" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[8] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">

            <Dropdown as={ButtonGroup} className="my-2 me-2" drop='end'>
                <Dropdown.Toggle variant='primary'>
                    Dropend
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className="my-2 me-2" drop='end'>
                <Button variant='secondary' size='sm'>Split dropend</Button>
                <Dropdown.Toggle split variant="secondary" type="button" />
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Dropup Left</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(9)}>Show Code<i className={`${isHidden[9] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[9] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">

                                    <Dropdown as={ButtonGroup} className="my-2 me-2" drop='start'>
                                        <Dropdown.Toggle variant='primary'>
                                            Dropstart
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown as={ButtonGroup} className="my-2 me-2" drop='start'>
                                        <Button variant='secondary' size='sm'>Split dropstart</Button>
                                        <Dropdown.Toggle split variant="secondary" type="button" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <DropdownDivider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[9] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">

            <Dropdown as={ButtonGroup} className="my-2 me-2" drop='start'>
                <Dropdown.Toggle variant='primary'>
                    Dropstart
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className="my-2 me-2" drop='start'>
                <Button variant='secondary' size='sm'>Split dropstart</Button>
                <Dropdown.Toggle split variant="secondary" type="button" />
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <DropdownDivider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Active </h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(10)}>Show Code<i className={`${isHidden[10] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[10] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    <Dropdown as={ButtonGroup} className="my-2 me-2">
                                        <Dropdown.Toggle variant='success'>Dropdown</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#" active>Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[10] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            <Dropdown as={ButtonGroup} className="my-2 me-2">
                <Dropdown.Toggle variant='success'>Dropdown</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#" active>Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>

            </Row>
            <Row>
                <Col xl={4}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Disabled</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(11)}>Show Code<i className={`${isHidden[11] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[11] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    <Dropdown as={ButtonGroup} className="my-2 me-2">
                                        <Dropdown.Toggle variant='warning'>Disabled Menu</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#" disabled>Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[11] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            <Dropdown as={ButtonGroup} className="my-2 me-2">
                <Dropdown.Toggle variant='warning'>Disabled Menu</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#" disabled>Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xl={4} >
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                dropdowns with Forms
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(12)}>Show Code<i className={`${isHidden[12] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[12] ? 'd-none' : ''}`}>
                            <Dropdown>
                                <Dropdown.Toggle className="btn btn-secondary " type="button" id="dropdownMenu2"> Dropdown </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <form className="px-4 py-3">
                                        <div className="mb-3">
                                            <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleDropdownFormPassword1"
                                                className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                                <label className="form-check-label" for="dropdownCheck">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </form>
                                    <DropdownDivider />
                                    <Dropdown.Item href="#">New around here? Sign up</Dropdown.Item>
                                    <Dropdown.Item href="#">Forgot password?</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[12] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<Dropdown>
    <Dropdown.Toggle className="btn btn-secondary " type="button" id="dropdownMenu2"> Dropdown </Dropdown.Toggle>
    <Dropdown.Menu>
        <form className="px-4 py-3">
            <div className="mb-3">
                <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleDropdownFormPassword1"
                    className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        <DropdownDivider />
        <Dropdown.Item href="#">New around here? Sign up</Dropdown.Item>
        <Dropdown.Item href="#">Forgot password?</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <div className="col-xl-4">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Menu alignment
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(13)}>Show Code<i className={`${isHidden[13] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[13] ? 'd-none' : ''}`}>
                            <DropdownButton align="end" title="Right-aligned menu example" id="dropdown-menu-align-end" >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[13] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <DropdownButton align="end" title="Right-aligned menu example" id="dropdown-menu-align-end" >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </div>

            </Row>

            <Row>
                <Col xl={6} xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Dropdown menu centered
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(14)}>Show Code<i className={`${isHidden[14] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[14] ? 'd-none' : ''}`}>
                            <p className="card-title mb-3">Use <code>.dropdown-center</code> on the parent element. </p>
                            <Dropdown drop='down-centred'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Centered dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[14] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <Dropdown drop='down-centred'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Centered dropdown
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xl={6} xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Dropup centered
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(15)}>Show Code<i className={`${isHidden[15] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[15] ? 'd-none' : ''}`}>
                            <p className="card-title mb-3">Use <code>.dropup-center</code> on the parent element.</p>
                            <Dropdown drop='up-centred'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Centered dropup
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[15] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <Dropdown drop='up-centred'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Centered dropup
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>

                    </Card>
                </Col>
                <Col xl={6} xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Menu items
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(16)}>Show Code<i className={`${isHidden[16] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[16] ? 'd-none' : ''}`}>
                            <p className="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as dropdown items.</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[16] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xl={6} xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Dropdowns options
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(17)}>Show Code<i className={`${isHidden[17] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[17] ? 'd-none' : ''}`}>
                            <p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change the location of the dropdown.</p>
                            <div className="d-flex align-items-center">
                                <Dropdown className='me-1'>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" data-bs-offset="10,20">
                                        Offset
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="info">Reference</Button>
                                    <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[17] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="d-flex align-items-center">
        <Dropdown className='me-1'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" data-bs-offset="10,20">
                Offset
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup}>
            <Button variant="info">Reference</Button>
            <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Alignment options</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(18)}>Show Code<i className={`${isHidden[18] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[18] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    {[
                                        { vari: 'primary', align: '', drop: '', text: 'Dropdown' },
                                        { vari: 'secondary', align: 'end', drop: '', text: 'Right-aligned-menu' },
                                        { vari: 'success', align: 'lg-end', drop: '', text: 'Right-aligned-menu-lg' },
                                        { vari: 'info', align: 'lg-start', drop: '', text: 'left-aligned-menu-lg' },
                                        { vari: 'info', align: '', drop: 'start', text: 'DropStart' },
                                        { vari: 'info', align: '', drop: 'end', text: 'DropEnd' },
                                        { vari: 'info', align: '', drop: 'up', text: 'DropUp' },
                                    ].map((item, index) => (
                                        <Dropdown as={ButtonGroup} className="my-2 me-2" drop={item.drop} key={index}>
                                            <Dropdown.Toggle variant={item.vari}>
                                                {item.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align={item.align}>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[18] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            {[
                { vari: 'primary', align: '', drop: '', text: 'Dropdown' },
                { vari: 'secondary', align: 'end', drop: '', text: 'Right-aligned-menu' },
                { vari: 'success', align: 'lg-end', drop: '', text: 'Right-aligned-menu-lg' },
                { vari: 'info', align: 'lg-start', drop: '', text: 'left-aligned-menu-lg' },
                { vari: 'info', align: '', drop: 'start', text: 'DropStart' },
                { vari: 'info', align: '', drop: 'end', text: 'DropEnd' },
                { vari: 'info', align: '', drop: 'up', text: 'DropUp' },
            ].map((item, index) => (
                <Dropdown as={ButtonGroup} className="my-2 me-2" drop={item.drop} key={index}>
                    <Dropdown.Toggle variant={item.vari}>
                        {item.text}
                    </Dropdown.Toggle>
                    <Dropdown.Menu align={item.align}>
                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ))}
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Dark Dropdowns
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(19)}>Show Code<i className={`${isHidden[19] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[19] ? 'd-none' : ''}`}>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic"> Dropdown Button </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item className="text-white" href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item className="text-white" href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item className="text-white" href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[19] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic"> Dropdown Button </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
            <Dropdown.Item className="text-white" href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item className="text-white" href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item className="text-white" href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
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

                <Col xxl={12}>
                    <Card className='custom-card'>
                        <Card.Header className="justify-content-between">
                            <h6 className="card-title">Auto close behavior</h6>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(20)}>Show Code<i className={`${isHidden[20] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[20] ? 'd-none' : ''}`}>
                            <div className="text-wrap">
                                <div className="card-content">
                                    {[{ id: 'dropdown-autoclose-true', vari: 'info', label: 'Default Dropdown', items: ['Menu Item', 'Menu Item', 'Menu Item'], },
                                    { id: 'dropdown-autoclose-inside', vari: 'success', label: 'Clickable Outside', items: ['Menu Item', 'Menu Item', 'Menu Item'], autoClose: 'inside', },
                                    { id: 'dropdown-autoclose-outside', vari: 'teal', label: 'Clickable Inside', items: ['Menu Item', 'Menu Item', 'Menu Item'], autoClose: 'outside', },
                                    { id: 'dropdown-autoclose-false', vari: 'warning', label: 'Manual Close', items: ['Menu Item', 'Menu Item', 'Menu Item'], autoClose: false, },
                                    ].map((dropdown) => (
                                        <Dropdown key={dropdown.id} className="d-inline mx-2 " autoClose={dropdown.autoClose}>
                                            <Dropdown.Toggle className='my-1' variant={dropdown.vari} id={dropdown.id}>{dropdown.label}</Dropdown.Toggle>

                                            <Dropdown.Menu className='autoclose'>
                                                {dropdown.items.map((item, index) => (
                                                    <Dropdown.Item key={index} href="#">
                                                        {item}
                                                    </Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[20] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="text-wrap">
        <div className="card-content">
            {[{ id: 'dropdown-autoclose-true', vari: 'info', label: 'Default Dropdown', items: ['Menu Item', 'Menu Item', 'Menu Item'], },
            { id: 'dropdown-autoclose-inside', vari: 'success', label: 'Clickable Outside', items: ['Menu Item', 'Menu Item', 'Menu Item'], autoClose: 'inside', },
            { id: 'dropdown-autoclose-outside', vari: 'teal', label: 'Clickable Inside', items: ['Menu Item', 'Menu Item', 'Menu Item'], autoClose: 'outside', },
            { id: 'dropdown-autoclose-false', vari: 'warning', label: 'Manual Close', items: ['Menu Item', 'Menu Item', 'Menu Item'], autoClose: false, },
            ].map((dropdown) => (
                <Dropdown key={dropdown.id} className="d-inline mx-2 " autoClose={dropdown.autoClose}>
                    <Dropdown.Toggle className='my-1' variant={dropdown.vari} id={dropdown.id}>{dropdown.label}</Dropdown.Toggle>

                    <Dropdown.Menu className='autoclose'>
                        {dropdown.items.map((item, index) => (
                            <Dropdown.Item key={index} href="#">
                                {item}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            ))}
        </div>
    </div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <div className="col-xxl-6">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Responsive alignment end
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(21)}>Show Code<i className={`${isHidden[21] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`responsive-dropdown ${isHidden[21] ? 'd-none' : ''}`}>
                            <DropdownButton className='text-wrap' variant="secondary" as={ButtonGroup} align={{ lg: 'end' }} title="Left-aligned but right aligned when large screen" id="dropdown-menu-align-responsive-1" >
                                <Dropdown.Item eventKey="1">Menu item</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Menu item</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Menu item</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[21] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <DropdownButton variant="secondary" as={ButtonGroup} className='text-break' align={{ lg: 'end' }} title="Left-aligned but right aligned when large screen" id="dropdown-menu-align-responsive-1"  >
        <Dropdown.Item eventKey="1">Menu item</Dropdown.Item>
        <Dropdown.Item eventKey="2">Menu item</Dropdown.Item>
        <Dropdown.Item eventKey="2">Menu item</Dropdown.Item>
    </DropdownButton>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </div>
                <div className="col-xxl-6">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Responsive alignment left
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(22)}>Show Code<i className={`${isHidden[22] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[22] ? 'd-none' : ''} responsive-dropdown`}>
                            <DropdownButton variant="info" as={ButtonGroup} className='text-wrap' align={{ lg: 'start' }} title="Right-aligned but left aligned when large screen" id="dropdown-menu-align-responsive-1">
                                <Dropdown.Item eventKey="1">Menu item</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Menu item</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Menu item</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[22] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <DropdownButton variant="info" as={ButtonGroup} className='text-break' align={{ lg: 'start' }} title="Right-aligned but left aligned when large screen" id="dropdown-menu-align-responsive-1">
        <Dropdown.Item eventKey="1">Menu item</Dropdown.Item>
        <Dropdown.Item eventKey="2">Menu item</Dropdown.Item>
        <Dropdown.Item eventKey="2">Menu item</Dropdown.Item>
    </DropdownButton>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </div>
            </Row>

            <Row className="row-sm">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Custom Dropdown Menu's
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(23)}>Show Code<i className={`${isHidden[23] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[23] ? 'd-none' : ''}`}>
                            <div className="btn-list">
                                <Dropdown className="btn-group">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">Primary</Dropdown.Toggle>
                                    <Dropdown.Menu variant='primary'>
                                        <Dropdown.Item className="text-fixed-white" href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item className="text-fixed-white" href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item className="text-fixed-white" href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="btn-group">
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">Secondary</Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown-menu-secondary'>
                                        <Dropdown.Item className="text-fixed-white" href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item className="text-fixed-white" href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item className="text-fixed-white" href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="btn-group">
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic">Warning</Dropdown.Toggle>
                                    <Dropdown.Menu className="dropmenu-item-warning">
                                        <Dropdown.Item active href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="btn-group">
                                    <Dropdown.Toggle variant="info" id="dropdown-basic">Info</Dropdown.Toggle>
                                    <Dropdown.Menu className="dropmenu-item-info">
                                        <Dropdown.Item active href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="btn-group">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">Success</Dropdown.Toggle>
                                    <Dropdown.Menu className="dropmenu-light-success">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item active href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="btn-group">
                                    <Dropdown.Toggle variant="danger" id="dropdown-basic">Danger</Dropdown.Toggle>
                                    <Dropdown.Menu className="dropmenu-light-danger">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item active href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[23] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
    <div className="btn-list">
        <Dropdown className="btn-group">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">Primary</Dropdown.Toggle>
            <Dropdown.Menu variant='primary'>
                <Dropdown.Item className="text-fixed-white" href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item className="text-fixed-white" href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item className="text-fixed-white" href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="btn-group">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">Secondary</Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-menu-secondary'>
                <Dropdown.Item className="text-fixed-white" href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item className="text-fixed-white" href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item className="text-fixed-white" href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="btn-group">
            <Dropdown.Toggle variant="warning" id="dropdown-basic">Warning</Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-item-warning">
                <Dropdown.Item active href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="btn-group">
            <Dropdown.Toggle variant="info" id="dropdown-basic">Info</Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-item-info">
                <Dropdown.Item active href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="btn-group">
            <Dropdown.Toggle variant="success" id="dropdown-basic">Success</Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-light-success">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item active href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="btn-group">
            <Dropdown.Toggle variant="danger" id="dropdown-basic">Danger</Dropdown.Toggle>
            <Dropdown.Menu className="dropmenu-light-danger">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item active href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
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
                                Ghost Button Dropdowns
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(24)}>Show Code<i className={`${isHidden[24] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[24] ? 'd-none' : ''}`}>
                            <div className="btn-list">
                                {['primary-ghost', 'secondary-ghost', 'success-ghost', 'info-ghost', 'warning-ghost', 'danger-ghost'].map((idx, index) => (
                                    <Dropdown key={index} className="btn-group">
                                        <Dropdown.Toggle variant={idx} id="dropdown-basic">{idx.replace('-ghost', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                ))}
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[24] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<div className="btn-list">
    {['primary-ghost', 'secondary-ghost', 'success-ghost', 'info-ghost', 'warning-ghost', 'danger-ghost'].map((idx, index) => (
        <Dropdown key={index} className="btn-group">
            <Dropdown.Toggle variant={idx} id="dropdown-basic">{idx.replace('-ghost', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    ))}
</div>
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
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                non-interactive dropdown items
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(25)}>Show Code<i className={`${isHidden[25] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[25] ? 'd-none' : ''}`}>
                            <p className="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown items.</p>
                            <div className="bd-example">
                                <ul className="dropdown-menu">
                                    <li><span className="dropdown-item-text">Dropdown item text</span>
                                    </li>
                                    <li><a className="dropdown-item">Action</a></li>
                                    <li><a className="dropdown-item">Another action</a></li>
                                    <li><a className="dropdown-item">Something else here</a>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[25] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<div className="bd-example">
    <ul className="dropdown-menu">
        <li><span className="dropdown-item-text">Dropdown item text</span>
        </li>
        <li><a className="dropdown-item">Action</a></li>
        <li><a className="dropdown-item">Another action</a></li>
        <li><a className="dropdown-item">Something else here</a>
        </li>
    </ul>
</div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Dropdown Headers
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(26)}>Show Code<i className={`${isHidden[26] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[26] ? 'd-none' : ''}`}>
                            <p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
                            <div className="bd-example">
                                <ul className="dropdown-menu">
                                    <li>
                                        <h6 className="dropdown-header">Dropdown header</h6>
                                    </li>
                                    <li><a className="dropdown-item">Action</a></li>
                                    <li><a className="dropdown-item">Another action</a></li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[26] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<div className="bd-example">
    <ul className="dropdown-menu">
        <li>
            <h6 className="dropdown-header">Dropdown header</h6>
        </li>
        <li><a className="dropdown-item">Action</a></li>
        <li><a className="dropdown-item">Another action</a></li>
        <li><a className="dropdown-item">Something else here</a></li>
    </ul>
</div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Dropdown Dividers
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(27)}>Show Code<i className={`${isHidden[27] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[27] ? 'd-none' : ''}`}>
                            <div className="bd-example">
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-header" to="#">Heading</Link></li>
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to="#">Separated link</Link></li>
                                </ul>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[27] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<div className="bd-example">
    <ul className="dropdown-menu">
        <li><Link className="dropdown-header" to="#">Heading</Link></li>
        <li><Link className="dropdown-item" to="#">Action</Link></li>
        <li><Link className="dropdown-item" to="#">Another action</Link></li>
        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
        <li>
            <hr className="dropdown-divider" />
        </li>
        <li><Link className="dropdown-item" to="#">Separated link</Link></li>
    </ul>
</div>
</Card.Body>
`}
                                    </code></pre>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Dropdown Menu Text
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(28)}>Show Code<i className={`${isHidden[28] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[28] ? 'd-none' : ''}`}>
                            <div className="bd-example">
                                <div className="dropdown-menu p-4 text-muted" style={{ maxWidth: "200px" }}>
                                    <p>
                                        Some example text that's free-flowing within the dropdown menu.
                                    </p>
                                    <p className="mb-0">
                                        And this is more example text.
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[28] ? '' : 'd-none'} border-top-0`}>
                            <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                                <Tab eventKey="home" title="Jsx">
                                    <pre><code className='language-javascript'>
                                        {`
<Card.Body>
<div className="bd-example">
    <div className="dropdown-menu p-4 text-muted" style={{ maxWidth: "200px" }}>
        <p>
            Some example text that's free-flowing within the dropdown menu.
        </p>
        <p className="mb-0">
            And this is more example text.
        </p>
    </div>
</div>
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

export default Dropdowns;