import './CouponForm.css'
import dataService from '../services/dataService';
import { useState, useEffect } from 'react';
import SimpleCoupon from './SimpleCoupon';

function CouponForm() {
  const [coupon, setCoupon] = useState({
    code: '',
    discount: 0
  });
  const [allCoupons, setAllCoupons] = useState([]);

  useEffect(function () {
    loadCoupons();
  }, []);

  async function loadCoupons() {
    const coupons = await dataService.getCoupons();
    setAllCoupons(coupons);
  }

  function saveCoupon() {
    let copy = [...allCoupons];

    copy.push(coupon);
    setAllCoupons(copy);

    dataService.saveCoupon(coupon);

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
      <div className="coupons">
        {allCoupons.map((coupon) => (<SimpleCoupon key={coupon._id} data={coupon} />))}
      </div>
    </div>
  );
}

export default CouponForm;