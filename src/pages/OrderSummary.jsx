const OrderSummary = () => {
  return (
    <>
      <section className="container">
        <section className="row">
          <div className="col-md-6 mt-4">
            <div className="card">
              <div className="card-header">
                <h5>Delivery Address</h5>
              </div>
              <card className="card-body">
                <p>Alok kumar</p>
                <p>Address: Om Puram colony </p>
                <p>city: aayodhya</p>
                <p>State: Uttar Pradesh</p>
                <p>Mobile Number: 090909099</p>
                <p>Pincode: 224001</p>
                <p>Landmark: new Railway Station</p>
              </card>
            </div>
            <div className="card mt-4">
              <div className="card-header">
                <h5>Order Products</h5>
              </div>

              <div className="list-group">
                <div className="list-group-item">
                  <img src="..." alt="img-here" />
                  <p>Name: Jeans</p>
                  <p>Quantity: 1</p>
                  <p>Price: 9090</p>
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
