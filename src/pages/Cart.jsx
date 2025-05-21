import useCartContext from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const {
    cartItem = [],
    cloading,
    cerror,
    removeFromCart,
    updateCartItemQuantity,
    moveToWishlist,
    totalPrice,
    deliveryCharge,
    finalAmount,
    saveAmount,
    finalPrice,
    alerts,
    clearCartAlerts,
    clearWishlistAlerts,
  } = useCartContext();

  // Clear alerts when component unmounts
  useEffect(() => {
    return () => {
      clearCartAlerts();
      clearWishlistAlerts();
    };
  }, []);

  const handleQuantityChange = async (item, newQuantity) => {
    if (newQuantity < 1 || !item?._id) return;
    await updateCartItemQuantity(item._id, newQuantity);
  };

  return (
    <section className="container my-4">
      {/* Alert Messages */}
      <div className="row">
        <div className="col-12">
          {cloading && (
            <div className="alert alert-info text-center">Loading cart...</div>
          )}

          {cerror && (
            <div className="alert alert-danger text-center">
              Failed to load cart: {cerror.message}
            </div>
          )}

          {alerts.cart.loading && (
            <div className="alert alert-info text-center">Updating cart...</div>
          )}
          {alerts.cart.error && (
            <div className="alert alert-danger text-center">
              {alerts.cart.error}
            </div>
          )}
          {alerts.cart.success && (
            <div className="alert alert-success text-center">
              {alerts.cart.success}
            </div>
          )}

          {alerts.wishlist.loading && (
            <div className="alert alert-info text-center">
              Updating wishlist...
            </div>
          )}
          {alerts.wishlist.error && (
            <div className="alert alert-danger text-center">
              {alerts.wishlist.error}
            </div>
          )}
          {alerts.wishlist.success && (
            <div className="alert alert-success text-center">
              {alerts.wishlist.success}
            </div>
          )}
        </div>
      </div>

      {cartItem.length > 0 ? (
        <>
          <div className="row mb-4">
            <div className="col-12">
              <h4 className="text-center">My Cart ({cartItem.length})</h4>
            </div>
          </div>

          <div className="row">
            {/* Cart Items Column - Full width on mobile, 7 columns on md+ */}
            <div className="col-lg-7 col-md-12 mb-4">
              {cartItem
                .filter((item) => item?.product)
                .map((item) => (
                  <div key={item._id} className="card mb-3">
                    <div className="row g-0">
                      {/* Product Image - Full width on xs, 4 columns on sm+ */}
                      <div className="col-md-4 col-12">
                        <img
                          src={item.product?.images?.[0] || ""}
                          className="img-fluid p-3 bg-light"
                          alt={item.product?.name || "Product"}
                          style={{
                            objectFit: "contain",
                            height: "200px",
                            width: "100%",
                          }}
                        />
                      </div>

                      {/* Product Details - Full width on xs, 8 columns on sm+ */}
                      <div className="col-md-8 col-12">
                        <div className="card-body">
                          <h5 className="card-title">
                            {item.product?.name || "Product"}
                          </h5>
                          <div className="d-flex align-items-center mb-2">
                            <span className="h5">
                              ₹{item.product?.price || 0}
                            </span>
                            {item.product?.discount > 0 && (
                              <span className="text-success ms-2">
                                {item.product.discount}% off
                              </span>
                            )}
                          </div>

                          {/* Quantity controls */}
                          <div className="mb-3">
                            <span className="me-2">Quantity:</span>
                            <div className="btn-group" role="group">
                              <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() =>
                                  handleQuantityChange(item, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <button className="btn btn-outline-secondary btn-sm disabled">
                                {item.quantity}
                              </button>
                              <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() =>
                                  handleQuantityChange(item, item.quantity + 1)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="d-grid gap-2 d-md-flex">
                            <button
                              onClick={() => removeFromCart(item._id)}
                              className="btn btn-danger me-md-2 mb-2 mb-md-0"
                            >
                              Remove
                            </button>
                            <button
                              className="btn btn-outline-success"
                              onClick={() => {
                                if (item.product) {
                                  moveToWishlist(item);
                                }
                              }}
                              disabled={!item.product}
                            >
                              Move to Wishlist
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Price Details Column - Full width on mobile, 5 columns on lg+ */}
            <div className="col-lg-5 col-md-12">
              <div
                className="card shadow-sm sticky-top"
                style={{ top: "20px" }}
              >
                <div className="card-body">
                  <h4 className="card-title mb-4">Price Details</h4>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>Price ({cartItem.length} items)</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Discount</span>
                    <span className="text-success">
                      -₹{saveAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Delivery Charge</span>
                    <span>
                      {finalPrice >= 500 ? (
                        <span className="text-success">Free Shipping</span>
                      ) : (
                        `₹${deliveryCharge}`
                      )}
                    </span>
                  </div>

                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <h5>Total Amount</h5>
                    <span className="h5">
                      ₹{Math.abs(finalAmount.toFixed(2))}
                    </span>
                  </div>
                  <hr />
                  <p className="text-success mb-4">
                    You will save ₹{saveAmount.toFixed(2)} on this order
                  </p>

                  <div className="d-grid">
                    <NavLink to="/address" className="btn btn-primary py-2">
                      Place Order
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        !cloading && (
          <div className="text-center my-5 py-5">
            <i
              className="bi bi-cart-x"
              style={{ fontSize: "3rem", color: "#6c757d" }}
            ></i>
            <h4 className="mt-3">Your cart is empty</h4>
            <p className="text-muted">
              Add some products to your cart to see them here
            </p>
            <NavLink to="/productlisting" className="btn btn-primary mt-3">
              Continue Shopping
            </NavLink>
          </div>
        )
      )}
    </section>
  );
};

export default Cart;
