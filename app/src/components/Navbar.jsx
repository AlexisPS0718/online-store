import { useContext } from 'react';
import DataContext from './../context/DataContext';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  let user = useContext(DataContext).user;
  let cart = useContext(DataContext).cart;

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
            <label>{cart.length}</label>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;