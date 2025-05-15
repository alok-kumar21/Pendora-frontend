// import { createContext, useContext, useState, useEffect } from "react";
// import useFetch from "../pages/useFetch";

// const CartContext = createContext();

// const useCartContext = () => useContext(CartContext);

// export default useCartContext;

// export function CartProvider({ children }) {
//   // all product api call
//   const {
//     data: product,
//     loading,
//     error,
//   } = useFetch("http://localhost:4001/api/products");

//   // cart api call
//   const {
//     data: cartData,
//     loading: cloading,
//     error: cerror,
//   } = useFetch("http://localhost:4001/api/cart");

//   // wishlist api call
//   const {
//     data: wishlistData,
//     loading: wishlistLoading,
//     error: wishlistError,
//   } = useFetch("http://localhost:4001/api/wishlist");

//   // address api call

//   const {
//     data: address,
//     loading: addressLoading,
//     error: addressError,
//   } = useFetch("http://localhost:4001/api/v2/address");

//   const [cartItem, setCartItems] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState();

//   // loading alerts state
//   const [updateCart, setUpdateCart] = useState(false);
//   const [updateWishlist, setUpdateWishlist] = useState(false);
//   const [removeWishlist, setRemoveWishlist] = useState(false);
//   const [quantityAlert, setQuantityAlert] = useState(false);
//   const [existingItem, setExistingItem] = useState(false);

//   useEffect(() => {
//     if (cartData) {
//       setCartItems(cartData);
//     }
//   }, [cartData]);

//   useEffect(() => {
//     if (wishlistData) {
//       setWishlist(wishlistData);
//     }
//   }, [wishlistData]);

//   async function addToCart(product) {
//     console.log("clicked");
//     try {
//       // Check if product already exists in cart

//       const existingItem = cartItem.find(
//         (item) => item.product._id === product._id
//       );

//       if (existingItem) {
//         setExistingItem(true);
//         // If exists, update quantity
//         const response = await fetch(
//           `http://localhost:4001/api/cart/update/${existingItem._id}`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ quantity: existingItem.quantity + 1 }),
//           }
//         );
//         setExistingItem(false);

//         if (!response.ok) {
//           throw new Error("Failed to update item quantity in cart");
//         }
//       } else {
//         // If not exists, add new item
//         setUpdateCart(true);
//         const response = await fetch("http://localhost:4001/api/addcart", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             product: product._id,
//             quantity: 1,
//           }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to add item to cart in database");
//         }
//         setUpdateCart(false);
//       }

//       // Refresh cart data
//       const updatedCart = await fetch("http://localhost:4001/api/cart").then(
//         (res) => res.json()
//       );

//       setCartItems(updatedCart);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   }

//   async function updateCartItemQuantity(cartItemId, newQuantity) {
//     setQuantityAlert(true);
//     try {
//       if (newQuantity < 1) return;

//       const response = await fetch(
//         `http://localhost:4001/api/cart/update/${cartItemId}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ quantity: newQuantity }),
//         }
//       );

//       if (response.ok) {
//         setQuantityAlert(false);
//         const updatedCart = cartItem.map((item) =>
//           item._id === cartItemId ? { ...item, quantity: newQuantity } : item
//         );
//         setCartItems(updatedCart);
//       }
//     } catch (error) {
//       console.error("Error updating cart item quantity:", error);
//     }
//   }

//   async function removeFromCart(cartItemId) {
//     setUpdateCart(true);
//     try {
//       const response = await fetch(
//         `http://localhost:4001/api/cart/remove/${cartItemId}`,
//         { method: "DELETE" }
//       );

//       if (response.ok) {
//         setCartItems(cartItem.filter((item) => item._id !== cartItemId));
//       }
//       setUpdateCart(false);
//     } catch (error) {
//       console.error("Error removing from cart:", error);
//     }
//   }

//   async function addToWishlist(product) {
//     setUpdateWishlist(true);
//     try {
//       // Check if product already exists in wishlist
//       const exists = wishlist.some((item) => item.product._id === product._id);
//       if (exists) {
//         throw new Error("Product already in wishlist");
//       }

//       const response = await fetch("http://localhost:4001/api/wishlist", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ product: product._id }), // Store reference to product
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add to wishlist");
//       }

