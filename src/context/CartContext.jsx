import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../pages/useFetch";
import useFilter from "../useFilter";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export default useCartContext;

export function CartProvider({ children }) {
  const [search, setSearch] = useState();

  console.log(search);
  // API calls
  const {
    data: product,
    loading,
    error,
  } = useFetch(
    search
      ? `https://pendora-backend.vercel.app/v1/product/search/${search}`
      : "https://pendora-backend.vercel.app/v1/products"
  );
  const {
    data: cartData,
    loading: cloading,
    error: cerror,
  } = useFetch("https://pendora-backend.vercel.app/v1/cart");
  const {
    data: wishlistData,
    loading: wishlistLoading,
    error: wishlistError,
  } = useFetch("https://pendora-backend.vercel.app/v2/wishlist");
  const {
    data: address,
    loading: addressLoading,
    error: addressError,
  } = useFetch("https://pendora-backend.vercel.app/v2/address");

  // State
  const [cartItem, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();

  // Alert states
  const [alerts, setAlerts] = useState({
    cart: {
      loading: false,
      error: null,
      success: null,
    },
    wishlist: {
      loading: false,
      error: null,
      success: null,
    },
    itemExists: false,
  });

  useEffect(() => {
    if (cartData) setCartItems(cartData);
  }, [cartData]);

  useEffect(() => {
    if (wishlistData) setWishlist(wishlistData);
  }, [wishlistData]);

  //  function to set alert state
  const setAlert = (type, field, value) => {
    setAlerts((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value,
      },
    }));
  };

  // Add item to cart
  async function addToCart(product) {
    setAlert("cart", "loading", true);
    setAlert("cart", "error", null);
    setAlert("cart", "success", null);

    try {
      const existingItem = cartItem.find(
        (item) => item.product._id === product._id
      );

      if (existingItem) {
        setAlerts((prev) => ({ ...prev, itemExists: true }));

        const response = await fetch(
          `https://pendora-backend.vercel.app/v1/cart/update/${existingItem._id}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: existingItem.quantity + 1 }),
          }
        );

        if (!response.ok)
          throw new Error("Failed to update item quantity in cart");

        setAlert("cart", "success", "Item quantity updated in cart");
      } else {
        const response = await fetch(
          "https://pendora-backend.vercel.app/v1/addcart",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ product: product._id, quantity: 1 }),
          }
        );

        if (!response.ok) throw new Error("Failed to add item to cart");

        setAlert("cart", "success", "Item added to cart");
      }

      // Refresh cart data
      const updatedCart = await fetch(
        "https://pendora-backend.vercel.app/v1/cart"
      ).then((res) => res.json());
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setAlert("cart", "loading", false);
      setAlerts((prev) => ({ ...prev, itemExists: false }));
    }
  }

  // Remove item from cart
  async function removeFromCart(cartItemId) {
    setAlert("cart", "loading", true);
    setAlert("cart", "error", null);

    try {
      const response = await fetch(
        `https://pendora-backend.vercel.app/v1/cart/remove/${cartItemId}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Failed to remove item from cart");

      setCartItems(cartItem.filter((item) => item._id !== cartItemId));
      setAlert("cart", "success", "Item removed from cart");
    } catch (error) {
      console.error("Error removing from cart:", error);
    } finally {
      setAlert("cart", "loading", false);
    }
  }

  // Update item quantity in cart
  async function updateCartItemQuantity(cartItemId, newQuantity) {
    setAlert("cart", "loading", true);
    setAlert("cart", "error", null);

    try {
      if (newQuantity < 1) {
        await removeFromCart(cartItemId);
        return;
      }

      const response = await fetch(
        `https://pendora-backend.vercel.app/v1/cart/update/${cartItemId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: newQuantity }),
        }
      );

      if (!response.ok) throw new Error("Failed to update item quantity");

      const updatedCart = cartItem.map((item) =>
        item._id === cartItemId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
      setAlert("cart", "success", "Quantity updated");
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
    } finally {
      setAlert("cart", "loading", false);
    }
  }

  // Move item from cart to wishlist
  async function moveToWishlist(cartItem) {
    setAlert("wishlist", "loading", true);
    setAlert("wishlist", "error", null);

    try {
      await addToWishlist(cartItem.product);
      await removeFromCart(cartItem._id);
      setAlert("wishlist", "success", "Item moved to wishlist");
    } catch (error) {
      console.error("Error moving to wishlist:", error);
    } finally {
      setAlert("wishlist", "loading", false);
    }
  }

  // Add item to wishlist
  async function addToWishlist(product) {
    setAlert("wishlist", "loading", true);
    setAlert("wishlist", "error", null);

    try {
      const exists = wishlist.some((item) => item.product._id === product._id);
      if (exists) throw new Error("Product already in wishlist");

      const response = await fetch(
        "https://pendora-backend.vercel.app/v1/wishlist",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product: product._id }),
        }
      );

      if (!response.ok) throw new Error("Failed to add to wishlist");

      const updatedWishlist = await fetch(
        "https://pendora-backend.vercel.app/v2/wishlist"
      ).then((res) => res.json());
      setWishlist(updatedWishlist);
      setAlert("wishlist", "success", "Item added to wishlist");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    } finally {
      setAlert("wishlist", "loading", false);
    }
  }

  // Remove item from wishlist
  async function removeFromWishlist(wishlistItemId) {
    setAlert("wishlist", "loading", true);
    setAlert("wishlist", "error", null);

    try {
      const response = await fetch(
        `https://pendora-backend.vercel.app/v1/wishlist/remove/${wishlistItemId}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Failed to remove from wishlist");

      setWishlist(wishlist.filter((item) => item._id !== wishlistItemId));
      setAlert("wishlist", "success", "Item removed from wishlist");
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    } finally {
      setAlert("wishlist", "loading", false);
    }
  }

  // Move item from wishlist to cart
  async function moveToCart(wishlistItem) {
    setAlert("cart", "loading", true);
    setAlert("cart", "error", null);

    try {
      await addToCart(wishlistItem.product);
      await removeFromWishlist(wishlistItem._id);
      setAlert("cart", "success", "Item moved to cart");
    } catch (error) {
      console.error("Error moving to cart:", error);
    } finally {
      setAlert("cart", "loading", false);
    }
  }

  // Address selection
  function handleAddressSelection(checkoutAddressId) {
    setSelectedAddress(checkoutAddressId);
  }

  // Price calculations
  const totalPrice = cartItem.reduce(
    (acc, curr) => acc + (curr?.product?.price || 0) * (curr?.quantity || 0),
    0
  );

  const totalDiscount = cartItem.reduce(
    (acc, curr) => acc + (curr?.product?.discount || 0),
    0
  );

  const deliveryCharge = 99;
  const discountAmount = totalPrice * (totalDiscount / 100);
  const finalPrice = totalPrice - discountAmount;
  const finalAmount =
    finalPrice < 500 ? finalPrice + deliveryCharge : finalPrice;
  const saveAmount = discountAmount;

  return (
    <CartContext.Provider
      value={{
        product,
        loading,
        error,
        cartItem,
        cloading,
        cerror,
        wishlist,
        wishlistLoading,
        wishlistError,
        address,
        addressLoading,
        addressError,
        selectedAddress,
        totalPrice,
        totalDiscount,
        deliveryCharge,
        finalAmount,
        finalPrice,
        saveAmount,
        alerts,
        setSearch,

        // Cart functions
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        moveToWishlist,

        // Wishlist functions
        addToWishlist,
        removeFromWishlist,
        moveToCart,

        // Address function
        handleAddressSelection,

        // Alert clearing functions
        clearCartAlerts: () =>
          setAlerts((prev) => ({
            ...prev,
            cart: { loading: false, error: null, success: null },
          })),
        clearWishlistAlerts: () =>
          setAlerts((prev) => ({
            ...prev,
            wishlist: { loading: false, error: null, success: null },
          })),
        clearItemExists: () =>
          setAlerts((prev) => ({
            ...prev,
            itemExists: false,
          })),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
