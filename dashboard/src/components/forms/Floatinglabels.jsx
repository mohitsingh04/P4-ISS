import { Fragment, useState } from 'react';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const Floatinglabels = () => {

  const [isHidden, setIsHidden] = useState([false]);
  const toggleHidden = (index) => {
    const updatedHidden = [...isHidden];
    updatedHidden[index] = !updatedHidden[index];
    setIsHidden(updatedHidden);
  };


  return (
    <Fragment>
      <Pageheader homepage='Floating labels' activepage='Forms' page='Floating labels' />

      <Row className="row-sm">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'> Basic Examples </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                <Form.Control type="email" placeholder="" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="" />
              </FloatingLabel>
            </Card.Body>
            <div className={`${isHidden[0] ? '' : 'd-none'} card-footer border-top-0`}>
              {/* <!-- Prism Code --> */}

              <pre><code className='language-javascript'>
                {`
<Card.Body>
<FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
  <Form.Control type="email" placeholder="" />
</FloatingLabel>
<FloatingLabel controlId="floatingPassword" label="Password">
  <Form.Control type="password" placeholder="" />
</FloatingLabel>
</Card.Body>
                `}
              </code></pre>

              {/* <!-- Prism Code --> */}
            </div>
          </Card>
        </Col>

        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'> readonly plain text </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
              <div className="form-floating mb-3">
                <input type="email" readOnly className="form-control-plaintext"
                  id="floatingEmptyPlaintextInput" placeholder="name@example.com" />
                <label htmlFor="floatingEmptyPlaintextInput">Empty input</label>
              </div>
              <div className="form-floating">
                <input type="email" readOnly className="form-control-plaintext"
                  id="floatingPlaintextInput" placeholder="name@example.com"
                  defaultValue="name@example.com" />
                <label htmlFor="floatingPlaintextInput">Input with value</label>
              </div>
            </Card.Body>
            <div className={`${isHidden[1] ? '' : 'd-none'} card-footer border-top-0`}>
              {/* <!-- Prism Code --> */}

              <pre><code className='language-javascript'>
                {`
<Card.Body>
<div className="form-floating mb-3">
  <input type="email" readOnly className="form-control-plaintext"
    id="floatingEmptyPlaintextInput" placeholder="name@example.com" />
  <label htmlFor="floatingEmptyPlaintextInput">Empty input</label>
</div>
<div className="form-floating">
  <input type="email" readOnly className="form-control-plaintext"
    id="floatingPlaintextInput" placeholder="name@example.com"
    defaultValue="name@example.com" />
  <label htmlFor="floatingPlaintextInput">Input with value</label>
</div>
</Card.Body>
                `}
              </code></pre>

              {/* <!-- Prism Code --> */}
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'> Floating Labels With Pre Defined Values </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[2] ? 'd-none' : ''}`}>
              <form className="form-floating my-3">
                <input type="email" className="form-control" id="floatingInputValue"
                  placeholder="name@example.com" defaultValue="test@example.com" />
                <label htmlFor="floatingInputValue">Input with value</label>
              </form>
              <form className="form-floatin">
                <input type="email" className="form-control is-invalid"
                  id="floatingInputInvalid" placeholder="name@example.com"
                  defaultValue="test@example.com" />
                <label htmlFor="floatingInputInvalid">Invalid input</label>
              </form>
            </Card.Body>
            <div className={`${isHidden[2] ? '' : 'd-none'} card-footer border-top-0`}>
              {/* <!-- Prism Code --> */}

              <pre><code className='language-javascript'>
                {`
<Card.Body>
<form className="form-floating my-3">
  <input type="email" className="form-control" id="floatingInputValue"
    placeholder="name@example.com" defaultValue="test@example.com" />
  <label htmlFor="floatingInputValue">Input with value</label>
</form>
<form className="form-floatin">
  <input type="email" className="form-control is-invalid"
    id="floatingInputInvalid" placeholder="name@example.com"
    defaultValue="test@example.com" />
  <label htmlFor="floatingInputInvalid">Invalid input</label>
</form>
</Card.Body>
                `}
              </code></pre>

              {/* <!-- Prism Code --> */}
            </div>
          </Card>
        </Col>

        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'> Textareas </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
              <div className="form-floating mb-4">
                <textarea className="form-control" placeholder=""
                  id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Description</label>
              </div>
              <div className="form-floating">
                <textarea className="form-control" placeholder=""
                  id="floatingTextarea2" rows={1} disabled></textarea>
                <label htmlFor="floatingTextarea2">Disabled</label>
              </div>
            </Card.Body>
            <div className={`${isHidden[3] ? '' : 'd-none'} card-footer border-top-0`}>
              {/* <!-- Prism Code --> */}

              <pre><code className='language-javascript'>
                {`
<Card.Body>
<div className="form-floating mb-4">
<textarea className="form-control" placeholder="Leave a comment here"
  id="floatingTextarea"></textarea>
<label htmlFor="floatingTextarea">Description</label>
</div>
<div className="form-floating">
<textarea className="form-control" placeholder="Leave a comment here"
  id="floatingTextarea2" rows={1} disabled></textarea>
<label htmlFor="floatingTextarea2">Disabled</label>
</div>
</Card.Body>
                `}
              </code></pre>

              {/* <!-- Prism Code --> */}
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'> Floating Labels In Select </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[4] ? 'd-none' : ''}`}>
              <FloatingLabel controlId="floatingSelect" label="Works with selects">
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Card.Body>
            <div className={`${isHidden[4] ? '' : 'd-none'} card-footer border-top-0`}>
              {/* <!-- Prism Code --> */}

              <pre><code className='language-javascript'>
                {`
<Card.Body>
<FloatingLabel controlId="floatingSelect" label="Works with selects">
<Form.Select aria-label="Floating label select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
</FloatingLabel>
</Card.Body>
                `}
              </code></pre>

              {/* <!-- Prism Code --> */}
            </div>
          </Card>
        </Col>

        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'> Floating Labels With Layouts </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[5] ? 'd-none' : ''}`}>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" defaultValue='mdo@example.com' />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingSelectGrid" label="Works with selects" >
                    <Form.Select aria-label="Floating label select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
            </Card.Body>
            <div className={`${isHidden[5] ? '' : 'd-none'} card-footer border-top-0`}>
              {/* <!-- Prism Code --> */}

              <pre><code className='language-javascript'>
                {`
<Card.Body>
<Row className="g-2">
<Col md>
  <FloatingLabel controlId="floatingInputGrid" label="Email address">
    <Form.Control type="email" placeholder="name@example.com" defaultValue='mdo@example.com' />
  </FloatingLabel>
</Col>
<Col md>
  <FloatingLabel controlId="floatingSelectGrid" label="Works with selects" >
    <Form.Select aria-label="Floating label select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  </FloatingLabel>
</Col>
</Row>
</Card.Body>
                `}
              </code></pre>

              {/* <!-- Prism Code --> */}
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className='card-title'> Floating Label Colors </div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[6] ? 'd-none' : ''}`}>
              <Row className="gy-4">
                <Col xl={4}>
                  <div className="form-floating mb-4 floating-primary">
                    <input type="email" className="form-control" id="floatingInputprimary" placeholder="" />
                    <label htmlFor="floatingInputprimary">primary</label>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="form-floating mb-4 floating-secondary">
                    <input type="email" className="form-control" id="floatingInputsecondary" placeholder="" />
                    <label htmlFor="floatingInputsecondary">secondary</label>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="form-floating mb-4 floating-warning">
                    <input type="email" className="form-control" id="floatingInputwarning" placeholder="" />
                    <label htmlFor="floatingInputwarning">warning</label>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="form-floating mb-4 floating-info">
                    <input type="email" className="form-control" id="floatingInputinfo" placeholder="" />
                    <label htmlFor="floatingInputinfo">info</label>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="form-floating mb-4 floating-success">
                    <input type="email" className="form-control" id="floatingInputsuccess" placeholder="" />
                    <label htmlFor="floatingInputsuccess">success</label>
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="form-floating mb-4 floating-danger">
                    <input type="email" className="form-control" id="floatingInputdanger" placeholder="" />
                    <label htmlFor="floatingInputdanger">danger</label>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <div className={`${isHidden[6] ? '' : 'd-none'} card-footer border-top-0`}>
              {/* <!-- Prism Code --> */}

              <pre><code className='language-javascript'>
                {`
<Card.Body>
<Row className="gy-4">
<Col xl={4}>
  <div className="form-floating mb-4 floating-primary">
    <input type="email" className="form-control" id="floatingInputprimary" placeholder="" />
    <label htmlFor="floatingInputprimary">primary</label>
  </div>
</Col>
<Col xl={4}>
  <div className="form-floating mb-4 floating-secondary">
    <input type="email" className="form-control" id="floatingInputsecondary" placeholder="" />
    <label htmlFor="floatingInputsecondary">secondary</label>
  </div>
</Col>
<Col xl={4}>
  <div className="form-floating mb-4 floating-warning">
    <input type="email" className="form-control" id="floatingInputwarning" placeholder="" />
    <label htmlFor="floatingInputwarning">warning</label>
  </div>
</Col>
<Col xl={4}>
  <div className="form-floating mb-4 floating-info">
    <input type="email" className="form-control" id="floatingInputinfo" placeholder="" />
    <label htmlFor="floatingInputinfo">info</label>
  </div>
</Col>
<Col xl={4}>
  <div className="form-floating mb-4 floating-success">
    <input type="email" className="form-control" id="floatingInputsuccess" placeholder="" />
    <label htmlFor="floatingInputsuccess">success</label>
  </div>
</Col>
<Col xl={4}>
  <div className="form-floating mb-4 floating-danger">
    <input type="email" className="form-control" id="floatingInputdanger" placeholder="" />
    <label htmlFor="floatingInputdanger">danger</label>
  </div>
</Col>
</Row>
</Card.Body>
                `}
              </code></pre>

              {/* <!-- Prism Code --> */}
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Floatinglabels;