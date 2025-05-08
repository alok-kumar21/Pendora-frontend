import useCartContext from "../context/CartContext";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const {
    cartItem = [], // Default to empty array
    cloading,
    cerror,
    removeFromCart,
    addToWishlist,
    updateCartItemQuantity,
  } = useCartContext();

  // Safe calculations with null checks
  const totalItems = cartItem.reduce(
    (acc, curr) => acc + (curr?.quantity || 0),
    0
  );

  const totalPrice = cartItem.reduce(
    (acc, curr) => acc + (curr?.product?.price || 0) * (curr?.quantity || 0),
    0
  );

  const totalDiscount = cartItem.reduce(
    (acc, curr) => acc + (curr?.product?.discount || 0),
    0
  );

  const deliveryCharge = 99;
  const discountAmount = totalPrice * (totalDiscount / 100);
  const finalPrice = totalPrice - discountAmount;
  const finalAmount =
    finalPrice < 500 ? finalPrice + deliveryCharge : finalPrice;
  const saveAmount = discountAmount;

  const handleQuantityChange = async (item, newQuantity) => {
    if (newQuantity < 1 || !item?._id) return;
    await updateCartItemQuantity(item._id, newQuantity);
  };

  return (
    <section className="container mt-4">
      {cloading && (
        <div className="alert alert-success text-center">Loading...</div>
      )}
      {cerror && (
        <div className="alert alert-danger text-center">
          Failed to get Cart Data
        </div>
      )}

      {cartItem.length > 0 ? (
        <>
          <h5 className="text-center">My Cart ({cartItem.length})</h5>
          <div className="row">
            {/* Cart Items - Filter out items with null product */}
            {cartItem
              .filter((item) => item?.product)
              .map((item) => (
                <div key={item._id} className="col-md-5 mb-4">
                  <div className="d-flex justify-content-between border p-3">
                    <img
                      src={item.product?.images?.[0] || ""}
                      className="img-fluid w-50 bg-light py-4"
                      alt={item.product?.name || "Product"}
                      style={{ objectFit: "contain" }}
                    />

                    <div className="me-4 py-4">
                      <h6>{item.product?.name || "Product"}</h6>
                      <div className="d-flex align-items-center">
                        <span className="h5">₹{item.product?.price || 0}</span>
                        {item.product?.discount > 0 && (
                          <span className="text-success ms-2">
                            {item.product.discount}% off
                          </span>
                        )}
                      </div>

                      {/* Quantity controls */}
                      <div className="mt-3">
                        <span>Quantity: </span>
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-circle ms-2"
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-circle"
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <div className="d-grid gap-2 mt-3">
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="btn btn-outline-danger rounded-0"
                        >
                          Remove From Cart
                        </button>
                        <button
                          className="btn btn-outline-success rounded-0"
                          onClick={() => {
                            if (item.product) {
                              addToWishlist(item.product);
                              removeFromCart(item._id);
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
              ))}

            {/* Price Details */}
            <div className="col-md-6 mt-md-0 mt-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">Price Details</h4>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>Price ({cartItem?.length - 1} items)</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Discount</span>
                    <span className="text-success">
                      -₹{saveAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
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
                  <div className="d-flex justify-content-between">
                    <h4>Total Amount</h4>
                    <span className="h5">₹{finalAmount.toFixed(2)}</span>
                  </div>
                  <hr />
                  <p className="text-success">
                    You will save ₹{saveAmount.toFixed(2)} on this order
                  </p>

                  <div className="d-grid mt-4">
                    <NavLink
                      to="/address"
                      className="btn btn-primary rounded-0 py-2"
                    >
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
          <div className="text-center mt-5 py-5">
            <i
              className="bi bi-cart-x"
              style={{ fontSize: "3rem", color: "#6c757d" }}
            ></i>
            <h4 className="mt-3">Your cart is empty</h4>
            <p className="text-muted">
              Add some products to your cart to see them here
            </p>
          </div>
        )
      )}
    </section>
  );
};

export default Cart;
