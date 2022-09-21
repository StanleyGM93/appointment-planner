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
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <br />
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {isDuplicate && <span>Error - name is already in contacts</span>}
      <br />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <br />
      <input
        type="tel"
        name="phoneNumber"
        //Pattern gives an error
        pattern="	
        ^([\(]{1}[0-9]{3}[\)]{1}[\.| |\-]{0,1}|^[0-9]{3}[\.|\-| ]?)?[0-9]{3}(\.|\-| )?[0-9]{4}$"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      ></input>
      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
