import React from "react";
import classes from "./Items.module.css";

export default ({ items }) => {
  const itemsOutput = Object.keys(items).map((key) => {
    return <li>{items[key].text}</li>;
  });
  return (
    <div className={classes.Items}>
      <ul>{itemsOutput}</ul>
    </div>
  );
};
