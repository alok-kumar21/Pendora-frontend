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
    <section className="col-md-3 pt-4">
      <section id="filter" className=" h-100 mb-5">
        <div className="mx-4 d-flex justify-content-between pt-3">
          <h4>Filter</h4>
          <button onClick={handlerClearFilter} className="btn">
            Clear
          </button>
        </div>
        {/* price range */}
        <div className="mx-4 mt-5">
          <label className="from-label" htmlFor="">
            <h5>Price</h5>
          </label>
          <br />
          <br />
          <div className="d-flex justify-content-between text-secondary">
            <p>50</p>
            <p>150</p>
            <p>200</p>
          </div>

          <input
            className="from-range w-100"
            type="range"
            min="50"
            max="200"
            step="10"
            onChange={handlePriceChange}
            value={priceRange}
          />
        </div>

        {/* Category */}
        <div className="mx-4 mt-5">
          <label className="from-label">
            <h5>Category</h5>
          </label>
          <br />
          <div className="form-check">
            <input
              onChange={handleCategoryChange}
              className="form-check-input"
              type="checkbox"
              value="electronics"
              id="electronics"
              checked={category.electronics}
            />
            <label className="form-check-label" htmlFor="electronics">
              Electronics
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={handleCategoryChange}
              className="form-check-input"
              type="checkbox"
              value="home"
              id="clothing"
              checked={category.home}
            />
            <label className="form-check-label" htmlFor="clothing">
              Home
            </label>
          </div>
        </div>

        {/* Rating */}
        <div className="mx-4 mt-5">
          <label className="from-label">
            <h5>Rating</h5>
          </label>
          <br />
          {[4, 3, 2, 1].map((star) => (
            <div className="form-check" key={star}>
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
                {star} star & above
              </label>
            </div>
          ))}
        </div>

        {/* Sort By */}
        <div className="mx-4 mt-5">
          <label className="from-label">
            <h5>Sort By</h5>
          </label>
          <br />
          <div className="form-check">
            <input
              onChange={handleSortPriceChange}
              className="form-check-input"
              value="lowToHigh"
              type="radio"
              name="sortPrice"
              id="priceLowToHigh"
              checked={sortPrice === "lowToHigh"}
            />
            <label className="form-check-label" htmlFor="priceLowToHigh">
              Price - Low to High
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={handleSortPriceChange}
              className="form-check-input"
              value="highToLow"
              type="radio"
              name="sortPrice"
              id="priceHighToLow"
              checked={sortPrice === "highToLow"}
            />
            <label className="form-check-label" htmlFor="priceHighToLow">
              Price - High to Low
            </label>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Filter;
