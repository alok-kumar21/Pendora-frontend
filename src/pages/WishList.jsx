const WishList = () => {
  return (
    <>
      <section className="container bg-light mt-3">
        <section>
          <div>
            <h5 className="text-center">My WishList (1)</h5>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card border-0 shadow">
                <img
                  src="https://placehold.co/600x400?text=Hello+World"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text text-center">Men Premium Jacket</p>
                  <div className="d-grid">
                    <button className="btn btn-secondary rounded-0">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default WishList;
