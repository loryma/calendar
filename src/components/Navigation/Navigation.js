import React from "react";
import CurrentMonth from "../CurrentMonth/CurrentMonth";
import Arrow from "../Arrow/Arrow";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import classes from "./Navigation.module.css";

const Navigation = ({ current, changeDate }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const currentFormatted = `${
    months[current.getMonth()]
  } ${current.getFullYear()}`;

  const onDateChange = direction => {
    let newDate;
    if (direction === "prev") {
      newDate = new Date(current.getFullYear(), current.getMonth() - 1);
    } else if (direction === "next") {
      newDate = new Date(current.getFullYear(), current.getMonth() + 1);
    }
    changeDate(newDate);
  };
  return (
    <div className={classes.navigation}>
      <Arrow onClick={onDateChange.bind(this, "prev")}>&#9664;</Arrow>
      <CurrentMonth current={currentFormatted} />
      <Arrow onClick={onDateChange.bind(this, "next")}>&#9654;</Arrow>
    </div>
  );
};

const mapStateToProps = state => ({
  current: new Date(+state.calendar.current)
});
const mapDispatchToProps = dispatch => ({
  changeDate: date => dispatch(actions.setCurrentDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
