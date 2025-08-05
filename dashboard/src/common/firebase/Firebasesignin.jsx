import React, { Fragment, useEffect, useState } from 'react'
import { Alert, Card, Form, Nav, OverlayTrigger, Tab, Tooltip } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ALLImages from '../Imagesdata';
import { auth } from './Firebaseapi';

const Firebasesignin = () => {

  //react authentication

  const [email1, setEmail1] = useState('Adminreact@domain.com');
  const [password1, setPassword1] = useState('spruko@123');
  const [rememberMe, setRememberMe] = useState(true);
  const [error1, setError1] = useState(null);

  const handleSignIn = () => {
    if (!email1.trim()) {
      setError1('Please enter your email or username.');
      return;
    }

    if (!password1.trim()) {
      setError1('Please enter your password.');
      return;
    }

    if (!rememberMe) {
      setError1('Please check the "Remember me" box.');
      return;
    }

    if (email1 !== 'Adminreact@domain.com' || password1 !== 'spruko@123') {
      setError1('Invalid email or password.');
      return;
    }

    window.location.href = `${import.meta.env.BASE_URL}dashboard/`;
  };

  //firebase authentication

  const [err, setError] = useState('');
  const [data, setData] = useState({
    email: 'adminreact@gmail.com',
    password: '1234567890',
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError('');
  };

	const Login = (_e) => {
		if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890") {
			RouteChange();
		}
		else {
			setError("The Auction details did not Match");
			setData({
				"email": "adminnextjs@gmail.com",
				"password": "1234567890",
			});
		}
	};

  const navigate = useNavigate();

  const RouteChange = () => {
    let path = `${import.meta.env.BASE_URL}dashboard/`;
    navigate(path);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.body.classList.add("login-img");

    return () => {
      document.body.classList.remove("login-img");
    };
  }, []);

  return (
    <Fragment>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="col-login mx-auto">
          <div className="text-center">
            <img src={ALLImages('logo2')} className="header-brand-img" alt="" />
          </div>
        </div>
        <div className="container-login100">
          <Tab.Content>
            <Tab.Pane className='border-0' eventKey="first">
              <Card className="wrap-login100 p-0">

                <Nav variant="pills" className="justify-content-center my-4" defaultActiveKey="first">
                  <Nav.Item>
                    <Nav.Link eventKey="first"><OverlayTrigger overlay={<Tooltip>React</Tooltip>}><img src={ALLImages('logo7')} alt='react' /></OverlayTrigger></Nav.Link>
                  </Nav.Item>
                  <Nav.Item> <Nav.Link eventKey="second"><OverlayTrigger overlay={<Tooltip>Firebase</Tooltip>}><img src={ALLImages('logo8')} alt='firebase' /></OverlayTrigger></Nav.Link> </Nav.Item>
                </Nav>
                <Card.Body>
                  <Form className="login100-form validate-form">
                    <span className="login100-form-title"> Login </span>
                    {error1 && (<Alert variant="danger" onClose={() => setError1(null)} dismissible>{error1}</Alert>)}
                    <div className="wrap-input100 validate-input" data-bs-validate="Valid email is required: ex@abc.xyz">
                      <Form.Control type="text" className="input100" name="email" placeholder="Email" value={email1} onChange={(e) => setEmail1(e.target.value)} />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100"> <i className="ri-mail-fill" aria-hidden="true"></i> </span>
                    </div>
                    <div className="wrap-input100 validate-input" data-bs-validate="Password is required">
                      <Form.Control type="password" className="input100" name="password" id="input2" placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100"> <i className="ri-lock-fill" aria-hidden="true"></i> </span>
                    </div>
                    <div className="text-end pt-1">
                      <p className="mb-0"><Link to={`${import.meta.env.BASE_URL}firebase/firebasereset/`} className="text-primary ms-1">Forgot Password?</Link></p>
                    </div>
                    <div className="container-login100-form-btn">
                      <Link to='#' className="login100-form-btn btn-primary" onClick={handleSignIn}> Login </Link>
                    </div>
                    <div className="text-center pt-3">
                      <p className="text-dark mb-0">Not a member?<Link to={`${import.meta.env.BASE_URL}firebase/firebasesignup/`} className="text-primary ms-1">Create an Account</Link></p>
                    </div>
                  </Form>
                </Card.Body>
                <div className="card-footer border-top">
                  <div className="d-flex justify-content-center my-3">
                    <Link to="#" className="social-login  text-center"> <i className="ri-google-fill"></i> </Link>
                    <Link to="#" className="social-login  text-center mx-4"> <i className="ri-facebook-fill"></i> </Link>
                    <Link to="#" className="social-login  text-center"> <i className="ri-twitter-x-fill"></i> </Link>
                  </div>
                </div>
              </Card>
            </Tab.Pane>
            <Tab.Pane className='border-0' eventKey="second">
              <Card className="wrap-login100 p-0">
                <Card.Body>
                  <Form className="login100-form validate-form">
                    <span className="login100-form-title"> Login </span>
                    {err && <Alert variant='danger'>{err}</Alert>}
                    <div className="wrap-input100 validate-input" data-bs-validate="Valid email is required: ex@abc.xyz">
                      <Form.Control type="text" className="input100" name="email" id="input" placeholder="Email" onChange={changeHandler} defaultValue={email} />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100"> <i className="ri-mail-fill" aria-hidden="true"></i> </span>
                    </div>
                    <div className="wrap-input100 validate-input" data-bs-validate="Password is required">
                      <Form.Control type="password" className="input100" name="email" id="input2" placeholder="Password" defaultValue={password} onChange={changeHandler} />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100"> <i className="ri-lock-fill" aria-hidden="true"></i> </span>
                    </div>
                    <div className="text-end pt-1">
                      <p className="mb-0"><Link to={`${import.meta.env.BASE_URL}firebase/firebasereset/`} className="text-primary ms-1">Forgot Password?</Link></p>
                    </div>
                    <div className="container-login100-form-btn">
                      <Link to='#' className="login100-form-btn btn-primary" onClick={Login}> Login </Link>
                    </div>
                    <div className="text-center pt-3">
                      <p className="text-dark mb-0">Not a member?<Link to={`${import.meta.env.BASE_URL}firebase/firebasesignup/`} className="text-primary ms-1">Create an Account</Link></p>
                    </div>
                  </Form>
                </Card.Body>
                <div className="card-footer border-top">
                  <div className="d-flex justify-content-center my-3">
                    <Link to="#" className="social-login text-center"> <i className="ri-google-fill"></i> </Link>
                    <Link to="#" className="social-login text-center mx-4"> <i className="ri-facebook-fill"></i> </Link>
                    <Link to="#" className="social-login text-center"> <i className="ri-twitter-x-fill"></i> </Link>
                  </div>
                </div>
              </Card>
            </Tab.Pane>
          </Tab.Content>
        </div>

      </Tab.Container>
    </Fragment>
  )
}

export default Firebasesignin;