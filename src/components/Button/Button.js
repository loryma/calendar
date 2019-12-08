import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, children }) => {
  return (
    <button className={classes.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
