import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit,
  isDuplicate,
}) => {
  console.log(name);
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <br />
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      {isDuplicate && <span>Error - name is already in contacts</span>}
      <br />
      <label for="phoneNumber">Phone Number:</label>
      <br />
      <input type="text" name="phoneNumber"></input>
      <label for="email">Phone Number:</label>
      <br />
      <input type="text" name="email"></input>
      <button type="submit">Submit</button>
    </form>
  );
};
