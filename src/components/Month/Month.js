import React from "react";
import Day from "../Day/Day";
import classes from "./Month.module.css";

const weekDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const Month = ({ days }) => {
  const content = days.map((day, i) => (
    <Day
      id={day.id}
      key={day.id}
      date={day.day}
      weekDay={weekDay[i] ? weekDay[i] + ", " : ""}
      event={day.event}
    />
  ));
  return <div className={classes.month}>{content}</div>;
};

export default Month;
