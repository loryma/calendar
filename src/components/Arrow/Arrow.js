import React from "react";
import Button from "../Button/Button";
import classes from "./Arrow.module.css";

const Arrow = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Arrow;
