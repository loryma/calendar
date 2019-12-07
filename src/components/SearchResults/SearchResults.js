import React from "react";
import { connect } from "react-redux";
import SearchItem from "../SearchItem/SearchItem";

import classes from "./SearchResults.module.css";

const SearchResults = ({ active, query, results, onResultChoice }) => {
  const regEx = new RegExp(`\\b${query}`, "i");

  const searchResultsClasses = [
    classes.searchResults,
    active ? classes.active : ""
  ].join(" ");

  const filteredEvents = query
    ? results.filter(
        event =>
          regEx.test(event.title) ||
          regEx.test(event.participants) ||
          regEx.test(event.date) ||
          regEx.test(event.description)
      )
    : [];

  const resultContent = filteredEvents.map(event => (
    <SearchItem
      key={event.id}
      title={event.title}
      date={event.date}
      onResultChoice={onResultChoice.bind(this, event.dateMs)}
    />
  ));
  return (
    resultContent.length > 0 && (
      <div className={searchResultsClasses}>{resultContent}</div>
    )
  );
};

const mapStateToProps = state => ({ results: state.events });

export default connect(mapStateToProps)(SearchResults);
