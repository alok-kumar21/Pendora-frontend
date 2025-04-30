import { createContext, useContext, useState } from "react";
const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export default useCartContext;

import useFetch from "../pages/useFetch";

export function CartProvider({ children }) {
  const { data, loading, error } = useFetch(
    "http://localhost:4001/api/products"
  );

  async function addToCart(product) {
    try {
      const reponse = await fetch("http://localhost:4001/api/addcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product }),
      });
      if (!reponse.ok) {
        throw new Error("faild to add cart in db");
      }
      {
        alert("Product Added Successfully.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }
  async function removeFromCart(productId) {
    try {
      const response = await fetch(
        `http://localhost:4001/api/cart/remove/${productId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Data Deleted Successfully");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

 

  return (
    <>
      <CartContext.Provider
        value={{ data, loading, error, addToCart, removeFromCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
