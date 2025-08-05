import { Fragment, useState } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';


const Input = () => {

  const [isHidden, setIsHidden] = useState([false]);
  const toggleHidden = (index) => {
    const updatedHidden = [...isHidden];
    updatedHidden[index] = !updatedHidden[index];
    setIsHidden(updatedHidden);
  };

  return (
    <Fragment>
      <Pageheader homepage='Inputs' activepage='Form Elements' page='Inputs' />

      <Row className="row-sm">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'> Input Types </div>
              <div className="prism-toggle">
                <Button variant='primary-light' size='sm' onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></Button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
              <Row className="gy-4">
                <Col xl={6} lg={6} md={6} sm={12}>
                  <p className="mb-2">Basic Input:</p>
                  <Form.Control type="text" id="input" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-label">Form Input With Label</Form.Label>
                  <Form.Control type="text" id="input-label" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-placeholder">Form Input With Placeholder</Form.Label>
                  <Form.Control type="text" id="input-placeholder" placeholder="Placeholder" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-text">Type Text</Form.Label>
                  <Form.Control type="text" id="input-text" placeholder="Text" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-number">Type Number</Form.Label>
                  <Form.Control type="number" id="input-number" placeholder="Number" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-password">Type Password</Form.Label>
                  <Form.Control type="password" id="input-password" placeholder="Password" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-email">Type Email</Form.Label>
                  <Form.Control type="email" id="input-email" placeholder="Email@xyz.com" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-tel">Type Tel</Form.Label>
                  <Form.Control type="tel" id="input-tel" placeholder="+1100-2031-1233" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-date">Type Date</Form.Label>
                  <Form.Control type="date" id="input-date" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-week">Type Week</Form.Label>
                  <Form.Control type="week" id="input-week" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-month">Type Month</Form.Label>
                  <Form.Control type="month" id="input-month" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-time">Type Time</Form.Label>
                  <Form.Control type="time" id="input-time" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-datetime-local">Type datetime-local</Form.Label>
                  <Form.Control type="datetime-local" id="input-datetime-local" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-search">Type Search</Form.Label>
                  <Form.Control type="search" id="input-search" placeholder="Search" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-submit">Type Submit</Form.Label>
                  <Form.Control type="submit" id="input-submit" value="Submit" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-reset">Type Reset</Form.Label>
                  <Form.Control type="reset" id="input-reset" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-button">Type Button</Form.Label>
                  <Form.Control type="button" className="btn btn-primary" id="input-button" value="Button" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Row>
                    <Col xl={3}>
                      <Form.Label>Type Color</Form.Label>
                      <Form.Control type="color" defaultValue="#136bd0" />
                    </Col>
                    <Col xl={5}>
                      <div className="form-check ps-0">
                        <p className="mb-3 px-0 text-muted">Type Checkbox</p>
                        <Form.Check className="ms-4" type="checkbox" id="custom-switch" defaultChecked />
                      </div>
                    </Col>
                    <Col xl={4}>
                      <div className="form-check ps-0">
                        <p className="mb-3 px-0 text-muted">Type Radio</p>
                        <Form.Check className="ms-4" type="radio" id="custom-switch" defaultChecked />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-file">Type File</Form.Label>
                  <Form.Control type="file" id="input-file" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label>Type Url</Form.Label>
                  <Form.Control type="url" name="website" placeholder="http://example.com" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-disabled">Type Disabled</Form.Label>
                  <Form.Control type="text" id="input-disabled" placeholder="Disabled input" disabled />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-readOnly text">Input readOnly Text</Form.Label>
                  <Form.Control type="text" readOnly={true} id="input-readOnly text" value="email@example.com" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="disabled-readOnly text">Disabled readOnly Input</Form.Label>
                  <Form.Control type="text" value="Disabled readOnly input" id="disabled-readOnly text" aria-label="Disabled input example" disabled readOnly={true} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label>Type readOnly Input</Form.Label>
                  <Form.Control type="text" value="readOnly input here..." aria-label="readOnly input example" readOnly={true} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="text-area">Textarea</Form.Label>
                  <Form.Control as='textarea' id="text-area" rows={1} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-DataList">Datalist example</Form.Label>
                  <Form.Control list="datalistOptions" id="input-DataList" placeholder="Type to search..." />
                  <datalist id="datalistOptions">
                    <option value="San Francisco"> </option>
                    <option value="New York"> </option>
                    <option value="Seattle"> </option>
                    <option value="Los Angeles"> </option>
                    <option value="Chicago"> </option>
                  </datalist>
                </Col>
              </Row>
            </Card.Body>

            <div className={`card-footer h-300 overflow-scroll ${isHidden[0] ? '' : 'd-none'} border-top-0`}>
              <pre><code className='language-javascript'>
                {`<Row className="gy-4 language-html">
                <Col xl={6} lg={6} md={6} sm={12}>
                  <p className="mb-2 fw-medium">Basic Input:</p>
                  <Form.Control type="text" id="input" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-label">Form Input With Label</Form.Label>
                  <Form.Control type="text" id="input-label" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-placeholder">Form Input With Placeholder</Form.Label>
                  <Form.Control type="text" id="input-placeholder" placeholder="Placeholder" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-text">Type Text</Form.Label>
                  <Form.Control type="text" id="input-text" placeholder="Text" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-number">Type Number</Form.Label>
                  <Form.Control type="number" id="input-number" placeholder="Number" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-password">Type Password</Form.Label>
                  <Form.Control type="password" id="input-password" placeholder="Password" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-email">Type Email</Form.Label>
                  <Form.Control type="email" id="input-email" placeholder="Email@xyz.com" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-tel">Type Tel</Form.Label>
                  <Form.Control type="tel" id="input-tel" placeholder="+1100-2031-1233" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-date">Type Date</Form.Label>
                  <Form.Control type="date" id="input-date" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-week">Type Week</Form.Label>
                  <Form.Control type="week" id="input-week" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-month">Type Month</Form.Label>
                  <Form.Control type="month" id="input-month" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-time">Type Time</Form.Label>
                  <Form.Control type="time" id="input-time" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-datetime-local">Type datetime-local</Form.Label>
                  <Form.Control type="datetime-local" id="input-datetime-local" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-search">Type Search</Form.Label>
                  <Form.Control type="search" id="input-search" placeholder="Search" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-submit">Type Submit</Form.Label>
                  <Form.Control type="submit" id="input-submit" value="Submit" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-reset">Type Reset</Form.Label>
                  <Form.Control type="reset" id="input-reset" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-button">Type Button</Form.Label>
                  <Form.Control type="button" className="btn btn-primary" id="input-button" value="Button" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Row>
                    <Col xl={3}>
                      <Form.Label>Type Color</Form.Label>
                      <Form.Control className="form-input-color" type="color" value="#136bd0" />
                    </Col>
                    <Col xl={5}>
                      <div className="form-check">
                        <p className="mb-3 px-0 text-muted">Type Checkbox</p>
                        <Form.Check className="ms-5" type="checkbox" id="custom-switch" defaultChecked />
                      </div>
                    </Col>
                    <Col xl={4}>
                      <div className="form-check">
                        <p className="mb-3 px-0 text-muted">Type Radio</p>
                        <Form.Check className="ms-5" type="radio" id="custom-switch" defaultChecked />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-file">Type File</Form.Label>
                  <Form.Control type="file" id="input-file" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label>Type Url</Form.Label>
                  <Form.Control type="url" name="website" placeholder="http://example.com" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-disabled">Type Disabled</Form.Label>
                  <Form.Control type="text" id="input-disabled" placeholder="Disabled input" disabled />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-readOnly text">Input readOnly Text</Form.Label>
                  <Form.Control type="text" readOnly={true} className="form-control-plaintext" id="input-readOnly text" value="email@example.com" />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="disabled-readOnly text">Disabled readOnly Input</Form.Label>
                  <Form.Control type="text" value="Disabled readOnly input" id="disabled-readOnly text" aria-label="Disabled input example" disabled readOnly={true} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label>Type readOnly={true} Input</Form.Label>
                  <Form.Control type="text" value="readOnly input here..." aria-label="readOnly input example" readOnly={true} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="text-area">Textarea</Form.Label>
                  <Form.Control as='textarea' id="text-area" rows={1} />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Label htmlFor="input-DataList">Datalist example</Form.Label>
                  <Form.Control list="datalistOptions" id="input-DataList" placeholder="Type to search..." />
                  <datalist id="datalistOptions">
                    <option value="San Francisco"> </option>
                    <option value="New York"> </option>
                    <option value="Seattle"> </option>
                    <option value="Los Angeles"> </option>
                    <option value="Chicago"> </option>
                  </datalist>
                </Col>
              </Row>`}
              </code></pre>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'>
                Input shapes
              </div>
              <div className="prism-toggle">
                <Button variant='primary-light' size='sm' onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></Button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
              <Row className="gy-3">
                <Col xl={12}>
                  <Form.Label htmlFor="input-noradius">Input With No Radius</Form.Label>
                  <Form.Control type="text" className="rounded-0" id="input-noradius" placeholder="No Radius" />
                </Col>
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded">Input With Radius</Form.Label>
                  <Form.Control type="text" id="input-rounded" placeholder="Default Radius" />
                </Col>
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded-pill">Rounded Input</Form.Label>
                  <Form.Control type="text" className="rounded-pill" id="input-rounded-pill" placeholder="Rounded" />
                </Col>
              </Row>
            </Card.Body>

            <div className={`${isHidden[1] ? '' : 'd-none'} card-footer border-top-0`}>
              {/* <!-- Prism Code --> */}

              <pre><code className='language-javascript'>
                {`
                <Row className="gy-3">
                <Col xl={12}>
                  <Form.Label htmlFor="input-noradius">Input With No Radius</Form.Label>
                  <Form.Control type="text" className="rounded-0" id="input-noradius" placeholder="No Radius" />
                </Col>
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded">Input With Radius</Form.Label>
                  <Form.Control type="text" id="input-rounded" placeholder="Default Radius" />
                </Col>
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded-pill">Rounded Input</Form.Label>
                  <Form.Control type="text" className="rounded-pill" id="input-rounded-pill" placeholder="Rounded" />
                </Col>
              </Row>
                `}
              </code></pre>

              {/* <!-- Prism Code --> */}
            </div>
          </Card>
        </Col>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'>
                Input border Styles
              </div>
              <div className="prism-toggle">
                <Button variant='primary-light' size='sm' onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></Button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[2] ? 'd-none' : ''}`}>
              <Row className="gy-3">
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded1">Default</Form.Label>
                  <Form.Control type="text" id="input-rounded1" placeholder="Default" />
                </Col>
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded2">Dotted Input</Form.Label>
                  <Form.Control type="text" className="border-dotted" id="input-rounded2" placeholder="Dotted" />
                </Col>
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded3">Dashed Input</Form.Label>
                  <Form.Control type="text" className="border-dashed" id="input-rounded3" placeholder="Dashed" />
                </Col>
              </Row>
            </Card.Body>
            <div className={`card-footer border-top-0 ${isHidden[2] ? '' : 'd-none'}`}>
              <pre><code className='language-javascript'>
                {`
                <Row className="gy-3">
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded1">Default</Form.Label>
                  <Form.Control type="text" id="input-rounded1" placeholder="Default" />
                </Col>
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded2">Dotted Input</Form.Label>
                  <Form.Control type="text" className="border-dotted" id="input-rounded2" placeholder="Dotted" />
                </Col>
                <Col xl={12}>
                  <Form.Label htmlFor="input-rounded3">Dashed Input</Form.Label>
                  <Form.Control type="text" className="border-dashed" id="input-rounded3" placeholder="Dashed" />
                </Col>
              </Row>
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
              <div className='card-title'>
                Input Sizing
              </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
              <Form.Control className="form-control-sm mb-3" type="text"
                placeholder=".form-control-sm" aria-label=".form-control-sm example" />
              <Form.Control className="mb-3" type="text" placeholder="Default input"
                aria-label="default input example" />
              <Form.Control className="form-control-lg" type="text"
                placeholder=".form-control-lg" aria-label=".form-control-lg example" />
            </Card.Body>
            <div className={`card-footer border-top-0 ${isHidden[3] ? '' : 'd-none'}`}>
              <pre><code className='language-javascript'>
                {`
                 <Form.Control className="form-control-sm mb-3" type="text"
                 placeholder=".form-control-sm" aria-label=".form-control-sm example" />
               <Form.Control className="mb-3" type="text" placeholder="Default input"
                 aria-label="default input example" />
               <Form.Control className="form-control-lg" type="text"
                 placeholder=".form-control-lg" aria-label=".form-control-lg example" />
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
              <div className='card-title'>
                Overview
              </div>
              <div className="prism-toggle">
                <Button size='sm' variant='primary-light' onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></Button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[4] ? 'd-none' : ''}`}>
              <form>
                <div className="mb-3">
                  <Form.Label htmlFor="exampleInputEmail1">Email
                    address</Form.Label>
                  <Form.Control type="email" id="exampleInputEmail1/"
                    aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll
                    never share your email
                    with
                    anyone else.</div>
                </div>
                <div className="my-3">
                  <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
                  <Form.Control type="password" id="exampleInputPassword1" />
                </div>
                <Form.Check label="Check me out" name="group1" type='checkbox' />
                <button type="submit" className="btn btn-primary my-2">Submit</button>
              </form>
            </Card.Body>
            <div className={`card-footer border-top-0 ${isHidden[4] ? '' : 'd-none'}`}>
              <pre><code className='language-javascript'>
                {`
               <form>
               <div className="mb-3">
                 <Form.Label htmlFor="exampleInputEmail1">Email
                   address</Form.Label>
                 <Form.Control type="email" id="exampleInputEmail1/"
                   aria-describedby="emailHelp" />
                 <div id="emailHelp" className="form-text">We'll
                   never share your email
                   with
                   anyone else.</div>
               </div>
               <div className="mb-3">
                 <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
                 <Form.Control type="password" id="exampleInputPassword1" />
               </div>
                <Form.Check label="Check me out" name="group1" type='radio'/>
               <button type="submit" className="btn btn-primary my-2">Submit</button>
             </form>
                `}
              </code></pre>
            </div>
          </Card>
        </Col>
        <Col xl={12}>
          <Row>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header className="justify-content-between">
                  <div className='card-title'>
                    Form text
                  </div>
                  <div className="prism-toggle">
                    <Button size='sm' variant='primary-light' onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></Button>
                  </div>
                </Card.Header>
                <Card.Body className={`${isHidden[5] ? 'd-none' : ''}`}>
                  <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                  <Form.Control type="password" id="inputPassword5"
                    aria-describedby="passwordHelpBlock" />
                  <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and
                    numbers,
                    and
                    must not contain spaces, special characters, or emoji.
                  </div>
                </Card.Body>
                <div className={`${isHidden[5] ? '' : 'd-none'} card-footer border-top-0`}>
                  <pre><code className='language-javascript'>
                    {`
               <Form.Label htmlFor="inputPassword5">Password</Form.Label>
               <Form.Control type="password" id="inputPassword5"
                 aria-describedby="passwordHelpBlock" />
               <div id="passwordHelpBlock" className="form-text">
                 Your password must be 8-20 characters long, contain letters and
                 numbers,
                 and
                 must not contain spaces, special characters, or emoji.
               </div>
                `}
                  </code></pre>
                </div>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header className="justify-content-between">
                  <div className='card-title'>
                    Inline text can use any typical inline HTML element with nothing more
                    than
                    the <span className="text-danger">.form-text</span> class.
                  </div>
                  <div className="prism-toggle">
                    <Button size='sm' variant='primary-light' onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></Button>
                  </div>
                </Card.Header>
                <Card.Body className={`${isHidden[6] ? 'd-none' : ''}`}>
                  <Row className="g-3 align-items-center">
                    <div className="col-auto">
                      <Form.Label htmlFor="inputPassword6" className="col-form-label">Password</Form.Label>
                    </div>
                    <div className="col-auto">
                      <Form.Control type="password" id="inputPassword6"
                        aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="col-auto">
                      <span id="passwordHelpInline" className="form-text">
                        Must be 8-20 characters long.
                      </span>
                    </div>
                  </Row>
                </Card.Body>
                <div className={`card-footer border-top-0 ${isHidden[6] ? '' : 'd-none'}`}>
                  <pre><code className='language-javascript'>
                    {`
                <Row className="g-3 align-items-center">
                <div className="col-auto">
                  <Form.Label htmlFor="inputPassword6" className="col-form-label">Password</Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Control type="password" id="inputPassword6"
                    aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                  <span id="passwordHelpInline" className="form-text">
                    Must be 8-20 characters long.
                  </span>
                </div>
              </Row>
                `}
                  </code></pre>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'>
                Disabled forms
              </div>
              <div className="prism-toggle">
                <Button size='sm' variant='primary-light' onClick={() => toggleHidden(7)}>Show Code<i className={`${isHidden[7] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></Button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[7] ? 'd-none' : ''}`}>
              <form>
                <fieldset disabled>
                  <legend>Disabled fieldset example</legend>
                  <div className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Disabled
                      input</Form.Label>
                    <Form.Control type="text" id="disabledTextInput"
                      placeholder="Disabled input" />
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Disabled select
                      menu</Form.Label>
                    <select id="disabledSelect" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <Form.Check label="Can't check this" name="group1" type='checkbox' disabled />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
              </form>
            </Card.Body>

            <div className={`card-footer border-top-0 ${isHidden[7] ? '' : 'd-none'}`}>
              <pre><code className='language-javascript'>
                {`
                <form>
                <fieldset disabled>
                  <legend>Disabled fieldset example</legend>
                  <div className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Disabled
                      input</Form.Label>
                    <Form.Control type="text" id="disabledTextInput"
                      placeholder="Disabled input" />
                  </div>
                  <div className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Disabled select
                      menu</Form.Label>
                    <select id="disabledSelect" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                  <div className="mb-3">
                  <Form.Check label="Can't check this" name="group1" type='checkbox' disabled/>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
              </form>
                `}
              </code></pre>
            </div>
          </Card>
        </Col>
      </Row>

    </Fragment>
  );
};

export default Input;