import React, { useState } from "react";
import Input from "../Input/Input";
import classes from "./EventField.module.css";
import EventTextarea from "../EventTextarea/EventTextarea";

const EventField = ({ saved, name, onChange, field, viewMode }) => {
  const InputType = name !== "description" ? Input : EventTextarea;
  const rowClass = name !== "description" ? classes.row : classes.rowTextarea;

  const formField = (
    <div className={rowClass} key={name}>
      <InputType onChange={onChange} name={name} {...field} />
      {field.error && <div className={classes.error}>{field.error}</div>}
    </div>
  );

  const textRowClasses = [classes.textRow, classes[name]].join(" ");

  const text = (
    <div className={textRowClasses}>
      <p className={classes.text}>{field.value}</p>
    </div>
  );

  function getText() {
    switch (name) {
      case "title":
        return text;
      case "date":
        return text;
      case "participants":
        return (
          field.value && (
            <>
              <label className={classes.label}>Participants:</label>
              {text}
            </>
          )
        );
      case "description":
        return text;
      default:
        return text;
    }
  }

  const textContent = getText();

  return viewMode ? textContent : formField;
};

export default EventField;
