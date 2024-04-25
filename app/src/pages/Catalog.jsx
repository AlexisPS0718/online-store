import './Catalog.css'
import Product from './../components/Product.jsx';

function Catalog() {
  const products = [
    {
      _id: 1,
      title: "Laptop",
      price: 499.99,
      image: "Laptop.png",
      category: "PC"
    },
    {
      _id: 2,
      title: "Mouse",
      price: 79.99,
      image: "Mouse.webp",
      category: "Accessories"
    },
    {
      _id: 3,
      title: "Keyboard",
      price: 119.99,
      image: "Keyboard.webp",
      category: "Accessories"
    },
    {
      _id: 4,
      title: "Headphones",
      price: 129.99,
      image: "Headphones.png",
      category: "Sound"
    },
    {
      _id: 5,
      title: "Speakers",
      price: 299.99,
      image: "Speakers.webp",
      category: "Sound"
    },
    {
      _id: 6,
      title: "Monitor",
      price: 399.99,
      image: "Monitor.webp",
      category: "Display"
    },
    {
      _id: 7,
      title: "Mousepad",
      price: 29.99,
      image: "Mousepad.webp",
      category: "Accessories"
    }
  ]

  return (
    <div className="catalog">
      <div className="container">
        <h2>Our Catalog</h2>
        <div className="products">
          {products.map(prod => <Product key={prod._id} data={prod} />)}
        </div>
      </div>
    </div>
  );
}

export default Catalog;