import './Product.css'
import QuantityPicker from './QuantityPicker';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Product(props) {
  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />
      <h1>{props.data.title}</h1>
      <div className="prices">
        <label>Price: ${props.data.price}</label>
        <br />
        <label>Total: <span>${props.data.price}</span></label>
      </div>
      <QuantityPicker />
      <button className="add-cart">Add to the cart <i class="fa-solid fa-cart-shopping"></i></button>
    </div>
  );
}

export default Product;