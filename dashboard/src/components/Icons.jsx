import { Fragment } from 'react';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../layouts/layoutcomponents/Pageheader';


const Icons = () => {
    return (
        <Fragment>
            <Pageheader homepage='Icons' activepage='Icons' page='Icons' />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Bootstrap Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://icons.getbootstrap.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                <OverlayTrigger overlay={<Tooltip>bi bi-arrow-left-circle</Tooltip>}><li className="icons-list-item"><i className="bi bi-arrow-left-circle"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-arrows-move</Tooltip>}><li className="icons-list-item"><i className="bi bi-arrows-move"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-bag</Tooltip>}><li className="icons-list-item"><i className="bi bi-bag"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-bar-chart-line</Tooltip>}><li className="icons-list-item"><i className="bi bi-bar-chart-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-basket</Tooltip>}><li className="icons-list-item"><i className="bi bi-basket"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-bell</Tooltip>}><li className="icons-list-item"><i className="bi bi-bell"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-book</Tooltip>}><li className="icons-list-item"><i className="bi bi-book"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-box</Tooltip>}><li className="icons-list-item"><i className="bi bi-box"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-briefcase</Tooltip>}><li className="icons-list-item"><i className="bi bi-briefcase"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-brightness-high</Tooltip>}><li className="icons-list-item"><i className="bi bi-brightness-high"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-calendar</Tooltip>}><li className="icons-list-item"><i className="bi bi-calendar"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bi bi-paint-bucket</Tooltip>}><li className="icons-list-item"><i className="bi bi-paint-bucket"></i></li></OverlayTrigger>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Remix Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://remixicon.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="ri-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                <OverlayTrigger overlay={<Tooltip>ri-home-line</Tooltip>}><li className="icons-list-item"><i className="ri-home-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-mail-line</Tooltip>}><li className="icons-list-item"><i className="ri-mail-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-briefcase-line</Tooltip>}><li className="icons-list-item"><i className="ri-briefcase-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-window-line</Tooltip>}><li className="icons-list-item"><i className="ri-window-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-chat-2-line</Tooltip>}><li className="icons-list-item"><i className="ri-chat-2-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-chat-settings-line</Tooltip>}><li className="icons-list-item"><i className="ri-chat-settings-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-edit-line</Tooltip>}><li className="icons-list-item"><i className="ri-edit-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-layout-line</Tooltip>}><li className="icons-list-item"><i className="ri-layout-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-code-s-slash-line</Tooltip>}><li className="icons-list-item"><i className="ri-code-s-slash-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-airplay-line</Tooltip>}><li className="icons-list-item"><i className="ri-airplay-line"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ri-file-line</Tooltip>}><li className="icons-list-item"><i className="ri-file-line"></i></li></OverlayTrigger>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Feather Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://feathericons.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                <OverlayTrigger overlay={<Tooltip>fe fe-activity</Tooltip>}><li className="icons-list-item"><i className="fe fe-activity"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-airplay</Tooltip>}><li className="icons-list-item"><i className="fe fe-airplay"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-alert-circle</Tooltip>}><li className="icons-list-item"><i className="fe fe-alert-circle"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-alert-triangle</Tooltip>}><li className="icons-list-item"><i className="fe fe-alert-triangle"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-bar-chart-2</Tooltip>}><li className="icons-list-item"><i className="fe fe-bar-chart-2"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-bell</Tooltip>}><li className="icons-list-item"><i className="fe fe-bell"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-camera</Tooltip>}><li className="icons-list-item"><i className="fe fe-camera"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-copy</Tooltip>}><li className="icons-list-item"><i className="fe fe-copy"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-eye</Tooltip>}><li className="icons-list-item"><i className="fe fe-eye"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-file</Tooltip>}><li className="icons-list-item"><i className="fe fe-file"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>fe fe-layout</Tooltip>}><li className="icons-list-item"><i className="fe fe-layout"></i></li></OverlayTrigger>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Tabler Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://tabler-icons.io/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                <OverlayTrigger overlay={<Tooltip>ti ti-brand-tabler</Tooltip>}><li className="icons-list-item"><i className="ti ti-brand-tabler"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-activity-heartbeat</Tooltip>}><li className="icons-list-item"><i className="ti ti-activity-heartbeat"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-alert-octagon</Tooltip>}><li className="icons-list-item"><i className="ti ti-alert-octagon"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-album</Tooltip>}><li className="icons-list-item"><i className="ti ti-album"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-align-right</Tooltip>}><li className="icons-list-item"><i className="ti ti-align-right"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-antenna-bars-5</Tooltip>}><li className="icons-list-item"><i className="ti ti-antenna-bars-5"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-armchair</Tooltip>}><li className="icons-list-item"><i className="ti ti-armchair"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-arrow-big-right</Tooltip>}><li className="icons-list-item"><i className="ti ti-arrow-big-right"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-arrows-shuffle-2</Tooltip>}><li className="icons-list-item"><i className="ti ti-arrows-shuffle-2"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-backspace</Tooltip>}><li className="icons-list-item"><i className="ti ti-backspace"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-bell</Tooltip>}><li className="icons-list-item"><i className="ti ti-bell"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>ti ti-color-picker</Tooltip>}><li className="icons-list-item"><i className="ti ti-color-picker"></i></li></OverlayTrigger>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Line Awesome Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://icons8.com/line-awesome" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="las la-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                <OverlayTrigger overlay={<Tooltip>las la-bell</Tooltip>}><li className="icons-list-item"><i className="las la-bell"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-exclamation-circle</Tooltip>}><li className="icons-list-item"><i className="las la-exclamation-circle"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-exclamation-triangle</Tooltip>}><li className="icons-list-item"><i className="las la-exclamation-triangle"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-arrow-alt-circle-down</Tooltip>}><li className="icons-list-item"><i className="las la-arrow-alt-circle-down"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-arrow-alt-circle-up</Tooltip>}><li className="icons-list-item"><i className="las la-arrow-alt-circle-up"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-arrow-alt-circle-left</Tooltip>}><li className="icons-list-item"><i className="las la-arrow-alt-circle-left"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-arrow-alt-circle-right</Tooltip>}><li className="icons-list-item"><i className="las la-arrow-alt-circle-right"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-history</Tooltip>}><li className="icons-list-item"><i className="las la-history"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-headphones</Tooltip>}><li className="icons-list-item"><i className="las la-headphones"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-tv</Tooltip>}><li className="icons-list-item"><i className="las la-tv"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-car-side</Tooltip>}><li className="icons-list-item"><i className="las la-car-side"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-envelope</Tooltip>}><li className="icons-list-item"><i className="las la-envelope"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-edit</Tooltip>}><li className="icons-list-item"><i className="las la-edit"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>las la-map</Tooltip>}><li className="icons-list-item"><i className="las la-map"></i></li></OverlayTrigger>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Boxicons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://boxicons.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="bx bx-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-unstyled">
                                <OverlayTrigger overlay={<Tooltip>bx bx-home</Tooltip>}><li className="icons-list-item"><i className="bx bx-home"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-home-alt</Tooltip>}><li className="icons-list-item"><i className="bx bx-home-alt"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-box</Tooltip>}><li className="icons-list-item"><i className="bx bx-box"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-medal</Tooltip>}><li className="icons-list-item"><i className="bx bx-medal"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-file</Tooltip>}><li className="icons-list-item"><i className="bx bx-file"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-palette</Tooltip>}><li className="icons-list-item"><i className="bx bx-palette"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-receipt</Tooltip>}><li className="icons-list-item"><i className="bx bx-receipt"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-table</Tooltip>}><li className="icons-list-item"><i className="bx bx-table"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-bar-chart-alt</Tooltip>}><li className="icons-list-item"><i className="bx bx-bar-chart-alt"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-layer</Tooltip>}><li className="icons-list-item"><i className="bx bx-layer"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-map-alt</Tooltip>}><li className="icons-list-item"><i className="bx bx-map-alt"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-gift</Tooltip>}><li className="icons-list-item"><i className="bx bx-gift"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-file-blank</Tooltip>}><li className="icons-list-item"><i className="bx bx-file-blank"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-lock-alt</Tooltip>}><li className="icons-list-item"><i className="bx bx-lock-alt"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-error</Tooltip>}><li className="icons-list-item"><i className="bx bx-error"></i></li></OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>bx bx-error-circle</Tooltip>}><li className="icons-list-item"><i className="bx bx-error-circle"></i></li></OverlayTrigger>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Icons;