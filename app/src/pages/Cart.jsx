import './Cart.css'
import DataContext from '../context/DataContext';
import { useContext } from 'react';

function Cart() {
  let {cart, clearCart} = useContext(DataContext);

  function fixPrice(price) {
    return price.toFixed(2);
  }

  function getNumberOfProducts() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }

    return total;
  }

  function getTotalPrice() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity * cart[i].price;
    }

    return total;
  }

  function clearAll() {
    clearCart();
  }

  return (
    <div className="cart">
      <h2>Shopping cart</h2>
      <h4>Total quantity of products: {getNumberOfProducts()}</h4>
      <div className="container">
        <div className="products">
          {cart.map(prod =>
            <div className="product" key={prod.title}>
              <img src={"/images/" + prod.image} alt={prod.title} />
              <div className="product-info">
                <h3>{prod.title}</h3>
                <p>Quantity: {prod.quantity}</p>
                <p>Price: ${fixPrice(prod.price)}</p>
                <p>Total: <span className="txtRed">${fixPrice(prod.price * prod.quantity)}</span></p>
              </div>
              <div>
                <button><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>)}
        </div>
        <div className="total">
          <b>Total: </b>
          <p>${fixPrice(getTotalPrice())}</p>
          <button>Pay now</button>
          <button onClick={clearAll}>Clear all</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;