import React from "react";
import classes from "./Arrow.module.css";

const Arrow = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={classes.arrow}>
      {children}
    </div>
  );
};

export default Arrow;
