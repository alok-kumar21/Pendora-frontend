import useCartContext from "../context/CartContext";
import useFetch from "./useFetch";
const Cart = () => {
  // const { data, loading, error } = useFetch(
  //   "http://localhost:4001/api/addcart"
  // );
  const { data, loading, error } = useCartContext();

  return (
    <>
      <section className="container">
        <section className="">
          <h5 className="text-center">My Cart (0)</h5>

          <div className="row">
            {/* cart  */}

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
                  <span className="text-decoration-line-through text-secondary ms-2">
                    ₹3999
                  </span>
                  <p>50%off</p>
                  <div>
                    <span>Quantity:</span>
                    <button className="border-0 rounded-circle ms-2">-</button>
                    <button className="border-0 ms-3">1</button>
                    <button className="border-0 rounded-circle ms-3">+</button>
                  </div>
                  <div className="d-grid mt-3">
                    <button
                      // onClick={() => removeFromCart(item)}
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

            {/* price Details */}
            <div className="col-md-6  mt-5">
              <div className="px-5 py-5  card">
                <h4>Price Details</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Price (1 item)</span>
                  <span>2000</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Discount</span>
                  <span>-1000</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Delivery Charge</span>
                  <span>499</span>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                  <h4>Total Amount</h4>
                  <span>2499</span>
                </div>
                <hr />
                <p>You will save 1000 on this order</p>

                <div className="d-grid">
                  <button className="btn btn-primary rounded-0">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cart;
