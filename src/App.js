import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

const App = () => {
  const [contact, setContact] = useState([]);
  // !create=================

  function handleAddContact(newObj) {
    let newContact = [...contact];
    newContact.push(newObj);
    setContact(newContact);
  }
  console.log(contact);

  // !delete============
  function handleDelete(id) {
    let newContact = contact.filter((item) => item.id !== id);
    setContact(newContact);
  }
  // !edit===============

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [editContact, setEditContact] = useState({});

  function handleEdit(id) {
    let obj = contact.filter((item) => item.id === id);
    setEditContact(obj[0]);
    handleEditShow();
  }

  function handleSave(editedObj) {
    let newContact = contact.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      }
      return item;
    });
    setContact(newContact);
    setShowEditModal(false);
  }

  return (
    <div>
      <Header />
      <AddContact handleAddContact={handleAddContact} />
      <ContactList
        contact={contact}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {showEditModal && (
        <EditContact
          editContact={editContact}
          handleSave={handleSave}
          handleEditClose={handleEditClose}
          show={showEditModal}
        />
      )}
    </div>
  );
};

export default App;
