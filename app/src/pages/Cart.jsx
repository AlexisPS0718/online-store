import './Cart.css'
import DataContext from '../context/DataContext';
import { useContext } from 'react';

function Cart() {
  let cart = useContext(DataContext).cart;

  return (
    <div className="cart">
      <h2>Shopping cart</h2>
      {cart.map(prod =>
        <div className="products" key={prod.title}>
          <img src={"/images/" + prod.image} alt={prod.title} />
          <div className="product-info">
            <h3>{prod.title}</h3>
            <p>Quantity: {prod.quantity}</p>
            <p>Price: ${prod.price}</p>
            <p>Total: <span className="txtRed">${prod.price * prod.quantity}</span></p>
          </div>
          <div>
            <button><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>)}
    </div>
  );
}

export default Cart;