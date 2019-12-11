import React from "react";
import classes from "./PopupTriangle.module.css";

const PopupTriangle = ({ className }) => {
  const classesTriangle = [
    classes.popupTriangle,
    className ? className : ""
  ].join(" ");
  return <div className={classesTriangle}></div>;
};

export default PopupTriangle;
