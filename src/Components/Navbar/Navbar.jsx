import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" />
          </a>

          {/* Custom Hamburger Button */}
          <button
            className={`navbar-toggler custom-toggler ${isOpen ? "open" : ""}`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar-collapse-custom ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              {["Fleet", "Drive With Us", "About Us", "Contact Us"].map(
                (item) => (
                  <li className="nav-item" key={item}>
                    <a className="nav-link" href="#">
                      {item}
                      <span className="nav-underline"></span>
                    </a>
                  </li>
                ),
              )}
            </ul>
            <div className="d-flex">
              <button className="navbar-reservation-button" type="button">
                Reservation
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
