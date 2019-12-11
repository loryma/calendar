import React, { useState } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";
import validateShortDate from "../../utilities/validateShortDate";
import textToShortDate from "../../utilities/textToShortDate";
import dateToText from "../../utilities/dateToText";
import textToTitle from "../../utilities/textToTitle";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Close from "../Close/Close";
import PopupTriangle from "../PopupTriangle/PopupTriangle";

import classes from "./AddForm.module.css";

const AddForm = ({ createEvent, events, active, close }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);

  const onChange = e => {
    const { value } = e.target;
    setValue(value);

    touched && validate(value);
  };

  const validate = value => {
    let error = false;

    error = validateShortDate(value);

    if (!error) {
      const title = textToTitle(value);
      if (!title.trim()) {
        error = "Title is requered";
        setError(error);
      }
      const dateMs = textToShortDate(value);
      const exist = events.find(el => el.dateMs === dateMs);

      if (exist) {
        error = "Event for the this date already exist";
      }
    }

    if (error) {
      setError(error);
    } else {
      setError(false);
    }
    return error;
  };

  const onSubmit = e => {
    e.preventDefault();
    setTouched(true);
    const error = validate(value);
    if (error) {
      return;
    }

    const dateMs = textToShortDate(value);
    if (dateMs) {
      const dateObj = new Date(+dateMs);
      const date = dateToText(dateObj);
      const title = textToTitle(value);
      createEvent({
        title,
        date,
        dateMs,
        participants: "",
        description: ""
      });
      setValue("");
      close();
    }
  };

  const addFormClasses = [classes.addForm, active ? classes.active : ""].join(
    " "
  );

  return (
    <form className={addFormClasses} onSubmit={onSubmit}>
      <PopupTriangle className="addEventTriangle" />
      <Close onClick={close}>x</Close>
      <div className={classes.inputWrapper}>
        <Input
          value={value}
          onChange={onChange}
          placeholder="December 11, 20:00, birthday"
          error={error}
        />
      </div>
      {error && touched && <div className={classes.error}>{error}</div>}
      <Button type="submit">Create</Button>
    </form>
  );
};

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToPtops = dispatch => ({
  createEvent: event => dispatch(actions.createEvent(event))
});
export default connect(mapStateToProps, mapDispatchToPtops)(AddForm);
