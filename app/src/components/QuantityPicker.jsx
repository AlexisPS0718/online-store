import './QuantityPicker.css'
import { useState } from 'react'

function QuantityPicker() {
  const [quantity, setQuantity] = useState(10);

  function increase() {
    if (quantity >= 99) {
    } else {
      let value = quantity + 1
      setQuantity(value);
    }
  }

  function decrease() {
    if (quantity <= 1) {
    } else {
      let value = quantity - 1
      setQuantity(value);
    }
  }

  return (
    <div className="qt-picker">
      <button onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;