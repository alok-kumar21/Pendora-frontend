import { useState } from "react";
import useCartContext from "../context/CartContext";

const OrderSummary = () => {
  const { cartItem, address, selectedAddress } = useCartContext();
  const addressDetails = address?.find(
    (address) => address._id === selectedAddress
  );
  console.log(cartItem);
  return (
    <>
      <section className="container">
        <section className="row">
          <div className="col-md-6 mt-4">
            {addressDetails && (
              <div className="card">
                <div className="card-header">
                  <h5>Delivery Address</h5>
                </div>
                <div className="card-body text-secondary">
                  <p>{addressDetails.name}</p>
                  <p>Address: {addressDetails.address} </p>
                  <p>city: {addressDetails.city}</p>
                  <p>State: {addressDetails.state}</p>
                  <p>Mobile Number: {addressDetails.mobilenumber}</p>
                  <p>Pincode: {addressDetails.pincode}</p>
                  <p>Landmark: {addressDetails.landmark}</p>
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
                      <div className="col-md-3">
                        <img src={item.product.images} alt="" />
                      </div>
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
