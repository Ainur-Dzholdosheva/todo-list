import React from 'react';
import './NewItem.css';

function NewItem({ addItem, updateNewItem, newItem }) {
  return (
    <div className="NewItem">
      <input type="text" onChange={updateNewItem} value={newItem} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default NewItem;