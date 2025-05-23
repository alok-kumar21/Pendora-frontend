import useCartContext from "../context/CartContext";

const OrderHistory = () => {
  const { cartItem } = useCartContext();

  return (
    <>
      <section className="container mt-5 ">
        <div>
          <h5 className="text-center mb-5"> Order History</h5>
        </div>
        <section>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                {cartItem?.map((item) => (
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.product.images}
                        className="img-fluid"
                        alt="img-here"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.product.name}</h5>
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-warning text-dark me-2">
                            {item.product.rating} ★
                          </span>
                        </div>

                        <p className="card-text">₹{item.product.price}</p>
                        <p className="card-text text-success">
                          Status:- Delivered
                        </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default OrderHistory;
