import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import CartContext from "../context/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div className="container ">
          <NavLink to="/" className="navbar-brand text-secondary fw-medium">
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

          <div className="collapse navbar-collapse mt-3 " id="navbarNav">
            <form className="input-group d-flex  w-25" role="search">
              <button className="btn btn-light" type="submit">
                <i className="bi bi-search"></i>
              </button>
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav mt-3">
              <li className="nav-item">
                <NavLink className="nav-link">
                  <button className="btn btn-secondary">Login</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/wishList" className="nav-link ">
                  <span type="button" className="position-relative">
                    <i className="bi bi-heart h5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                    </span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="nav-link h5">
                  <span type="button" className="position-relative">
                    <i className="bi bi-bag h5"></i>
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
