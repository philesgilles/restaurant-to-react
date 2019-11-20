import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    let quantity = this.props.totalItems;
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky">
        <span aria-label="fake link to fix button float" to="/">
          {" "}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbar"
        >
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/home">
              Home
            </NavLink>
            <NavLink id="menu_link" className="nav-item nav-link" to="/menu">
              Menu
            </NavLink>
            <NavLink
              id="photo_link"
              className="nav-item nav-link"
              to="/pictures"
            >
              Pictures
            </NavLink>
            <NavLink id="info_link" className="nav-item nav-link" to="/info">
              Informations
            </NavLink>
            <NavLink
              id="order_link"
              className="nav-item nav-link"
              to="/reviews"
            >
              Reviews
            </NavLink>
            <NavLink
              id="contact_link"
              className="nav-item nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink id="order_link" className="nav-item nav-link" to="/order">
              Online takeway
            </NavLink>
            <NavLink className="nav-item nav-link ml-auto" to="/cart">
              <i className="fas fa-shopping-cart"></i>
              {quantity !== 0 ? (
                <span className="ml-1 badge badge-pill bg-white text-primary">
                  {quantity}
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalItems: state.totalItems
  };
};

export default connect(mapStateToProps)(Navbar);
