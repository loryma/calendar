import React from "react";
import classes from "./AddButton.module.css";

const AddButton = ({ onClick }) => {
  return <button className={classes.addButton} type="button" onClick={onClick}></button>;
};

export default AddButton;
