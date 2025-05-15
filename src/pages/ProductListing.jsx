import { Link } from "react-router-dom";
import Filter from "./Filter";
import useFilter from "../useFilter";
import useCartContext from "../context/CartContext";
import { useEffect } from "react";

const ProductListing = () => {
  const {
    product,
    loading,
    error,
    addToCart,
    addToWishlist,
    alerts,
    clearCartAlerts,
    clearWishlistAlerts,
    clearItemExists,
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
      <section className="row">
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
        <section className="col-md-8 mt-5">
          {/* Loading state for products */}
          {loading && (
            <div className="alert alert-info text-center">
              Loading products...
            </div>
          )}

          {/* Error state for products */}
          {error && (
            <div className="alert alert-danger text-center">
              Failed to get products: {error.message}
            </div>
          )}

          {/* Cart alerts */}
          {alerts.cart.loading && (
            <div className="alert alert-info text-center">Updating cart...</div>
          )}
          {alerts.cart.error && (
            <div className="alert alert-danger text-center">
              {alerts.cart.error}
            </div>
          )}
          {alerts.cart.success && (
            <div className="alert alert-success text-center">
              {alerts.cart.success}
            </div>
          )}

          {/* Wishlist alerts */}
          {alerts.wishlist.loading && (
            <div className="alert alert-info text-center">
              Updating wishlist...
            </div>
          )}
          {alerts.wishlist.error && (
            <div className="alert alert-danger text-center">
              {alerts.wishlist.error}
            </div>
          )}
          {alerts.wishlist.success && (
            <div className="alert alert-success text-center">
              {alerts.wishlist.success}
            </div>
          )}

          {/* Item exists alert */}
          {alerts.itemExists && (
            <div className="alert alert-warning text-center">
              This item is already in your cart
            </div>
          )}

          <div>
            <h5>
              Showing Products
              <span>&nbsp; (showing {products?.length} products)</span>
            </h5>
          </div>

          <div className="row">
            {products?.map((item) => (
              <div key={item._id} className="col-md-3 mt-4">
                <div className="card border-0 trsa">
                  <span
                    onClick={() => addToWishlist(item)}
                    className="position-relative"
                    title="Add to wishlist"
                  >
                    <i className="bi bi-bag-heart h2 text-secondary position-absolute top-0 end-0 my-3 me-4"></i>
                  </span>

                  <img
                    className="img-fluid"
                    style={{ height: "50%", objectFit: "cover" }}
                    src={item.images}
                    alt={item.name}
                  />

                  <div className="text-center mt-2">
                    <Link
                      className="text-dark text-decoration-none"
                      to={`/api/productdetails/${item._id}`}
                    >
                      <p className="card-text">{item.name}</p>
                      <h5>₹{item.price}</h5>
                    </Link>
                    <div className="d-grid">
                      <button
                        onClick={() => addToCart(item)}
                        className="btn btn-primary rounded"
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
