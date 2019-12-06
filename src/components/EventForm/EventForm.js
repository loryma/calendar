import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import EventInput from "../EventInput/EventInput";
import classes from "./EventForm.module.css";
import EventTextarea from "../EventTextarea/EventTextarea";

const EventForm = ({
  id,
  updateEvent,
  deleteEvent,
  event,
  active,
  onClose
}) => {
  const [form, setForm] = useState({
    title: { value: event.title, placeholder: "Event" },
    date: { value: event.date, placeholder: "" },
    participants: {
      value: event.participants,
      placeholder: "Participants"
    },
    description: {
      value: event.description,
      placeholder: "Description"
    }
  });

  const formClasses = [classes.eventForm, active ? classes.active : ""].join(
    " "
  );

  console.log(formClasses);

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

  const onDelete = () => {
    deleteEvent(id);
  };

  const onChange = (name, e) => {
    let value = e.target.value;
    value = value.slice(0, 180);

    if (value.trim()) {
      setForm(state => ({ ...state, [name]: { ...state[name], value } }));
    }
  };

  const formContent = Object.entries(form).map(([name, field]) =>
    name !== "description" ? (
      <div className={classes.row} key={name}>
        <EventInput
          onChange={onChange.bind(this, name)}
          name={name}
          {...field}
        />
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
      {formContent}

      <div className={classes.button}>
        <button className={classes.button} type="submit">
          Save
        </button>
        <button onClick={onDelete} className={classes.button}>
          Delete
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state, { id }) => ({
  event: state.events[id] || {
    title: "",
    date: "",
    participants: "",
    description: ""
  }
});
const mapDispatchToProps = dispatch => ({
  updateEvent: (id, event) => dispatch(actions.updateEvent(id, event)),
  deleteEvent: id => dispatch(actions.deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
