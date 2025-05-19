import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import useCartContext from "../context/CartContext";

const Navbar = () => {
  const { cartItem, wishlist, setSearch } = useCartContext();

  return (
    <header style={{ backgroundColor: "#D5006D" }}>
      <nav className="navbar navbar-expand-lg " data-bs-theme="light">
        <div className="container">
          <NavLink
            style={{ color: "#ffffff" }}
            to="/"
            className="navbar-brand  fw-medium"
          >
            Pendora
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-theme="dark"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex flex-grow-1 justify-content-center">
              <div className="d-flex w-50">
                <div className="input-group ">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    required={true}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                  <button
                    type="submit"
                    className="input-group-text btn btn-light"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <NavLink className="nav-link">
                  <button
                    style={{
                      color: "#ffffff",
                      borderColor: "#FFf",
                      backgroundColor: "#D5006D",
                    }}
                    className="btn p-1 rounded"
                  >
                    Login
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wishList" className="nav-link">
                  <span type="button" className="position-relative">
                    <i style={{ color: "#fff" }} className="bi bi-heart h5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {wishlist?.length}
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <span type="button" className="position-relative">
                    <i style={{ color: "#fff" }} className="bi bi-bag h5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {cartItem?.length}
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link ">
                  <span type="button" className="position-relative">
                    <i
                      style={{ color: "#fff" }}
                      className="bi bi-person-circle h4"
                    ></i>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
