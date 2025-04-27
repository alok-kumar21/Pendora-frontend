import { useState, useEffect } from "react";

function useFilter(data) {
  const [category, setCategory] = useState({
    men: false,
    women: false,
  });
  const [priceRange, setPriceRange] = useState(1);
  const [rating, setRating] = useState(null);
  const [sortPrice, setSortPrice] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      let filteredProducts = [...data];

      // apply filter price Range
      if (priceRange) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= priceRange
        );
      }

      // Apply category filter
      if (category.men || category.women) {
        filteredProducts = filteredProducts.filter((product) => {
          if (category.men && product.category === "men") return true;
          if (category.women && product.category === "women") return true;
          return false;
        });
      }

      // Apply rating filter
      if (rating) {
        filteredProducts = filteredProducts.filter(
          (product) => product.rating >= rating
        );
      }

      // Apply sorting
      if (sortPrice === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortPrice === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      setProducts(filteredProducts);
    }
  }, [data, priceRange, category, rating, sortPrice]);

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange(value);
    console.log(priceRange);
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setCategory((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  const handleRatingChange = (e) => {
    const value = Number(e.target.value);
    setRating(rating === value ? null : value);
  };

  const handleSortPriceChange = (e) => {
    const value = e.target.value;
    setSortPrice(sortPrice === value ? null : value);
  };

  const handlerClearFilter = () => {
    setPriceRange(0);
    setCategory({ men: false, women: false });
    setRating(null);
    setSortPrice(null);
  };

  return {
    handlePriceChange,
    priceRange,
    category,
    rating,
    sortPrice,
    products: products.length > 0 ? products : data || [],
    handleCategoryChange,
    handleRatingChange,
    handleSortPriceChange,
    handlerClearFilter,
  };
}

export default useFilter;
