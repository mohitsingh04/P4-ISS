import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Breadcrumb, Col, Card, Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import MultiSelect from "react-multiple-select-dropdown-lite";
import { selectdata } from "../../../common/Commomarreydata";
import ALLImages from "../../../common/Imagesdata";
import Select from 'react-select'
import SunEditor from 'suneditor-react';

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const Blogpost = () => {

  const [files, setFiles] = useState([]);

  return (
    <Fragment>
      <Pageheader homepage='Blog post' activepage='Pages' page='Blog post' />

      <Row>
        <Col xl={8}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Add New Post</div>
            </Card.Header>
            <Card.Body>
              <Row className="mb-4">
                <Form.Label className="col-md-3 form-label">Post Title :</Form.Label>
                <div className="">
                  <Form.Control type="text" defaultValue="Typing....." />
                </div>
              </Row>
              <Row className="mb-4">
                <Form.Label className="col-md-3 form-label">Categories :</Form.Label>
                <div className="">
                  <Select options={selectdata} classNamePrefix="Select2" placeholder='Selection 1' />
                </div>
              </Row>


              <Row>
                <label className="col-md-3 form-label mb-4">Post Description :</label>
                <div className="mb-4">
                  <SunEditor />
                </div>
              </Row>

              <Form.Group className="mb-0">
                <Form.Label className="col-md-3 form-label mb-4">File Upload :</Form.Label>
                <FilePond className="multiple-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
                  server="/api" allowReorder={true} files={files} onupdatefiles={setFiles} allowMultiple={true} allowImagePreview={true} maxFiles={10} name="filepond"
                  labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
              </Form.Group>
            </Card.Body>
            <div className="card-footer">
              <Link to="#" className="btn btn-primary">Post</Link>
              <Link to="#" className="btn btn-light float-end">Discard</Link>
            </div>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card recent-posts">
            <Card.Header>
              <div className="card-title">Recent Posts</div>
            </Card.Header>
            <Card.Body>
              <div className="">
                <div className="d-sm-flex overflow-visible">
                  <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="display-contents"> <img src={ALLImages('media19')} alt="" className="card-aside-column br-5 cover-image" />
                    <div className="ps-3 flex-column my-auto display-text-contents">
                      <span className="badge bg-danger me-1 mb-1 mt-1">Lifestyle</span>
                      <h4 className="fs-18">Generator on the
                        Internet..</h4>
                      <div className="text-muted">Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit anim id est
                        laborum....</div>
                    </div>
                  </Link>

                </div>
                <div className="d-sm-flex overflow-visible mt-4">
                  <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="display-contents"> <img src={ALLImages('media20')} alt="" className="card-aside-column br-5 cover-image" />
                    <div className="ps-3 flex-column my-auto display-text-contents">
                      <span className="badge bg-primary me-1 mb-1 mt-1">Business</span>
                      <h4 className="fs-18">Voluptatem quia
                        voluptas...</h4>
                      <div className="text-muted">Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit anim id est
                        laborum....</div>
                    </div>
                  </Link>

                </div>
                <div className="d-sm-flex overflow-visible mt-4">
                  <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="display-contents"> <img src={ALLImages('media22')} alt="" className="card-aside-column br-5 cover-image" />
                    <div className="ps-3 flex-column my-auto display-text-contents">
                      <span className="badge bg-secondary me-1 mb-1 mt-1">Travel</span>
                      <h4 className="fs-18">Generator on the
                        Internet..</h4>
                      <div className="text-muted">Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit anim id est
                        laborum....</div>
                    </div>
                  </Link>

                </div>
                <div className="d-sm-flex overflow-visible mt-4">
                  <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="display-contents"> <img src={ALLImages('media23')} alt="" className="card-aside-column br-5 cover-image" />
                    <div className="ps-3 flex-column my-auto display-text-contents">
                      <span className="badge bg-success me-1 mb-1 mt-1">Meeting</span>
                      <h4 className="fs-18">Generator on the
                        Internet..</h4>
                      <div className="text-muted">Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit anim id est
                        laborum....</div>
                    </div>
                  </Link>

                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">Professional Blog Writers</div>
            </Card.Header>
            <Card.Body>
              <div className="">
                <div className="d-flex overflow-visible">
                  <img className="avatar bradius avatar-xl me-3" src={ALLImages('face12')} alt="avatar-img" />
                  <div className="media-body valign-middle my-auto">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="fw-semibold text-dark">John Paige</Link>
                    <p className="text-muted mb-0">There are many variations of passages of Lorem
                      Ipsum available ...</p>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-4">
                  <img className="avatar bradius avatar-xl me-3" src={ALLImages('media2')} alt="avatar-img" />
                  <div className="media-body valign-middle my-auto">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="fw-semibold text-dark">Peter Hill</Link>
                    <p className="text-muted mb-0">There are many variations of passages of Lorem
                      Ipsum available ...</p>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-4">
                  <img className="avatar bradius avatar-xl me-3" src={ALLImages('media9')} alt="avatar-img" />
                  <div className="media-body valign-middle my-auto">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="fw-semibold text-dark">Irene Harris</Link>
                    <p className="text-muted mb-0">There are many variations of passages of Lorem
                      Ipsum available ...</p>
                  </div>
                </div>
                <div className="d-flex overflow-visible mt-4">
                  <img className="avatar bradius avatar-xl me-3" src={ALLImages('media4')} alt="avatar-img" />
                  <div className="media-body valign-middle my-auto">
                    <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="fw-semibold text-dark">Harry Fisher</Link>
                    <p className="text-muted mb-0">There are many variations of passages of Lorem
                      Ipsum available ...</p>
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

export default Blogpost