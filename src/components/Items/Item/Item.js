import React from "react";
import classes from "./Item.module.css";

export default ({ item, itemsOutput }) => {
  return (
    <li className={classes.Item}>
      {itemsOutput}
      <span className={classes.text}>{item.text}</span>
    </li>
  );
};
