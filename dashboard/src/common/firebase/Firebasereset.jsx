import React, { Fragment, useState } from 'react'
import ALLImages from '../Imagesdata';
import { Alert, Card, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './Firebaseapi';
import { sendPasswordResetEmail } from 'firebase/auth';

const Firebasereset = () => {

    const [err, setError] = useState("");
    const [email, setEmail] = useState('');

    let navigate = useNavigate();
    const RouteChange = () => {
        let path = `${import.meta.env.BASE_URL}firebase/firebasesignin`;
        navigate(path);
    }

    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent. Please check your inbox.');
            RouteChange();
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <Fragment>
            <div className="col-login mx-auto mt-7">
                <div className="text-center">
                    <img src={ALLImages('logo2')} className="header-brand-img" alt="" />
                </div>
            </div>
            <div className="container-login100">
                <Row>
                    <div className="col col-login mx-auto">
                        <Form className="card shadow-none" method="post">
                            <Card.Body>
                                <div className="text-center">
                                    <span className="login100-form-title"> Forgot Password </span>
                                    {err && <Alert variant='danger'>{err}</Alert>}
                                    <p className="text-muted">Enter the email address registered on your account</p>
                                </div>
                                <div className="pt-3" id="forgot">
                                    <Form.Group className="mb-3">
                                        <Form.Label>E-Mail</Form.Label>
                                        <Form.Control type="email" name="email" id="input" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <div className="submit">
                                        <Link className="btn btn-primary d-grid" to='#' onClick={handleResetPassword}>Submit</Link>
                                    </div>
                                    <div className="text-center mt-4">
                                        <p className="text-dark mb-0">Forgot It?<Link className="text-primary ms-1" to={`${import.meta.env.BASE_URL}firebase/firebasesignin`}>Send me Back</Link></p>
                                    </div>
                                </div>
                            </Card.Body>
                            <div className="card-footer border-top">
                                <div className="d-flex justify-content-center my-3">
                                    <Link to="#" className="social-login  text-center">
                                        <i className="ri-google-fill"></i>
                                    </Link>
                                    <Link to="#" className="social-login  text-center mx-4">
                                        <i className="ri-facebook-fill"></i>
                                    </Link>
                                    <Link to="#" className="social-login  text-center">
                                        <i className="ri-twitter-x-fill"></i>
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Row>
            </div>
        </Fragment>
    )
}

export default Firebasereset;