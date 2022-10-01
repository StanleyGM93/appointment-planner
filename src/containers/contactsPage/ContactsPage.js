import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contactsArray, addContact }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDupliate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isDuplicate) {
      setName("");
      return;
    } else {
      addContact(name, phoneNumber, email);
      setName("");
      setPhoneNumber("");
      setEmail("");
    }
  };

  useEffect(() => {
    const contactFound = contactsArray.find(
      (obj) => obj.name.toLowerCase() === name.toLowerCase()
    );
    if (contactFound) {
      setIsDupliate(true);
    } else {
      setIsDupliate(false);
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arrayOfObjects={contactsArray} />
      </section>
    </div>
  );
};
