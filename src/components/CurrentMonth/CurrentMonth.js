import React from "react";
import classes from "./CurrentMonth.module.css";

const CurrentMonth = ({ current }) => {
  return <div className={classes.currentMonth}>{current}</div>;
};

export default CurrentMonth;
