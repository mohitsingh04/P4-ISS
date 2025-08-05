import { Fragment } from 'react';
import Swal from "sweetalert2";
import { Button, Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import ALLImages from '../../common/Imagesdata';
const Sweetalerts = () => {
    function Basicsweetalert() {
        Swal.fire({
            title: " Welcome to Your Admin Page",
            allowOutsideClick: true,
        });
    }

    function Dangersweetalert() {
        Swal.fire({
            // text: " Welcome to Your Admin Page",
            allowOutsideClick: true,
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<Link to="#">Why do I have this issue?</Link>'
        });
    }

    function Imagesweetalert() {
        Swal.fire({
            // text: " Welcome to Your Admin Page",
            allowOutsideClick: true,
            imageUrl: ALLImages('media19'),
            title: 'Sweet !',
            text: 'Modal with a custom image.',
            imageHeight: 200,
            imageAlt: 'Template image'
        });
    }

    function Image3dsweetalert() {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    function Aminationsweetalert() {
        Swal.fire({
            title: 'I will shake when you click outside!',
            allowOutsideClick: () => {
                const popup = Swal.getPopup();
                popup.classList.remove('swal2-show');
                setTimeout(() => {
                    popup.classList.add('animate__animated', 'animate__headShake');
                });
                setTimeout(() => {
                    popup.classList.remove('animate__animated', 'animate__headShake');
                }, 500);
                return false;
            },
        });
    }

    function Topend() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 1500
        })

    }

    function TopStart() {
        Swal.fire({
            position: 'top-start',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 1500
        })

    }

    function BottomStart() {
        Swal.fire({
            position: 'bottom-start',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 1500
        })

    }

    function Bottomend() {
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 1500
        })

    }

    function Customziable() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5e76a6',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }

    function Autoalert() {
        let timerInterval;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer()?.querySelector('b');
                if (b) {
                    timerInterval = setInterval(() => {
                        const remainingTime = Swal.getTimerLeft();
                        if (remainingTime) {
                            b.textContent = remainingTime.toString();
                        }
                    }, 100);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                // Do something when the timer expires
            }
        });
    }

    function Ajaxcalling() {
        Swal.fire({
            title: 'Submit your username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                })
            }
        })
    }

    function Style1() {
        Swal.fire(
            'The Internet ?',
            'That thing is still around ?',
            'question'
        )
    }

    function Style2() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5e76a6',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    function Style3() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary me-2',
                cancelButton: 'btn btn-primary me-2'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    return (
        <Fragment>
            <Pageheader homepage='Sweet Alerts' activepage='Apps' page='Sweet Alerts' />
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Sweetalert
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="basic-alert" onClick={Basicsweetalert}>Basic Alert</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Danger Sweetalert
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-text" onClick={Dangersweetalert}>Danger Alert</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Image Sweetalert
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-footer" onClick={Imagesweetalert}>Image Alert</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sweetalert With Buttons
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="long-window" onClick={Image3dsweetalert}>Alert with Button</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sweetalert With Animation
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-description" onClick={Aminationsweetalert}>Alert With Animation</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sweetalert style 1
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="three-buttons" onClick={Style1}>Alert style 1</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sweetalert style-2
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-dialog" onClick={Style2}>Alert style 2</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Sweetalert style-3
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-confirm" onClick={Style3}>Alert style 3</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Top-Right Sweetalert
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-parameter" onClick={Topend}>Top-Right</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Top-Left Sweetalert
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-image" onClick={TopStart}>Top-Left</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Bottom-Left Sweetalert
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-custom-bg" onClick={BottomStart}>Bottom-Left</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Bottom-Right Sweetalert
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-auto-close" onClick={Bottomend}>Bottom-Right</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                A message with customization
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-ajax" onClick={Customziable}>Customised Alert</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Timer Sweetalert
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-ajax" onClick={Autoalert}>Timer Alert</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Ajax Request Sweetalert
                            </div>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <Button className="btn btn-primary" id="alert-ajax" onClick={Ajaxcalling}>Ajax loader</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Sweetalerts