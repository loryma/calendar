import React from "react";
import classes from "./Background.module.css";

const Background = ({ onClose }) => {
  const onClick = e => {
    e.stopPropagation();
    onClose();
  };
  return <div className={classes.background} onClick={onClick}></div>;
};

export default Background;
