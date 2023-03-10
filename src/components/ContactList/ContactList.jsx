import React from "react";
import ContactCard from "../ContactCard/Contactcard";

const ContactList = ({ contact, handleDelete, handleEdit }) => {
  return (
    <div>
      <center style={{ fontSize: "32px", margin: "22px" }}>Contact Book</center>
      <div className="d-flex justify-content-between flex-wrap w-75">
        {contact.map((item) => (
          <ContactCard
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
