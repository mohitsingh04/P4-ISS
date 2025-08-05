import { Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import { BackDrop, BodyScroll, BodyScrollandBackDrop, LiveDemo, Placement } from '../../common/Offcanvasfunctions';
const Offcanvas = () => {
    //Show code

    const [isHidden, setIsHidden] = useState([false]);
    const toggleHidden = (index) => {
        const updatedHidden = [...isHidden];
        updatedHidden[index] = !updatedHidden[index];
        setIsHidden(updatedHidden);
    };
    return (
        <Fragment>
            <Pageheader homepage='Offcanvas' activepage='Advanced Ui' page='Offcanvas' />
            <Row className="row-sm">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Live demo
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>

                        </Card.Header>
                        <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
                            <LiveDemo />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[0] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
export function LiveDemo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <Button variant="primary" className="me-2 mb-1" onClick={handleShow}>
                Link with href
            </Button>
            <Button variant="primary" className="me-2 mb-1" onClick={handleShow}>
                Button with data-bs-target
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className="border-bottom">
                    <Offcanvas.Title>Notifications</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                        ***Body content****
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    )
}
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Body scrolling
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>

                        </Card.Header>
                        <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
                            <BodyScroll />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[1] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
export function BodyScroll() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <Button variant="primary" className="me-2" onClick={handleShow}>
                Enabled Body Scrolling
            </Button>

            <Offcanvas show={show} onHide={handleClose} scroll={true}>
                <Offcanvas.Header closeButton className="border-bottom">
                    <Offcanvas.Title>Notifications</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    ***Body content****
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    )
}
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Static backdrop
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>

                        </Card.Header>
                        <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
                            <BackDrop />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[3] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
export function BackDrop() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <Button variant="primary" className="me-2" onClick={handleShow}>
                Toggle Static Offcanvas
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop='true'>
                <Offcanvas.Header closeButton className="border-bottom">
                    <Offcanvas.Title>Notifications</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                      ***Body content****
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    )
}

                `}
                            </code></pre>
                        </div>

                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Body scrolling and backdrop
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>

                        </Card.Header>
                        <Card.Body className={`${isHidden[2] ? 'd-none' : ''}`}>
                            <BodyScrollandBackDrop />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[2] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
export function BodyScrollandBackDrop() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <Button variant="primary" className="me-2" onClick={handleShow}>
                Enable both Scrolling and backdrop
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop='true' scroll={true}>
                <Offcanvas.Header closeButton className="border-bottom">
                    <Offcanvas.Title>Notifications</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                     ***Body content****
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    )
}

                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Placement
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>

                        </Card.Header>
                        <Card.Body className={`${isHidden[4] ? 'd-none' : ''}`}>
                            <Placement />
                        </Card.Body>
                        <div className={`card-footer ${isHidden[4] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
export const Placement = () => {
    const placements = ['top', 'end', 'bottom'];
    const [show, setShow] = useState(false);
    const [selectedPlacement, setSelectedPlacement] = useState('');



    const handleShow = (placement) => {
        setShow(true);
        setSelectedPlacement(placement);
    };

    const handleClose = () => setShow(false);

    return (
        <>
            {placements.map((placement, idx) => (
                <Button key={idx} variant="primary" onClick={() => handleShow(placement)} className="me-2 mb-1" >
                    Toggle {placement === 'end' ? 'right' : placement} Offcanvas
                </Button>
            ))}

            <Offcanvas show={show} onHide={handleClose} placement={selectedPlacement}>
                <Offcanvas.Header closeButton className="border-bottom">
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as a placeholder. In real life, you can have the elements you have chosen, such as text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Offcanvas