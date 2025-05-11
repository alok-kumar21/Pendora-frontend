import { useState } from "react";
import useCartContext from "../context/CartContext";

const OrderSummary = () => {
  const { cartItem, address, selectedAddress } = useCartContext();
  const addressDetails = address?.find(
    (address) => address._id === selectedAddress
  );

  return (
    <>
      <section className="container">
        <div>
          <h5 className="m-4 text-center">Order Summary</h5>
        </div>
        <section className="row">
          <div className="col-md-6 mt-4">
            {addressDetails && (
              <div className="card">
                <div className="card-header">
                  <h5>Delivery Address</h5>
                </div>
                <div className="card-body text-secondary">
                  <h5>{addressDetails.name}</h5>
                  <p>
                    <strong>Address:</strong> {addressDetails.address}{" "}
                  </p>
                  <p>
                    <strong>city:</strong> {addressDetails.city}
                  </p>
                  <p>
                    <strong>State:</strong> {addressDetails.state}
                  </p>
                  <p>
                    <strong>Mobile Number:</strong>{" "}
                    {addressDetails.mobilenumber}
                  </p>
                  <p>
                    <strong>Pincode:</strong> {addressDetails.pincode}
                  </p>
                  <p>
                    <strong>Landmark:</strong> {addressDetails.landmark}
                  </p>
                </div>
              </div>
            )}
            <div className="card mt-4">
              <div className="card-header">
                <h5>Order Products</h5>
              </div>

              <div className="list-group">
                <div className="list-group-item">
                  {cartItem?.map((item) => (
                    <div key={item._id} className="row">
                      <div className="col">
                        <img
                          src={item.product.images}
                          alt="img-here w-25"
                          className="img-fluid"
                          style={{ width: "30%", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col text-secondary">
                        <p>{item.product.name}</p>

                        <p>
                          <strong>Quantity:</strong> {item.quantity}
                        </p>
                        <p>
                          <strong>Price: ₹</strong> {item.product.price}
                        </p>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="card">
              <div className="card-header">
                <h5>Price Details</h5>
              </div>
              <div className="card-body">
                <span>Price (2 item)</span>
                <span>44545</span>
                <br />
                <span>Delivery Charge</span>
                <span>99</span>
                <br />
                <span>Total Amount</span>
                <span>4546556</span>
                <br />
                <br />
                <button className="btn btn-primary">Place Order</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default OrderSummary;
