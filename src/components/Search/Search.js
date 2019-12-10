import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Input from "../Input/Input";
import SearchResults from "../SearchResults/SearchResults";

import classes from "./Search.module.css";

const Search = ({ setCurrentDate }) => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(true);

  const onChange = e => {
    const { value } = e.target;
    setActive(true);
    setQuery(value);
  };
  const onSearchChoice = dateMs => {
    if (dateMs) {
      setActive(false);

      setCurrentDate(new Date(+dateMs));
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
