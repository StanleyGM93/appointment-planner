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
  const spanStyle = {
    color: "orange",
  };

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
      {isDuplicate && (
        <span style={spanStyle}>*Warning - name is already in contacts</span>
      )}
      <br />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <br />
      <input
        type="tel"
        name="phoneNumber"
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
