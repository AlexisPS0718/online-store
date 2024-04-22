import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="flex-space-between">
          <nav>
            <a href="#top">
              <h1><b>ONLINE</b> STORE</h1>
            </a>
            <a className="nav-link" href="#top">Home</a>
          </nav>
          <nav>
            <input type="text" placeholder="Search"/>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;