import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contactsArray, setContactsArray] = useState([
    {
      name: "Stan",
      phoneNumber: "27-777-777",
      email: "stanleygmair@gmail.com",
    },
  ]);
  const [appointmentsArray, setAppointmentsArray] = useState([
    { title: "Swimming", contact: "Stan" },
  ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name, phoneNumber, email) => {
    setContactsArray((prev) => [
      ...prev,
      {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
      },
    ]);
  };

  const addAppointment = (title, contact, date, timeEntered) => {
    setAppointmentsArray((prev) => [
      ...prev,
      {
        title: title,
        contact: contact,
        date: date,
        timeEntered: timeEntered,
      },
    ]);
  };

  const removeContact = (name) => {
    setContactsArray((prev) =>
      prev.filter((contact) => {
        return contact.name !== name;
      })
    );
  };

  const removeAppointment = (title) => {
    setAppointmentsArray((prev) =>
      prev.filter((appointment) => {
        return appointment.title !== title;
      })
    );
  };
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage
              contactsArray={contactsArray}
              addContact={addContact}
              removeContact={removeContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointmentsArray={appointmentsArray}
              addAppointment={addAppointment}
              contactsArray={contactsArray}
              removeAppointment={removeAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
