import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm';
import {TileList} from '../../components/tileList'

export const ContactsPage = ({contactsArray, addContact}) => {
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
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const findDuplicate = (contactsArray, duplicateName) => {
      const namePropertyInArray = contactsArray[name]
      if (found) {
        alert('Name is already in contacts');
      }
      return ;
    }
  })

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
