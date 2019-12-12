import React from "react";
import classes from "./Edit.module.css";
import svg from "./edit.svg";

const Edit = ({ onClick }) => {
  return (
    <div className={classes.edit} onClick={onClick}>
      <img className={classes.icon} src={svg} alt="edit" />
    </div>
  );
};

export default Edit;
