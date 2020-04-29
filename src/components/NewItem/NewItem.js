import React from "react";
import classes from "./NewItem.module.css";
import Button from "../UI/Button/Button";

export default () => {
  return (
    <div className={classes.NewItem}>
      <input type="text" />
      <Button green>Add</Button>
    </div>
  );
};
