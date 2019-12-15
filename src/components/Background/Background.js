import React from "react";
import classes from "./Background.module.css";

const Background = ({ onClose, hideOnDesktop }) => {
  const onClick = e => {
    e.stopPropagation();
    onClose();
  };

  const backgroundClasses = [classes.background, hideOnDesktop ? classes.hideOnDesktop : ""].join(" ");
  return <div className={backgroundClasses} onClick={onClick}></div>;
};

export default Background;
