import { useState, useEffect } from "react";

function useFilter(data) {
  const [category, setCategory] = useState({
    electronics: false,
    home: false,
  });
  const [priceRange, setPriceRange] = useState(1);
  const [rating, setRating] = useState();
  const [sortPrice, setSortPrice] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      let filteredProducts = [...data];

      // filter price Range
      if (priceRange) {
        filteredProducts = filteredProducts.filter(
          (item) => item.price >= priceRange
        );
      }

      // Apply category filter if any category is selected

      if (category.electronics || category.home) {
        filteredProducts = filteredProducts.filter((product) => {
          const productCategory = product?.category?.name;
          return (
            (category.electronics && productCategory === "Electronics") ||
            (category.home && productCategory === "Home")
          );
        });
      }

      // Apply rating filter
      if (rating) {
        filteredProducts = filteredProducts.filter(
          (product) => product.rating >= parseFloat(rating)
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
    setRating(value);
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
    setSearch("");
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
