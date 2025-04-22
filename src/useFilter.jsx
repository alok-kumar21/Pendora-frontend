import { useState } from "react";

function useFilter(initialValue) {
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState(initialValue);
  const [sortPrice, setSortPrice] = useState(initialValue);

  function getCategory(event) {
    setCategory(event.target.value);
  }

  function getRating(event) {
    setRating(event.target.value);
  }

  function getShortPrice(event) {
    setSortPrice(event.target.value);
  }
  return { rating, getCategory, getRating, getShortPrice };
}

export default useFilter;
