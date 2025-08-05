import { Fragment, useState } from 'react';
import Pageheader from '../../../layouts/layoutcomponents/Pageheader';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);



const Fileupload = () => {

    const [files, setFiles] = useState([]);


    const uploader = Uploader({
        // Get production API keys from Upload.io
        apiKey: "free"
    });

    const [isHidden, setIsHidden] = useState([false]);
    const toggleHidden = (index) => {
        const updatedHidden = [...isHidden];
        updatedHidden[index] = !updatedHidden[index];
        setIsHidden(updatedHidden);
    };

    return (
        <Fragment>
            <Pageheader homepage='File Uploads' activepage='Form Elements' page='File Uploads' />

            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className='card-title'> Bootstrap File Input </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light" onClick={() => toggleHidden(0)}>Show Code<i className={`${isHidden[0] ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 d-inline-block align-middle fs-14 `}></i></button>
                            </div>
                        </Card.Header>
                        <Card.Body className={`${isHidden[0] ? 'd-none' : ''}`}>
                            <div className="mb-3">
                                <Form.Label htmlFor="formFile">Default file input example</Form.Label>
                                <Form.Control type="file" id="formFile" />
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="formFileMultiple">Multiple files input example</Form.Label>
                                <Form.Control type="file" id="formFileMultiple" />
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="formFileDisabled">Disabled file input example</Form.Label>
                                <Form.Control type="file" id="formFileDisabled" disabled />
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="formFileSm">Small file input example</Form.Label>
                                <Form.Control className="form-control-sm" id="formFileSm" type="file" />
                            </div>
                            <div>
                                <Form.Label htmlFor="formFileLg">Large file input example</Form.Label>
                                <Form.Control className="form-control-lg" id="formFileLg" type="file" />
                            </div>
                        </Card.Body>
                        <div className={`${isHidden[0] ? '' : 'd-none'} card-footer border-top-0`}>
                            {/* <!-- Prism Code --> */}

                            <pre><code className='language-javascript'>
                                {`
<Card.Body>
    <div className="mb-3">
        <Form.Label htmlFor="formFile">Default file input example</Form.Label>
        <Form.Control type="file" id="formFile" />
    </div>
    <div className="mb-3">
        <Form.Label htmlFor="formFileMultiple">Multiple files input example</Form.Label>
        <Form.Control type="file" id="formFileMultiple" />
    </div>
    <div className="mb-3">
        <Form.Label htmlFor="formFileDisabled">Disabled file input example</Form.Label>
        <Form.Control type="file" id="formFileDisabled" />
    </div>
    <div className="mb-3">
        <Form.Label htmlFor="formFileSm">Small file input example</Form.Label>
        <Form.Control className="form-control-sm" id="formFileSm" type="file" />
    </div>
    <div>
        <Form.Label htmlFor="formFileLg">Large file input example</Form.Label>
        <Form.Control className="form-control-lg" id="formFileLg" type="file" />
    </div>
</Card.Body>
                `}
                            </code></pre>

                            {/* <!-- Prism Code --> */}
                        </div>
                    </Card>
                </Col>

                <h6 className="mb-3">React Filepond:</h6>

                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> Multiple Upload </div>
                        </Card.Header>
                        <Card.Body>
                            <FilePond className="multiple-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
                                server="/api" allowReorder={true} files={files} onupdatefiles={setFiles} allowMultiple={true} allowImagePreview={true} maxFiles={10} name="filepond"
                                labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> circular File Upload </div>
                        </Card.Header>
                        <Card.Body>
                            <FilePond className="filepond single-fileupload " labelIdle='Drag & Drop your files'
                                stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom' styleButtonRemoveItemPosition='center bottom' />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row className="row-sm">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className='card-title'> React - Uploader </div>
                        </Card.Header>
                        <Card.Body>
                            <UploadButton uploader={uploader}
                                options={{ multi: true }}
                                onComplete={files => console.log(files)}>
                                {({ onClick }) =>
                                    <input className='file_input text-center react-input-uploader form-control' onClick={onClick} placeholder='click here and upload attachment' />
                                }
                                {/* {({onClick}) =>
                                <button className='btn-light btn' onClick={onClick}>
                                    Upload a file...
                                </button>
                                } */}
                            </UploadButton>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Fileupload;