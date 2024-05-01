import { useState } from 'react';
import DataContext from './DataContext';

function GlobalProvider(props) {
  const [user] = useState({ id: '1', name: 'Alexis' });
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    console.log('Product added [global]');
    const copy = [...cart];

    copy.push(product);
    setCart(copy);
  }

  function removeProduct() {
    
  }

  function clearCart() {
    
  }

  return (
    <DataContext.Provider value={{
      user: user,
      cart: cart,
      addProduct: addProduct,
      removeProduct: removeProduct,
      clearCart: clearCart
    }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;
