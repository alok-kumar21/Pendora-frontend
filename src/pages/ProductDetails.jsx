import useCartContext from "../context/CartContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../pages/useFetch";
const ProductDetails = () => {
  const { data, loading, error } = useFetch(
    "https://pendora-backend.vercel.app/v1/products"
  );

  const { productId } = useParams();

  const productData = data?.find((item) => item._id == productId);

  const similarProduct = data?.filter(
    (item) =>
      item?._id !== productData?._id &&
      item?.category?.name === productData?.category?.name
  );

  const {
    addToCart,
    addToWishlist,
    alerts,
    clearCartAlerts,
    clearWishlistAlerts,
    clearItemExists,
  } = useCartContext();

  // Clear alerts when component unmounts
  useEffect(() => {
    return () => {
      clearCartAlerts();
      clearWishlistAlerts();
      clearItemExists();
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="container alert alert-success text-center" role="alert">
          Loading...
        </div>
      )}
      {!productData && error && (
        <div className="container alert alert-danger text-center" role="alert">
          Failed to get Product
        </div>
      )}

      {alerts.cart.success && (
        <div className="container alert alert-success text-center" role="alert">
          {alerts.cart.success}
        </div>
      )}
      {alerts.wishlist.success && (
        <div className="container alert alert-success text-center" role="alert">
          {alerts.wishlist.success}
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
                      <span
                        onClick={() => addToWishlist(productData)}
                        className="position-relative "
                      >
                        <i className="bi bi-bag-heart   h3 text-secondary   position-absolute top-10  start-100  m-4  "></i>
                      </span>
                      <img
                        className="img-fluid w-70 my-5 "
                        src={productData.images}
                        alt="img-here"
                      />
                    </div>
                    <div className="d-grid mt-4">
                      <button className="btn btn-primary rounded-0">
                        Buy Now
                      </button>
                    </div>
                    <br />
                    <div className="d-grid">
                      <button
                        onClick={() => addToCart(productData)}
                        className="btn btn-secondary rounded-0"
                      >
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
                        <small>Rating: {productData.rating} </small>
                      </p>
                    </div>
                    <div>
                      <span className="h5">₹{productData.price}</span>
                      <span className="text-success  ms-2 text-decoration-line-through">
                        ₹
                        {(
                          productData.price -
                          (productData.price * productData.discount) / 100
                        ).toFixed(1)}
                      </span>
                    </div>

                    <div className="mt-3">
                      <span>Quantity:</span>
                      <button className="border rounded-circle ms-2">-</button>
                      <button className="border h5 ms-3 rounded">1</button>
                      <button className="border rounded-circle ms-3">+</button>
                    </div>
                    <div className="mt-2">
                      <p className="h5 text-secondary">
                        {productData.discount}% off
                      </p>
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

            {similarProduct.length > 0 && (
              <section className="container mb-5">
                <hr />
                <div className="mb-4">
                  <h5>More items you may like in apparel</h5>
                </div>
                <div className="row">
                  {similarProduct?.map((item) => (
                    <div key={item._id} className="col-md-3 mt-3">
                      <div className="card">
                        <img src={item.images} alt="" />
                        <div className="card-body">
                          <p className="card-text text-center">{item.name}</p>
                          <div className="d-grid">
                            <button
                              onClick={() => addToCart(item)}
                              className="btn btn-secondary rounded-0"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </section>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
