import React, { useState, useRef } from "react";
import EventForm from "../EventForm/EventForm";
import Background from "../Background/Background";
import Event from "../Event/Event";
import DayView from "../DayView/DayView";
import classes from "./Day.module.css";

const VISIBLE_EVENTS = 3;

const Day = ({ id, disabled, date, weekDay, events = [], dayIndex, today }) => {
  const [formActive, setFormActive] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isViewOpened, setIsViewOpened] = useState(false);
  const ref = useRef(null);

  const onFormClose = () => {
    setFormActive(false);
    setCurrentEvent(null);
  };

  const onFormOpen = e => {
    setFormActive(true);
    setCurrentEvent(null);
  };

  const onBlur = e => {
    setTimeout(() => {
      const focusedElement = document.activeElement;
      if (ref.current && !ref.current.contains(focusedElement)) {
        setFormActive(false);
        setCurrentEvent(null);
      }
    });
  };

  const onEventChoice = id => {
    setCurrentEvent(id);
    setFormActive(state => false);
    setTimeout(() => {
      setFormActive(state => true);
    });
  };

  const openView = () => {
    setFormActive(false);
    setIsViewOpened(true);
  };
  const closeView = () => {
    setIsViewOpened(false);
  };

  const eventContent =
    events.length > 0 &&
    events.slice(0, 3).map(event => (
      <div key={event.id} className={classes.event}>
        <Event title={event.title} onClick={onEventChoice.bind(this, event.id)} />
      </div>
    ));

  const dayClasses = [
    classes.day,
    events.length > 0 ? classes.hasEvent : "",
    formActive ? classes.active : "",
    isViewOpened ? classes.viewOpened : "",
    disabled ? classes.disabled : "",
    today ? classes.today : ""
  ].join(" ");

  return (
    <div ref={ref} onBlur={onBlur} className={dayClasses} tabIndex="0" id={`event_${id}`}>
      {formActive && (
        <>
          <Background onClose={onFormClose} hideOnDesktop />
          <EventForm eventId={currentEvent} dateMs={id} active={formActive} onClose={onFormClose} index={dayIndex} />
        </>
      )}
      <p className={classes.dayNumber}>{date}</p>
      {eventContent}
      {events.length > VISIBLE_EVENTS && (
        <button className={classes.more} onClick={openView} type="button">
          {events.length - VISIBLE_EVENTS} more
        </button>
      )}

      {events.length > 0 && (
        <button className={classes.count} onClick={openView} type="button">
          {events.length} events
        </button>
      )}

      {events.length > 0 && isViewOpened && (
        <>
          <Background onClose={closeView} />
          <DayView
            onClose={closeView}
            id={id}
            key={id}
            date={date}
            weekDay={weekDay}
            dayIndex={dayIndex}
            events={events}
          />
        </>
      )}

      <div className={classes.add} onClick={onFormOpen} type="button">
        +
      </div>
    </div>
  );
};

export default Day;
