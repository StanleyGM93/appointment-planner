import React from "react";

export const ContactPicker = ({ contactsArray, onChange }) => {
  const contactNameGenerator = (contactsArray) => {};
  return (
    <select>
      <option default></option>
      {contactNameGenerator}
    </select>
  );
};
