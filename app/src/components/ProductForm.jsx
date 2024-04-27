import './ProductForm.css'
import { useState } from 'react';

function ProductForm() {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    image: '',
    category: ''
  });
  const [allProducts, setAllProducts] = useState([]);

  function saveProduct() {
    let copy = [...allProducts];

    copy.push(product);
    setAllProducts(copy);
    
    console.log('Product saved', product);
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
      <div className="list">
        <ol>
          {allProducts.map(product => <li key={product.title}><b>Title:</b> {product.title} <br /><b>Price:</b> ${product.price} <br /><b>Image:</b> {product.image} <br /><b>Category:</b> {product.category}</li>)}
        </ol>
      </div>
    </div>
  );
}

export default ProductForm;