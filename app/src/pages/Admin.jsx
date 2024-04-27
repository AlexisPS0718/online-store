import './Admin.css'
import ProductForm from './../components/ProductForm';
import CouponForm from './../components/CouponForm';

function Admin() {
  return (
    <div className="admin">
      <div className="forms">
        <ProductForm />
        <CouponForm />
      </div>
    </div>
  );
}

export default Admin;