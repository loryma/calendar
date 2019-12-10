import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick || null} className={classes.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
