import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contactsArray,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  timeEntered,
  setTimeEntered,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-NZ")
      .split("/");
    return `${month.padStart(2, "0")}-${day.padStart(2, "0")}-${year}`;
  };

  const settingContact = (e) => setContact(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="contactPicker">Pick Contact:</label>
      <ContactPicker
        contactsArray={contactsArray}
        contact={contact}
        settingContact={settingContact}
      />
      <label htmlFor="date">Date:</label>
      <br />
      <input
        type="date"
        name="date"
        //The min value gives an error, must be number or string. It's currently a date (not a data type)
        min={getTodayString}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <label htmlFor="date">Time:</label>
      <br />
      <input
        type="time"
        name="time"
        value={timeEntered}
        onChange={(e) => setTimeEntered(e.target.value)}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
