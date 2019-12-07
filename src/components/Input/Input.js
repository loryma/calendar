import React from "react";
import classes from "./Input.module.css";

const Input = ({ value, placeholder, onChange, error }) => {
  const inputClasses = [classes.input, error ? classes.invalid : ""].join(" ");
  return (
    <input
      className={inputClasses}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
