import './QuantityPicker.css'
import { useState } from 'react'

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    if (quantity >= 99) {
    } else {
      let value = quantity + 1
      setQuantity(value);
      props.onChange(value);
    }
  }

  function decrease() {
    if (quantity <= 1) {
    } else {
      let value = quantity - 1
      setQuantity(value);
      props.onChange(value);
    }
  }

  return (
    <div className="qt-picker">
      <button disabled={quantity === 1} onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button disabled={quantity === 99} onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;