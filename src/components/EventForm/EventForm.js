import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import dateToText from "../../utilities/dateToText";
import textToDate from "../../utilities/textToDate";
import validateDate from "../../utilities/validateDate";
import EventField from "../EventField/EventField";
import Button from "../Button/Button";
import PopupTriangle from "../PopupTriangle/PopupTriangle";
import Close from "../Close/Close";
import Edit from "../Edit/Edit";
import classes from "./EventForm.module.css";

const EventForm = ({
  id,
  index,
  updateEvent,
  createEvent,
  deleteEvent,
  active,
  onClose,
  title = "",
  date,
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

  const [isValid, setIsValid] = useState(false);

  const [viewMode, setViewMode] = useState(!!id);

  const [touched, setTouched] = useState(false);

  const SatSun = index % 7 === 5 || index === 5 || (index + 1) % 7 === 0;

  const formClasses = [classes.eventForm, "eventForm", active ? classes.active : "", SatSun ? classes.left : ""].join(
    " "
  );

  const toggleMode = () => {
    setViewMode(state => !state);
  };

  const changeTouched = () => {
    setTouched(true);
  };

  const changeIsValid = () => {
    const fields = Object.entries(form);

    const hasErrors = fields.reduce((acc, [name, field]) => field.error || acc, false);
    setIsValid(!hasErrors);
    debugger;
  };

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const hasErrors = checkFormValidity();

    if (hasErrors) {
      return;
    }

    if (form.title.value.trim()) {
      if (id) {
        updateEvent({
          id,
          title: form.title.value,
          date: form.date.value,
          dateMs: textToDate(form.date.value),
          participants: form.participants.value,
          description: form.description.value
        });
      } else {
        createEvent({
          title: form.title.value,
          date: form.date.value,
          dateMs: textToDate(form.date.value),
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

  const checkFormValidity = () => {
    const fields = Object.entries(form);

    for (let name in form) {
      let error = validate(name, form[name].value);
      setForm(state => ({ ...state, [name]: { ...state[name], error } }));
    }

    const hasErrors = fields.reduce((acc, [name, field]) => field.error || acc, false);
    return hasErrors;
  };

  const onChange = (name, e) => {
    e.stopPropagation();
    let value = e.target.value;
    value = value.slice(0, 120);
    let error = validate(name, value);

    setForm(state => ({ ...state, [name]: { ...state[name], value, error } }));
    changeTouched();
  };

  const onFormClose = e => {
    e.stopPropagation();
    onClose();
  };

  const formContent = Object.entries(form).map(([name, field]) => (
    <EventField
      key={name}
      onChange={onChange.bind(this, name)}
      name={name}
      field={field}
      saved={!!id}
      viewMode={viewMode}
    />
  ));

  const stop = e => {
    e.stopPropagation();
  };

  return (
    <form className={formClasses} onFocus={stop} onSubmit={onSubmit}>
      <PopupTriangle className="eventFormTriangle" />
      {id && <Edit onClick={toggleMode} />}
      <Close onClick={onFormClose} />

      {formContent}

      <div className={classes.buttonRow}>
        {!viewMode && (
          <div className={classes.buttonWrapper}>
            <Button disabled={!touched} type="submit">
              Save
            </Button>
          </div>
        )}

        {id && (
          <Button type="button" onClick={onDelete}>
            Delete
          </Button>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state, { eventId, dateMs }) => {
  let event;

  if (eventId) {
    event = state.events.find(event => event.id === eventId);
    if (event) {
      return { ...event };
    }
  }
  event = { date: dateToText(dateMs), dateMs };
  return event;
};

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(actions.createEvent(event)),
  updateEvent: event => dispatch(actions.updateEvent(event)),
  deleteEvent: id => dispatch(actions.deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
