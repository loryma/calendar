import React, { useState, useRef } from "react";
import EventForm from "../EventForm/EventForm";
import Background from "../Background/Background";
import Event from "../Event/Event";
import Close from "../Close/Close";
import classes from "./DayView.module.css";

const DayView = ({ id, date, weekDay, events = [], dayIndex, onClose }) => {
  const [formActive, setFormActive] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const ref = useRef(null);

  const onFormClose = () => {
    setFormActive(false);
    setCurrentEvent(null);
  };

  const onBlur = e => {
    setTimeout(() => {
      const focusedElement = document.activeElement;
      if (!ref.current.contains(focusedElement)) {
        setFormActive(false);
        setCurrentEvent(null);
        onClose();
      }
    });
  };

  const onEventChoice = id => {
    setCurrentEvent(id);
    setFormActive(true);
  };

  const eventContent =
    events.length > 0 &&
    events.map(event => (
      <div key={event.id} className={classes.event}>
        <Event title={event.title} onClick={onEventChoice.bind(this, event.id)} />
      </div>
    ));

  const dayClasses = [classes.dayView, formActive ? classes.active : ""].join(" ");

  return (
    <div ref={ref} onBlur={onBlur} className={dayClasses}>
      <Close onClick={onClose} />
      {formActive && (
        <>
          <Background onClose={onFormClose} hideOnDesktop />
          <EventForm eventId={currentEvent} dateMs={id} active={formActive} onClose={onFormClose} index={dayIndex} />
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

export default DayView;
