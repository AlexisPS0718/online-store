import { createContext } from "react";

const DataContext = createContext({
  user: {},
  cart: [],
  addProduct: () => { },
  removeProduct: () => { },
  clearCart: () => { }
});

export default DataContext;