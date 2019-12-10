import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Input from "../Input/Input";
import SearchResults from "../SearchResults/SearchResults";

import classes from "./Search.module.css";

const Search = ({ setCurrentDate }) => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(true);
  const [focusedEvent, setFocusedEvent] = useState(null);

  useEffect(() => {
    if (focusedEvent) {
      const el = document.querySelector(`#event_${focusedEvent}`);
      el.click();
      el.focus();
    }
  }, [focusedEvent]);

  const onChange = e => {
    const { value } = e.target;
    setActive(true);
    setQuery(value);
  };
  const onSearchChoice = dateMs => {
    if (dateMs) {
      const eventDate = new Date(+dateMs);
      const date = new Date(
        eventDate.getFullYear(),
        eventDate.getMonth(),
        eventDate.getDate()
      );
      setCurrentDate(new Date(+date));
      setActive(false);

      setFocusedEvent(+eventDate);
    }
  };
  return (
    <div className={classes.search}>
      <Input
        value={query}
        onChange={onChange}
        placeholder="Event, date or participants"
      />
      <SearchResults
        active={active}
        query={query}
        onResultChoice={onSearchChoice}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentDate: date => dispatch(actions.setCurrentDate(date))
});

export default connect(undefined, mapDispatchToProps)(Search);
