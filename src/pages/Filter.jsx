const Filter = ({
  handlePriceChange,
  priceRange,
  category,
  rating,
  sortPrice,
  handleCategoryChange,
  handleRatingChange,
  handleSortPriceChange,
  handlerClearFilter,
}) => {
  return (
    <section className="col-12 col-md-4 col-lg-3 pt-4">
      <div className="d-md-none mb-3">
        <button
          className="btn btn-outline-danger w-100"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#filterCollapse"
          aria-expanded="false"
          aria-controls="filterCollapse"
        >
          <i className="bi bi-funnel me-2"></i>
          Filter Options
        </button>
      </div>

      <section
        id="filterCollapse"
        className="collapse d-md-block h-100 mb-5 bg-white p-3 rounded shadow-sm"
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Filters</h4>
          <button
            onClick={handlerClearFilter}
            className="btn btn-sm btn-outline-danger"
          >
            Clear All
          </button>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <h5 className="mb-3">Price Range</h5>
          <div className="d-flex justify-content-between text-muted small mb-2">
            <span>₹50</span>
            <span>₹150</span>
            <span>₹200</span>
          </div>
          <input
            className="form-range w-100"
            type="range"
            min="50"
            max="200"
            step="10"
            onChange={handlePriceChange}
            value={priceRange}
          />
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <h5 className="mb-3">Category</h5>
          <div className="list-group list-group-flush">
            {[
              {
                id: "electronics",
                label: "Electronics",
                checked: category.electronics,
              },
              { id: "home", label: "Home", checked: category.home },
            ].map((item) => (
              <div className="list-group-item border-0 p-0 mb-2" key={item.id}>
                <div className="form-check">
                  <input
                    onChange={handleCategoryChange}
                    className="form-check-input"
                    type="checkbox"
                    value={item.id}
                    id={item.id}
                    checked={item.checked}
                  />
                  <label className="form-check-label" htmlFor={item.id}>
                    {item.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <h5 className="mb-3">Rating</h5>
          <div className="list-group list-group-flush">
            {[4, 3, 2, 1].map((star) => (
              <div className="list-group-item border-0 p-0 mb-2" key={star}>
                <div className="form-check">
                  <input
                    onChange={handleRatingChange}
                    className="form-check-input"
                    type="radio"
                    value={star}
                    name="rating"
                    id={`rating${star}`}
                    checked={rating === star}
                  />
                  <label className="form-check-label" htmlFor={`rating${star}`}>
                    {Array(star)
                      .fill()
                      .map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning"></i>
                      ))}{" "}
                    & above
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sort By Filter */}
        <div className="mb-4">
          <h5 className="mb-3">Sort By</h5>
          <div className="list-group list-group-flush">
            {[
              {
                id: "priceLowToHigh",
                value: "lowToHigh",
                label: "Price - Low to High",
              },
              {
                id: "priceHighToLow",
                value: "highToLow",
                label: "Price - High to Low",
              },
            ].map((item) => (
              <div className="list-group-item border-0 p-0 mb-2" key={item.id}>
                <div className="form-check">
                  <input
                    onChange={handleSortPriceChange}
                    className="form-check-input"
                    type="radio"
                    name="sortPrice"
                    id={item.id}
                    value={item.value}
                    checked={sortPrice === item.value}
                  />
                  <label className="form-check-label" htmlFor={item.id}>
                    {item.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Filter;
