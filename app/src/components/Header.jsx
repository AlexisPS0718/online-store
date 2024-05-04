import './Header.css'
import Catalog from './../pages/Catalog';

function Header() {
  return (
    <div>
      <div className="header">
        <div className="flex">
          <h2>Welcome to our online store</h2>
          <img src="/images/PC.png" alt="All-In-One PC" />
        </div>
      </div>
      <Catalog />
    </div>
  );
}

export default Header;