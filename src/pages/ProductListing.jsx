import { Link } from "react-router-dom";
import Filter from "./Filter";
import useFilter from "../useFilter";
import useCartContext from "../context/CartContext";

const ProductListing = () => {
  const {
    product,
    loading,
    error,
    addToCart,
    addToWishlist,
    updateCart,
    updateWishlist,
    existingItem,
  } = useCartContext();

  const {
    handlePriceChange,
    priceRange,
    category,
    rating,
    sortPrice,
    products,

    handleCategoryChange,
    handleRatingChange,
    handleSortPriceChange,
    handlerClearFilter,
  } = useFilter(product);

  return (
    <>
      <section className="row ">
        <Filter
          handlePriceChange={handlePriceChange}
          priceRange={priceRange}
          category={category}
          rating={rating}
          sortPrice={sortPrice}
          handleCategoryChange={handleCategoryChange}
          handleRatingChange={handleRatingChange}
          handleSortPriceChange={handleSortPriceChange}
          handlerClearFilter={handlerClearFilter}
        />

        {/* Products */}
        <section className="col-md-8 mt-5 ">
          {loading && (
            <div className="alert alert-success text-center">Loading...</div>
          )}
          {updateCart && (
            <div className="alert alert-success text-center">
              adding in cart...
            </div>
          )}
          {existingItem && (
            <div className="alert alert-success text-center">
              Item alread added
            </div>
          )}
          {updateWishlist && (
            <div className="alert alert-success text-center">
              adding in Wishlist...
            </div>
          )}
          {error && (
            <div className="alert alert-danger text-center">
              Failed to get Products
            </div>
          )}
          <div>
            <h5>
              Showing Products
              <span>&nbsp; ( showing {products?.length} products )</span>
            </h5>
          </div>

          <div className="row ">
            {products?.map((item) => (
              <div key={item._id} className="col-md-3 mt-4">
                <div
                  className="card border-0
                trsa"
                >
                  <span
                    onClick={() => addToWishlist(item)}
                    className="position-relative "
                  >
                    <i className="bi bi-bag-heart  bi-danger h2 text-secondary position-absolute top-0 end-0 my-3 me-4"></i>
                  </span>

                  <img
                    className="img-fluid "
                    style={{ height: "50%", objectFit: "cover" }}
                    src={item.images}
                    alt={item.name}
                  />

                  <div className="text-center">
                    <Link to={`/api/productdetails/${item._id}`}>
                      <p className="card-text">{item.name}</p>

                      <h5>₹{item.price}</h5>
                    </Link>
                    <div className="d-grid">
                      <button
                        onClick={() => addToCart(item)}
                        className="btn btn-primary rounded-0"
                        type="button"
                      >
                        Add To Cart
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
