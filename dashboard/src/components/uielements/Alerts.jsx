import React, { Fragment, useState } from 'react'
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import { AlertCard, AlertwithIcon, AlertwithImage, AlertwithImagesize, ColoredAlert, CustomisedAlertwithIcon, SolidAlert } from '../../common/Commomarreydata';
import { Alert, Button, Card, Col, Row, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Alerts = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  // ***********************************************************
  const [alerts, setAlerts] = useState([]);

  const handleShowAlert = () => {
    const newAlert = {
      id: new Date().getTime(), // Unique ID for each alert
    };

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

  };
  // ****************************************************************

  const [closedAlerts, setClosedAlerts] = useState([]);

  const closeAlert = (id) => {
    if (!closedAlerts.includes(id)) {
      setClosedAlerts((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };
  // ********************************************************************

  const [closedAlerts2, setClosedAlerts2] = useState([]);

  const closeAlert2 = (id) => {
    if (!closedAlerts2.includes(id)) {
      setClosedAlerts2((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };

  // **********************************************************************

  const [closedAlerts3, setClosedAlerts3] = useState([]);

  const closeAlert3 = (id) => {
    if (!closedAlerts3.includes(id)) {
      setClosedAlerts3((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };
  // **************************************************************************

  const [closedAlerts4, setClosedAlerts4] = useState([]);

  const closeAlert4 = (id) => {
    if (!closedAlerts4.includes(id)) {
      setClosedAlerts4((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };

  // ******************************************************************************

  const [visibleAlerts, setVisibleAlerts] = useState(Array(8).fill(true));

  const handleClose2 = (index) => {
    const updatedVisibleAlerts = [...visibleAlerts];
    updatedVisibleAlerts[index] = false;
    setVisibleAlerts(updatedVisibleAlerts);
  };

  // ************************************************************************************

  const [visibleAlerts1, setVisibleAlerts1] = useState(Array(8).fill(true));

  // ************************************************************************************

  const [visibleAlerts2, setVisibleAlerts2] = useState(Array(6).fill(true));

  // ************************************************************************************

  const [visibleAlerts3, setVisibleAlerts3] = useState(Array(4).fill(true));

  // ************************************************************************************

  const [visibleAlerts4, setVisibleAlerts4] = useState(Array(4).fill(true));

  // ************************************************************************************

  const [visibleAlerts5, setVisibleAlerts5] = useState(Array(4).fill(true));

  // ************************************************************************************

  const [visibleAlerts6, setVisibleAlerts6] = useState(Array(4).fill(true));

  // ******************************************************************************

  const [closedAlerts5, setClosedAlerts5] = useState([]);

  const closeAlert5 = (id) => {
    if (!closedAlerts5.includes(id)) {
      setClosedAlerts5((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };

  // ******************************************************************************

  const [closedAlerts6, setClosedAlerts6] = useState([]);

  const closeAlert6 = (id) => {
    if (!closedAlerts6.includes(id)) {
      setClosedAlerts6((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };

  // ******************************************************************************

  const [closedAlerts7, setClosedAlerts7] = useState([]);

  const closeAlert7 = (id) => {
    if (!closedAlerts7.includes(id)) {
      setClosedAlerts7((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };

  // Show code

  const [isHidden, setIsHidden] = useState([false]);
  const toggleHidden = (index) => {
    const updatedHidden = [...isHidden];
    updatedHidden[index] = !updatedHidden[index];
    setIsHidden(updatedHidden);
  };


  return (
    <Fragment>
      <Pageheader homepage="Alerts" activepage="UI Elements" page='Alerts' />
      <Row className="row-sm">
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title"> Basic Alert </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
              {show && (<Alert variant='warning' className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <Button variant='' onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
              </Alert>)}
            </Card.Body>
            <div className={`card-footer ${isHidden[0] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{show && (<Alert variant='warning' className="alert alert-warning alert-dismissible fade show" role="alert" onClick={handleClose}>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
<Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
</Alert>)}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
const [show, setShow] = useState(true);
const handleClose = () => setShow(false);
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
                Live example
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
              {alerts.map((alert) => (
                <Alert key={alert.id} variant="success" className="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                  <Button variant="" type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== alert.id))}>
                    <i className="bi bi-x"></i>
                  </Button>
                </Alert>
              ))}
              <Button type="button" className='mt-2' onClick={handleShowAlert}>
                Show live alert
              </Button>
            </Card.Body>
            <div className={`card-footer ${isHidden[1] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{alerts.map((alert) => (
  <Alert key={alert.id} variant="success" className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <Button variant="" type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== alert.id))}>
      <i className="bi bi-x"></i>
    </Button>
  </Alert>
))}
<Button type="button" className='mt-2' onClick={handleShowAlert}> Show live alert </Button>
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
  const [alerts, setAlerts] = useState([]);

  const handleShowAlert = () => {
    const newAlert = {
      id: new Date().getTime(), // Unique ID for each alert
    };

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  };
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
                Default alerts
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[2] ? 'd-none' : ''}`}>
              {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((idx) => (
                <Alert variant={idx} role="alert" key={Math.random()}>
                  A simple {idx} alert—check it out!
                </Alert>
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[2] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((idx) => (
  <Alert variant={idx} role="alert" key={Math.random()}>
    A simple {idx} alert—check it out!
  </Alert>
))}
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
                Links in alerts
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
              {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((idx) => (
                <Alert key={Math.random()} variant={idx} role="alert"> A simple {idx} alert with <Alert.Link>an example link</Alert.Link>.Give it a click if you like. </Alert>
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[3] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((idx) => (
  <Alert key={Math.random()} variant={idx} role="alert"> A simple {idx} alert with <Alert.Link>an example link</Alert.Link>.Give it a click if you like. </Alert>
))}
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
                Solid Colored Alerts
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[4] ? 'd-none' : ''}`}>
              {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((idx, index) => (
                visibleAlerts[index] && (
                  <Alert key={index} className={`alert-solid-${idx} alert-dismissible fade show ${idx === 'dark' ? 'text-white' : ''}`}>
                    A simple solid primary alert—check it out!
                    <button type="button" className={`btn-close ${idx === 'dark' ? 'text-white' : ''} ${idx === 'light' ? 'text-dark' : ''}`} onClick={() => { handleClose2(index); }} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
                  </Alert>
                )
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[4] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((idx, index) => (
  visibleAlerts[index] && (
    <Alert key={index} className={\`alert-solid-\${idx} alert-dismissible fade show \${idx === 'dark' ? 'text-white' : ''}\`}>
      A simple solid primary alert—check it out!
      <button type="button" className={\`btn-close \${idx === 'dark' ? 'text-white' : ''} \${idx === 'light' ? 'text-dark' : ''}\`} onClick={() => { handleClose2(index); }} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
    </Alert>
  )
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
  const [visibleAlerts, setVisibleAlerts] = useState(Array(8).fill(true));

  const handleClose2 = (index) => {
    const updatedVisibleAlerts = [...visibleAlerts];
    updatedVisibleAlerts[index] = false;
    setVisibleAlerts(updatedVisibleAlerts);
  };
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
                Outline Alerts
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[5] ? 'd-none' : ''}`}>
              {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((idx, index) => (
                visibleAlerts1[index] ? (
                  <div key={index} className={`alert alert-outline-${idx} alert-dismissible fade show`}>
                    A simple outline {idx} alert—check it out!
                    <button type="button" className="btn-close" onClick={() => setVisibleAlerts1([...visibleAlerts1.slice(0, index), false, ...visibleAlerts1.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
                  </div>
                ) : null
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[5] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((idx, index) => (
  visibleAlerts1[index] ? (
    <div key={index} className={\`alert alert-outline-\${idx} alert-dismissible fade show\`}>
      A simple outline {idx} alert—check it out!
      <button type="button" className="btn-close" onClick={() => setVisibleAlerts1([...visibleAlerts1.slice(0, index), false, ...visibleAlerts1.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
    </div>
  ) : null
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
const [visibleAlerts1, setVisibleAlerts1] = useState(Array(8).fill(true));
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
                Solid Alerts With Different Shadows
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[6] ? 'd-none' : ''}`}>
              {['primary', 'primary', 'primary', 'secondary', 'secondary', 'secondary'].map((idx, index) => (
                visibleAlerts2[index] ? (
                  <div key={index} className={`alert alert-solid-${idx} shadow-sm alert-dismissible fade show`}>
                    A simple solid {idx} alert with {index % 3 === 0 ? 'small' : index % 3 === 1 ? 'normal' : 'large'} shadow—check it out!
                    <button type="button" className="btn-close" onClick={() => setVisibleAlerts2([...visibleAlerts2.slice(0, index), false, ...visibleAlerts2.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
                  </div>
                ) : null
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[6] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'primary', 'primary', 'secondary', 'secondary', 'secondary'].map((idx, index) => (
  visibleAlerts2[index] ? (
    <div key={index} className={\`alert alert-solid-\${idx} shadow-sm alert-dismissible fade show\`}>
      A simple solid {idx} alert with {index % 3 === 0 ? 'small' : index % 3 === 1 ? 'normal' : 'large'} shadow—check it out!
      <button type="button" className="btn-close" onClick={() => setVisibleAlerts2([...visibleAlerts2.slice(0, index), false, ...visibleAlerts2.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
    </div>
  ) : null
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
const [visibleAlerts2, setVisibleAlerts2] = useState(Array(6).fill(true));
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
                Default Alerts With Different Shadows
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(7)}>Show Code<i className={`${isHidden[7] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[7] ? 'd-none' : ''}`}>
              <Alert variant="primary" className="shadow-sm">A simple primary alert with small shadow—check it out!</Alert>
              <Alert variant="primary" className="shadow">A simple primary alert with normal shadow—check it out!</Alert>
              <Alert variant="primary" className="shadow-lg">A simple primary alert with large shadow—check it out!</Alert>
              <Alert variant="secondary" className="shadow-sm">A simple secondary alert with small shadow—check it out!</Alert>
              <Alert variant="secondary" className="shadow">A simple secondary alert with normal shadow—check it out!</Alert>
              <Alert variant="secondary" className="shadow-lg">A simple secondary alert with large shadow—check it out!</Alert>
            </Card.Body>
            <div className={`card-footer ${isHidden[7] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
<Alert variant="primary" className="shadow-sm">A simple primary alert with small shadow—check it out!</Alert>
<Alert variant="primary" className="shadow">A simple primary alert with normal shadow—check it out!</Alert>
<Alert variant="primary" className="shadow-lg">A simple primary alert with large shadow—check it out!</Alert>
<Alert variant="secondary" className="shadow-sm">A simple secondary alert with small shadow—check it out!</Alert>
<Alert variant="secondary" className="shadow">A simple secondary alert with normal shadow—check it out!</Alert>
<Alert variant="secondary" className="shadow-lg">A simple secondary alert with large shadow—check it out!</Alert>
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
                Rounded Solid Alerts
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(8)}>Show Code<i className={`${isHidden[8] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[8] ? 'd-none' : ''}`}>
              {['primary', 'secondary', 'warning', 'danger'].map((idx, index) => (
                visibleAlerts3[index] ? (
                  <div key={index} className={`alert alert-solid-${idx} rounded-pill alert-dismissible fade show`}>
                    A simple solid rounded {idx} alert—check it out!
                    <button type="button" className="btn-close" onClick={() => setVisibleAlerts3([...visibleAlerts3.slice(0, index), false, ...visibleAlerts3.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
                  </div>
                ) : null
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[8] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'secondary', 'warning', 'danger'].map((idx, index) => (
  visibleAlerts3[index] ? (
    <div key={index} className={\`alert alert-solid-\${idx} rounded-pill alert-dismissible fade show\`}>
      A simple solid rounded {idx} alert—check it out!
      <button type="button" className="btn-close" onClick={() => setVisibleAlerts3([...visibleAlerts3.slice(0, index), false, ...visibleAlerts3.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
    </div>
  ) : null
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
const [visibleAlerts3, setVisibleAlerts3] = useState(Array(4).fill(true));
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
                Rounded Outline Alerts
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(9)}>Show Code<i className={`${isHidden[9] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[9] ? 'd-none' : ''}`}>
              {['primary', 'secondary', 'warning', 'danger'].map((idx, index) => (
                visibleAlerts4[index] ? (
                  <div key={index} className={`alert alert-outline-${idx} rounded-pill alert-dismissible fade show`}>
                    A simple outline rounded {idx} alert—check it out!
                    <button type="button" className="btn-close" onClick={() => setVisibleAlerts4([...visibleAlerts4.slice(0, index), false, ...visibleAlerts4.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
                  </div>
                ) : null
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[9] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'secondary', 'warning', 'danger'].map((idx, index) => (
  visibleAlerts4[index] ? (
    <div key={index} className={\`alert alert-outline-\${idx} rounded-pill alert-dismissible fade show\`}>
      A simple outline rounded {idx} alert—check it out!
      <button type="button" className="btn-close" onClick={() => setVisibleAlerts4([...visibleAlerts4.slice(0, index), false, ...visibleAlerts4.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
    </div>
  ) : null
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
const [visibleAlerts4, setVisibleAlerts4] = useState(Array(4).fill(true));
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
                Rounded Default Alerts
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(10)}>Show Code<i className={`${isHidden[10] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[10] ? 'd-none' : ''}`}>
              {['primary', 'secondary', 'warning', 'danger'].map((idx, index) => (
                visibleAlerts5[index] ? (
                  <div key={index} className={`alert alert-${idx} rounded-pill alert-dismissible fade show`}>
                    A simple rounded {idx} alert—check it out!
                    <button type="button" className="btn-close" onClick={() => setVisibleAlerts5([...visibleAlerts5.slice(0, index), false, ...visibleAlerts5.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
                  </div>
                ) : null
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[10] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'secondary', 'warning', 'danger'].map((idx, index) => (
  visibleAlerts5[index] ? (
    <div key={index} className={\`alert alert-\${idx} rounded-pill alert-dismissible fade show\`}>
      A simple rounded {idx} alert—check it out!
      <button type="button" className="btn-close" onClick={() => setVisibleAlerts5([...visibleAlerts5.slice(0, index), false, ...visibleAlerts5.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
    </div>
  ) : null
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
const [visibleAlerts5, setVisibleAlerts5] = useState(Array(4).fill(true));
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
                Rounded Alerts With Custom Close Button
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(11)}>Show Code<i className={`${isHidden[11] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[11] ? 'd-none' : ''} rounded-alert`}>
              {['primary', 'secondary', 'warning', 'danger'].map((idx, index) => (
                visibleAlerts6[index] ? (
                  <div key={index} className={`alert alert-${idx} rounded-pill alert-dismissible fade show`}>
                    A simple rounded {idx} alert—check it out!
                    <button type="button" className="btn-close custom-close" onClick={() => setVisibleAlerts6([...visibleAlerts6.slice(0, index), false, ...visibleAlerts6.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
                  </div>
                ) : null
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[11] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'secondary', 'warning', 'danger'].map((idx, index) => (
  visibleAlerts6[index] ? (
    <div key={index} className={\`alert alert-\${idx} rounded-pill alert-dismissible fade show\`}>
      A simple rounded {idx} alert—check it out!
      <button type="button" className="btn-close custom-close" onClick={() => setVisibleAlerts6([...visibleAlerts6.slice(0, index), false, ...visibleAlerts6.slice(index + 1)])} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
    </div>
  ) : null
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
const [visibleAlerts6, setVisibleAlerts6] = useState(Array(4).fill(true));
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
                Alerts with icons
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(12)}>Show Code<i className={`${isHidden[12] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[12] ? 'd-none' : ''}`}>
              {AlertwithIcon.map((idx) => (
                <div key={Math.random()} className={`alert alert-${idx.color} d-flex align-items-center" role="alert`}>
                  {idx.icon}
                  <div> An example {idx.color} alert with an icon </div>
                </div>
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[12] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{AlertwithIcon.map((idx) => (
  <div key={Math.random()} className={\`alert alert-\${idx.color} d-flex align-items-center" role="alert\`}>
    {idx.icon}
    <div> An example {idx.color} alert with an icon </div>
  </div>
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="data" title="Data">
                  <pre><code className='language-javascript'>
                    {`
export const AlertwithIcon = [
  { id: 1, color: 'primary', icon: <svg className="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg> },
  { id: 2, color: 'success', icon: <svg className="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg> },
  { id: 3, color: 'warning', icon: <svg className="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg> },
  { id: 4, color: 'danger', icon: <svg className="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg> }
]
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
                Customized Alerts With SVG's
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(13)}>Show Code<i className={`${isHidden[13] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[13] ? 'd-none' : ''}`}>
              {CustomisedAlertwithIcon.map((idx) => (
                !closedAlerts5.includes(idx.id) && (
                  <div key={Math.random()} className={`alert alert-${idx.color} alert-dismissible fade show custom-alert-icon shadow-sm`} role="alert">
                    {idx.icon}
                    A customized primary alert with an icon
                    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => closeAlert5(idx.id)} aria-label="Close"><i className="bi bi-x"></i></button>
                  </div>
                )
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[13] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{CustomisedAlertwithIcon.map((idx) => (
  !closedAlerts5.includes(idx.id) && (
    <div key={Math.random()} className={\`alert alert-\${idx.color} alert-dismissible fade show custom-alert-icon shadow-sm\`} role="alert">
      {idx.icon}
      A customized primary alert with an icon
      <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => closeAlert5(idx.id)} aria-label="Close"><i className="bi bi-x"></i></button>
    </div>
  )
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
  const [closedAlerts5, setClosedAlerts5] = useState([]);

  const closeAlert5 = (id) => {
    if (!closedAlerts5.includes(id)) {
      setClosedAlerts5((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="data" title="Data">
                  <pre><code className='language-javascript'>
                    {`
export const CustomisedAlertwithIcon = [
  { id: 1, color: 'primary', icon: <svg className="svg-primary me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg> },
  { id: 2, color: 'secondary', icon: <svg className="svg-secondary me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg> },
  { id: 3, color: 'warning', icon: <svg className="svg-warning me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg> },
  { id: 4, color: 'danger', icon: <svg className="svg-danger me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg> }
]
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
                Alerts With Images
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(14)}>Show Code<i className={`${isHidden[14] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[14] ? 'd-none' : ''}`}>
              {AlertwithImage.map((idx) => (
                !closedAlerts6.includes(idx.id) && (
                  <div key={Math.random()} className={`alert alert-img alert-${idx.color} alert-dismissible fase show rounded-pill flex-wrap`} role="alert">
                    <div className="avatar avatar-sm me-3 avatar-rounded">
                      <img src={idx.image} alt="img" />
                    </div>
                    <div className="text-truncate">A simple {idx.color} alert with image—check it out!</div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => closeAlert6(idx.id)} aria-label="Close"><i className="bi bi-x"></i></button>
                  </div>
                )
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[14] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{AlertwithImage.map((idx) => (
  !closedAlerts6.includes(idx.id) && (
    <div key={Math.random()} className={\`alert alert-img alert-\${idx.color} alert-dismissible fase show rounded-pill flex-wrap\`} role="alert">
      <div className="avatar avatar-sm me-3 avatar-rounded">
        <img src={idx.image} alt="img" />
      </div>
      <div className="text-truncate">A simple {idx.color} alert with image—check it out!</div>
      <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => closeAlert6(idx.id)} aria-label="Close"><i className="bi bi-x"></i></button>
    </div>
  )
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
  const [closedAlerts6, setClosedAlerts6] = useState([]);

  const closeAlert6 = (id) => {
    if (!closedAlerts6.includes(id)) {
      setClosedAlerts6((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="data" title="Data">
                  <pre><code className='language-javascript'>
                    {`
export const AlertwithImage = [
  { id: 1, image: ALLImages('face3'), color: 'primary' },
  { id: 2, image: ALLImages('face5'), color: 'secondary' },
  { id: 3, image: ALLImages('face8'), color: 'warning' },
  { id: 4, image: ALLImages('face11'), color: 'danger' },
  { id: 5, image: ALLImages('face13'), color: 'info' },
  { id: 6, image: ALLImages('face10'), color: 'light' },
  { id: 7, image: ALLImages('face15'), color: 'dark' }
]
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
                Alerts With Different size Images
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(15)}>Show Code<i className={`${isHidden[15] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[15] ? 'd-none' : ''}`}>
              {AlertwithImagesize.map((idx) => (
                !closedAlerts7.includes(idx.id) && (
                  <div key={Math.random()} className={`alert alert-img alert-${idx.color} alert-dismissible fase show flex-wrap`} role="alert">
                    <div className={`avatar avatar-${idx.size} me-3`}>
                      <img src={idx.image} alt="img" />
                    </div>
                    <div>A simple {idx.color} alert with image—check it out!</div>
                    <button type="button" className="btn-close" onClick={() => closeAlert7(idx.id)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
                  </div>
                )
              ))}
            </Card.Body>
            <div className={`card-footer ${isHidden[15] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{AlertwithImagesize.map((idx) => (
  !closedAlerts7.includes(idx.id) && (
    <div key={Math.random()} className={\`alert alert-img alert-\${idx.color} alert-dismissible fase show flex-wrap\`} role="alert">
      <div className={\`avatar avatar-\${idx.size} me-3\`}>
        <img src={idx.image} alt="img" />
      </div>
      <div>A simple {idx.color} alert with image—check it out!</div>
      <button type="button" className="btn-close" onClick={() => closeAlert7(idx.id)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
    </div>
  )
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
  const [closedAlerts7, setClosedAlerts7] = useState([]);

  const closeAlert7 = (id) => {
    if (!closedAlerts7.includes(id)) {
      setClosedAlerts7((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="data" title="Data">
                  <pre><code className='language-javascript'>
                    {`
export const AlertwithImagesize = [
  { id: 1, image: ALLImages('face3'), color: 'primary', size: 'xs' },
  { id: 2, image: ALLImages('face5'), color: 'secondary', size: 'sm' },
  { id: 3, image: ALLImages('face8'), color: 'warning', size: '' },
  { id: 4, image: ALLImages('face11'), color: 'danger', size: 'md' },
  { id: 5, image: ALLImages('face13'), color: 'info', size: 'lg' },
  { id: 6, image: ALLImages('face14'), color: 'light', size: 'xl' },
]
`}
                  </code></pre>
                </Tab>
              </Tabs>
            </div>
          </Card>
        </Col>
        <Col xl={12}>
          <Row className="row-sm">
            {AlertCard.map((idx) => (
              <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={idx.id}>
                {!closedAlerts.includes(idx.id) && (
                  <Card className="bg-white border-0">
                    <Alert variant={idx.color} className={`custom-alert1`}>
                      <button type="button" className="btn-close ms-auto" onClick={() => closeAlert(idx.id)} data-bs-dismiss="alert" aria-label="Close">
                        <i className="bi bi-x"></i>
                      </button>
                      <div className="text-center px-5 pb-0">
                        {idx.icon}
                        <h5>{idx.heading}</h5>
                        <p className="">
                          This alert is created to just show the {
                            idx.id === 1 ? 'related information.' :
                              idx.id === 2 ? 'confirmation message' :
                                idx.id === 3 ? 'warning message' :
                                  idx.id === 4 ? 'danger message' :
                                    ''
                          }
                        </p>
                        {idx.Element}
                      </div>
                    </Alert>
                  </Card>
                )}
              </Col>
            ))}
          </Row>
        </Col>
        <Col xl={12}>
          <Row className="row-sm">
            {ColoredAlert.map((idx) => (
              <Col xl={3} key={idx.id}>
                {!closedAlerts2.includes(idx.id) && (
                  <Card className="custom-card border-0">
                    <Alert variant={idx.color} className={`border border-${idx.color} mb-0 p-2`}>
                      <div className="d-flex align-items-start">
                        <div className="me-2">{idx.icon}</div>
                        <div className={`text-${idx.color} w-100`}>
                          <div className="fw-semibold d-flex justify-content-between">
                            {idx.heading}
                            <button
                              type="button"
                              onClick={() => closeAlert2(idx.id)}
                              className="btn-close p-0"
                              data-bs-dismiss="alert"
                              aria-label="Close"
                            >
                              <i className="bi bi-x"></i>
                            </button>
                          </div>
                          <div className="fs-12 op-8 mb-1">{idx.description}</div>
                          <div className="fs-12">
                            <Link to="#" className={`text-${idx.class} fw-semibold me-2 d-inline-block`}>
                              cancel
                            </Link>
                            <Link to="#" className={`text-${idx.color} fw-semibold`}>
                              open
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Alert>
                  </Card>
                )}
              </Col>
            ))}
          </Row>
        </Col>
        <Col xl={12}>
          <Row className="row-sm">
            {SolidAlert.map((i) => (
              <Col xl={3} key={Math.random()}>
                <Card className="border-0">
                  {!closedAlerts3.includes(i.id) && (
                    <div className={`alert alert-solid-${i.color} border border-${i.color} mb-0 p-2`}>
                      <div className="d-flex align-items-start">
                        <div className="me-2">
                          {i.icon}
                        </div>
                        <div className="text-fixed-white w-100">
                          <div className="fw-semibold d-flex justify-content-between">{i.heading}<button type="button" onClick={() => closeAlert3(i.id)} className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button></div>
                          <div className="fs-12 op-8 mb-1">{i.description}</div>
                          {i.element}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Additional content
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(16)}>Show Code<i className={`${isHidden[16] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[16] ? 'd-none' : ''}`}>
              <Row className="gy-3">
                {['primary', 'secondary', 'success', 'warning'].map((idx, index) => (
                  <Col xl={6} key={Math.random()}>
                    {!closedAlerts4.includes(index) && (
                      <div className={`alert alert-${idx} overflow-hidden p-0`} role="alert">
                        <div className={`p-3 bg-${idx} text-fixed-white d-flex justify-content-between`}>
                          <h6 className="aletr-heading mb-0">Thank you for reporting this.</h6>
                          <button type="button" className="btn-close p-0 text-fixed-white" onClick={() => closeAlert4(index)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
                        </div>
                        <hr className="my-0" />
                        <div className="p-3">
                          <p className="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <Link to="#" className="fw-semibold text-decoration-underline">Visit for support for queries ?</Link></p>
                        </div>
                      </div>
                    )}
                  </Col>
                ))}
              </Row>
            </Card.Body>
            <div className={`card-footer ${isHidden[16] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
{['primary', 'secondary', 'success', 'warning'].map((idx, index) => (
  <Col xl={6} key={Math.random()}>
    {!closedAlerts4.includes(index) && (
      <div className={\`alert alert-\${idx} overflow-hidden p-0\`} role="alert">
        <div className={\`p-3 bg-\${idx} text-fixed-white d-flex justify-content-between\`}>
          <h6 className="aletr-heading mb-0">Thank you for reporting this.</h6>
          <button type="button" className="btn-close p-0 text-fixed-white" onClick={() => closeAlert4(index)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
        </div>
        <hr className="my-0" />
        <div className="p-3">
          <p className="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <Link to="#" className="fw-semibold text-decoration-underline">Visit for support for queries ?</Link></p>
        </div>
      </div>
    )}
  </Col>
))}
</Card.Body>
`}
                  </code></pre>
                </Tab>
                <Tab eventKey="fnct" title="javascript">
                  <pre><code className='language-javascript'>
                    {`
  const [closedAlerts4, setClosedAlerts4] = useState([]);

  const closeAlert4 = (id) => {
    if (!closedAlerts4.includes(id)) {
      setClosedAlerts4((prevClosedAlerts) => [...prevClosedAlerts, id]);
    }
  };
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

export default Alerts;