import React from "react";
import classes from "./EventTextarea.module.css";

const EventTextarea = ({ value, onChange }) => {
  return (
    <textarea
      className={classes.eventTextarea}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default EventTextarea;
