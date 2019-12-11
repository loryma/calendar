import React from "react";
import Button from "../Button/Button";

const Arrow = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Arrow;
