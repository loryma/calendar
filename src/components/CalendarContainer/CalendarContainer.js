import React from "react";
import Navigation from "../Navigation/Navigation";
import Calendar from "../Calendar/Calendar";
import Search from "../Search/Search";

import classes from "./CalendarContainer.module.css";

const CalendarContainer = () => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerContainer}>
          <Search />
        </div>
      </div>
      <div className={classes.calendarContainer}>
        <div className={classes.navigation}>
          <Navigation />
        </div>
        <div className={classes.calendar}>
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default CalendarContainer;
