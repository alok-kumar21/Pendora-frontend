

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
  
  // cart api call
  const {
    data: cartData,
    loading: cloading,
    error: cerror,
  } = useFetch("http://localhost:4001/api/cart");
  
  // wishlist api call
  const {
    data: wishlistData,
    loading: wishlistLoading,
    error: wishlistError,
  } = useFetch("http://localhost:4001/api/wishlist");

  // address api call

  const {data:address,loading:addressLoading,error:addressError} = useFetch("http://localhost:4001/api/v2/address")

  const [cartItem, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (cartData) {
      setCartItems(cartData);
    }
  }, [cartData]);

  useEffect(() => {
    if (wishlistData) {
      setWishlist(wishlistData);
    }
  }, [wishlistData]);

  async function addToCart(product) {
    try {
      // Check if product already exists in cart
      console.log(product)
      const existingItem = cartItem.find(item => item._id === product._id);
      console.log(existingItem)
      if (existingItem) {
        // If exists, update quantity
        const response = await fetch(`http://localhost:4001/api/cart/update/${existingItem._id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity: existingItem.quantity + 1 }),
        });

        if (!response.ok) {
          throw new Error("Failed to update item quantity in cart");
        }
      } else {
        // If not exists, add new item
        const response = await fetch("http://localhost:4001/api/addcart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            product: product._id, // Store reference to product
            quantity: 1 
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to add item to cart in database");
        }
      }
      
      // Refresh cart data
      const updatedCart = await fetch("http://localhost:4001/api/cart").then(res => res.json());
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }

  async function updateCartItemQuantity(cartItemId, newQuantity) {
    try {
      if (newQuantity < 1) return;
     console.log(cartItemId)
      const response = await fetch(`http://localhost:4001/api/cart/update/${cartItemId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (response.ok) {
        const updatedCart = cartItem.map(item => 
          item._id === cartItemId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCart);
      }
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
    }
  }

  async function removeFromCart(cartItemId) {
    try {
      const response = await fetch(
        `http://localhost:4001/api/cart/remove/${cartItemId}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setCartItems(cartItem.filter((item) => item._id !== cartItemId));
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  }

  async function addToWishlist(product) {
    try {
      // Check if product already exists in wishlist
      const exists = wishlist.some(item => item.product._id === product._id);
      if (exists) {
        throw new Error("Product already in wishlist");
      }

      const response = await fetch("http://localhost:4001/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: product._id }), // Store reference to product
      });
      
      if (!response.ok) {
        throw new Error("Failed to add to wishlist");
      }
      
      // Refresh wishlist data
      const updatedWishlist = await fetch("http://localhost:4001/api/wishlist").then(res => res.json());
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  }

  async function removeFromWishlist(wishlistItemId) {
    try {
      console.log(wishlistItemId)
      const response = await fetch(
        `http://localhost:4001/api/wishlist/remove/${wishlistItemId}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        setWishlist(wishlist.filter((item) => item._id !== wishlistItemId));
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  }

  async function moveToCart(wishlistItem) {
    try {
      await addToCart(wishlistItem.product);
      await removeFromWishlist(wishlistItem._id);
    } catch (error) {
      console.error("Error moving to cart:", error);
    }
  }

  return (
    <CartContext.Provider
      value={{
        product,
        loading,
        error,
        cartItem,
        cloading,
        cerror,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        wishlist,
        wishlistLoading,
        wishlistError,
        addToWishlist,
        removeFromWishlist,
        moveToCart,
        address,
        addressLoading,
        addressError
      }}
    >
      {children}
    </CartContext.Provider>
  );
}