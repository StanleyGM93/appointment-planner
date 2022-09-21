import React from "react";

export const ContactPicker = ({ contactsArray, settingContact }) => {
  const contactNameGenerator = contactsArray.map((contact, index) => (
    <option key={index} value={contact.name}>
      {contact.name}
    </option>
  ));

  return (
    <select onChange={settingContact}>
      <option value="" defaultValue={""}></option>
      {contactNameGenerator}
    </select>
  );
};
