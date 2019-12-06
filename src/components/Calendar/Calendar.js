import React from "react";
import { connect } from "react-redux";
import Month from "../Month/Month";

import classes from "./Calendar.module.css";
import CurrentMonth from "../CurrentMonth/CurrentMonth";

const Calendar = ({ current, events }) => {
  const getDays = current => {
    let days = [];
    const next = new Date(current.getFullYear(), current.getMonth() + 1);
    const prev = new Date(current.getFullYear(), current.getMonth(), 0);

    const firstDay = new Date(
      current.getFullYear(),
      current.getMonth()
    ).getDay();
    const currentDaysNumber = new Date(
      current.getFullYear(),
      current.getMonth() + 1,
      0
    ).getDate();
    const currentDays = [...new Array(currentDaysNumber)].map((_, i) => {
      const dayStr = String(
        +new Date(current.getFullYear(), current.getMonth(), i + 1)
      );
      return {
        id: dayStr,
        day: i + 1,
        event: events[dayStr]
      };
    });
    let firstWeek = [];

    //check if first day of the current month is Monday, if not add days from previous month to the calendar
    if (firstDay !== 1) {
      const prevMonthDate = prev.getDate();
      const prevLeftoverDays = prev.getDay();
      const prevFirstDate = prevMonthDate - prevLeftoverDays;
      const firstWeekPrevMonth = [...new Array(prevLeftoverDays)].map(
        (_, i) => prevFirstDate + i
      );
      firstWeek = firstWeekPrevMonth.map(day => ({
        id: String(+new Date(prev.getFullYear(), prev.getMonth(), day)),
        day
      }));
    }

    days = [...firstWeek, ...currentDays];

    //add days from next month to the calendar

    const daysFromNexMonth = 42 - days.length;

    const nextDays = [...new Array(daysFromNexMonth)].map((_, i) => ({
      id: String(+new Date(next.getFullYear(), next.getMonth(), i + 1)),
      day: i + 1
    }));

    days = [...days, ...nextDays];
    return days;
  };

  const days = getDays(current);

  return (
    <div className={classes.calendar}>
      <Month days={days} />
    </div>
  );
};

const mapStateToProps = state => ({
  current: state.calendar.current,
  events: state.events
});

export default connect(mapStateToProps)(Calendar);
