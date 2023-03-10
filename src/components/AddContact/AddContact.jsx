import React, { useState } from "react";
import "./AddContact.css";

function AddContact({ handleAddContact }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(name, surname, email, phoneNumber);

  function handleContact() {
    if (!name || !surname || !email || !phoneNumber) {
      alert("some inputs are empty");
      return;
    }

    let newObj = {
      name,
      surname,
      email,
      phoneNumber,
      id: Date.now(),
    };
    console.log(newObj);
    handleAddContact(newObj);
    setName("");
    setSurname("");
    setEmail("");
    setPhoneNumber("");
  }

  return (
    <div className="contactForma">
      <center className="contactForm">
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          placeholder="Name"
        />
        Surname:
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="input"
          placeholder="Surname"
        />
        E-mail:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="E-mail"
        />
        Phone number:
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="input"
          placeholder="Phone Number"
        />
        <button onClick={handleContact} className="btnAdd">
          Add Contact
        </button>
      </center>
    </div>
  );
}

export default AddContact;
