import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import OrderSummary from "./pages/OrderSummary";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlisting" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishList" element={<WishList />} />
            <Route
              path="/api/productdetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="/address" element={<Address />} />
            <Route path="/ordersummary" element={<OrderSummary />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
