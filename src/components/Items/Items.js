import React from "react";
import classes from "./Items.module.css";
import Item from "./Item/Item";

export default ({ items, deleteItem, toggleCompleteItem }) => {
  const itemsOutput = Object.keys(items).map((id) => {
    return (
      <Item
        item={items[id]}
        deleteItem={() => deleteItem(id)}
        toggleCompleteItem={() => toggleCompleteItem(id)}
      />
    );
  });
  return (
    <div className={classes.Items}>
      <ul>{itemsOutput}</ul>
    </div>
  );
};
