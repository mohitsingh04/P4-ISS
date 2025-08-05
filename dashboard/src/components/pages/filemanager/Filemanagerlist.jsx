import React, { Fragment } from "react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from "../../../layouts/layoutcomponents/Pageheader";
import { list } from "../../../common/Commomarreydata";
import ALLImages from "../../../common/Imagesdata";

const Filemanagerlist = () => {
  const images = [{ image: 'file10', name: 'file.pdf' }, { image: 'file7', name: 'image1.jpg' }, { image: 'file9', name: 'excel.xls' }, { image: 'file2', name: 'image2.jpg' }, { image: 'file11', name: 'demo.ppt' }, { image: 'file12', name: 'video.mp4' }, { image: 'file4', name: 'image2.jpg' }, { image: 'file13', name: 'word.doc' }, { image: 'file1', name: 'mountain.jpg' }, { image: 'file10', name: 'file.pdf' }, { image: 'file6', name: 'image3.jpg' }, { image: 'file9', name: 'excel.xls' }, { image: 'file11', name: 'profile.ppt' }, { image: 'file5', name: 'image4.jpg' }, { image: 'file14', name: 'exe.zip' }];
  const getRandomSize = () => Math.floor(Math.random() * 100) + 50;
  return (
    <Fragment>
      <Pageheader homepage='Filemanager list' activepage='Filemanager' page='Filemanager list' />

      <Row className="row-sm">
        {images.map((image, index) => (
          <Col key={index} xxl={2} xl={3} lg={4} md={4} sm={6}>
            <Card className="overflow-hidden custom-card">
              <Link to={`${import.meta.env.BASE_URL}pages/filemanager/filedetails/`} className={['file7', 'file2', 'file4', 'file1', 'file6', 'file5'].includes(image.image) ? '' : 'mx-auto my-3'}><img src={ALLImages(image.image)} alt="img" className={['file7', 'file2', 'file4', 'file1', 'file6', 'file5'].includes(image.image) ? 'w-100 file-manager-list' : ''} /></Link>
              <div className="card-footer">
                <div className="d-flex">
                  <div className="">
                    <h6 className="mb-0 fw-semibold text-break">{image.name}</h6> {/* Assuming imageName is the file name */}
                  </div>
                  <div className="ms-auto my-auto">
                    <span className="text-muted mb-0">{getRandomSize(image)} KB</span> {/* Assuming you have a function to get image size */}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  )
}

export default Filemanagerlist