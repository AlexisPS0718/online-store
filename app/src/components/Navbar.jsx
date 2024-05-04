import { useContext } from 'react';
import DataContext from './../context/DataContext';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  let {user, cart} = useContext(DataContext);
  /* let cart = useContext(DataContext).cart; */

  function getNumberOfProducts() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }

    return total;
  }

  return (
    <div className="navbar">
      <div className="container">
        <nav className="flex-space-between">
          <div className="links">
            <Link to="/">
              <h1><b>ONLINE</b> STORE</h1>
            </Link>
            <Link className="nav-link" to="/about">About us</Link>
            <Link className="nav-link" to="/catalog">Catalog</Link>
            <Link className="nav-link" to="/list">Shopping list</Link>
            <Link className="nav-link" to="/admin">Admin</Link>
            <Link className="nav-link" to="/contact">Contact us</Link>
          </div>
          <div className="user-cart">
            <button>{user.name}</button>
            <Link className="link" to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
            <label>{getNumberOfProducts()}</label>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;