import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:4001/api/products"
  );
  const { productId } = useParams();

  const productData = data && data?.find((item) => item._id == productId);

  return (
    <>
      {loading && (
        <div className="container alert alert-success text-center" role="alert">
          Loading... {console.log(loading)}
        </div>
      )}
      {!productData && error && (
        <div className="container alert alert-danger text-center" role="alert">
          Failed to get Product
        </div>
      )}

      {productData && (
        <section className="mt-4">
          <section className="container bg-light pb-5">
            <section>
              <div className="row">
                <div className="col-md-3">
                  <div id="image " className="mx-3 mt-4">
                    <div className="shadow">
                      <img
                        className="img-fluid w-70 my-5 "
                        src={productData.images}
                        alt=""
                      />
                    </div>
                    <div className="d-grid mt-4">
                      <button className="btn btn-primary rounded-0">
                        Buy Now
                      </button>
                    </div>
                    <br />
                    <div className="d-grid">
                      <button className="btn btn-secondary rounded-0">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ms-5">
                  <div id="details " className="mt-5">
                    <div>
                      <h5>{productData.name}</h5>
                    </div>
                    <div>
                      <p>
                        <small>{productData.rating} ⭐⭐⭐⭐⭐</small>
                      </p>
                    </div>
                    <div>
                      <span className="h5">₹{productData.price}</span>
                      <span className="text-secondary  ms-2 text-decoration-line-through">
                        ₹3999
                      </span>
                    </div>

                    <div className="mt-3">
                      <span>Quantity:</span>
                      <button className="border rounded-circle ms-2">-</button>
                      <button className="border h5 ms-3 rounded">0</button>
                      <button className="border rounded-circle ms-3">+</button>
                    </div>
                    <div className="mt-2">
                      <p className="h5 text-secondary">50% off</p>
                    </div>
                    <div className="mt-3">
                      <span>size:</span>
                      <button className="border ms-2">S</button>
                      <button className="border ms-2">M</button>
                      <button className="border ms-2">XL</button>
                      <button className="border ms-2">XXL</button>
                    </div>
                    <hr />
                    <div
                      id="policies"
                      className="d-flex justify-content-evenly"
                    >
                      <div>
                        <i className="bi bi-box-seam  text-secondary display-6"></i>
                        <p>
                          10 Days <br />
                          Returnable
                        </p>
                      </div>
                      <div>
                        <i className="bi bi-cash text-secondary  display-6"></i>
                        <p>
                          Pay on <br /> Devlivery
                        </p>
                      </div>
                      <div>
                        <i className="bi bi-truck text-secondary display-6"></i>
                        <p>
                          Free <br /> Delivery
                        </p>
                      </div>
                      <div>
                        <i className="bi bi-shield text-secondary display-6"></i>
                        <p>
                          Secure <br /> Payment
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <p>Description:</p>
                  <ul>
                    <li>{productData.description}</li>
                  </ul>
                </div>
              </div>
            </section>
            <hr />
            <section className="container mb-5">
              <div className="mb-4">
                <h5>More items you may like in apparel</h5>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="card">
                    <img
                      src="https://placehold.co/600x400?text=Hello+World"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text text-center">
                        Men Premium Jacket
                      </p>
                      <div className="d-grid">
                        <button className="btn btn-secondary rounded-0">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
