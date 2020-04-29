import React from "react";
import classes from "./Item.module.css";
import Button from "../../UI/Button/Button";

export default ({ item, deleteItem }) => {
  return (
    <li className={classes.Item}>
      <span className={classes.text}>{item.text}</span>
      <Button click={deleteItem}>x</Button>
    </li>
  );
};
