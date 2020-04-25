import React from "react";
import Item from "./Item/Item";
import "./ItemList.css";

function ItemList({ items, deleteItem, completeItem }) {
  const output = items.map((item) => (
    <Item
      key={item.key}
      id={item.key}
      completed={item.completed}
      deleteItem={deleteItem}
      completeItem={completeItem}
    >
      {item.text}
    </Item>
  ));

  return <ul className="ItemList">{output}</ul>;
}

export default ItemList;