//       // Refresh wishlist data
//       const updatedWishlist = await fetch(
//         "http://localhost:4001/api/wishlist"
//       ).then((res) => res.json());
//       setUpdateWishlist(false);
//       setWishlist(updatedWishlist);
//     } catch (error) {
//       console.error("Error adding to wishlist:", error);
//     }
//   }

//   async function removeFromWishlist(wishlistItemId) {
//     setRemoveWishlist(true);
//     try {
//       const response = await fetch(
//         `http://localhost:4001/api/wishlist/remove/${wishlistItemId}`,
//         { method: "DELETE" }
//       );

//       if (response.ok) {
//         setWishlist(wishlist.filter((item) => item._id !== wishlistItemId));
//         setRemoveWishlist(false);
//       }
//     } catch (error) {
//       console.error("Error removing from wishlist:", error);
//     }
//   }

//   async function moveToCart(wishlistItem) {
//     try {

//       await addToCart(wishlistItem.product);
//       await removeFromWishlist(wishlistItem._id);
//     } catch (error) {
//       console.error("Error moving to cart:", error);
//     }
//   }

//   // Selected Address for checkout

//   function handleAddressSelection(checkoutAddressId) {
//     setSelectedAddress(checkoutAddressId);
//   }

//   // totalPrice
//   const totalPrice = cartItem.reduce(
//     (acc, curr) => acc + (curr?.product?.price || 0) * (curr?.quantity || 0),
//     0
//   );

//   // discount price
//   const totalDiscount = cartItem.reduce(
//     (acc, curr) => acc + (curr?.product?.discount || 0),
//     0
//   );

//   const deliveryCharge = 99;
//   const discountAmount = totalPrice * (totalDiscount / 100);
//   const finalPrice = totalPrice - discountAmount;
//   const finalAmount =
//     finalPrice < 500 ? finalPrice + deliveryCharge : finalPrice;
//   const saveAmount = discountAmount;

//   return (
//     <CartContext.Provider
//       value={{
//         product,
//         loading,
//         error,
//         cartItem,
//         cloading,
//         cerror,
//         addToCart,

//         updateCartItemQuantity,
//         removeFromCart,
//         wishlist,
//         wishlistLoading,
//         wishlistError,
//         addToWishlist,
//         removeFromWishlist,
//         moveToCart,
//         address,
//         addressLoading,
//         addressError,
//         handleAddressSelection,
//         selectedAddress,
//         totalPrice,
//         totalDiscount,
//         deliveryCharge,
//         finalAmount,
//         finalPrice,
//         saveAmount,
//         updateCart,
//         setUpdateWishlist,
//         updateWishlist,
//         removeWishlist,
//         quantityAlert,
//         existingItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../pages/useFetch";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export default useCartContext;

export function CartProvider({ children }) {
  // API calls
  const {
    data: product,
    loading,
    error,
  } = useFetch("http://localhost:4001/api/products");
  const {
    data: cartData,
    loading: cloading,
    error: cerror,
  } = useFetch("http://localhost:4001/api/cart");
  const {
    data: wishlistData,
    loading: wishlistLoading,
    error: wishlistError,
  } = useFetch("http://localhost:4001/api/wishlist");
  const {
    data: address,
    loading: addressLoading,
    error: addressError,
  } = useFetch("http://localhost:4001/api/v2/address");

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

  // Helper function to set alert state
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
          `http://localhost:4001/api/cart/update/${existingItem._id}`,
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
        const response = await fetch("http://localhost:4001/api/addcart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product: product._id, quantity: 1 }),
        });

        if (!response.ok) throw new Error("Failed to add item to cart");

        setAlert("cart", "success", "Item added to cart");
      }

      // Refresh cart data
      const updatedCart = await fetch("http://localhost:4001/api/cart").then(
        (res) => res.json()
      );
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
        `http://localhost:4001/api/cart/remove/${cartItemId}`,
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
        `http://localhost:4001/api/cart/update/${cartItemId}`,
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

      const response = await fetch("http://localhost:4001/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: product._id }),
      });

      if (!response.ok) throw new Error("Failed to add to wishlist");

      const updatedWishlist = await fetch(
        "http://localhost:4001/api/wishlist"
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
        `http://localhost:4001/api/wishlist/remove/${wishlistItemId}`,
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
