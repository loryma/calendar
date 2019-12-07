import React from "react";
import classes from "./EventTextarea.module.css";

const EventTextarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className={classes.eventTextarea}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default EventTextarea;
