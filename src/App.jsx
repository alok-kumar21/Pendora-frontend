import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";

import CartContext from "./context/CartContext";
import useFetch from "./pages/useFetch";
import { useEffect, useState } from "react";

function App() {
  const { data, loading, error } = useFetch(
    "http://localhost:4001/api/products"
  );

  // Initialize cart from localStorage or empty array
  const [cartItems, setCartItems] = useState([]);

  // save cart to localstorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId));
  };

  return (
    <>
      <CartContext.Provider
        value={{ productData: data, addToCart, cartItems, removeFromCart }}
      >
        <Router>
          <Navbar />

          {/* <WishList /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlisting" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />{" "}
            <Route path="/wishList" element={<WishList />} />
            <Route
              path="/api/productdetails/:productId"
              element={<ProductDetails />}
            />
          </Routes>
        </Router>
      </CartContext.Provider>
    </>
  );
}

export default App;
