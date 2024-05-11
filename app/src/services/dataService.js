import axios from 'axios';

class DataService {
  serverURL = "http://127.0.0.1:5000/api";
  async getProducts() {
    let res = await axios.get(this.serverURL + "/products");
    return res.data;
  }

  async getCategories() {
    let res = await axios.get(this.serverURL + "/categories");
    return res.data;
  }

  async saveProduct(product) {
    let res = await axios.post(this.serverURL + "/products", product);
    return res.data;
  }

  async getCoupons() {
    let res = await axios.get(this.serverURL + "/coupons");
    return res.data;
  }

  async saveCoupon(coupon) {
    let res = await axios.post(this.serverURL + "/coupons", coupon);
    return res.data;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new DataService();