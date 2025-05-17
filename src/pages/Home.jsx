import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* catogery */}
      <section>
        <div className="container mt-3">
          <div className="row">
            <Link to="/v1/categories/680e71e4cd9ad19fdf20f765" className="col">
              <img
                style={{ width: "8rem" }}
                src="https://static.vecteezy.com/system/resources/thumbnails/048/045/189/small/portrait-of-a-young-casual-man-isolated-on-transparent-background-png.png"
                alt=""
                className="img-fluid"
              />
              <p className="ms-5 text-dark text-decoration-none">Men</p>
            </Link>
            <div className="col">
              <img
                style={{ width: "8rem" }}
                src="https://static.vecteezy.com/system/resources/thumbnails/027/729/264/small/young-woman-in-white-t-shirt-isolated-png.png"
                alt=""
                className="img-fluid"
              />
              <p className="ms-5">Women</p>
            </div>
            <div className="col">
              <img
                style={{ width: "8rem" }}
                src="https://freepngimg.com/thumb/kids/29033-9-child-transparent-image-thumb.png"
                alt=""
                className="img-fluid"
              />
              <p className="ms-5">Kids</p>
            </div>
            <div className="col">
              <img
                style={{ width: "8rem" }}
                src="https://static.vecteezy.com/system/resources/thumbnails/022/610/083/small/3d-laptop-with-headphone-symbol-on-the-screen-online-listening-to-music-png.png"
                alt=""
                className="img-fluid"
              />
              <p className="ms-5">Eletronics</p>
            </div>
            <div className="col">
              <img
                style={{ width: "8rem" }}
                src="https://static.vecteezy.com/system/resources/thumbnails/042/124/761/small/ai-generated-cozy-armchair-and-coffee-table-isolated-on-transparent-background-with-clipping-path-3d-render-free-png.png"
                alt=""
                className="img-fluid"
              />
              <p className="ms-5">Home</p>
            </div>
          </div>
        </div>
      </section>
      {/* carousel */}
      <section className="container mt-4">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.vectorstock.com/i/500p/09/80/online-shopping-banner-vector-17230980.jpg"
                className="d-block w-100 "
                style={{ height: "30rem" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://thumbs.dreamstime.com/z/online-shopping-web-banner-template-design-flat-style-vector-illustration-191895463.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "30rem" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/free-vector/flat-design-grocery-store-sale-banner_23-2151074240.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "30rem" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* collection */}

      <section className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 p-4 bg-light">
            <div className="d-flex ">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "8rem", height: "9rem" }}
                />
              </div>

              <div className="ms-4">
                <p>New Arivals</p>
                <h5 className="mt-4">Summar Collection</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis, ratione!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-4 bg-light">
            <div className="d-flex">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: "8rem", height: "9rem" }}
                />
              </div>
              <div className="ms-4">
                <p>New Arivals</p>
                <h5 className="mt-4">Summar Collection</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis, ratione!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
