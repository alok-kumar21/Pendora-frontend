// import { useState } from "react";

// function useFilter(initialValue) {
//   const [category, setCategory] = useState([]);
//   const [rating, setRating] = useState(initialValue);
//   const [sortPrice, setSortPrice] = useState(initialValue);

//   function getCategory(event) {
//     setCategory(event.target.value);
//   }

//   function getRating(event) {
//     setRating(event.target.value);
//   }

//   function getShortPrice(event) {
//     setSortPrice(event.target.value);
//   }
//   return { rating, getCategory, getRating, getShortPrice };
// }

// export default useFilter;

import { useState } from "react";

function useFilter() {
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState(0);
  const [sortPrice, setSortPrice] = useState("");

  function handleCategoryChange(event) {
    const value = event.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  function handleSortPriceChange(event) {
    setSortPrice(parseFloat(event.target.value));
  }
  function handlerClearFilter() {
    setCategory();
    setRating();
    setSortPrice();
  }

  return {
    category,
    rating,
    sortPrice,
    handleCategoryChange,
    handleRatingChange,
    handleSortPriceChange,
    handlerClearFilter,
    setCategory, // in case you need direct access
    setRating,
    setSortPrice,
  };
}

export default useFilter;
