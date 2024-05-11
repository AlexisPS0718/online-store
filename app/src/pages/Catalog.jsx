import "./Catalog.css";
import Product from "./../components/Product.jsx";
import dataService from "../services/dataService.js";
import { useEffect, useState } from "react";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    loadCatalog();
    loadCategories();
  }, []);

  async function loadCatalog() {
    const prods = await dataService.getProducts();
    setProducts(prods);
    setVisibleProducts(prods);
  }

  async function loadCategories() {
    const cats = await dataService.getCategories();
    setCategories(cats);
  }

  function filter(cat) {
    let prods = products.filter((prod) => prod.category === cat);
    setVisibleProducts(prods);
  }

  function showAll() {
    setVisibleProducts(products);
  }

  function searchByText(e) {
    let text = e.target.value;
    let prods = products.filter((prod) =>
      prod.title.toLowerCase().includes(text.toLowerCase())
    );
    setVisibleProducts(prods);
  }

  return (
    <div className="catalog">
      <div className="container">
        <h2>Our Catalog</h2>
        <div className="categories">
          {categories.map((cat) => (<button onClick={() => filter(cat)} key={cat}>{cat}</button>))}
          <button onClick={showAll}>All</button>
          <input onChange={searchByText} type="search" placeholder="Search" />
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="products">
          {visibleProducts.map((prod) => (<Product key={prod._id} data={prod} />))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;