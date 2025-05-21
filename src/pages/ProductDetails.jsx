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
            <section className="row g-3">
              <div className="col-12 col-md-4 col-lg-3">
                <div className="p-3 mt-md-4">
                  <div className="shadow position-relative">
                    <button
                      onClick={() => addToWishlist(productData)}
                      className="btn btn-link position-absolute top-0 end-0 m-2 p-0"
                    >
                      <i className="bi bi-bag-heart h3 text-secondary"></i>
                    </button>
                    <img
                      className="img-fluid w-100 p-4"
                      src={productData.images}
                      alt={productData.name}
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-primary rounded-0">
                      Buy Now
                    </button>
                    <button
                      onClick={() => addToCart(productData)}
                      className="btn btn-secondary rounded-0"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-8 col-lg-6">
                <div className="p-3 mt-3 mt-md-5">
                  <h2 className="h4">{productData.name}</h2>
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-warning text-dark me-2">
                      {productData.rating} ★
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="h4">₹{productData.price}</span>
                    {productData.discount > 0 && (
                      <>
                        <span className="text-muted ms-2 text-decoration-line-through">
                          ₹
                          {(
                            productData.price -
                            (productData.price * productData.discount) / 100
                          ).toFixed(1)}
                        </span>
                        <span className="text-success ms-2">
                          {productData.discount}% off
                        </span>
                      </>
                    )}
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <div className="ms-3 btn-group">
                      <button className="btn btn-outline-secondary">-</button>
                      <button className="btn btn-outline-secondary disabled">
                        1
                      </button>
                      <button className="btn btn-outline-secondary">+</button>
                    </div>
                  </div>

                  {/* Size Selector */}
                  <div className="mb-3">
                    <label className="form-label">Size</label>
                    <div className="ms-3 btn-group">
                      {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                          key={size}
                          className=" btn btn-outline-secondary"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <hr />

                  {/* Policies */}
                  <div className="row text-center g-3 mb-4">
                    <div className="col-6 col-sm-3">
                      <i className="bi bi-box-seam text-secondary fs-3"></i>
                      <p className="mb-0 small">
                        10 Days <br />
                        Returnable
                      </p>
                    </div>
                    <div className="col-6 col-sm-3">
                      <i className="bi bi-cash text-secondary fs-3"></i>
                      <p className="mb-0 small">
                        Pay on <br /> Delivery
                      </p>
                    </div>
                    <div className="col-6 col-sm-3">
                      <i className="bi bi-truck text-secondary fs-3"></i>
                      <p className="mb-0 small">
                        Free <br /> Delivery
                      </p>
                    </div>
                    <div className="col-6 col-sm-3">
                      <i className="bi bi-shield text-secondary fs-3"></i>
                      <p className="mb-0 small">
                        Secure <br /> Payment
                      </p>
                    </div>
                  </div>

                  <hr />

                  {/* Description */}
                  <div className="mb-4">
                    <h5 className="mb-3">Description:</h5>
                    <p>{productData.description}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Similar Products Section */}
            {similarProduct?.length > 0 && (
              <section className="container mb-5">
                <hr />
                <h5 className="mb-4">More items you may like</h5>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                  {similarProduct.map((item) => (
                    <div key={item._id} className="col">
                      <div className="card h-100">
                        <img
                          src={item.images}
                          className="card-img-top"
                          alt={item.name}
                        />
                        <div className="card-body d-flex flex-column">
                          <h6 className="card-title text-center">
                            {item.name}
                          </h6>
                          <button
                            onClick={() => addToCart(item)}
                            className="btn btn-secondary rounded-0 mt-auto"
                          >
                            Add to Cart
                          </button>
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
