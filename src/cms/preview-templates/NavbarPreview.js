import React from "react";
import { Link } from "gatsby";

export const Navbar = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={getAsset(data.image)}
              alt="Kaldi"
              style={{ width: "88px" }}
            />
          </Link>
        </div>
        <div id="navMenu">
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              {data.test}
            </Link>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
