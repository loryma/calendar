import React from "react";
import classes from "./Event.module.css";

const Event = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className={classes.event}>
      <h3 className={classes.title}>{title}</h3>
    </div>
  );
};

export default Event;
