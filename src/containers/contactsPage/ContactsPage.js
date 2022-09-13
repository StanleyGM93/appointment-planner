import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contactsArray, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDupliate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (isDuplicate) {
      setName("");

      alert("Name is already in contacts"); // How do I indicate if there is a duplicate?

      return;
    } else {
      addContact(name, phoneNumber, email);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  console.log(isDuplicate);
  useEffect(() => {
    console.log(contactsArray);
    if (contactsArray) {
      const contactFound = contactsArray.find((obj) => obj.name === name);
      if (contactFound) {
        setIsDupliate(true);
      } else {
        setIsDupliate(false);
      }
    }
  }, [isDuplicate, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          email={email}
          handleSubmit={handleSubmit}
          isDuplicate
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contactsArray={contactsArray} />
      </section>
    </div>
  );
};
