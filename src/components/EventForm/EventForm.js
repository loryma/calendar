import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Input from "../Input/Input";
import classes from "./EventForm.module.css";
import EventTextarea from "../EventTextarea/EventTextarea";

const EventForm = ({
  id,
  updateEvent,
  deleteEvent,
  active,
  onClose,
  title = "",
  date = "",
  participants = "",
  description = ""
}) => {
  const [form, setForm] = useState({
    title: { value: title, placeholder: "Event" },
    date: { value: date, placeholder: "" },
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
      title: { value: title, placeholder: "Event" },
      date: { value: date, placeholder: "" },
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
    // e.stopPropagation();
    if (form.title.value.trim()) {
      updateEvent(id, {
        title: form.title.value,
        date: form.date.value,
        participants: form.participants.value,
        description: form.description.value
      });
      onClose();
    }
  };

  const onDelete = e => {
    e.stopPropagation();
    deleteEvent(id);
    onClose();
  };

  const onChange = (name, e) => {
    let value = e.target.value;
    value = value.slice(0, 180);

    setForm(state => ({ ...state, [name]: { ...state[name], value } }));
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

const mapStateToProps = (state, { id }) =>
  state.events[id] ? { ...state.events[id] } : {};
const mapDispatchToProps = dispatch => ({
  updateEvent: (id, event) => dispatch(actions.updateEvent(id, event)),
  deleteEvent: id => dispatch(actions.deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
