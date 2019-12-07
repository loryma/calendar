import React from "react";
import classes from "./Input.module.css";

const Input = ({ value, onChange }) => {
  return (
    <input
      className={classes.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
