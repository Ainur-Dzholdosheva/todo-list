import React, { useState } from "react";
import NewItem from "../components/NewItem/NewItem";
import ItemList from "../components/ItemList/ItemList";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { key: 3, text: "Finish homework", completed: false },
    { key: 2, text: "Clean the house", completed: true },
    { key: 1, text: "Cook dinner", completed: false },
  ]);
  const [newItem, setNewItem] = useState("");

  function addItem() {
    if (newItem.length > 2) {
      setItems([
        {
          key: (items.length ? items[0].key : 0) + 1,
          text: newItem,
          completed: false,
        },
        ...items,
      ]);
      setNewItem("");
    }
  }

  function updateNewItem({ target }) {
    setNewItem(target.value);
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.key !== id));
  }

  function completeItem(id) {
    setItems(
      items.map((item) => {
        if (item.key === id) {
          item.completed = !item.completed;
        }

        return item;
      })
    );
  }

  return (
    <div className="App">
      <NewItem
        addItem={addItem}
        newItem={newItem}
        updateNewItem={updateNewItem}
      />
      <ItemList
        items={items}
        deleteItem={deleteItem}
        completeItem={completeItem}
      />
    </div>
  );
}

export default App;
