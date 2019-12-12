import React from "react";
import classes from "./Close.module.css";
import svg from "./close.svg";

const Close = ({ onClick }) => {
  return (
    <div className={classes.close} onClick={onClick}>
      <img className={classes.icon} src={svg} alt="close" />
    </div>
  );
};

export default Close;
