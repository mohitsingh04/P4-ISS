import React, { Fragment, useState } from 'react'
import { Card, Carousel, Col, Row, Tab, Tabs } from 'react-bootstrap';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import ALLImages from '../../common/Imagesdata';

const Carousels = () => {

  //show code 

  const [isHidden, setIsHidden] = useState([false]);
  const toggleHidden = (index) => {
    const updatedHidden = [...isHidden];
    updatedHidden[index] = !updatedHidden[index];
    setIsHidden(updatedHidden);
  };

  return (
    <Fragment>
      <Pageheader homepage='Carousel' activepage='Advanced Ui' page='Carousel' />

      <Row className="row-sm">
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">Basic Carousel</div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
              <Carousel indicators={false} controls={false}>
                <Carousel.Item>
                  <img src={ALLImages('media1')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <div className={`card-footer ${isHidden[0] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
<Carousel indicators={false} controls={false}>
  <Carousel.Item>
     <img src={ALLImages('media1')} className="d-block w-100" alt="..." />
  </Carousel.Item>
  <Carousel.Item>
     <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
  </Carousel.Item>
  <Carousel.Item>
     <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
  </Carousel.Item>
</Carousel>>
</Card.Body>
`}
                  </code></pre>
                </Tab>
              </Tabs>
            </div>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">With controls</div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
              <Carousel indicators={false} controls={true}>
                <Carousel.Item>
                  <img src={ALLImages('media8')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media1')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <div className={`card-footer ${isHidden[1] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
  <Carousel indicators={false} controls={true}>
    <Carousel.Item>
      <img src={ALLImages('media8')} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages('media1')} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
    </Carousel.Item>
  </Carousel>
</Card.Body>
`}
                  </code></pre>
                </Tab>
              </Tabs>
            </div>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">With indicators</div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[2] ? 'd-none' : ''}`}>
              <Carousel indicators={true} controls={false}>
                <Carousel.Item >
                  <img src={ALLImages('media5')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media9')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <div className={`card-footer ${isHidden[2] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
  <Carousel indicators={true} controls={false}>
    <Carousel.Item >
      <img src={ALLImages('media5')} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages('media9')} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
    </Carousel.Item>
  </Carousel>
</Card.Body>
`}
                  </code></pre>
                </Tab>
              </Tabs>
            </div>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card carousel-with-caption">
            <Card.Header className="justify-content-between">
              <div className="card-title">With captions</div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
              <Carousel>
                <Carousel.Item>
                  <img src={ALLImages('media9')} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p className='text-fixed-'>Some representative placeholder content for the first slide.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media5')} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media1')} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <div className={`card-footer ${isHidden[3] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
  <Carousel>
    <Carousel.Item>
      <img src={ALLImages('media9')} className="d-block w-100" alt="..." />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p className='text-fixed-'>Some representative placeholder content for the first slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages('media5')} className="d-block w-100" alt="..." />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages('media1')} className="d-block w-100" alt="..." />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</Card.Body>
`}
                  </code></pre>
                </Tab>
              </Tabs>
            </div>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">Crossfade</div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[4] ? 'd-none' : ''}`}>
              <Carousel indicators={false} controls={true} fade>
                <Carousel.Item>
                  <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media4')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media5')} className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <div className={`card-footer ${isHidden[4] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
  <Carousel indicators={false} controls={true} fade>
    <Carousel.Item>
      <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages('media4')} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages('media5')} className="d-block w-100" alt="..." />
    </Carousel.Item>
  </Carousel>
</Card.Body>
`}
                  </code></pre>
                </Tab>
              </Tabs>
            </div>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">Individual .carousel-item interval</div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[5] ? 'd-none' : ''}`}>
              <Carousel indicators={false} controls={false}>
                <Carousel.Item interval={10000}>
                  <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img src={ALLImages("media1")} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item interval={200}>
                  <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <div className={`card-footer ${isHidden[5] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
  <Carousel indicators={false} controls={false}>
    <Carousel.Item interval={10000}>
      <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img src={ALLImages("media1")} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item interval={200}>
      <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
    </Carousel.Item>
  </Carousel>
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
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">Disable touch swiping</div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[6] ? 'd-none' : ''}`}>
              <Carousel touch={false} wrap={false} indicators={false} controls={true}>
                <Carousel.Item>
                  <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages("media4")} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ALLImages('media8')} className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <div className={`card-footer ${isHidden[6] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
  <Carousel touch={false} wrap={false} indicators={false} controls={true}>
    <Carousel.Item>
      <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages("media4")} className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item>
      <img src={ALLImages('media8')} className="d-block w-100" alt="..." />
    </Carousel.Item>
  </Carousel>
</Card.Body>
`}
                  </code></pre>
                </Tab>
              </Tabs>
            </div>
          </Card>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12}>
          <Card className="custom-card dark-variant-carousel">
            <Card.Header className="justify-content-between">
              <div className="card-title">Dark variant</div>
              <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(7)}>Show Code<i className={`${isHidden[7] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle `}></i></button>
              </div>
            </Card.Header>
            <Card.Body className={`${isHidden[7] ? 'd-none' : ''}`}>
              <Carousel data-bs-theme='dark'>
                <Carousel.Item interval={10000}>
                  <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p className='text-fixed-white'>Some representative placeholder content for the first slide.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img src={ALLImages("media4")} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p className='text-fixed-white'>Some representative placeholder content for the second slide.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={200}>
                  <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p className='text-fixed-white'>Some representative placeholder content for the third slide.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
            <div className={`card-footer ${isHidden[7] ? '' : 'd-none'} border-top-0`}>
              <Tabs defaultActiveKey="home" className="nav-style-3" id="left-tabs-example">
                <Tab eventKey="home" title="Jsx">
                  <pre><code className='language-javascript'>
                    {`
<Card.Body>
  <Carousel data-bs-theme='dark'>
    <Carousel.Item interval={10000}>
      <img src={ALLImages('media3')} className="d-block w-100" alt="..." />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p className='text-fixed-white'>Some representative placeholder content for the first slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img src={ALLImages("media4")} className="d-block w-100" alt="..." />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p className='text-fixed-white'>Some representative placeholder content for the second slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={200}>
      <img src={ALLImages('media2')} className="d-block w-100" alt="..." />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p className='text-fixed-white'>Some representative placeholder content for the third slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
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

export default Carousels;