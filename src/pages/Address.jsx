import useCartContext from "../context/CartContext";
import WishList from "./WishList";

const Address = () => {
  const { address, addressLoading, addressError } = useCartContext();
  console.log(address);
  return (
    <>
      <section className="container mt-5 mb-5">
        <div className="my-5">
          <h5 className="text-center">Address</h5>
        </div>
        <div className="accordion " id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-primary text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Delivery Address
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="nav">
                  <li className="nav-item">
                    {address?.map((item) => (
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radioDefault"
                          id="radioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radioDefault1"
                        >
                          <span>
                            <strong>Saket puri colony - 224001</strong>{" "}
                          </span>
                          <p>City: Ayodhya</p>
                        </label>
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion " id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-primary text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                + add new Address
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <form action="">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                  />
                  <br />
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Mobile Number"
                  />
                  <br />
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Pincode"
                  />
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Locality"
                  />
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Address"
                  />
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="City"
                  />
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="State"
                  />
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Landmark"
                  />
                  <br />
                  <button className="btn btn-primary">
                    Save & Deliver Here
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Address;
