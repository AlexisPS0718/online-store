import './CouponForm.css'
import { useState } from 'react';

function CouponForm() {
  const [coupon, setCoupon] = useState({
    code: '',
    discount: 0
  });
  const [allCoupons, setAllCoupons] = useState([]);

  function saveCoupon() {
    let copy = [...allCoupons];

    copy.push(coupon);
    setAllCoupons(copy);
    
    console.log('Coupon saved', coupon);
  }

  function handleCoupon(e) {
    let text = e.target.value;
    let name = e.target.name;

    let copy = {...coupon};
    copy[name] = text;
    setCoupon(copy);
  }

  return (
    <div className="coupon-form">
      <div className="coupon-form-form">
        <h1>Crate a new coupon</h1>
        <div>
          <label>Code: </label>
          <input onChange={handleCoupon} type="text" name="code" placeholder="New code" />
        </div>
        <div>
          <label>Discount: </label>
          <input onChange={handleCoupon} type="number" name="discount" placeholder="Discount" />
        </div>
          <button onClick={saveCoupon}>Save coupon</button>
      </div>
      <div className="list">
        <ol>
          {allCoupons.map(coupon => <li key={coupon.code}><b>Code:</b> {coupon.code} <br /><b>Discount:</b> {coupon.discount}%</li>)}
        </ol>
      </div>
    </div>
  );
}

export default CouponForm;