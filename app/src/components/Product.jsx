import './Product.css'
import { useState } from 'react';
import QuantityPicker from './QuantityPicker';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  function addCart() {
    console.log("Added to cart: " + props.data.title);
  }

  function handleQuantity(qty) {
    setQuantity(qty);
  }

  function fixPrice(price) {
    return price.toFixed(2);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />
      <h1>{props.data.title}</h1>
      <div className="prices">
        <label>Price: ${fixPrice(props.data.price)}</label>
        <br />
        <label>Total: <span>${fixPrice(props.data.price * quantity)}</span></label>
      </div>
      <QuantityPicker onChange={handleQuantity} />
      <button onClick={addCart} className="add-cart">Add to the cart <i class="fa-solid fa-cart-shopping"></i></button>
    </div>
  );
}

export default Product;