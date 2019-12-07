import React from "react";
import classes from "./SearchItem.module.css";

const SearchItem = ({ title, date, onResultChoice }) => {
  return (
    <div className={classes.searchItem} onClick={onResultChoice}>
      <p className={classes.title}>{title}</p>
      <p className={classes.date}>{date}</p>
    </div>
  );
};

export default SearchItem;
