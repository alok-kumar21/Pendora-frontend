import useCartContext from "../context/CartContext";
import { useEffect } from "react";

const WishList = () => {
  const {
    wishlist,
    wishlistLoading,
    wishlistError,
    cartItem,
    removeFromWishlist,
    moveToCart,
    alerts,
    clearCartAlerts,
    clearWishlistAlerts,
    clearItemExists,
  } = useCartContext();

  // Clear alerts
  useEffect(() => {
    return () => {
      clearCartAlerts();
      clearWishlistAlerts();
      clearItemExists();
    };
  }, []);

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 text-center">My Wishlist</h2>

          {/* Loading State */}
          {wishlistLoading && (
            <div className="text-center alert alert-info">
              Loading wishlist...
            </div>
          )}

          {/* Cart Alerts */}
          {alerts.cart.loading && (
            <div className="text-center alert alert-info">Updating cart...</div>
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

          {/* Wishlist Alerts */}
          {alerts.wishlist.loading && (
            <div className="text-center alert alert-info">
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

          {/* Item exists alert */}
          {alerts.itemExists && (
            <div className="alert alert-warning text-center">
              Item is already in your cart
            </div>
          )}

          {/* Error State */}
          {wishlistError && (
            <div className="alert alert-danger text-center">
              Failed to load wishlist. Please try again later.
            </div>
          )}

          {/* Empty State */}
          {!wishlistLoading && !wishlistError && wishlist?.length === 0 && (
            <div className="text-center py-5">
              <i
                className="bi bi-heart text-muted"
                style={{ fontSize: "3rem" }}
              ></i>
              <h4 className="mt-3">Your wishlist is empty</h4>
              <p className="text-muted">
                Save your favorite items here to purchase them later
              </p>
            </div>
          )}

          {/* Wishlist Items */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {wishlist?.map((item) => {
              const inCart = cartItem?.some(
                (cartitem) => cartitem.product._id === item.product._id
              );

              return (
                <div key={item._id} className="col">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={item.product.images}
                      className="card-img-top p-3"
                      alt={item.product.name}
                      style={{
                        height: "200px",
                        objectFit: "contain",
                        backgroundColor: "#f8f9fa",
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-center">
                        {item.product.name}
                      </h5>
                      <div className="mt-auto">
                        <div className="mb-2">
                          <div className="text-center">
                            <span className="h5 text-primary">
                              ₹{item.product.price}
                            </span>

                            <small className="ms-2 text-success">
                              {item.product.discount}% off
                            </small>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            className={`btn ${
                              inCart ? "btn-success" : "btn-primary"
                            } rounded-0`}
                            onClick={() => moveToCart(item)}
                          >
                            {inCart ? (
                              <>
                                <i className="bi bi-cart-check me-2"></i>
                                Already in Cart (Add +1)
                              </>
                            ) : (
                              <>
                                <i className="bi bi-cart-plus me-2"></i>
                                Move to Cart
                              </>
                            )}
                          </button>
                          <button
                            className="btn btn-outline-danger rounded-0"
                            onClick={() => removeFromWishlist(item._id)}
                          >
                            <i className="bi bi-trash me-2"></i>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
