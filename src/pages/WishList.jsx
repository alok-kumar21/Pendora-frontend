// import useCartContext from "../context/CartContext";

// const WishList = () => {
//   const { wishlistcart, wishlistLoading, wishlistError } = useCartContext();

//   return (
//     <>
//       <section className="container bg-light mt-3">
//         <section>
//           <div>
//             <h5 className="text-center">
//               My WishList ({wishlistcart?.length})
//             </h5>
//           </div>
//           <div className="row">
//             {wishlistcart &&
//               wishlistcart?.map((item) => (
//                 <div key={item._id} className="col-md-3">
//                   <div className="card border-0 shadow">
//                     <img
//                       style={{ height: "50%", objectFit: "cover" }}
//                       src={item.images}
//                       alt=""
//                     />
//                     <div className="card-body">
//                       <p className="card-text text-center">{item.name}</p>
//                       <h5 className="card-text text-center">₹{item.price}</h5>
//                       <div className="d-grid">
//                         <button className="btn btn-secondary rounded-0">
//                           Move to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default WishList;



// import useCartContext from "../context/CartContext";

// const WishList = () => {
//   const { 
//     wishlist, 
//     wishlistLoading, 
//     wishlistError, 
//     removeFromWishlist,
//     moveToCart
//   } = useCartContext();

//   return (
//     <>
//       <section className="container bg-light mt-3">
//         {wishlistLoading && (
//           <div className="alert alert-success text-center">Loading...</div>
//         )}
//         {wishlistError && (
//           <div className="alert alert-danger text-center">
//             Failed to load wishlist
//           </div>
//         )}
//         <section>
//           <div>
//             <h5 className="text-center">
//               My WishList ({wishlist?.length || 0})
//             </h5>
//           </div>
//           {wishlist?.length === 0 && !wishlistLoading && (
//             <div className="text-center my-5">
//               <h4>Your wishlist is empty</h4>
//               <p>Add some products to your wishlist to see them here</p>
//             </div>
//           )}
//           <div className="row">
//             {wishlist?.map((item) => (
//               <div key={item._id} className="col-md-3 mb-4">
//                 <div className="card border-0 shadow h-100">
//                   <img
//                     style={{ height: "200px", objectFit: "cover" }}
//                     src={item.images}
//                     alt={item.name}
//                     className="card-img-top"
//                   />
//                   <div className="card-body d-flex flex-column">
//                     <h6 className="card-title">{item.name}</h6>
//                     <div className="mt-auto">
//                       <div className="d-flex justify-content-between align-items-center mb-2">
//                         <h5 className="card-text mb-0">₹{item.price}</h5>
//                         {item.discount > 0 && (
//                           <span className="badge bg-success">
//                             {item.discount}% OFF
//                           </span>
//                         )}
//                       </div>
//                       <div className="d-grid gap-2">
//                         <button 
//                           className="btn btn-primary rounded-0"
//                           onClick={() => moveToCart(item)}
//                         >
//                           Move to Cart
//                         </button>
//                         <button 
//                           className="btn btn-outline-danger rounded-0"
//                           onClick={() => removeFromWishlist(item._id)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default WishList;
import useCartContext from "../context/CartContext";

const WishList = () => {
  const { 
    wishlist, 
    wishlistLoading, 
    wishlistError,
    cartItem,
    removeFromWishlist,
    addToCart
  } = useCartContext();

  const handleMoveToCart = async (product) => {
    try {
      // Add to cart (will handle quantity if already exists)
      await addToCart(product);
      // Remove from wishlist
      await removeFromWishlist(product._id);
    } catch (error) {
      console.error("Error moving to cart:", error);
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">My Wishlist</h2>
          
          {/* Loading State */}
          {wishlistLoading && (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading your wishlist...</p>
            </div>
          )}

          {/* Error State */}
          {wishlistError && (
            <div className="alert alert-danger">
              Failed to load wishlist. Please try again later.
            </div>
          )}

          {/* Empty State */}
          {!wishlistLoading && !wishlistError && wishlist?.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-heart text-muted" style={{ fontSize: "3rem" }}></i>
              <h4 className="mt-3">Your wishlist is empty</h4>
              <p className="text-muted">
                Save your favorite items here to purchase them later
              </p>
            </div>
          )}

          {/* Wishlist Items */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {wishlist?.map((item) => {
              const inCart = cartItem?.some(cartItem => cartItem._id === item.product._id);
              
              return (
                <div key={item._id} className="col">
                  <div className="card h-100 shadow-sm">
                    <img 
                      src={item.product.images} 
                      className="card-img-top p-3" 
                      alt={item.product.name}
                      style={{ 
                        height: "200px", 
                        objectFit: "contain",
                        backgroundColor: "#f8f9fa"
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.product.name}</h5>
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div>
                            <span className="h5 text-primary">₹{item.product.price}</span>
                            {item.product.discount > 0 && (
                              <>
                                <span className="text-decoration-line-through text-muted ms-2">
                                  ₹{Math.round(item.product.price * (100 + item.product.discount) / 100)}
                                </span>
                                <span className="badge bg-success ms-2">
                                  {item.product.discount}% OFF
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <button 
                            className={`btn ${inCart ? 'btn-success' : 'btn-primary'}`}
                            onClick={() => handleMoveToCart(item.product)}
                          >
                            {inCart ? (
                              <>
                                <i className="bi bi-cart-check me-2"></i>
                                Already in Cart (Add +1)
                              </>
                            ) : (
                              <>
                                <i className="bi bi-cart-plus me-2"></i>
                                Move to Cart
                              </>
                            )}
                          </button>
                          <button 
                            className="btn btn-outline-danger"
                            onClick={() => removeFromWishlist(item._id)}
                          >
                            <i className="bi bi-trash me-2"></i>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WishList;