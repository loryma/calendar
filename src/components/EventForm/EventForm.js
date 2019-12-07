import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import dateToText from "../../utilities/dateToText";
import textToDate from "../../utilities/textToDate";
import validateDate from "../../utilities/validateDate";
import Input from "../Input/Input";
import classes from "./EventForm.module.css";
import EventTextarea from "../EventTextarea/EventTextarea";
import { validate } from "@babel/types";

const EventForm = ({
  id,
  updateEvent,
  createEvent,
  deleteEvent,
  active,
  onClose,
  title = "",
  date = "",
  participants = "",
  description = ""
}) => {
  const [form, setForm] = useState({
    title: { value: title, placeholder: "Event", error: null },
    date: { value: date, placeholder: "", error: null },
    participants: {
      value: participants,
      placeholder: "Participants"
    },
    description: {
      value: description,
      placeholder: "Description"
    }
  });

  useEffect(() => {
    setForm({
      title: { value: title, placeholder: "Event", error: null },
      date: { value: dateToText(date), placeholder: "", error: null },
      participants: {
        value: participants,
        placeholder: "Participants"
      },
      description: {
        value: description,
        placeholder: "Description"
      }
    });
  }, [title, date, participants, description]);

  const formClasses = [classes.eventForm, active ? classes.active : ""].join(
    " "
  );

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const fields = Object.entries(form);

    for (let name in form) {
      let error = validate(name, form[name].value);
      setForm(state => ({ ...state, [name]: { ...state[name], error } }));
    }

    const hasErrors = fields.reduce(
      (acc, [name, field]) => field.error || acc,
      false
    );

    if (hasErrors) {
      return;
    }

    if (form.title.value.trim()) {
      if (id) {
        updateEvent({
          id,
          title: form.title.value,
          date: textToDate(form.date.value),
          participants: form.participants.value,
          description: form.description.value
        });
      } else {
        createEvent({
          title: form.title.value,
          date: textToDate(form.date.value),
          participants: form.participants.value,
          description: form.description.value
        });
      }
      onClose();
    }
  };

  const onDelete = e => {
    e.stopPropagation();
    deleteEvent(id);
    onClose();
  };

  const validate = (name, value) => {
    let error = false;
    if (name === "date") {
      error = validateDate(value);
    }
    if (name === "title" && !value.trim()) {
      error = "Event name is required";
    }

    return error;
  };

  const onChange = (name, e) => {
    let value = e.target.value;
    value = value.slice(0, 120);
    let error = validate(name, value);

    setForm(state => ({ ...state, [name]: { ...state[name], value, error } }));
  };

  const onFormClose = e => {
    e.stopPropagation();
    onClose();
  };

  const formContent = Object.entries(form).map(([name, field]) =>
    name !== "description" ? (
      <div className={classes.row} key={name}>
        {/* <div>{field.value}</div> */}
        <Input onChange={onChange.bind(this, name)} name={name} {...field} />
        {field.error && <div className={classes.error}>{field.error}</div>}
      </div>
    ) : (
      <div className={classes.rowTextarea} key={name}>
        <EventTextarea
          onChange={onChange.bind(this, name)}
          name={name}
          {...field}
        />
      </div>
    )
  );

  return (
    <form className={formClasses} onSubmit={onSubmit}>
      <div className={classes.close} onClick={onFormClose}>
        x
      </div>
      {formContent}

      <div className={classes.buttonRow}>
        <button className={classes.button} type="submit">
          Save
        </button>
        <button onClick={onDelete} className={classes.button} type="button">
          Delete
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state, { eventId, dateStr }) => {
  let event;

  if (eventId) {
    event = state.events.find(event => event.id === eventId);
    if (event) {
      return { ...event };
    }
  }
  event = { date: dateStr };
  return event;
};

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(actions.createEvent(event)),
  updateEvent: event => dispatch(actions.updateEvent(event)),
  deleteEvent: id => dispatch(actions.deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
