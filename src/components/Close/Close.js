import React from "react";
import classes from "./Close.module.css";

const Close = ({ onClick, children }) => {
  return (
    <div className={classes.close} onClick={onClick}>
      {children}
    </div>
  );
};

export default Close;
