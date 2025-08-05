import React, { Fragment, useState } from 'react'
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import ALLImages from '../../common/Imagesdata';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tags = () => {

    const [tags, setTags] = useState(["One", "Two", "Three", "Four"]);

    const handleDelete = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <Fragment>
            <Pageheader homepage="Tags" activepage="UI Elements" page='Tags' />

            <Row>
                <Col lg={6} md={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h3 className="card-title">Default tag</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag">First tag</span>
                                        <span className="tag">Second tag</span>
                                        <span className="tag">Third tag</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h3 className="card-title">Link tag</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        <Link to="#" className="tag">First tag</Link>
                                        <Link to="#" className="tag">Second tag</Link>
                                        <Link to="#" className="tag">Third tag</Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h3 className="card-title">Rounded tag</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag tag-rounded">First tag</span>
                                        <span className="tag tag-rounded">Second tag</span>
                                        <span className="tag tag-rounded">Third tag</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h3 className="card-title">Color tag</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag tag-blue">Blue tag</span>
                                        <span className="tag tag-indigo">Indigo tag</span>
                                        <span className="tag tag-purple">Purple tag</span>
                                        <span className="tag tag-pink">Pink tag</span>
                                        <span className="tag tag-red">Red tag</span>
                                        <span className="tag tag-orange">Orange tag</span>
                                        <span className="tag tag-yellow">Yellow tag</span>
                                        <span className="tag tag-green">Green tag</span>
                                        <span className="tag tag-teal">Teal tag</span>
                                        <span className="tag tag-cyan">Cyan tag</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h3 className="card-title">Avatar tag</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag">
                                            <img className="tag-avatar avatar cover-image" alt="img" src={ALLImages('face11')} />
                                            Victoria
                                        </span>
                                        <span className="tag">
                                            <img className="tag-avatar avatar cover-image" alt="img" src={ALLImages('face4')} />
                                            Nathan
                                        </span>
                                        <span className="tag">
                                            <img className="tag-avatar avatar cover-image" alt="img" src={ALLImages('face1')} />
                                            Alice
                                        </span>
                                        <span className="tag">
                                            <img className="tag-avatar avatar cover-image" alt="img" src={ALLImages('face18')} />
                                            Rose
                                        </span>
                                        <span className="tag">
                                            <img className="tag-avatar avatar cover-image" alt="img" src={ALLImages('face16')} />
                                            Peter
                                        </span>
                                        <span className="tag">
                                            <img className="tag-avatar avatar cover-image" alt="img" src={ALLImages('face6')} />
                                            Wayne
                                        </span>
                                        <span className="tag">
                                            <img className="tag-avatar avatar cover-image" alt="img" src={ALLImages('face7')} />
                                            Michelle
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h3 className="card-title">List of tags</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap">
                                <p>You can create a list of tags with the <code
                                    className="highlighter-rouge">.tags</code> container.</p>
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag">First tag</span>
                                        <span className="tag">Second tag</span>
                                        <span className="tag">Third tag</span>
                                    </div>
                                </div>
                                <p className="mt-4">If the list is very long, it will automatically wrap on multiple
                                    lines, while keeping all tags evenly spaced.</p>
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag">One</span>
                                        <span className="tag">Two</span>
                                        <span className="tag">Three</span>
                                        <span className="tag">Four</span>
                                        <span className="tag">Five</span>
                                        <span className="tag">Six</span>
                                        <span className="tag">Seven</span>
                                        <span className="tag">Eight</span>
                                        <span className="tag">Nine</span>
                                        <span className="tag">Ten</span>
                                        <span className="tag">Eleven</span>
                                        <span className="tag">Twelve</span>
                                        <span className="tag">Thirteen</span>
                                        <span className="tag">Fourteen</span>
                                        <span className="tag">Fifteen</span>
                                        <span className="tag">Sixteen</span>
                                        <span className="tag">Seventeen</span>
                                        <span className="tag">Eighteen</span>
                                        <span className="tag">Nineteen</span>
                                        <span className="tag">Twenty</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <h3 className="card-title">Tag remove</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        {tags.map((tag, index) => (
                                            <span key={index} className="tag">
                                                {tag} <Link tp='#' onClick={() => handleDelete(index)} className="tag-addon"><i className="fe fe-x"></i></Link>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Tags;