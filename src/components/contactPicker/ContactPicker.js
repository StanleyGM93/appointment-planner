import React from "react";

export const ContactPicker = ({ contactsArray, onChange }) => {
  const contactNameGenerator = contactsArray.map((contact, index) => {
    return (
      <option key={index} value={contact.name}>
        {contact.name}
      </option>
    );
  });
  return (
    // Need to fix the callback function as onChange isn't correct.
    <select onChange={onChange}>
      <option value="" selected="selected"></option>
      {contactNameGenerator}
    </select>
  );
};
