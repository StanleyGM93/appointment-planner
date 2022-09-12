import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contactsArray, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (duplicateName) {
      setName('')
    } else {
      addContact(name, phoneNumber, email)
    }

  }


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const findDuplicate = (contactsArray, name) => {
      const usingFindOnArray = contactsArray.find((obj) => obj.name === name)
      if (usingFindOnArray) {
        alert('Name is already in contacts'); // How do I indicate if there is a duplicate?
        setDuplicateName(true)
        return;
      }
      return;
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phoneNumber={phoneNumber}
          email={email}
          handleSubmit={handleSubmit}
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
