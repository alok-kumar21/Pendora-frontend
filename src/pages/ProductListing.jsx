import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import useFilter from "../useFilter";

const ProductListing = () => {
  const { addToCart } = useContext(CartContext);
  const { data, loading, error } = useFetch(
    "https://pendora-backend.vercel.app/api/products"
  );
  const { rating, getCategory, getRating, getShortPrice } = useFilter("");
  console.log(rating);

  return (
    <>
      {loading && (
        <div className="alert alert-success text-center">Loading...</div>
      )}
      {error && (
        <div className="alert alert-danger text-center">
          Failed to get Products
        </div>
      )}
      <section className="d-flex">
        <Filter />

        {/* Products */}
        <section className="mx-5 my-3">
          <div>
            <h5>
              Showing Products
              <small className="text-muted">
                ( showing {data?.length} products )
              </small>
            </h5>
          </div>
          <div className="row ">
            {data?.map((item) => (
              <div key={item._id} className="col-md-3 mt-4">
                <div className="card bg-light">
                  <span className="position-relative">
                    <i className="bi bi-bag-heart h2 text-secondary position-absolute top-0 end-0 my-3 me-4"></i>
                  </span>
                  <img className="img-fluid w-70" src={item.images} alt="" />

                  <div className=" text-center">
                    <Link to={`/api/productdetails/${item._id}`}>
                      <p className="card-text">{item.name}</p>
                      <h5>₹{item.price}</h5>
                    </Link>
                    <div className="d-grid ">
                      <button
                        onClick={() => addToCart(item)}
                        className="btn btn-primary rounded-0"
                        type="button"
                      >
                        Go To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
export default ProductListing;
