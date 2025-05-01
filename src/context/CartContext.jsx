// import { createContext, useContext, useState } from "react";
// const CartContext = createContext();

// const useCartContext = () => useContext(CartContext);

// export default useCartContext;

// import useFetch from "../pages/useFetch";

// export function CartProvider({ children }) {
//   const { data, loading, error } = useFetch(
//     "http://localhost:4001/api/products"
//   );

//   const { data } = useFetch("http://localhost:4001/api/cart");
//   const [cartItem, setCartItem] = useState(cartdata);
//   console.log(cartdata);
//   async function addToCart(product) {
//     try {
//       const reponse = await fetch("http://localhost:4001/api/addcart", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ product }),
//       });
//       if (!reponse.ok) {
//         throw new Error("faild to add cart in db");
//       }
//       {
//         alert("Product Added Successfully.");
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }
//   async function removeFromCart(productId) {
//     try {
//       const response = await fetch(
//         `http://localhost:4001/api/cart/remove/${productId}`,
//         {
//           method: "DELETE",
//         }
//       );
//       if (response.ok) {
//         alert("Data Deleted Successfully");
//         const updatedCart = cartItem?.filter((item) => item_id !== productId);
//         setCartItem(updatedCart);
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }

//   return (
//     <>
//       <CartContext.Provider
//         value={{ data, loading, error, addToCart, removeFromCart, cartItem }}
//       >
//         {children}
//       </CartContext.Provider>
//     </>
//   );
// }

import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../pages/useFetch";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export default useCartContext;

export function CartProvider({ children }) {
  // all product api call
  const {
    data: product,
    loading,
    error,
  } = useFetch("http://localhost:4001/api/products");
  //cart api call
  const { data: cartData } = useFetch("http://localhost:4001/api/cart");

  const [cartItem, setCartItem] = useState(cartData);

  // add to cart
  async function addToCart(product) {
    try {
      const response = await fetch("http://localhost:4001/api/addcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart in database");
      }
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  }
  // remove from cart
  async function removeFromCart(productId) {
    try {
      const response = await fetch(
        `http://localhost:4001/api/cart/remove/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Product Removed Successfully.");
        const updatedCart = cartItem?.filter((item) => item._id !== productId);

        setCartItem(updatedCart);
      }
    } catch (error) {
      console.log("Error removing from cart:", error);
    }
  }

  return (
    <CartContext.Provider
      value={{ product, loading, error, cartItem, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
