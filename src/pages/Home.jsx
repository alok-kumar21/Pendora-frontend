import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Home = () => {
  return (
    <>
      {/* catogery */}
      <section>
        <div className="container mt-3">
          <div className="row">
            <Link to="/productlisting" className="col text-decoration-none">
              <img
                style={{ width: "8rem" }}
                alt="images-here"
                src="https://static.thenounproject.com/png/65496-200.png"
                className="img-fluid"
              />
              <p className="ms-5 text-dark ">All Products</p>
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
                className="d-block w-100 img-fluid"
                style={{ height: "30rem" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://thumbs.dreamstime.com/z/online-shopping-web-banner-template-design-flat-style-vector-illustration-191895463.jpg"
                className="d-block w-100 img-fluid"
                alt="..."
                style={{ height: "30rem" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/free-vector/flat-design-grocery-store-sale-banner_23-2151074240.jpg"
                className="d-block w-100 img-fluid"
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
      {/* New Arrivals */}

      <section className="container mt-5">
        <div className="mb-4">
          <h4>New Arrivals</h4>
        </div>
        <div className="row">
          <div className="col-md-3 ">
            <div className="card">
              <img
                src="https://adornhomez.com/cdn/shop/products/Lawson_84.5_Recessed_Arm_Sofa_300x300.png?v=1670074470"
                alt="img-sofa"
                className="img-fluid rounded"
              />

              <div className="card-body">
                <p className="text-center">
                  <strong>Designer sofa</strong>
                </p>
                <p className="text-center">
                  <strong>₹</strong> 10,000
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://fernindia.com/wp-content/uploads/2024/04/Artboard-1-148-300x300.png"
                alt="img-sofa"
                className="img-fluid rounded"
              />

              <div className="card-body">
                <p className="text-center">
                  <strong>King Size Bed</strong>
                </p>
                <p className="text-center">
                  <strong>₹</strong> 15,000
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://olayla.in/cdn/shop/files/vedaUMIshirtPeachprintTARA1_300x300.jpg?v=1746604850"
                alt="img-sofa"
                className="img-fluid rounded"
              />

              <div className="card-body">
                <p className="text-center">
                  <strong>Brand New Dress</strong>
                </p>
                <p className="text-center">
                  <strong>₹</strong> 7,000
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://bhatiamobile.com/file/2023/07/OnePlus-Nord-3-5G_Misty-Green_1-300x300.webp"
                alt="img-sofa"
                className="img-fluid rounded"
              />

              <div className="card-body">
                <p className="text-center">
                  <strong>Brand New Dress</strong>
                </p>
                <p className="text-center">
                  <strong>₹</strong> 45,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* collections */}

      <section className=" container mt-5 mb-5">
        <div className="mb-4">
          <h4>New Collection</h4>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-3">
              <img
                src="https://basicslife.com/cdn/shop/articles/71_222a9ad5-e25f-4205-b3c8-318a039b4a12.jpg?v=1749816173&width=600"
                alt="img-summer"
                className="img-fluid"
              />
              <div className="card-body">
                <p>
                  <strong className="h4">Boys Summer Collection</strong>
                </p>
                <p>
                  Cool clothes for hot days, Where comfort meets bold fashion.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mt-3">
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kids-clothing-summer-off-shop-now-poster-design-template-5a244d4b59f20ec11d85ac6b1597f40e_screen.jpg?ts=1698158016"
                alt="img-summer"
                className="img-fluid"
              />
              <div className="card-body">
                <p>
                  <strong className="h4">Girls Summer Collection</strong>
                </p>
                <p>
                  Cool clothes for hot days, Where comfort meets bold fashion.
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
