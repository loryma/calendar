import React, { useState } from "react";
import AddForm from "../AddForm/AddForm";
import AddButton from "../AddButton/AddButton";
import Background from "../Background/Background";
import classes from "./AddEvent.module.css";

const AddEvent = () => {
  const [active, setActive] = useState(false);
  const timeNow = new Date();
  const date = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate());

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

      {active && (
        <>
          <Background onClose={close} />
          <AddForm dateMs={date} active={active} onClose={close} />
        </>
      )}
    </div>
  );
};

export default AddEvent;
