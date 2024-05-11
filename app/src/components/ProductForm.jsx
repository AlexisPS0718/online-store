import dataService from '../services/dataService';
import './ProductForm.css'
import { useState } from 'react';
import { useEffect } from 'react';
import SimpleProduct from './SimpleProduct';

function ProductForm() {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    image: '',
    category: ''
  });
  const [allProducts, setAllProducts] = useState([]);

  useEffect(function () {
    loadCatalog();
  }, []);

  async function loadCatalog() {
    const prods = await dataService.getProducts();
    setAllProducts(prods);
  }

  function saveProduct() {
    let fixedProduct = { ...product };
    fixedProduct.price = parseFloat(fixedProduct.price);

    let copy = [...allProducts];

    copy.push(fixedProduct);
    setAllProducts(copy);

    dataService.saveProduct(fixedProduct);

    console.log("Product saved", fixedProduct);
  }

  function handleProduct(e) {
    let text = e.target.value;
    let name = e.target.name;

    let copy = {...product};
    copy[name] = text;
    setProduct(copy);
    console.log("Product changed");
  }

  return (
    <div className="product-form">
      <div className="product-form-form">
        <h1>Crate a new product</h1>
        <div>
          <label>Title: </label>
          <input onChange={handleProduct} type="text" name="title" placeholder="Product name" />
        </div>
        <div>
          <label>Price: </label>
          <input onChange={handleProduct} type="number" name="price" placeholder="Price" />
        </div>
        <div>
          <label>Image: </label>
          <input onChange={handleProduct} type="text" name="image" placeholder="Image name" />
        </div>
        <div>
          <label>Category: </label>
          <input onChange={handleProduct} type="text" name="category" placeholder="Category" />
        </div>
          <button onClick={saveProduct}>Save product</button>
      </div>
      <div className="products">
        {allProducts.map((prod) => (<SimpleProduct key={prod._id} data={prod} />))}
      </div>
    </div>
  );
}

export default ProductForm;