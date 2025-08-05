import { Fragment, useState } from 'react';
import { Card, Col, Row, Navbar as ReactNavbar, NavDropdown, Nav, Form, Button, InputGroup, Container, Offcanvas, Collapse } from 'react-bootstrap';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import ALLImages from '../../common/Imagesdata';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <Pageheader homepage='Navbar' activepage='Advanced Ui' page='Navbar' />
            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Navbar with sub-component
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand><img src={ALLImages('logo5')} alt="" className="d-inline-block" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto mb-2 mb-lg-0">
                                            <Nav.Link active>Home</Nav.Link>
                                            <Nav.Link >Link</Nav.Link>
                                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                <NavDropdown.Item >Action</NavDropdown.Item>
                                                <NavDropdown.Item > Another action </NavDropdown.Item>
                                                <NavDropdown.Item >Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item disabled> Disabled </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link disabled>Disabled</Nav.Link>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <Button type="submit">Search</Button>
                                        </Form>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Brand With And Without Links
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary mb-3">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand><img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                </div>
                            </ReactNavbar>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand><img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Image and text
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand className="text-default d-inline-flex align-items-center gap-2"><img src={ALLImages('logo5')} alt="" className="d-inline-block align-text-top" />React BootStrap</ReactNavbar.Brand>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Nav with lists, links and dropdowns
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary mb-3">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand><img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link href="#home" className='me-2' active>Home</Nav.Link>
                                            <Nav.Link href="#link1" className='me-2'>Features</Nav.Link>
                                            <Nav.Link href="#link2" className='me-2'>Pricing</Nav.Link>
                                            <Nav.Link href="#link3" disabled>Disabled</Nav.Link>
                                        </Nav>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary mb-3">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand><img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link href="#home" className='me-2' active>Home</Nav.Link>
                                            <Nav.Link href="#link1" className='me-2'>Features</Nav.Link>
                                            <Nav.Link href="#link2" className='me-2'>Pricing</Nav.Link>
                                            <Nav.Link href="#link3" disabled>Disabled</Nav.Link>
                                        </Nav>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary mb-3">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand><img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link href="#home" className='me-2' active>Home</Nav.Link>
                                            <Nav.Link href="#link1" className='me-2'>Features</Nav.Link>
                                            <Nav.Link href="#link2" className='me-2'>Pricing</Nav.Link>
                                            <NavDropdown title="Dropdown link" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Forms In Navbar
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary mb-3">
                                <div className="container-fluid">
                                    <Form className="d-flex" role="search">
                                        <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <Button type="submit">Search</Button>
                                    </Form>
                                </div>
                            </ReactNavbar>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary mb-3">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand><img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                    <Form className="d-flex" role="search">
                                        <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <Button type="submit">Search</Button>
                                    </Form>
                                </div>
                            </ReactNavbar>
                            <h6 className="mb-3 fw-semibold">Input groups in navbar forms</h6>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className=" mb-3">
                                <div className="container-fluid">
                                    <InputGroup>
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </InputGroup>
                                </div>
                            </ReactNavbar>
                            <h6 className="mb-3 fw-semibold"> Variation buttons are supported as part of the navbar forms</h6>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className=" mb-3">
                                <Form className="container-fluid justify-content-start">
                                    <Button className="m-1" type="button">Main button</Button>
                                    <Button size="sm" variant="outline-secondary" className="m-1" type="button">Smaller button</Button>
                                </Form>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Navbar With Text
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className=" mb-3">
                                <div className="container-fluid">
                                    <span className="navbar-text">
                                        Navbar text with an inline element
                                    </span>
                                </div>
                            </ReactNavbar>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand>Navbar with text</ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto mb-2 mb-lg-0">
                                            <Nav.Link className='me-1' href="#home" active>Home</Nav.Link>
                                            <Nav.Link className='me-1' href="#link1">Features</Nav.Link>
                                            <Nav.Link href="#link2">Pricing</Nav.Link>
                                        </Nav>
                                        <span className="navbar-text">
                                            Navbar text with an inline element
                                        </span>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Transparent Color Schemes
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="primary-transparent" data-bs-theme="primary-transparent" className="bg-body-tertiary mb-3 navbar-primary-transparent">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand> <img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto mb-2 mb-lg-0">
                                            <Nav.Link className='me-1' href="#home" active>Home</Nav.Link>
                                            <Nav.Link className='me-1' href="#link1">Features</Nav.Link>
                                            <Nav.Link className='me-1' href="#link2">Pricing</Nav.Link>
                                            <Nav.Link href="#link3">About</Nav.Link>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <Button type="submit">Search</Button>
                                        </Form>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                            <ReactNavbar expand="lg" bg="secondary-transparent" data-bs-theme="secondary-transparent" className="bg-body-tertiary mb-3 navbar-secondary-transparent">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand> <img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto mb-2 mb-lg-0">
                                            <Nav.Link className='me-1' href="#home" active>Home</Nav.Link>
                                            <Nav.Link className='me-1' href="#link1">Features</Nav.Link>
                                            <Nav.Link className='me-1' href="#link2">Pricing</Nav.Link>
                                            <Nav.Link href="#link3">About</Nav.Link>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <Button variant="secondary" type="submit">Search</Button>
                                        </Form>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                            <ReactNavbar expand="lg" bg="dark-transparent" data-bs-theme="dark-transparent" className="bg-body-tertiary mb-3 navbar-dark-transparent">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand> <img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto mb-2 mb-lg-0">
                                            <Nav.Link className='me-1' href="#home" active>Home</Nav.Link>
                                            <Nav.Link className='me-1' href="#link1">Features</Nav.Link>
                                            <Nav.Link className='me-1' href="#link2">Pricing</Nav.Link>
                                            <Nav.Link href="#link3">About</Nav.Link>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <Button variant="dark" type="submit">Search</Button>
                                        </Form>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Solid Color Schemes
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" data-bs-theme="primary" className="navbar-primary mb-3">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand> <img src={ALLImages('logo4')} alt="" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto mb-2 mb-lg-0">
                                            <Nav.Link className='me-1' href="#home" active>Home</Nav.Link>
                                            <Nav.Link className='me-1' href="#link1">Features</Nav.Link>
                                            <Nav.Link className='me-1' href="#link2">Pricing</Nav.Link>
                                            <Nav.Link href="#link3">About</Nav.Link>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <Button variant='light' type="submit">Search</Button>
                                        </Form>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                            <ReactNavbar expand="lg" data-bs-theme="secondary" className="navbar-secondary mb-3">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand> <img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto mb-2 mb-lg-0">
                                            <Nav.Link className='me-1' href="#home" active>Home</Nav.Link>
                                            <Nav.Link className='me-1' href="#link1">Features</Nav.Link>
                                            <Nav.Link className='me-1' href="#link2">Pricing</Nav.Link>
                                            <Nav.Link href="#link3">About</Nav.Link>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <Button variant="light" type="submit">Search</Button>
                                        </Form>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="mb-3">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand> <img src={ALLImages('logo5')} alt="" /></ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto mb-2 mb-lg-0">
                                            <Nav.Link className='me-1' href="#home" active>Home</Nav.Link>
                                            <Nav.Link className='me-1' href="#link1">Features</Nav.Link>
                                            <Nav.Link className='me-1' href="#link2">Pricing</Nav.Link>
                                            <Nav.Link href="#link3">About</Nav.Link>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <Button variant="light" type="submit">Search</Button>
                                        </Form>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Containers
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h6>Too center</h6>
                            <Container>
                                <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="mb-3">
                                    <div className="container-fluid">
                                        <ReactNavbar.Brand>Navbar</ReactNavbar.Brand>
                                    </div>
                                </ReactNavbar>
                            </Container>
                            <h6>Change the responsive container to how to wide the content</h6>

                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="mb-3">
                                <div className="container-md">
                                    <ReactNavbar.Brand>Navbar</ReactNavbar.Brand>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Placement
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand>Default</ReactNavbar.Brand>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Placement
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" fixed="top">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand>Fixed top</ReactNavbar.Brand>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Placement
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" fixed="bottom">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand>Fixed bottom</ReactNavbar.Brand>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Placement
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" sticky="top">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand>Sticky top</ReactNavbar.Brand>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Scrolling
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary">
                                <div className="container-fluid">
                                    <ReactNavbar.Brand>Navbar scroll</ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
                                    <ReactNavbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto mb-2 mb-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                            <Nav.Link active>Home</Nav.Link>
                                            <Nav.Link >Link</Nav.Link>
                                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                <NavDropdown.Item >Action</NavDropdown.Item>
                                                <NavDropdown.Item > Another action </NavDropdown.Item>
                                                <NavDropdown.Item >Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item disabled> Disabled </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link >Link</Nav.Link>
                                            <Nav.Link >Link</Nav.Link>

                                        </Nav>
                                        <Form className="d-flex mt-lg-0 mt-3" role="search">
                                            <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <Button type="submit">Search</Button>
                                        </Form>
                                    </ReactNavbar.Collapse>
                                </div>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Responsive behaviors Toggler
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ReactNavbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-light">
                                <Container fluid>
                                    <ReactNavbar.Brand href="#home">Hidden brand</ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <ReactNavbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link active>Home</Nav.Link>
                                            <Nav.Link >Link</Nav.Link>
                                            <Nav.Link disabled>Disabled</Nav.Link>
                                        </Nav>
                                        <Nav>
                                            <Form className="d-flex mt-3 mt-lg-0" role="search">
                                                <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search" />
                                                <Button type="submit">Search</Button>
                                            </Form>
                                        </Nav>
                                    </ReactNavbar.Collapse>
                                </Container>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card external_content">
                        <Card.Header>
                            <div className="card-title">
                                External content
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Collapse in={open}>
                                <div className="bg-dark p-4">
                                    <h5 className="text-white h4">Collapsed content</h5>
                                    <span className="text-white op-7">Toggleable via the navbar brand.</span>
                                </div>
                            </Collapse>
                            <ReactNavbar className="navbar navbar-dark bg-dark rounded-0">
                                <Container fluid>
                                    <Button variant=''
                                        onClick={() => setOpen(!open)} className="nav-toggle border-0"
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                        <span className="navbar-toggler-icon"></span>
                                    </Button>
                                </Container>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Offcanvas
                            </div>
                        </Card.Header>
                        <Card.Body>

                            <ReactNavbar expand="xxxl" className="bg-light mb-3">
                                <Container fluid>
                                    <ReactNavbar.Brand>Navbar Offcanvas</ReactNavbar.Brand>
                                    <ReactNavbar.Toggle aria-controls="offcanvasNavbar" />
                                    <ReactNavbar.Offcanvas
                                        id="offcanvasNavbar"
                                        aria-labelledby="offcanvasNavbarLabel"
                                        placement="end"
                                        className='custom_offcanvas_nav'
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav as='ul' className="justify-content-end flex-grow-1 pe-3">
                                                <Nav.Item as='li'><Nav.Link aria-current="page" className='px-2' href="#link">Home</Nav.Link> </Nav.Item>
                                                <Nav.Item as='li'> <Nav.Link href="#link1" className='px-2'>Link</Nav.Link> </Nav.Item>
                                                <NavDropdown
                                                    title="Dropdown"
                                                    id="offcanvasNavbarDropdown-expand-false" className='px-2'
                                                >
                                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action4">
                                                        Another action
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action5">
                                                        Something else here
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                            <Form className="d-flex mt-3">
                                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                                <Button variant="primary" type="submit">Search</Button>
                                            </Form>
                                        </Offcanvas.Body>
                                    </ReactNavbar.Offcanvas>
                                </Container>
                            </ReactNavbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Navbar