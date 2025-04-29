import { createContext, useContext, useState } from "react";
const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export default useCartContext;

import useFetch from "../pages/useFetch";

export function CartProvider({ children }) {
  const { data, loading, error } = useFetch(
    "http://localhost:4001/api/products"
  );
  
  function addToCart(product) {
    const [cartItem, setCartItem] = useState(product);
    console.log(cartItem);
  }

  return (
    <>
      <CartContext.Provider value={{ data, loading, error, addToCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
