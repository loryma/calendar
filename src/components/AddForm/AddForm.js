import React, { useState } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";
import validateShortDate from "../../utilities/validateShortDate";
import textToShortDate from "../../utilities/textToShortDate";
import dateToText from "../../utilities/dateToText";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Close from "../Close/Close";

import classes from "./AddForm.module.css";

const AddForm = ({ createEvent, active, close }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const error = validateShortDate(value);

    if (error) {
      setError(error);
    } else {
      const dateMs = textToShortDate(value);
      if (dateMs) {
        const dateObj = new Date(+dateMs);
        const date = dateToText(dateObj);
        createEvent({
          title: value,
          date,
          dateMs,
          participants: "",
          description: ""
        });
      }
    }
  };

  const addFormClasses = [classes.addForm, active ? classes.active : ""].join(
    " "
  );

  return (
    <form className={addFormClasses} onSubmit={onSubmit}>
      <Close onClick={close}>x</Close>
      <Input
        value={value}
        onChange={onChange}
        placeholder="December 11, 20:00, birthday"
        error={error}
      />
      <Button type="submit">Create</Button>
    </form>
  );
};

const mapDispatchToPtops = dispatch => ({
  createEvent: event => dispatch(actions.createEvent(event))
});
export default connect(undefined, mapDispatchToPtops)(AddForm);
