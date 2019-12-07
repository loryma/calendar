import React, { useState, useRef } from "react";
import EventForm from "../EventForm/EventForm";
import classes from "./Day.module.css";

const Day = ({ id, date, weekDay, event }) => {
  const [formActive, setFormActive] = useState(false);

  const onFormClose = () => {
    setFormActive(false);
  };

  const onFormOpen = e => {
    setFormActive(true);
  };

  const eventContent = event && (
    <div className={classes.event}>
      <h3 className={classes.eventTitle}>{event.title}</h3>
      <p className={classes.eventParticipants}>{event.participants}</p>
      <p className={classes.eventDescription}>{event.description}</p>
    </div>
  );

  const dayClasses = [classes.day, event ? classes.hasEvent : ""].join(" ");

  return (
    <div onClick={onFormOpen} className={dayClasses} tabIndex="0" id={id}>
      <EventForm
        eventId={event && event.id}
        dateMs={id}
        active={formActive}
        onClose={onFormClose}
      />
      <p className={classes.dayNumber}>
        {weekDay}
        {date}
      </p>
      {eventContent}
    </div>
  );
};

export default Day;
