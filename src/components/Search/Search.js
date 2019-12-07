import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Input from "../Input/Input";
import SearchResults from "../SearchResults/SearchResults";

import classes from "./Search.module.css";

const Search = ({ events, setCurrentDate }) => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(true);

  const onChange = e => {
    const { value } = e.target;
    setActive(true);
    setQuery(value);
  };
  const onSearchChoice = id => {
    let date;

    if (id) {
      date = new Date(+id);
    }

    if (date) {
      setActive(false);
      setCurrentDate(date);
    }
  };
  return (
    <div className={classes.search}>
      <Input value={query} onChange={onChange} />
      <SearchResults
        active={active}
        query={query}
        onResultChoice={onSearchChoice}
      />
    </div>
  );
};

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = dispatch => ({
  setCurrentDate: date => dispatch(actions.setCurrentDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
