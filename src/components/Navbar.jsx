

import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import CartContext from "../context/CartContext";
import { useContext } from "react";

const Navbar = () => {
  return (
    <header style={{ backgroundColor: "#0a192f" }}>
      <nav className="navbar navbar-expand-lg " data-bs-theme="light">
        <div className="container">
          <NavLink
            style={{ color: "#64ffda" }}
            to="/"
            className="navbar-brand  fw-medium"
          >
            Pendora
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
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
              <form className="d-flex w-50" role="search">
                <div className="input-group">
                  <input
                    className="form-control "
                    type="search"
                    placeholder="Search"
                  />
                  <button
                    className="input-group-text btn btn-outline-secondary"
                    type="submit"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link">
                  <button
                    style={{
                      color: "#64ffda",
                      borderColor: "#64ffda",
                      backgroundColor: "#0a192f",
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
                    <i
                      style={{ color: "#64ffda" }}
                      className="bi bi-heart h5"
                    ></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <span type="button" className="position-relative">
                    <i
                      style={{ color: "#64ffda" }}
                      className="bi bi-bag h5"
                    ></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                    </span>
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
