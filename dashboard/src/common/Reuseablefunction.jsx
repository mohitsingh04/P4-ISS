import React, { useState } from 'react';
import { Alert, Button, Dropdown, DropdownDivider, Form, InputGroup, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

//This function used in header, when the screen width is below 992px onClick the Search icon to show to modal with search function

export function Modalsearch({ show, handleClose }) {

  const [tags, setTags] = useState([
    { name: 'People', iconClass: 'fe-user' },
    { name: 'Pages', iconClass: 'fe-file-text' },
    { name: 'Articles', iconClass: 'fe-align-left' },
    { name: 'Tags', iconClass: 'fe-server' },
  ]);

  const [searches, setSearches] = useState([
    { name: 'Notifications', link: `${import.meta.env.BASE_URL}apps/timeline/` },
    { name: 'Alerts', link: `${import.meta.env.BASE_URL}uielements/alerts/` },
    { name: 'Mail', link: `${import.meta.env.BASE_URL}pages/mailinbox/` },
  ]);

  const deleteTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const deleteSearch = (index) => {
    const newSearches = [...searches];
    newSearches.splice(index, 1);
    setSearches(newSearches);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} keyboard={false} id='searchModal'>
        <Modal.Body>
          <InputGroup>
            <InputGroup.Text to="#" id="Search-Grid"><i className="fe fe-search header-link-icon fs-18"></i></InputGroup.Text>
            <Form.Control type="search" className="border px-2" placeholder="Search" aria-label="Username" />
            <InputGroup.Text as='a' to="#" id="voice-search"><i className="fe fe-mic header-link-icon"></i></InputGroup.Text>
            <Dropdown>
              <Dropdown.Toggle as='a' className='no-caret btn btn-light btn-icon' id="dropdown-basic">
                <i className="fe fe-more-vertical"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
                <DropdownDivider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
          <div className="mt-4">
            <p className="font-weight-semibold text-muted mb-2">Are You Looking For...</p>
            {tags.map((tag, index) => (
              <span key={index} className="search-tags me-2">
                <i className={`fe ${tag.iconClass} me-2`}></i>
                {tag.name}
                <Link to='#' onClick={() => deleteTag(index)} className="tag-addon"> <i className="fe fe-x"></i> </Link>
              </span>
            ))}
          </div>
          <div className="my-4">
            <p className="font-weight-semibold text-muted mb-2">Recent Search :</p>
            {searches.map((search, index) => (
              <Alert key={index} className="p-2 border br-5 d-flex align-items-center text-muted mb-2">
                <Link to={search.link}>
                  <span>{search.name}</span>
                </Link>
                <Link to='#' onClick={() => deleteSearch(index)} className="ms-auto lh-1"> <i className="fe fe-x text-muted"></i> </Link>
              </Alert>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn-group ms-auto">
            <button className="btn btn-sm btn-primary-light">Search</button>
            <button className="btn btn-sm btn-primary">Clear Recents</button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


//content is used in file-manager page for creating a new file.

export function Creatnewfile() {
  const [files, setFiles] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleShow}>
        Create New File
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FilePond className="multiple-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
            server="/api" allowReorder={true} files={files} onupdatefiles={setFiles} allowMultiple={true} allowImagePreview={true} maxFiles={10} name="filepond"
            labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}> Cancel </Button>
          <Button variant="primary" onClick={handleClose}> add </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

