import React from "react";
import "./Item.css";

function Item({ id, completed, children, deleteItem, completeItem }) {
  const className = completed ? "completed" : null;

  return (
    <div className="Item">
      <li className={className}>
        <span onClick={() => completeItem(id)}>{children}</span>
        <button onClick={() => deleteItem(id)}>x</button>
      </li>
    </div>
  );
}

export default Item;
