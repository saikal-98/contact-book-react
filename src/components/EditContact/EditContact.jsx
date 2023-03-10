import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditContact({ editContact, handleSave, handleEditClose, show }) {
  const [contactToEdit, setContactToEdit] = useState(editContact);

  const editName = (e) => {
    let newObj = {
      ...contactToEdit,
      name: e.target.value,
    };
    setContactToEdit(newObj);
  };
  const editSurname = (e) => {
    let newObj = {
      ...contactToEdit,
      surname: e.target.value,
    };
    setContactToEdit(newObj);
  };
  const editEmail = (e) => {
    let newObj = {
      ...contactToEdit,
      email: e.target.value,
    };
    setContactToEdit(newObj);
  };
  const editPhoneNumber = (e) => {
    let newObj = {
      ...contactToEdit,
      phoneNumber: e.target.value,
    };
    setContactToEdit(newObj);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={handleEditClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contacts</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <center>
              Name: <br />
              <input
                value={contactToEdit.name}
                onChange={editName}
                type="text"
                placeholder="Enter name"
              />
              <br />
              Surname: <br />
              <input
                value={contactToEdit.surname}
                onChange={editSurname}
                type="text"
                placeholder="Enter surname"
              />
              <br />
              E-mail: <br />
              <input
                value={contactToEdit.email}
                onChange={editEmail}
                type="text"
                placeholder="Enter E-mail"
              />
              <br />
              Phone number: <br />
              <input
                value={contactToEdit.phoneNumber}
                onChange={editPhoneNumber}
                type="text"
                placeholder="Enter phone number"
              />
            </center>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleEditClose} variant="secondary">
              Close
            </Button>
            <Button onClick={() => handleSave(contactToEdit)} variant="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default EditContact;
