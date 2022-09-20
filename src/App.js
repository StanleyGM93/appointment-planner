import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
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

  /*
  Implement functions to add data to
  contacts and appointments
  */

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

  const addAppointment = (title, contact, date, time) => {
    setAppointmentsArray((prev) => [
      ...prev,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
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
            {/* Add props to ContactsPage */}
            <ContactsPage
              contactsArray={contactsArray}
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointmentsArray={appointmentsArray}
              addAppointment={addAppointment}
              contactsArray={contactsArray}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
