import React, { useState } from "react";
import AddForm from "../AddForm/AddForm";
import AddButton from "../AddButton/AddButton";
import classes from "./AddEvent.module.css";

const AddEvent = () => {
  const [active, setActive] = useState(false);

  const close = () => {
    setActive(false);
  };

  const onButtonClick = e => {
    e.preventDefault();
    setActive(true);
  };

  return (
    <div className={classes.addEvent}>
      <AddButton onClick={onButtonClick} />
      <AddForm active={active} close={close} />
    </div>
  );
};

export default AddEvent;
