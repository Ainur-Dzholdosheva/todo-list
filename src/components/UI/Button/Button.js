import React from "react";
import classes from "./Button.module.css";

export default ({ children }) => {
  return <button className={classes.Button}>{children}</button>;
};
