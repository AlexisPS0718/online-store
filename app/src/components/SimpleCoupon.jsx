import './SimpleCoupon.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

function SimpleCoupon(props) {
  return (
    <div className="simple-coupon">
      <i class="fa-solid fa-ticket"/>
      <div className="info">
        <h1>{props.data.code}</h1>
        <p>Discount: {props.data.discount}%</p>
      </div>
    </div>
  );
}

export default SimpleCoupon;