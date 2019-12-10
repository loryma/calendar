import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";

import * as actions from "../../store/actions";
import classes from "./Today.module.css";

const Today = ({ setCurrentDate }) => {
  const onClick = () => {
    const time = new Date();
    const date = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    setCurrentDate(date);
  };
  return (
    <div className={classes.today}>
      <Button onClick={onClick}>Today</Button>
    </div>
  );
};

const mapStateToProps = state => ({ current: state.calendar.current });

const mapDispatchToProps = dispatch => ({
  setCurrentDate: date => dispatch(actions.setCurrentDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Today);
