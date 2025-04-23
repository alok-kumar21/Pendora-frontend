import useFilter from "../useFilter";

const Filter = ({
  data,
  handleCategoryChange,
  handleRatingChange,
  handleSortPriceChange,
  handlerClearFilter,
}) => {
 

  return (
    <>
      <section>
        <section
          id="filter"
          className="bg-light  h-100 mb-5"
          style={{ width: "22rem" }}
        >
          <div className="mx-4 d-flex justify-content-between pt-3">
            <h4>Filter</h4>
            <button onClick={handlerClearFilter} className="">
              clear
            </button>
          </div>
          <div className="mt-5 mx-4">
            <label htmlFor="customRange1" className="form-label">
              <h5>Price</h5>
            </label>
            <br />
            <input
              type="range"
              className="form-range"
              style={{ width: "17rem" }}
              min="50"
              max="150"
              id="customRange1"
            />
          </div>
          {/* category */}
          <div className="mx-4 mt-5">
            <label className="from-label" htmlFor="">
              <h5>Category</h5>
            </label>
            <br />

            <div className="form-check">
              <input
                onChange={handleCategoryChange}
                className="form-check-input"
                type="checkbox"
                value="Men Clothing"
                id="menClothing"
              />
              <label className="form-check-label" htmlFor="menClothing">
                Men Clothing
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={handleCategoryChange}
                className="form-check-input"
                type="checkbox"
                value="Women Clothing"
                id="womenClothing"
              />
              <label className="form-check-label" htmlFor="womenClothing">
                Women Clothing
              </label>
            </div>
          </div>
          {/* Rating */}
          <div className="mx-4 mt-5">
            <label className="from-label" htmlFor="">
              <h5>Rating</h5>
            </label>
            <br />

            <div className="form-check">
              <input
                onChange={handleRatingChange}
                className="form-check-input"
                type="radio"
                value={4}
                name="rating"
                id="radioDefault1"
              />
              <label className="form-check-label" htmlFor="radioDefault1">
                4 start & above
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={handleRatingChange}
                className="form-check-input"
                value={3}
                type="radio"
                name="rating"
                id="radioDefault1"
              />
              <label className="form-check-label" htmlFor="radioDefault1">
                3 start & above
              </label>
            </div>

            <div className="form-check">
              <input
                onChange={handleRatingChange}
                className="form-check-input"
                value={2}
                type="radio"
                name="rating"
                id="radioDefault1"
              />
              <label className="form-check-label" htmlFor="radioDefault1">
                2 start & above
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={handleRatingChange}
                className="form-check-input"
                value={1}
                type="radio"
                name="rating"
                id="radioDefault1"
              />
              <label className="form-check-label" htmlFor="radioDefault1">
                1 start & above
              </label>
            </div>
          </div>
          {/* Stort By */}

          <div className="mx-4 mt-5">
            <label className="from-label" htmlFor="">
              <h5>Sort By</h5>
            </label>
            <br />

            <div className="form-check">
              <input
                onChange={handleSortPriceChange}
                className="form-check-input"
                type="radio"
                name="shortPrice"
                id="priceLowToHigh"
              />
              <label className="form-check-label" htmlFor="priceLowToHigh">
                Price - Low to High
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={handleSortPriceChange}
                className="form-check-input"
                type="radio"
                name="shortPrice"
                id="priceHighToLow"
              />
              <label className="form-check-label" htmlFor="priceHighToLow">
                Price - High to Low
              </label>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Filter;
