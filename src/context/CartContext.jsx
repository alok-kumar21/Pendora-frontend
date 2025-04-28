import { createContext, useContext } from "react";
const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export default useCartContext;

import useFetch from "../pages/useFetch";
const { data, loading, error } = useFetch("http://localhost:4001/api/products");

export function CartProvider({ children }) {
  return (
    <>
      <CartContext.Provider value={{ data, loading, error }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
