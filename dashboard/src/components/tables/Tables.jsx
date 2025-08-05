import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../layouts/layoutcomponents/Pageheader';
import ALLImages from '../../common/Imagesdata';


const Tables = () => {

    //Show code

    const [isHidden, setIsHidden] = useState([false]);
    const toggleHidden = (index) => {
        const updatedHidden = [...isHidden];
        updatedHidden[index] = !updatedHidden[index];
        setIsHidden(updatedHidden);
    };

    return (
        <Fragment>
            <Pageheader homepage='Tables' activepage='Tables' page='Tables' />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Basic Tables
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Created On</th>
                                            <th scope="col">Number</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Mark</th>
                                            <td>21,Dec 2021</td>
                                            <td>+1234-12340</td>
                                            <td><span className="badge bg-outline-primary">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Monika</th>
                                            <td>29,April 2023</td>
                                            <td>+1523-12459</td>
                                            <td><span className="badge bg-outline-warning">Failed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Madina</th>
                                            <td>30,Nov 2023</td>
                                            <td>+1982-16234</td>
                                            <td><span className="badge bg-outline-success">Successful</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Bhamako</th>
                                            <td>18,Mar 2023</td>
                                            <td>+1526-10729</td>
                                            <td><span className="badge bg-outline-secondary">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[0] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Created On</th>
            <th scope="col">Number</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Mark</th>
            <td>21,Dec 2021</td>
            <td>+1234-12340</td>
            <td><span className="badge bg-outline-primary">Completed</span></td>
        </tr>
        <tr>
            <th scope="row">Monika</th>
            <td>29,April 2023</td>
            <td>+1523-12459</td>
            <td><span className="badge bg-outline-warning">Failed</span></td>
        </tr>
        <tr>
            <th scope="row">Madina</th>
            <td>30,Nov 2023</td>
            <td>+1982-16234</td>
            <td><span className="badge bg-outline-success">Successful</span></td>
        </tr>
        <tr>
            <th scope="row">Bhamako</th>
            <td>18,Mar 2023</td>
            <td>+1526-10729</td>
            <td><span className="badge bg-outline-secondary">Pending</span></td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Bordered Tables
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(1)}>Show Code<i className={`${isHidden[1] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[1] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">User</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face13')} alt="img" />
                                                    </span>Sukuro Kim
                                                </div>
                                            </th>
                                            <td><span className="badge bg-success-transparent">Active</span></td>
                                            <td>kimosukuro@gmail.com</td>
                                            <td>
                                                <div className="hstack gap-2 flex-wrap">
                                                    <Link to="#" className="text-info fs-14 lh-1"><i
                                                        className="ri-edit-line"></i></Link>
                                                    <Link to="#" className="text-danger fs-14 lh-1"><i
                                                        className="ri-delete-bin-5-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 offline avatar-rounded">
                                                        <img src={ALLImages('face6')} alt="img" />
                                                    </span>Hasimna
                                                </div>
                                            </th>
                                            <td><span className="badge bg-light text-dark">Inactive</span></td>
                                            <td>hasimna2132@gmail.com</td>
                                            <td>
                                                <div className="hstack gap-2 flex-wrap">
                                                    <Link to="#" className="text-info fs-14 lh-1"><i
                                                        className="ri-edit-line"></i></Link>
                                                    <Link to="#" className="text-danger fs-14 lh-1"><i
                                                        className="ri-delete-bin-5-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face15')} alt="img" />
                                                    </span>Azimo Khan
                                                </div>
                                            </th>
                                            <td><span className="badge bg-success-transparent">Active</span></td>
                                            <td>azimokhan421@gmail.com</td>
                                            <td>
                                                <div className="hstack gap-2 flex-wrap">
                                                    <Link to="#" className="text-info fs-14 lh-1"><i
                                                        className="ri-edit-line"></i></Link>
                                                    <Link to="#" className="text-danger fs-14 lh-1"><i
                                                        className="ri-delete-bin-5-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face5')} alt="img" />
                                                    </span>Samantha Julia
                                                </div>
                                            </th>
                                            <td><span className="badge bg-success-transparent">Active</span></td>
                                            <td>julianasams143@gmail.com</td>
                                            <td>
                                                <div className="hstack gap-2 flex-wrap">
                                                    <Link to="#" className="text-info fs-14 lh-1"><i
                                                        className="ri-edit-line"></i></Link>
                                                    <Link to="#" className="text-danger fs-14 lh-1"><i
                                                        className="ri-delete-bin-5-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[1] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap table-bordered">
    <thead>
        <tr>
            <th scope="col">User</th>
            <th scope="col">Status</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face13')} alt="img" />
                    </span>Sukuro Kim
                </div>
            </th>
            <td><span className="badge bg-success-transparent">Active</span></td>
            <td>kimosukuro@gmail.com</td>
            <td>
                <div className="hstack gap-2 flex-wrap">
                    <Link to="#" className="text-info fs-14 lh-1"><i
                        className="ri-edit-line"></i></Link>
                    <Link to="#" className="text-danger fs-14 lh-1"><i
                        className="ri-delete-bin-5-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row">
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 offline avatar-rounded">
                        <img src={ALLImages('face6')} alt="img" />
                    </span>Hasimna
                </div>
            </th>
            <td><span className="badge bg-light text-dark">Inactive</span></td>
            <td>hasimna2132@gmail.com</td>
            <td>
                <div className="hstack gap-2 flex-wrap">
                    <Link to="#" className="text-info fs-14 lh-1"><i
                        className="ri-edit-line"></i></Link>
                    <Link to="#" className="text-danger fs-14 lh-1"><i
                        className="ri-delete-bin-5-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row">
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face15')} alt="img" />
                    </span>Azimo Khan
                </div>
            </th>
            <td><span className="badge bg-success-transparent">Active</span></td>
            <td>azimokhan421@gmail.com</td>
            <td>
                <div className="hstack gap-2 flex-wrap">
                    <Link to="#" className="text-info fs-14 lh-1"><i
                        className="ri-edit-line"></i></Link>
                    <Link to="#" className="text-danger fs-14 lh-1"><i
                        className="ri-delete-bin-5-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row">
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face5')} alt="img" />
                    </span>Samantha Julia
                </div>
            </th>
            <td><span className="badge bg-success-transparent">Active</span></td>
            <td>julianasams143@gmail.com</td>
            <td>
                <div className="hstack gap-2 flex-wrap">
                    <Link to="#" className="text-info fs-14 lh-1"><i
                        className="ri-edit-line"></i></Link>
                    <Link to="#" className="text-danger fs-14 lh-1"><i
                        className="ri-delete-bin-5-line"></i></Link>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Bordered Primary
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(2)}>Show Code<i className={`${isHidden[2] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[2] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered border-primary">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                #0007
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">26-04-2022</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face3')} alt="img" />
                                                    </span>Mayor Kelly
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Booked</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                #0008
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">15-02-2022</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face6')} alt="img" />
                                                    </span>Wicky Kross
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Booked</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                #0009
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">23-05-2022</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face1')} alt="img" />
                                                    </span>Julia Cam
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Booked</span></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[2] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap table-bordered border-primary">
    <thead>
        <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                #0007
            </th>
            <td>
                <span className="badge bg-light text-dark">26-04-2022</span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face3')} alt="img" />
                    </span>Mayor Kelly
                </div>
            </td>
            <td><span className="badge bg-primary-transparent">Booked</span></td>
        </tr>
        <tr>
            <th scope="row">
                #0008
            </th>
            <td>
                <span className="badge bg-light text-dark">15-02-2022</span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face6')} alt="img" />
                    </span>Wicky Kross
                </div>
            </td>
            <td><span className="badge bg-primary-transparent">Booked</span></td>
        </tr>
        <tr>
            <th scope="row">
                #0009
            </th>
            <td>
                <span className="badge bg-light text-dark">23-05-2022</span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face1')} alt="img" />
                    </span>Julia Cam
                </div>
            </td>
            <td><span className="badge bg-primary-transparent">Booked</span></td>
        </tr>

    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Bordered Success
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(3)}>Show Code<i className={`${isHidden[3] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[3] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered border-success">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                #0011
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">07-01-2022</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face10')} alt="img" />
                                                    </span>Helsenky
                                                </div>
                                            </td>
                                            <td><span className="badge bg-success-transparent">Delivered</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                #0012
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">18-05-2022</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face14')} alt="img" />
                                                    </span>Brodus
                                                </div>
                                            </td>
                                            <td><span className="badge bg-success-transparent">Delivered</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                #0013
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">19-03-2022</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face12')} alt="img" />
                                                    </span>Chikka Alen
                                                </div>
                                            </td>
                                            <td><span className="badge bg-success-transparent">Delivered</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[3] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap table-bordered border-success">
    <thead>
        <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                #0011
            </th>
            <td>
                <span className="badge bg-light text-dark">07-01-2022</span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face10')} alt="img" />
                    </span>Helsenky
                </div>
            </td>
            <td><span className="badge bg-success-transparent">Delivered</span></td>
        </tr>
        <tr>
            <th scope="row">
                #0012
            </th>
            <td>
                <span className="badge bg-light text-dark">18-05-2022</span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face14')} alt="img" />
                    </span>Brodus
                </div>
            </td>
            <td><span className="badge bg-success-transparent">Delivered</span></td>
        </tr>
        <tr>
            <th scope="row">
                #0013
            </th>
            <td>
                <span className="badge bg-light text-dark">19-03-2022</span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face12')} alt="img" />
                    </span>Chikka Alen
                </div>
            </td>
            <td><span className="badge bg-success-transparent">Delivered</span></td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Bordered warning
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(4)}>Show Code<i className={`${isHidden[4] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[4] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered border-warning">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                #0014
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">21-02-2022</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face13')} alt="img" />
                                                    </span>Sukuro Kim
                                                </div>
                                            </td>
                                            <td><span className="badge bg-warning-transparent">Accepted</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                #0018
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">26-03-2022</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face11')} alt="img" />
                                                    </span>Alex Carey
                                                </div>
                                            </td>
                                            <td><span className="badge bg-warning-transparent">Accepted</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                #0020
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">14-03-2022</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face2')} alt="img" />
                                                    </span>Pamila Anderson
                                                </div>
                                            </td>
                                            <td><span className="badge bg-warning-transparent">Accepted</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[4] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap table-bordered border-warning">
    <thead>
        <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                #0014
            </th>
            <td>
                <span className="badge bg-light text-dark">21-02-2022</span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face13')} alt="img" />
                    </span>Sukuro Kim
                </div>
            </td>
            <td><span className="badge bg-warning-transparent">Accepted</span></td>
        </tr>
        <tr>
            <th scope="row">
                #0018
            </th>
            <td>
                <span className="badge bg-light text-dark">26-03-2022</span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face11')} alt="img" />
                    </span>Alex Carey
                </div>
            </td>
            <td><span className="badge bg-warning-transparent">Accepted</span></td>
        </tr>
        <tr>
            <th scope="row">
                #0020
            </th>
            <td>
                <span className="badge bg-light text-dark">14-03-2022</span>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face2')} alt="img" />
                    </span>Pamila Anderson
                </div>
            </td>
            <td><span className="badge bg-warning-transparent">Accepted</span></td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table Without Borders
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(5)}>Show Code<i className={`${isHidden[5] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[5] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>#5182-3467</td>
                                            <td>24 May 2023</td>
                                            <td><span className="badge bg-primary">Fixed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>#5182-3412</td>
                                            <td>02 July 2023</td>
                                            <td><span className="badge bg-warning">In Progress</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>#5182-3423</td>
                                            <td>15 April 2023</td>
                                            <td><span className="badge bg-success">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Alex Carey</th>
                                            <td>#5182-3456</td>
                                            <td>17 March 2023</td>
                                            <td><span className="badge bg-danger">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[5] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap table-borderless">
    <thead>
        <tr>
            <th scope="col">User Name</th>
            <th scope="col">Transaction Id</th>
            <th scope="col">Created</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Harshrath</th>
            <td>#5182-3467</td>
            <td>24 May 2023</td>
            <td><span className="badge bg-primary">Fixed</span></td>
        </tr>
        <tr>
            <th scope="row">Zozo Hadid</th>
            <td>#5182-3412</td>
            <td>02 July 2023</td>
            <td><span className="badge bg-warning">In Progress</span></td>
        </tr>
        <tr>
            <th scope="row">Martiana</th>
            <td>#5182-3423</td>
            <td>15 April 2023</td>
            <td><span className="badge bg-success">Completed</span></td>
        </tr>
        <tr>
            <th scope="row">Alex Carey</th>
            <td>#5182-3456</td>
            <td>17 March 2023</td>
            <td><span className="badge bg-danger">Pending</span></td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table Group Divideres
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(6)}>Show Code<i className={`${isHidden[6] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[6] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Seller</th>
                                            <th scope="col">Sale Percentage</th>
                                            <th scope="col">Quantity Sold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <th scope="row">Smart Watch</th>
                                            <td>Slowtrack.inc</td>
                                            <td><Link to="#" className="text-success">24.23%<i
                                                className="ri-arrow-up-fill ms-1"></i></Link></td>
                                            <td>250/1786</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">White Sneakers</th>
                                            <td>American & Co.inc</td>
                                            <td><Link to="#" className="text-danger">12.45%<i
                                                className="ri-arrow-down-fill ms-1"></i></Link></td>
                                            <td>123/985</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Baseball Bat</th>
                                            <td>Sports Company</td>
                                            <td><Link to="#" className="text-success">06.64%<i
                                                className="ri-arrow-up-fill ms-1"></i></Link></td>
                                            <td>124/232</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Black Hoodie</th>
                                            <td>Renonds Fabrics</td>
                                            <td><Link to="#" className="text-success">14.42%<i
                                                className="ri-arrow-up-fill ms-1"></i></Link></td>
                                            <td>192/2456</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[6] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col">Product</th>
            <th scope="col">Seller</th>
            <th scope="col">Sale Percentage</th>
            <th scope="col">Quantity Sold</th>
        </tr>
    </thead>
    <tbody className="table-group-divider">
        <tr>
            <th scope="row">Smart Watch</th>
            <td>Slowtrack.inc</td>
            <td><Link to="#" className="text-success">24.23%<i
                className="ri-arrow-up-fill ms-1"></i></Link></td>
            <td>250/1786</td>
        </tr>
        <tr>
            <th scope="row">White Sneakers</th>
            <td>American & Co.inc</td>
            <td><Link to="#" className="text-danger">12.45%<i
                className="ri-arrow-down-fill ms-1"></i></Link></td>
            <td>123/985</td>
        </tr>
        <tr>
            <th scope="row">Baseball Bat</th>
            <td>Sports Company</td>
            <td><Link to="#" className="text-success">06.64%<i
                className="ri-arrow-up-fill ms-1"></i></Link></td>
            <td>124/232</td>
        </tr>
        <tr>
            <th scope="row">Black Hoodie</th>
            <td>Renonds Fabrics</td>
            <td><Link to="#" className="text-success">14.42%<i
                className="ri-arrow-up-fill ms-1"></i></Link></td>
            <td>192/2456</td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Striped rows
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(7)}>Show Code<i className={`${isHidden[7] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[7] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">2022R-01</th>
                                            <td>27-010-2022</td>
                                            <td>Moracco</td>
                                            <td>
                                                <button className="btn btn-sm btn-success btn-wave">
                                                    <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2022R-02</th>
                                            <td>28-10-2022</td>
                                            <td>Thornton</td>
                                            <td>
                                                <button className="btn btn-sm btn-success btn-wave">
                                                    <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2022R-03</th>
                                            <td>22-10-2022</td>
                                            <td>Larry Bird</td>
                                            <td>
                                                <button className="btn btn-sm btn-success btn-wave">
                                                    <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2022R-04</th>
                                            <td>29-09-2022</td>
                                            <td>Erica Sean</td>
                                            <td>
                                                <button className="btn btn-sm btn-success btn-wave">
                                                    <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[7] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap table-striped">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">2022R-01</th>
            <td>27-010-2022</td>
            <td>Moracco</td>
            <td>
                <button className="btn btn-sm btn-success btn-wave">
                    <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                </button>
            </td>
        </tr>
        <tr>
            <th scope="row">2022R-02</th>
            <td>28-10-2022</td>
            <td>Thornton</td>
            <td>
                <button className="btn btn-sm btn-success btn-wave">
                    <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                </button>
            </td>
        </tr>
        <tr>
            <th scope="row">2022R-03</th>
            <td>22-10-2022</td>
            <td>Larry Bird</td>
            <td>
                <button className="btn btn-sm btn-success btn-wave">
                    <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                </button>
            </td>
        </tr>
        <tr>
            <th scope="row">2022R-04</th>
            <td>29-09-2022</td>
            <td>Erica Sean</td>
            <td>
                <button className="btn btn-sm btn-success btn-wave">
                    <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                </button>
            </td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Striped columns
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(8)}>Show Code<i className={`${isHidden[8] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[8] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-striped-columns">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">2022R-01</th>
                                            <td>27-010-2022</td>
                                            <td>Moracco</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger btn-wave">
                                                    <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2022R-02</th>
                                            <td>28-10-2022</td>
                                            <td>Thornton</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger btn-wave">
                                                    <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2022R-03</th>
                                            <td>22-10-2022</td>
                                            <td>Larry Bird</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger btn-wave">
                                                    <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2022R-04</th>
                                            <td>29-09-2022</td>
                                            <td>Erica Sean</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger btn-wave">
                                                    <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[8] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap table-striped-columns">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">2022R-01</th>
            <td>27-010-2022</td>
            <td>Moracco</td>
            <td>
                <button className="btn btn-sm btn-danger btn-wave">
                    <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                </button>
            </td>
        </tr>
        <tr>
            <th scope="row">2022R-02</th>
            <td>28-10-2022</td>
            <td>Thornton</td>
            <td>
                <button className="btn btn-sm btn-danger btn-wave">
                    <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                </button>
            </td>
        </tr>
        <tr>
            <th scope="row">2022R-03</th>
            <td>22-10-2022</td>
            <td>Larry Bird</td>
            <td>
                <button className="btn btn-sm btn-danger btn-wave">
                    <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                </button>
            </td>
        </tr>
        <tr>
            <th scope="row">2022R-04</th>
            <td>29-09-2022</td>
            <td>Erica Sean</td>
            <td>
                <button className="btn btn-sm btn-danger btn-wave">
                    <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                </button>
            </td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Primary Table
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(9)}>Show Code<i className={`${isHidden[9] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[9] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-primary">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry the Bird</td>
                                            <td>Thornton</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[9] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap table-primary">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Secondary Table
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(10)}>Show Code<i className={`${isHidden[10] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[10] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-secondary">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry the Bird</td>
                                            <td>Thornton</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[10] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap table-secondary">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Warning Table
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(11)}>Show Code<i className={`${isHidden[11] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[11] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-warning">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry the Bird</td>
                                            <td>Thornton</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[11] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap table-warning">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Danger Table
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(12)}>Show Code<i className={`${isHidden[12] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[12] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-danger">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry the Bird</td>
                                            <td>Thornton</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[12] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap table-danger">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Dark Table
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(13)}>Show Code<i className={`${isHidden[13] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[13] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry the Bird</td>
                                            <td>Thornton</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[13] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap table-dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Success Table With Striped Rows
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(14)}>Show Code<i className={`${isHidden[14] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[14] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-success table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry the Bird</td>
                                            <td>Thornton</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[14] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap table-success table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Hoverable Rows</div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(15)}>Show Code<i className={`${isHidden[15] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[15] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product Manager</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={ALLImages('face10')} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Joanna Smith</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">joannasmith14@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Fashion</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face2')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face8')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face2')} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +5
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar"
                                                        style={{ width: "52%" }} aria-valuenow={52} aria-valuemin={0}
                                                        aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={ALLImages('face2')} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Kara Kova</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">milesakara@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-warning-transparent">Clothing</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face4')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face6')} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +6
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar"
                                                        style={{ width: "40%" }} aria-valuenow={40} aria-valuemin={0}
                                                        aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={ALLImages('face16')} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Donald Trimb</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">donaldo21@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-dark-transparent">Electronics</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face1')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face11')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face15')} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar"
                                                        style={{ width: '17%' }} aria-valuenow={17} aria-valuemin={0}
                                                        aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={ALLImages('face13')} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Justin Gaethje</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">justingae@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-danger-transparent">Sports</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face4')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face6')} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +5
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar"
                                                        style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0}
                                                        aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[15] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap table-hover">
    <thead>
        <tr>
            <th scope="col">Product Manager</th>
            <th scope="col">Category</th>
            <th scope="col">Team</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src={ALLImages('face10')} alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Joanna Smith</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">joannasmith14@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><span className="badge bg-primary-transparent">Fashion</span></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face2')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face8')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face2')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        to="#">
                        +5
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        style={{ width: "52%" }} aria-valuenow={52} aria-valuemin={0}
                        aria-valuemax={100}>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src={ALLImages('face2')} alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Kara Kova</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">milesakara@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><span className="badge bg-warning-transparent">Clothing</span></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face4')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face6')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        to="#">
                        +6
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        style={{ width: "40%" }} aria-valuenow={40} aria-valuemin={0}
                        aria-valuemax={100}>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src={ALLImages('face16')} alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Donald Trimb</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">donaldo21@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><span className="badge bg-dark-transparent">Electronics</span></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face1')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face11')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face15')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        to="#">
                        +2
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        style={{ width: '17%' }} aria-valuenow={17} aria-valuemin={0}
                        aria-valuemax={100}>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src={ALLImages('face13')} alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Justin Gaethje</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">justingae@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><span className="badge bg-danger-transparent">Sports</span></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face4')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face6')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        to="#">
                        +5
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0}
                        aria-valuemax={100}>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Hoverable rows With striped rows
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(16)}>Show Code<i className={`${isHidden[16] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[16] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Invoice</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">IN-2032</th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={ALLImages('face15')} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Mark Cruise</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">markcruise24@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-success-transparent"><i
                                                className="ri-check-fill align-middle me-1"></i>Paid</span></td>
                                            <td>Jul 26,2022</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">IN-2022</th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={ALLImages('face12')} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Charanjeep</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">charanjeep@gmail.in</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-success-transparent"><i
                                                className="ri-check-fill align-middle me-1"></i>Paid</span></td>
                                            <td>Mar 14,2022</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">IN-2014</th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={ALLImages('face5')} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Samantha Julie</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span className="fs-11 text-muted">julie453@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-danger-transparent"><i
                                                className="ri-close-fill align-middle me-1"></i>Cancelled</span>
                                            </td>
                                            <td>Feb 1,2022</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">IN-2036</th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={ALLImages('face11')} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Simon Cohen</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span className="fs-11 text-muted">simon@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-light text-dark"><i
                                                className="ri-reply-line align-middle me-1"></i>Refunded</span>
                                            </td>
                                            <td>Apr 24,2022</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[16] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
<table className="table text-nowrap table-hover">
    <thead>
        <tr>
            <th scope="col">Product Manager</th>
            <th scope="col">Category</th>
            <th scope="col">Team</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src={ALLImages('face10')} alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Joanna Smith</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">joannasmith14@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><span className="badge bg-primary-transparent">Fashion</span></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face2')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face8')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face2')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        to="#">
                        +5
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        style={{ width: "52%" }} aria-valuenow={52} aria-valuemin={0}
                        aria-valuemax={100}>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src={ALLImages('face2')} alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Kara Kova</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">milesakara@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><span className="badge bg-warning-transparent">Clothing</span></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face4')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face6')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        to="#">
                        +6
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        style={{ width: "40%" }} aria-valuenow={40} aria-valuemin={0}
                        aria-valuemax={100}>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src={ALLImages('face16')} alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Donald Trimb</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">donaldo21@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><span className="badge bg-dark-transparent">Electronics</span></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face1')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face11')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face15')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        to="#">
                        +2
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        style={{ width: '17%' }} aria-valuenow={17} aria-valuemin={0}
                        aria-valuemax={100}>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm me-2 avatar-rounded">
                        <img src={ALLImages('face13')} alt="img" />
                    </div>
                    <div>
                        <div className="lh-1">
                            <span>Justin Gaethje</span>
                        </div>
                        <div className="lh-1">
                            <span
                                className="fs-11 text-muted">justingae@gmail.com</span>
                        </div>
                    </div>
                </div>
            </td>
            <td><span className="badge bg-danger-transparent">Sports</span></td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face4')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face6')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                        to="#">
                        +5
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar"
                        style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0}
                        aria-valuemax={100}>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table Head Primary
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(17)}>Show Code<i className={`${isHidden[17] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[17] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead className="table-primary">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>#5182-3467</td>
                                            <td>24 May 2023</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#"
                                                        className="btn btn-sm btn-success-transparent rounded-pill"><i
                                                            className="ri-download-2-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-sm btn-info-transparent rounded-pill"><i
                                                            className="ri-edit-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-sm btn-danger-transparent rounded-pill"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>#5182-3412</td>
                                            <td>02 July 2023</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#"
                                                        className="btn btn-sm btn-success-transparent rounded-pill"><i
                                                            className="ri-download-2-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-sm btn-info-transparent rounded-pill"><i
                                                            className="ri-edit-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-sm btn-danger-transparent rounded-pill"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>#5182-3423</td>
                                            <td>15 April 2023</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#"
                                                        className="btn btn-sm btn-success-transparent rounded-pill"><i
                                                            className="ri-download-2-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-sm btn-info-transparent rounded-pill"><i
                                                            className="ri-edit-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-sm btn-danger-transparent rounded-pill"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Alex Carey</th>
                                            <td>#5182-3456</td>
                                            <td>17 March 2023</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#"
                                                        className="btn btn-sm btn-success-transparent rounded-pill"><i
                                                            className="ri-download-2-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-sm btn-info-transparent rounded-pill"><i
                                                            className="ri-edit-line"></i></Link>
                                                    <Link to="#"
                                                        className="btn btn-sm btn-danger-transparent rounded-pill"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[17] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap">
        <thead className="table-primary">
            <tr>
                <th scope="col">User Name</th>
                <th scope="col">Transaction Id</th>
                <th scope="col">Created</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Harshrath</th>
                <td>#5182-3467</td>
                <td>24 May 2023</td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link to="#"
                            className="btn btn-sm btn-success-transparent rounded-pill"><i
                                className="ri-download-2-line"></i></Link>
                        <Link to="#"
                            className="btn btn-sm btn-info-transparent rounded-pill"><i
                                className="ri-edit-line"></i></Link>
                        <Link to="#"
                            className="btn btn-sm btn-danger-transparent rounded-pill"><i
                                className="ri-delete-bin-line"></i></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">Zozo Hadid</th>
                <td>#5182-3412</td>
                <td>02 July 2023</td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link to="#"
                            className="btn btn-sm btn-success-transparent rounded-pill"><i
                                className="ri-download-2-line"></i></Link>
                        <Link to="#"
                            className="btn btn-sm btn-info-transparent rounded-pill"><i
                                className="ri-edit-line"></i></Link>
                        <Link to="#"
                            className="btn btn-sm btn-danger-transparent rounded-pill"><i
                                className="ri-delete-bin-line"></i></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">Martiana</th>
                <td>#5182-3423</td>
                <td>15 April 2023</td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link to="#"
                            className="btn btn-sm btn-success-transparent rounded-pill"><i
                                className="ri-download-2-line"></i></Link>
                        <Link to="#"
                            className="btn btn-sm btn-info-transparent rounded-pill"><i
                                className="ri-edit-line"></i></Link>
                        <Link to="#"
                            className="btn btn-sm btn-danger-transparent rounded-pill"><i
                                className="ri-delete-bin-line"></i></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">Alex Carey</th>
                <td>#5182-3456</td>
                <td>17 March 2023</td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link to="#"
                            className="btn btn-sm btn-success-transparent rounded-pill"><i
                                className="ri-download-2-line"></i></Link>
                        <Link to="#"
                            className="btn btn-sm btn-info-transparent rounded-pill"><i
                                className="ri-edit-line"></i></Link>
                        <Link to="#"
                            className="btn btn-sm btn-danger-transparent rounded-pill"><i
                                className="ri-delete-bin-line"></i></Link>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table Head warning
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(18)}>Show Code<i className={`${isHidden[18] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[18] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead className="table-warning">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>#5182-3467</td>
                                            <td>24 May 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>#5182-3412</td>
                                            <td>02 July 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>#5182-3423</td>
                                            <td>15 April 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger-light">Rejected</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Alex Carey</th>
                                            <td>#5182-3456</td>
                                            <td>17 March 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-success-light">Processed</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[18] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap">
        <thead className="table-warning">
            <tr>
                <th scope="col">User Name</th>
                <th scope="col">Transaction Id</th>
                <th scope="col">Created</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Harshrath</th>
                <td>#5182-3467</td>
                <td>24 May 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Zozo Hadid</th>
                <td>#5182-3412</td>
                <td>02 July 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Martiana</th>
                <td>#5182-3423</td>
                <td>15 April 2023</td>
                <td>
                    <button className="btn btn-sm btn-danger-light">Rejected</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Alex Carey</th>
                <td>#5182-3456</td>
                <td>17 March 2023</td>
                <td>
                    <button className="btn btn-sm btn-success-light">Processed</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table Head Success
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(19)}>Show Code<i className={`${isHidden[19] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[19] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead className="table-success">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>#5182-3467</td>
                                            <td>24 May 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>#5182-3412</td>
                                            <td>02 July 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>#5182-3423</td>
                                            <td>15 April 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger-light">Rejected</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Alex Carey</th>
                                            <td>#5182-3456</td>
                                            <td>17 March 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-success-light">Processed</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[19] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap">
        <thead className="table-success">
            <tr>
                <th scope="col">User Name</th>
                <th scope="col">Transaction Id</th>
                <th scope="col">Created</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Harshrath</th>
                <td>#5182-3467</td>
                <td>24 May 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Zozo Hadid</th>
                <td>#5182-3412</td>
                <td>02 July 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Martiana</th>
                <td>#5182-3423</td>
                <td>15 April 2023</td>
                <td>
                    <button className="btn btn-sm btn-danger-light">Rejected</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Alex Carey</th>
                <td>#5182-3456</td>
                <td>17 March 2023</td>
                <td>
                    <button className="btn btn-sm btn-success-light">Processed</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table Head Info
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(20)}>Show Code<i className={`${isHidden[20] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[20] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead className="table-info">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>#5182-3467</td>
                                            <td>24 May 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>#5182-3412</td>
                                            <td>02 July 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>#5182-3423</td>
                                            <td>15 April 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger-light">Rejected</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Alex Carey</th>
                                            <td>#5182-3456</td>
                                            <td>17 March 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-success-light">Processed</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[20] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap">
        <thead className="table-info">
            <tr>
                <th scope="col">User Name</th>
                <th scope="col">Transaction Id</th>
                <th scope="col">Created</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Harshrath</th>
                <td>#5182-3467</td>
                <td>24 May 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Zozo Hadid</th>
                <td>#5182-3412</td>
                <td>02 July 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Martiana</th>
                <td>#5182-3423</td>
                <td>15 April 2023</td>
                <td>
                    <button className="btn btn-sm btn-danger-light">Rejected</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Alex Carey</th>
                <td>#5182-3456</td>
                <td>17 March 2023</td>
                <td>
                    <button className="btn btn-sm btn-success-light">Processed</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table Head Secondary
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(21)}>Show Code<i className={`${isHidden[21] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[21] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead className="table-secondary">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>#5182-3467</td>
                                            <td>24 May 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>#5182-3412</td>
                                            <td>02 July 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>#5182-3423</td>
                                            <td>15 April 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger-light">Rejected</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Alex Carey</th>
                                            <td>#5182-3456</td>
                                            <td>17 March 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-success-light">Processed</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[21] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap">
        <thead className="table-secondary">
            <tr>
                <th scope="col">User Name</th>
                <th scope="col">Transaction Id</th>
                <th scope="col">Created</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Harshrath</th>
                <td>#5182-3467</td>
                <td>24 May 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Zozo Hadid</th>
                <td>#5182-3412</td>
                <td>02 July 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Martiana</th>
                <td>#5182-3423</td>
                <td>15 April 2023</td>
                <td>
                    <button className="btn btn-sm btn-danger-light">Rejected</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Alex Carey</th>
                <td>#5182-3456</td>
                <td>17 March 2023</td>
                <td>
                    <button className="btn btn-sm btn-success-light">Processed</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table Head Danger
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(22)}>Show Code<i className={`${isHidden[22] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[22] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead className="table-danger">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>#5182-3467</td>
                                            <td>24 May 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>#5182-3412</td>
                                            <td>02 July 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary-light">Pending</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>#5182-3423</td>
                                            <td>15 April 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-danger-light">Rejected</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Alex Carey</th>
                                            <td>#5182-3456</td>
                                            <td>17 March 2023</td>
                                            <td>
                                                <button className="btn btn-sm btn-success-light">Processed</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[22] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
<div className="table-responsive">
    <table className="table text-nowrap">
        <thead className="table-danger">
            <tr>
                <th scope="col">User Name</th>
                <th scope="col">Transaction Id</th>
                <th scope="col">Created</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Harshrath</th>
                <td>#5182-3467</td>
                <td>24 May 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Zozo Hadid</th>
                <td>#5182-3412</td>
                <td>02 July 2023</td>
                <td>
                    <button className="btn btn-sm btn-primary-light">Pending</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Martiana</th>
                <td>#5182-3423</td>
                <td>15 April 2023</td>
                <td>
                    <button className="btn btn-sm btn-danger-light">Rejected</button>
                </td>
            </tr>
            <tr>
                <th scope="row">Alex Carey</th>
                <td>#5182-3456</td>
                <td>17 March 2023</td>
                <td>
                    <button className="btn btn-sm btn-success-light">Processed</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table Foot
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(23)}>Show Code<i className={`${isHidden[23] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[23] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead className="table-primary">
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Matches Won</th>
                                            <th scope="col">Win Ratio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                01
                                            </th>
                                            <td>
                                                Manchester
                                            </td>
                                            <td>
                                                232
                                            </td>
                                            <td>
                                                <span className="badge bg-primary">42%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                02
                                            </th>
                                            <td>
                                                Barcelona
                                            </td>
                                            <td>
                                                175
                                            </td>
                                            <td><span className="badge bg-primary">58%</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                03
                                            </th>
                                            <td>
                                                Portugal
                                            </td>
                                            <td>
                                                126
                                            </td>
                                            <td><span className="badge bg-primary">32%</span></td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="">
                                        <tr>
                                            <th scope="row">
                                                Total
                                            </th>
                                            <td>
                                                United States
                                            </td>
                                            <td>
                                                558
                                            </td>
                                            <td><span className="badge bg-primary">56%</span></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[23] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
 <div className="table-responsive">
    <table className="table text-nowrap">
        <thead className="table-primary">
            <tr>
                <th scope="col">S.No</th>
                <th scope="col">Team</th>
                <th scope="col">Matches Won</th>
                <th scope="col">Win Ratio</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">
                    01
                </th>
                <td>
                    Manchester
                </td>
                <td>
                    232
                </td>
                <td>
                    <span className="badge bg-primary">42%</span>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    02
                </th>
                <td>
                    Barcelona
                </td>
                <td>
                    175
                </td>
                <td><span className="badge bg-primary">58%</span></td>
            </tr>
            <tr>
                <th scope="row">
                    03
                </th>
                <td>
                    Portugal
                </td>
                <td>
                    126
                </td>
                <td><span className="badge bg-primary">32%</span></td>
            </tr>
        </tbody>
        <tfoot className="table-primary">
            <tr>
                <th scope="row">
                    Total
                </th>
                <td>
                    United States
                </td>
                <td>
                    558
                </td>
                <td><span className="badge bg-primary">56%</span></td>
            </tr>
        </tfoot>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table With Caption
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(24)}>Show Code<i className={`${isHidden[24] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[24] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <caption>Top 3 Countries</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Medals Won</th>
                                            <th scope="col">No Of Athletes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">01</th>
                                            <td>United States</td>
                                            <td>2012<i className="ri-medal-line mx-2"></i></td>
                                            <td>1823</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">02</th>
                                            <td>United Kingdom</td>
                                            <td>1012<i className="ri-medal-line mx-2"></i></td>
                                            <td>992</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">03</th>
                                            <td>Germany</td>
                                            <td>914<i className="ri-medal-line mx-2"></i></td>
                                            <td>875</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[24] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
 <div className="table-responsive">
    <table className="table text-nowrap">
        <caption>Top 3 Countries</caption>
        <thead>
            <tr>
                <th scope="col">S.No</th>
                <th scope="col">Country</th>
                <th scope="col">Medals Won</th>
                <th scope="col">No Of Athletes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">01</th>
                <td>United States</td>
                <td>2012<i className="ri-medal-line mx-2"></i></td>
                <td>1823</td>
            </tr>
            <tr>
                <th scope="row">02</th>
                <td>United Kingdom</td>
                <td>1012<i className="ri-medal-line mx-2"></i></td>
                <td>992</td>
            </tr>
            <tr>
                <th scope="row">03</th>
                <td>Germany</td>
                <td>914<i className="ri-medal-line mx-2"></i></td>
                <td>875</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Table With Top Caption
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(25)}>Show Code<i className={`${isHidden[25] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[25] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap caption-top">
                                    <caption>Top IT Companies</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Revenue</th>
                                            <th scope="col">Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Microsoft</td>
                                            <td>$170 billion</td>
                                            <td>United States</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>HP</td>
                                            <td>$72 billion</td>
                                            <td>United States</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>IBM</td>
                                            <td>$60 billion</td>
                                            <td>United States</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[25] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
 <div className="table-responsive">
    <table className="table text-nowrap caption-top">
        <caption>Top IT Companies</caption>
        <thead>
            <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Revenue</th>
                <th scope="col">Country</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Microsoft</td>
                <td>$170 billion</td>
                <td>United States</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>HP</td>
                <td>$72 billion</td>
                <td>United States</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>IBM</td>
                <td>$60 billion</td>
                <td>United States</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Active Tables
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(26)}>Show Code<i className={`${isHidden[26] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[26] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Created On</th>
                                            <th scope="col">Number</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-active">
                                            <th scope="row">Mark</th>
                                            <td>21,Dec 2021</td>
                                            <td>+1234-12340</td>
                                            <td><span className="badge bg-primary">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Monika</th>
                                            <td>29,April 2023</td>
                                            <td>+1523-12459</td>
                                            <td><span className="badge bg-warning">Failed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Madina</th>
                                            <td>30,Nov 2023</td>
                                            <td className="table-active">+1982-16234</td>
                                            <td><span className="badge bg-success">Successful</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Bhamako</th>
                                            <td>18,Mar 2023</td>
                                            <td>+1526-10729</td>
                                            <td><span className="badge bg-secondary">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[26] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
 <div className="table-responsive">
    <table className="table text-nowrap">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Created On</th>
                <th scope="col">Number</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr className="table-active">
                <th scope="row">Mark</th>
                <td>21,Dec 2021</td>
                <td>+1234-12340</td>
                <td><span className="badge bg-primary">Completed</span></td>
            </tr>
            <tr>
                <th scope="row">Monika</th>
                <td>29,April 2023</td>
                <td>+1523-12459</td>
                <td><span className="badge bg-warning">Failed</span></td>
            </tr>
            <tr>
                <th scope="row">Madina</th>
                <td>30,Nov 2023</td>
                <td className="table-active">+1982-16234</td>
                <td><span className="badge bg-success">Successful</span></td>
            </tr>
            <tr>
                <th scope="row">Bhamako</th>
                <td>18,Mar 2023</td>
                <td>+1526-10729</td>
                <td><span className="badge bg-secondary">Pending</span></td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Small Tables
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(27)}>Show Code<i className={`${isHidden[27] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[27] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Invoice</th>
                                            <th scope="col">Created Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkebox-sm" defaultChecked />
                                                    <label className="form-check-label" htmlFor="checkebox-sm">
                                                        Zelensky
                                                    </label>
                                                </div>
                                            </th>
                                            <td>25-Apr-2021</td>
                                            <td><span className="badge bg-success-transparent">Paid</span></td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkebox-sm1" />
                                                    <label className="form-check-label" htmlFor="checkebox-sm1">
                                                        Kim Jong
                                                    </label>
                                                </div>
                                            </th>
                                            <td>29-April-2022</td>
                                            <td><span className="badge bg-danger-transparent">Pending</span></td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkebox-sm2" />
                                                    <label className="form-check-label" htmlFor="checkebox-sm2">
                                                        Obana
                                                    </label>
                                                </div>
                                            </th>
                                            <td>30-Nov-2022</td>
                                            <td><span className="badge bg-success-transparent">Paid</span></td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkebox-sm3" />
                                                    <label className="form-check-label" htmlFor="checkebox-sm3">
                                                        Sean Paul
                                                    </label>
                                                </div>
                                            </th>
                                            <td>01-Jan-2022</td>
                                            <td><span className="badge bg-success-transparent">Paid</span></td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkebox-sm4" />
                                                    <label className="form-check-label" htmlFor="checkebox-sm4">
                                                        Karizma
                                                    </label>
                                                </div>
                                            </th>
                                            <td>14-Feb-2022</td>
                                            <td><span className="badge bg-danger-transparent">Pending</span></td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[27] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
 <div className="table-responsive">
    <table className="table text-nowrap table-sm">
        <thead>
            <tr>
                <th scope="col">Invoice</th>
                <th scope="col">Created Date</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkebox-sm" defaultChecked />
                        <label className="form-check-label" htmlFor="checkebox-sm">
                            Zelensky
                        </label>
                    </div>
                </th>
                <td>25-Apr-2021</td>
                <td><span className="badge bg-success-transparent">Paid</span></td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkebox-sm1" />
                        <label className="form-check-label" htmlFor="checkebox-sm1">
                            Kim Jong
                        </label>
                    </div>
                </th>
                <td>29-April-2022</td>
                <td><span className="badge bg-danger-transparent">Pending</span></td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkebox-sm2" />
                        <label className="form-check-label" htmlFor="checkebox-sm2">
                            Obana
                        </label>
                    </div>
                </th>
                <td>30-Nov-2022</td>
                <td><span className="badge bg-success-transparent">Paid</span></td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkebox-sm3" />
                        <label className="form-check-label" htmlFor="checkebox-sm3">
                            Sean Paul
                        </label>
                    </div>
                </th>
                <td>01-Jan-2022</td>
                <td><span className="badge bg-success-transparent">Paid</span></td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkebox-sm4" />
                        <label className="form-check-label" htmlFor="checkebox-sm4">
                            Karizma
                        </label>
                    </div>
                </th>
                <td>14-Feb-2022</td>
                <td><span className="badge bg-danger-transparent">Pending</span></td>
                <td>
                    <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                        <Link to="#" className="btn btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Color variants tables
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(28)}>Show Code<i className={`${isHidden[28] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[28] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Color</th>
                                            <th scope="col">Client</th>
                                            <th scope="col">State</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Default</th>
                                            <td>Rita Book</td>
                                            <td><span className="badge bg-primary-transparent">Processed</span></td>
                                            <td>22</td>
                                            <td>$2,012</td>
                                        </tr>

                                        <tr className="table-primary">
                                            <th scope="row">Primary</th>
                                            <td>Rhoda Report</td>
                                            <td><span className="badge bg-primary">Processed</span></td>
                                            <td>22</td>
                                            <td>$4,254</td>
                                        </tr>
                                        <tr className="table-secondary">
                                            <th scope="row">Secondary</th>
                                            <td>Rita Book</td>
                                            <td><span className="badge bg-secondary">Processed</span></td>
                                            <td>26</td>
                                            <td>$1,234</td>
                                        </tr>
                                        <tr className="table-success">
                                            <th scope="row">Success</th>
                                            <td>Anne Teak</td>
                                            <td><span className="badge bg-success">Processed</span></td>
                                            <td>42</td>
                                            <td>$2,623</td>
                                        </tr>
                                        <tr className="table-danger">
                                            <th scope="row">Danger</th>
                                            <td>Dee End</td>
                                            <td><span className="badge bg-danger">Processed</span></td>
                                            <td>52</td>
                                            <td>$32,132</td>
                                        </tr>
                                        <tr className="table-warning">
                                            <th scope="row">Warning</th>
                                            <td>Lee Nonmi</td>
                                            <td><span className="badge bg-warning">Processed</span></td>
                                            <td>10</td>
                                            <td>$1,434</td>
                                        </tr>
                                        <tr className="table-info">
                                            <th scope="row">Info</th>
                                            <td>Lynne Gwistic</td>
                                            <td><span className="badge bg-info">Processed</span></td>
                                            <td>63</td>
                                            <td>$1,854</td>
                                        </tr>
                                        <tr className="table-light">
                                            <th scope="row">Light</th>
                                            <td>Fran Tick</td>
                                            <td><span className="badge bg-light text-dark">Processed</span></td>
                                            <td>05</td>
                                            <td>$823</td>
                                        </tr>
                                        <tr className="table-dark">
                                            <th scope="row">Dark</th>
                                            <td>Polly Pipe</td>
                                            <td><span className="badge bg-dark text-white">Processed</span></td>
                                            <td>35</td>
                                            <td>$1,832</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[28] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
 <div className="table-responsive">
    <table className="table text-nowrap">
        <thead>
            <tr>
                <th scope="col">Color</th>
                <th scope="col">Client</th>
                <th scope="col">State</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Default</th>
                <td>Rita Book</td>
                <td><span className="badge bg-primary-transparent">Processed</span></td>
                <td>22</td>
                <td>$2,012</td>
            </tr>

            <tr className="table-primary">
                <th scope="row">Primary</th>
                <td>Rhoda Report</td>
                <td><span className="badge bg-primary">Processed</span></td>
                <td>22</td>
                <td>$4,254</td>
            </tr>
            <tr className="table-secondary">
                <th scope="row">Secondary</th>
                <td>Rita Book</td>
                <td><span className="badge bg-secondary">Processed</span></td>
                <td>26</td>
                <td>$1,234</td>
            </tr>
            <tr className="table-success">
                <th scope="row">Success</th>
                <td>Anne Teak</td>
                <td><span className="badge bg-success">Processed</span></td>
                <td>42</td>
                <td>$2,623</td>
            </tr>
            <tr className="table-danger">
                <th scope="row">Danger</th>
                <td>Dee End</td>
                <td><span className="badge bg-danger">Processed</span></td>
                <td>52</td>
                <td>$32,132</td>
            </tr>
            <tr className="table-warning">
                <th scope="row">Warning</th>
                <td>Lee Nonmi</td>
                <td><span className="badge bg-warning">Processed</span></td>
                <td>10</td>
                <td>$1,434</td>
            </tr>
            <tr className="table-info">
                <th scope="row">Info</th>
                <td>Lynne Gwistic</td>
                <td><span className="badge bg-info">Processed</span></td>
                <td>63</td>
                <td>$1,854</td>
            </tr>
            <tr className="table-light">
                <th scope="row">Light</th>
                <td>Fran Tick</td>
                <td><span className="badge bg-light text-dark">Processed</span></td>
                <td>05</td>
                <td>$823</td>
            </tr>
            <tr className="table-dark">
                <th scope="row">Dark</th>
                <td>Polly Pipe</td>
                <td><span className="badge bg-dark text-white">Processed</span></td>
                <td>35</td>
                <td>$1,832</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Nesting
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(29)}>Show Code<i className={`${isHidden[29] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[29] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}>
                                                <table className="table text-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Alphabets</th>
                                                            <th scope="col">Users</th>
                                                            <th scope="col">Email</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">A</th>
                                                            <td>Dino King</td>
                                                            <td>dinoking231@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">B</th>
                                                            <td>Poppins sams</td>
                                                            <td>pops@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">C</th>
                                                            <td>Brian Shaw</td>
                                                            <td>swanbrian@gmail.com</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Jimmy</td>
                                            <td>the Ostrich</td>
                                            <td>Dummy Text</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Cobra Kai</td>
                                            <td>the Snake</td>
                                            <td>Another Name</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[29] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
 <div className="table-responsive">
    <table className="table text-nowrap table-striped table-bordered">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td colSpan={4}>
                    <table className="table text-nowrap mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Alphabets</th>
                                <th scope="col">Users</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">A</th>
                                <td>Dino King</td>
                                <td>dinoking231@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">B</th>
                                <td>Poppins sams</td>
                                <td>pops@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">C</th>
                                <td>Brian Shaw</td>
                                <td>swanbrian@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Jimmy</td>
                <td>the Ostrich</td>
                <td>Dummy Text</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Cobra Kai</td>
                <td>the Snake</td>
                <td>Another Name</td>
            </tr>
        </tbody>
    </table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="col-xl-12">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Always responsive
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(30)}>Show Code<i className={`${isHidden[30] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[30] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col"><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
                                            <th scope="col">Team Head</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Gmail</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Work Progress</th>
                                            <th scope="col">Revenue</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face3')} alt="img" />
                                                    </span>Mayor Kelly
                                                </div>
                                            </td>
                                            <td>Manufacturer</td>
                                            <td><span className="badge bg-primary-transparent">Team Lead</span></td>
                                            <td>mayorkrlly@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face2')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face8')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face2')} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                                                        +4
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "52%" }} aria-valuenow={52} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$10,984.29</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..." /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face12')} alt="img" />
                                                    </span>Andrew Garfield
                                                </div>
                                            </td>
                                            <td>Managing Director</td>
                                            <td><span className="badge bg-warning-transparent">Director</span></td>
                                            <td>andrewgarfield@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face1')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face5')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face11')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face15')} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                                                        +4
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "91%" }} aria-valuenow={91} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$1.4billion</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face14')} alt="img" />
                                                    </span>Simon Cowel
                                                </div>
                                            </td>
                                            <td>Service Manager</td>
                                            <td><span className="badge bg-success-transparent">Manager</span></td>
                                            <td>simoncowel234@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face6')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face16')} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                                                        +10
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "45%" }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$7,123.21</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel13" value="" aria-label="..." /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={ALLImages('face5')} alt="img" />
                                                    </span>Mirinda Hers
                                                </div>
                                            </td>
                                            <td>Recruiter</td>
                                            <td><span className="badge bg-danger-transparent">Employee</span></td>
                                            <td>mirindahers@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face3')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face10')} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={ALLImages('face14')} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                                                        +6
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "21%" }} aria-valuenow={21} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$2,325.45</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[30] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
 <div className="table-responsive">
