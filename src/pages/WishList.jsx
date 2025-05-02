import useCartContext from "../context/CartContext";

const WishList = () => {
  const { wishlistcart, wishlistLoading, wishlistError } = useCartContext();

  return (
    <>
      <section className="container bg-light mt-3">
        <section>
          <div>
            <h5 className="text-center">
              My WishList ({wishlistcart?.length})
            </h5>
          </div>
          <div className="row">
            {wishlistcart &&
              wishlistcart?.map((item) => (
                <div key={item._id} className="col-md-3">
                  <div className="card border-0 shadow">
                    <img
                      style={{ height: "50%", objectFit: "cover" }}
                      src={item.images}
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text text-center">{item.name}</p>
                      <h5 className="card-text text-center">₹{item.price}</h5>
                      <div className="d-grid">
                        <button className="btn btn-secondary rounded-0">
                          Move to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default WishList;
