import './ShoppingList.css'
import { useState } from 'react';

function ShoppingList() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [quantity, setQuantity] = useState(0);

  function addItem() {
    if (text === '') {
    } else {
      let value = quantity + 1;
      let copy = [...list];

      setQuantity(value);
      copy.push(text);
      setList(copy);
    }
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      <div className="form">
        <label>Add an item: </label>
        <br />
        <input onChange={handleChange} type="text" placeholder="Add item" />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="number-items">
        <p>Number of items: {quantity}</p>
      </div>
      <div className="list">
        <ul>
          {list.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;