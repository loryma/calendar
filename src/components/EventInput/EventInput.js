import React from "react";
import classes from "./EventInput.module.css";

const EventInput = ({ value, onChange }) => {
  return (
    <input
      className={classes.eventInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default EventInput;
