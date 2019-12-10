import React, { useState } from "react";
import Day from "../Day/Day";
import classes from "./Month.module.css";

const weekDay = [
  <>
    <span className="longDay">Monday,&nbsp;</span>
    <span className="shortDay">Mon</span>
  </>,
  <>
    <span className="longDay">Tuesday,&nbsp;</span>
    <span className="shortDay">Tue</span>
  </>,
  <>
    <span className="longDay">Wednesday,&nbsp;</span>
    <span className="shortDay">Wed</span>
  </>,
  <>
    <span className="longDay">Thursday,&nbsp;</span>
    <span className="shortDay">Thu</span>
  </>,
  <>
    <span className="longDay">Friday,&nbsp;</span>
    <span className="shortDay">Fri</span>
  </>,
  <>
    <span className="longDay">Saturday,&nbsp;</span>
    <span className="shortDay">Sat</span>
  </>,
  <>
    <span className="longDay">Sunday,&nbsp;</span>
    <span className="shortDay">Sun</span>
  </>
];

const Month = ({ days }) => {
  const [activeDayId, setActiveDayId] = useState(null);
  const onOpen = id => {
    setActiveDayId(id);
  };
  const content = days.map((day, i) => (
    <Day
      id={day.id}
      key={day.id}
      date={day.day}
      weekDay={weekDay[i] ? weekDay[i] : ""}
      dayIndex={i}
      event={day.event}
      onOpen={onOpen}
      isActive={day.id === activeDayId}
    />
  ));

  return <div className={classes.month}>{content}</div>;
};

export default Month;
