import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointmentsArray,
  addAppointment,
  contactsArray,
  removeAppointment,
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [timeEntered, setTimeEntered] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(title, contact, date, timeEntered);
    setTitle("");
    setContact("");
    setDate("");
    setTimeEntered("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          timeEntered={timeEntered}
          setTimeEntered={setTimeEntered}
          handleSubmit={handleSubmit}
          contactsArray={contactsArray}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          arrayOfObjects={appointmentsArray}
          removeAppointment={removeAppointment}
        />
      </section>
    </div>
  );
};
