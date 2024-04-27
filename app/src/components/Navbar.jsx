import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
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
          </div>
          <div>
            <input type="text" placeholder="Search" />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;