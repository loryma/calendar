import React from "react";
import classes from "./Weekday.module.css";

const WEEK = [
  <>
    <span className={classes.longDay}>Monday</span>
    <span className={classes.shortDay}>Mon</span>
  </>,
  <>
    <span className={classes.longDay}>Tuesday</span>
    <span className={classes.shortDay}>Tue</span>
  </>,
  <>
    <span className={classes.longDay}>Wednesday</span>
    <span className={classes.shortDay}>Wed</span>
  </>,
  <>
    <span className={classes.longDay}>Thursday</span>
    <span className={classes.shortDay}>Thu</span>
  </>,
  <>
    <span className={classes.longDay}>Friday</span>
    <span className={classes.shortDay}>Fri</span>
  </>,
  <>
    <span className={classes.longDay}>Saturday</span>
    <span className={classes.shortDay}>Sat</span>
  </>,
  <>
    <span className={classes.longDay}>Sunday</span>
    <span className={classes.shortDay}>Sun</span>
  </>
];

const Weekday = () => {
  return <div className={classes.weekday}>{WEEK.map(day => day)}</div>;
};

export default Weekday;
