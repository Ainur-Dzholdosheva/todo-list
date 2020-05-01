import React from "react";
import classes from "./NewItem.module.css";
import Button from "../UI/Button/Button";

export default ({ addItem }) => {
  function addButtonClicked({ target }) {
    const input = target.previousSibling;
    addItem(input.value);
    input.value = "";
    input.focus();
  }
  function onKeyDown({ key, target }) {
    if (key === "Enter") {
      addItem(target.value);
      target.value = "";
    }
  }
  return (
    <div className={classes.NewItem}>
      <input type="text" onKeyDown={onKeyDown} />
      <Button click={addButtonClicked} green>
        Add
      </Button>
    </div>
  );
};
