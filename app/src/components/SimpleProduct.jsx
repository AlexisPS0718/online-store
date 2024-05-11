import './SimpleProduct.css'

function SimpleProduct(props) {
  function fixPrice(price) {
    return price.toFixed(2);
  }

  return (
    <div className="simple-product">
      <img src={"/images/" + props.data.image} alt="" />
      <div className="info">
        <h1>{props.data.title}</h1>
        <p>Category: {props.data.category}</p>
        <div className="prices">
          <label>Price: ${fixPrice(props.data.price)}</label>
        </div>
      </div>
    </div>
  );
}

export default SimpleProduct;