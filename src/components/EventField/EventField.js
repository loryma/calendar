import React, { useState } from "react";
import Input from "../Input/Input";
import classes from "./EventField.module.css";
import EventTextarea from "../EventTextarea/EventTextarea";

const EventField = ({ saved, name, onChange, field }) => {
  const [viewMode, setViewMode] = useState(saved);
  const InputType = name !== "description" ? Input : EventTextarea;
  const rowClass = name !== "description" ? classes.row : classes.rowTextarea;
  const formField = (
    <div className={rowClass} key={name}>
      <InputType onChange={onChange} name={name} {...field} />
      {field.error && <div className={classes.error}>{field.error}</div>}
    </div>
  );

  const toggleMode = () => {
    setViewMode(state => !state);
  };

  const text = (
    <div className={classes.textRow}>
      <p classes={classes.text}>{field.value}</p>
      <span onClick={toggleMode}>Edit</span>
    </div>
  );

  return viewMode ? text : formField;
};

export default EventField;
