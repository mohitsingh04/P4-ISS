import React, { Fragment, useState } from "react";
import { Pagination, Row, Col, Card, Table, InputGroup, Form } from "react-bootstrap";
import Pageheader from "../../layouts/layoutcomponents/Pageheader";
import Select from 'react-select'
import { tableData, userSelect } from "../../common/Commomarreydata";
import Flatpickr from "react-flatpickr";
import Swal from "sweetalert2";

const Userlist = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = tableData.filter(item =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const [editRowIndex, setEditRowIndex] = useState(-1); // Index of the row in edit mode

  const toggleEditMode = (index) => {
    setEditRowIndex(index === editRowIndex ? -1 : index);
  };

  const handleUpdate = (index) => {
    // 1. Toggle checkbox
    const selectElement = document.getElementById(`selectCheckbox-${index}`);
    const isChecked = selectElement.value === 'Checked';
    // 2. Update image
    const fileElement = document.getElementById(`fileInput-${index}`);
    const updatedImage = fileElement.files[0];
    const imgElement = document.getElementById(`image-${index}`);
    if (updatedImage && imgElement) { // Check if imgElement exists
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && imgElement) { // Check if reader.result and imgElement exist
          imgElement.src = reader.result;
        }
      };
      reader.readAsDataURL(updatedImage);
    }
    // 3. Update name
    const nameElement = document.getElementById(`nameInput-${index}`);
    const updatedName = nameElement.value;
    // 4. Update date
    const dateElement = document.getElementById(`dateInput-${index}`);
    const updatedDate = dateElement.value;

    // Check if the date value has changed
    const originalDate = filteredData[index].date;
    const dateChanged = originalDate !== updatedDate;

    // Update the data with the new values
    const updatedData = [...filteredData];
    updatedData[index] = {
      ...updatedData[index],
      checked: isChecked,
      avatarSrc: updatedImage ? URL.createObjectURL(updatedImage) : updatedData[index].avatarSrc,
      name: updatedName,
      date: dateChanged ? updatedDate : originalDate, // Use updated date if changed, otherwise keep original date
    };
    setFilteredData(updatedData);
    setEditRowIndex(-1); // Exit edit mode after update
  };

  const handleDelete = (index) => {
    const itemToDelete = filteredData[index];
    const updatedData = [...filteredData];
    Swal.fire({
      title: `Do you want to delete "${itemToDelete.name}" from userlist?`,
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: 'Cancel',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        updatedData.splice(index, 1); // Remove the item at the specified index
        setFilteredData(updatedData);
        Swal.fire(`User "${itemToDelete.name}" Deleted Successfully !!`, '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Operation canceled', '', 'info');
      }
    });
  };
  return (
    <Fragment>
      <Pageheader homepage='Userlist' activepage='Advanced Ui' page='Userlist' />
      <Row className="row-cards">
        <Col lg={12} xl={12}>
          <InputGroup className="mb-4">
            <Form.Control type="text" placeholder="" value={searchQuery} onChange={handleSearch} />
            <InputGroup.Text className="btn btn-primary"><i className="fe fe-search fw-bold" aria-hidden="true"></i></InputGroup.Text>
          </InputGroup>
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 p-4">
              <h2 className="card-title">1 - 30 of 546 users</h2>
              <div className="page-options d-flex ms-auto">
                <div className="w-180">
                  <Select options={userSelect} classNamePrefix="Select2" defaultValue={userSelect[0]} />
                </div>
              </div>
            </Card.Header>
            <div className="e-table px-4 mb-4">
              <div className="table-responsive table-lg">
                <table className="table border table-bordered mb-0">
                  <thead>
                    <tr>
                      <th className="text-center">Select</th>
                      <th className="text-center">Photo</th>
                      <th >Name</th>
                      <th>Date</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, index) => (
                      <tr key={index}>
                        <td className="align-middle text-center">
                          {editRowIndex === index ? (
                            <select id={`selectCheckbox-${index}`} className="form-select" defaultValue={item.checked ? 'Checked' : 'UnChecked'}>
                              <option value="Checked">Checked</option>
                              <option value="UnChecked">UnChecked</option>
                            </select>
                          ) : (
                            <input className="form-check-input" type="checkbox" defaultChecked={item.checked} />
                          )}
                        </td>
                        <td className="align-middle text-center">
                          {editRowIndex === index ? (
                            <input className="form-control" type="file" accept="image/*" id={`fileInput-${index}`} />
                          ) : (
                            <img id={`image-${index}`} alt="image" className="avatar avatar-md br-7" src={item.avatarSrc} />
                          )}
                        </td>
                        <td className="text-nowrap align-middle">
                          {editRowIndex === index ? (
                            <input type="text" defaultValue={item.name} id={`nameInput-${index}`} className="form-control" />
                          ) : (
                            <span>{item.name}</span>
                          )}
                        </td>
                        <td className="text-nowrap align-middle">
                          {editRowIndex === index ? (
                            <Flatpickr className='form-control' value={item.date} id={`dateInput-${index}`} />
                          ) : (
                            <span>{item.date}</span>
                          )}
                        </td>
                        <td className="text-center align-middle btn-list">
                          {editRowIndex === index ? (
                            <div>
                              <button className="btn btn-primary" onClick={() => handleUpdate(index)}>Update</button>
                              <button className="btn btn-secondary" onClick={() => setEditRowIndex(-1)}>Cancel</button>
                            </div>
                          ) : (
                            <button className="btn btn-icon btn-primary-light btn-wave waves-effect waves-light" onClick={() => toggleEditMode(index)}>
                              <i className="ri-edit-fill"></i>
                            </button>
                          )}
                          {editRowIndex == index ? null :
                            <button className="btn btn-icon btn-danger-light btn-wave waves-effect waves-light" onClick={() => handleDelete(index)}>
                              <i className="ri-delete-bin-2-fill"></i>
                            </button>
                          }
                        </td>
                      </tr>
                    ))}
                    {filteredData.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center">No data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
          <div className="mb-5">
            <Pagination className="float-end">
              <Pagination.Item disabled>Prev</Pagination.Item>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>Next</Pagination.Item>
            </Pagination>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Userlist