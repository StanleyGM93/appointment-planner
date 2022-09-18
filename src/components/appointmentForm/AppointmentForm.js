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

  return (
    <form onSubmit={handleSubmit}>
      <label for="title">Title</label>
      <br />
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <ContactPicker
        contactsArray={contactsArray}
        contact={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <label for="date">Date:</label>
      <br />
      <input
        type="date"
        name="date"
        min={getTodayString}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <label for="date">Time:</label>
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
