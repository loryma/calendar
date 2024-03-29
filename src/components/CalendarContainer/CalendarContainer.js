import React from "react";
import Navigation from "../Navigation/Navigation";
import Calendar from "../Calendar/Calendar";
import Search from "../Search/Search";
import AddEvent from "../AddEvent/AddEvent";
import Today from "../Today/Today";
import Weekday from "../Weekday/Weekday";

import classes from "./CalendarContainer.module.css";

const CalendarContainer = () => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerContainer}>
          <div className={classes.navigation}>
            <Navigation />
            <Today />
          </div>
          <Search />
        </div>
      </div>
      <div className={classes.calendarContainer}>
        <Weekday />
        <div className={classes.addEvent}>
          <AddEvent />
        </div>

        <div className={classes.calendar}>
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default CalendarContainer;
