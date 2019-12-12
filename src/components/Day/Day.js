import React, { useState, useEffect } from "react";
import EventForm from "../EventForm/EventForm";
import Background from "../Background/Background";
import classes from "./Day.module.css";

const Day = ({ id, disabled, date, weekDay, event, dayIndex, onOpen, isActive }) => {
  const [formActive, setFormActive] = useState(isActive);

  useEffect(() => {
    setFormActive(isActive);
  }, [isActive]);

  const onFormClose = () => {
    setFormActive(false);
  };

  const onFormOpen = e => {
    setFormActive(true);
    onOpen(id);
  };

  const eventContent = event && (
    <div className={classes.event}>
      <h3 className={classes.eventTitle}>{event.title}</h3>
      <p className={classes.eventParticipants}>{event.participants}</p>
      <p className={classes.eventDescription}>{event.description}</p>
    </div>
  );

  const dayClasses = [
    classes.day,
    event ? classes.hasEvent : "",
    formActive ? classes.active : "",
    disabled ? classes.disabled : ""
  ].join(" ");

  return (
    <div onClick={onFormOpen} className={dayClasses} tabIndex="0" id={`event_${id}`}>
      {formActive && (
        <>
          <Background onClose={onFormClose} />
          <EventForm
            eventId={event && event.id}
            dateMs={id}
            active={formActive}
            onClose={onFormClose}
            index={dayIndex}
          />
        </>
      )}
      <p className={classes.dayNumber}>
        {weekDay}
        {date}
      </p>
      {eventContent}
    </div>
  );
};

export default Day;
