import React from "react";
import classes from "./Items.module.css";
import Item from "./Item/Item";

export default ({ items }) => {
  const itemsOutput = Object.keys(items).map((key) => {
    return <Item item={items[key]} />;
  });
  return (
    <div className={classes.Items}>
      <ul>{itemsOutput}</ul>
    </div>
  );
};