<table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col"><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
            <th scope="col">Team Head</th>
            <th scope="col">Category</th>
            <th scope="col">Role</th>
            <th scope="col">Gmail</th>
            <th scope="col">Team</th>
            <th scope="col">Work Progress</th>
            <th scope="col">Revenue</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face3')} alt="img" />
                    </span>Mayor Kelly
                </div>
            </td>
            <td>Manufacturer</td>
            <td><span className="badge bg-primary-transparent">Team Lead</span></td>
            <td>mayorkrlly@gmail.com</td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face2')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face8')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face2')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                        +4
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "52%" }} aria-valuenow={52} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                </div>
            </td>
            <td>$10,984.29</td>
            <td>
                <div className="hstack gap-2 fs-15">
                    <Link to="#" className="btn btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                    <Link to="#" className="btn btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..." /></th>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face12')} alt="img" />
                    </span>Andrew Garfield
                </div>
            </td>
            <td>Managing Director</td>
            <td><span className="badge bg-warning-transparent">Director</span></td>
            <td>andrewgarfield@gmail.com</td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face1')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face5')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face11')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face15')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                        +4
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "91%" }} aria-valuenow={91} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                </div>
            </td>
            <td>$1.4billion</td>
            <td>
                <div className="hstack gap-2 fs-15">
                    <Link to="#" className="btn btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                    <Link to="#" className="btn btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." /></th>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face14')} alt="img" />
                    </span>Simon Cowel
                </div>
            </td>
            <td>Service Manager</td>
            <td><span className="badge bg-success-transparent">Manager</span></td>
            <td>simoncowel234@gmail.com</td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face6')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face16')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                        +10
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "45%" }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                </div>
            </td>
            <td>$7,123.21</td>
            <td>
                <div className="hstack gap-2 fs-15">
                    <Link to="#" className="btn btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                    <Link to="#" className="btn btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel13" value="" aria-label="..." /></th>
            <td>
                <div className="d-flex align-items-center">
                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                        <img src={ALLImages('face5')} alt="img" />
                    </span>Mirinda Hers
                </div>
            </td>
            <td>Recruiter</td>
            <td><span className="badge bg-danger-transparent">Employee</span></td>
            <td>mirindahers@gmail.com</td>
            <td>
                <div className="avatar-list-stacked">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face3')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face10')} alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={ALLImages('face14')} alt="img" />
                    </span>
                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                        +6
                    </Link>
                </div>
            </td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "21%" }} aria-valuenow={21} aria-valuemin={0} aria-valuemax={100}>
                    </div>
                </div>
            </td>
            <td>$2,325.45</td>
            <td>
                <div className="hstack gap-2 fs-15">
                    <Link to="#" className="btn btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                    <Link to="#" className="btn btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </div>
            </Row>
            <Row>
                <div className="col-xl-12">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Vertical alignment
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(31)}>Show Code<i className={`${isHidden[31] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[31] ? 'd-none' : ''}`}>
                            <div className="table-responsive">
                                <table className="table align-middle">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="w-25">Heading 1</th>
                                            <th scope="col" className="w-25">Heading 2</th>
                                            <th scope="col" className="w-25">Heading 3</th>
                                            <th scope="col" className="w-25">Heading 4</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from
                                                the
                                                table</td>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from
                                                the
                                                table</td>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from
                                                the
                                                table</td>
                                            <td>This here is some placeholder text, intended to take up
                                                quite a
                                                bit of vertical space, to demonstrate how the vertical
                                                alignment
                                                works in the preceding cells.</td>
                                        </tr>
                                        <tr className="align-bottom">
                                            <td>This cell inherits <code>vertical-align: bottom;</code> from
                                                the
                                                table row</td>
                                            <td>This cell inherits <code>vertical-align: bottom;</code> from
                                                the
                                                table row</td>
                                            <td>This cell inherits <code>vertical-align: bottom;</code> from
                                                the
                                                table row</td>
                                            <td>This here is some placeholder text, intended to take up
                                                quite a
                                                bit of vertical space, to demonstrate how the vertical
                                                alignment
                                                works in the preceding cells.</td>
                                        </tr>
                                        <tr>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from
                                                the
                                                table</td>
                                            <td>This cell inherits <code>vertical-align: middle;</code> from
                                                the
                                                table</td>
                                            <td className="align-top">This cell is aligned to the top.</td>
                                            <td>This here is some placeholder text, intended to take up
                                                quite a
                                                bit of vertical space, to demonstrate how the vertical
                                                alignment
                                                works in the preceding cells.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className={`card-footer ${isHidden[31] ? '' : 'd-none'} border-top-0`}>
                            <pre><code className='language-javascript'>
                                {`
 <div className="table-responsive">
<table className="table align-middle">
    <thead>
        <tr>
            <th scope="col" className="w-25">Heading 1</th>
            <th scope="col" className="w-25">Heading 2</th>
            <th scope="col" className="w-25">Heading 3</th>
            <th scope="col" className="w-25">Heading 4</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td>This here is some placeholder text, intended to take up
                quite a
                bit of vertical space, to demonstrate how the vertical
                alignment
                works in the preceding cells.</td>
        </tr>
        <tr className="align-bottom">
            <td>This cell inherits <code>vertical-align: bottom;</code> from
                the
                table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from
                the
                table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from
                the
                table row</td>
            <td>This here is some placeholder text, intended to take up
                quite a
                bit of vertical space, to demonstrate how the vertical
                alignment
                works in the preceding cells.</td>
        </tr>
        <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from
                the
                table</td>
            <td className="align-top">This cell is aligned to the top.</td>
            <td>This here is some placeholder text, intended to take up
                quite a
                bit of vertical space, to demonstrate how the vertical
                alignment
                works in the preceding cells.</td>
        </tr>
    </tbody>
</table>
</div>
                `}
                            </code></pre>
                        </div>
                    </Card>
                </div>
            </Row>
        </Fragment>
    );
};

export default Tables;