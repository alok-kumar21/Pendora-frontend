import useCartContext from "../context/CartContext";

const Cart = () => {
  const { cartItem, cloading, cerror, removeFromCart } = useCartContext();

  const totalPrice = cartItem?.reduce((acc, curr) => acc + curr.price, 0);
  const totalDiscount = cartItem?.reduce((acc, curr) => acc + curr.discount, 0);
  const devliverCharge = 99;
  const discountAmount = (totalPrice * totalDiscount) / 100;
  const saveAmmount = totalPrice - discountAmount;

  return (
    <>
      <section className="container mt-4">
        {cloading && (
          <div className="alert alert-success text-center">Loading...</div>
        )}
        {cerror && (
          <div className="alert alert-Danger text-center">
            Failed to get Cart Data
          </div>
        )}
        {cartItem && (
          <section className="">
            <h5 className="text-center">My Cart ({cartItem?.length})</h5>
            {console.log(cartItem)}
            <div className="row">
              {/* cart  */}

              {cartItem?.map((item) => (
                <div key={item._id} className="col-md-5  ">
                  <div className=" d-flex justify-content-between   mt-5 border ">
                    <img
                      src={item.images}
                      className="img-fluid w-50 bg-light py-4"
                      alt=""
                    />

                    <div className=" me-4 py-4">
                      <p>{item.name}</p>
                      <span className="h5">₹{item.price}</span>
                      {/* <span className="text-decoration-line-through text-secondary ms-2">
                        ₹3999
                      </span> */}
                      <p>{item.discount}%off</p>
                      <div>
                        <span>Quantity:</span>
                        <button className="border-0 rounded-circle ms-2">
                          -
                        </button>
                        <button className="border-0 ms-3">
                          {item.quantity}
                        </button>
                        <button className="border-0 rounded-circle ms-3">
                          +
                        </button>
                      </div>
                      <div className="d-grid mt-3">
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="btn btn-secondary rounded-0"
                        >
                          Remove From Cart
                        </button>
                        <button className="btn btn-success rounded-0 mt-3">
                          Move to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* price Details */}
              {cartItem?.length > 0 && (
                <div className="col-md-6  mt-5">
                  <div className="px-5 py-5  card">
                    <h4>Price Details</h4>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span>Price ({cartItem?.length} item)</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Discount</span>
                      <span>₹{saveAmmount.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>After Discount</span>
                      <span>₹{discountAmount.toFixed(2)}</span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>Delivery Charge</span>
                      <span>
                        {totalPrice > 500
                          ? "Free Shipping"
                          : `₹${devliverCharge}`}
                      </span>
                    </div>

                    <hr />
                    <div className="d-flex justify-content-between">
                      <h4>Total Amount</h4>
                      <span>
                        ₹
                        {totalPrice < 500
                          ? discountAmount + devliverCharge
                          : discountAmount}
                      </span>
                    </div>
                    <hr />
                    <p>You will save ₹{saveAmmount.toFixed(2)} on this order</p>

                    <div className="d-grid">
                      <button className="btn btn-primary rounded-0">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Cart;
