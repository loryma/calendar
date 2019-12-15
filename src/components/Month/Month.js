import React from "react";
import Day from "../Day/Day";
import classes from "./Month.module.css";

const weekDay = [
  <>
    <span className="longDay">Sunday</span>
    <span className="shortDay">Sun</span>
  </>,
  <>
    <span className="longDay">Monday</span>
    <span className="shortDay">Mon</span>
  </>,
  <>
    <span className="longDay">Tuesday</span>
    <span className="shortDay">Tue</span>
  </>,
  <>
    <span className="longDay">Wednesday</span>
    <span className="shortDay">Wed</span>
  </>,
  <>
    <span className="longDay">Thursday</span>
    <span className="shortDay">Thu</span>
  </>,
  <>
    <span className="longDay">Friday</span>
    <span className="shortDay">Fri</span>
  </>,
  <>
    <span className="longDay">Saturday</span>
    <span className="shortDay">Sat</span>
  </>
];

const Month = ({ days }) => {
  const timeNow = new Date();
  const today = `${+new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate())}`;

  const content = days.map((day, i) => (
    <Day
      id={day.id}
      key={day.id}
      date={day.day}
      weekDay={weekDay[day.weekDay]}
      dayIndex={i}
      events={day.events}
      disabled={day.disabled}
      today={today === day.id}
    />
  ));

  return <div className={classes.month}>{content}</div>;
};

export default Month;
