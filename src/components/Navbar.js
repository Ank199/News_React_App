import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../Navbar.css';

export class Navbar extends Component {
  //   static propTypes = {

  //   }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <img
              style={{
                backgroundColor: "white",
                width: "50px",
                height: "50px",
              }}
              src={`${process.env.PUBLIC_URL}/favicon-32x32.png`}
              alt="Logo"
            />
            <Link className="navbar-brand" to="#">
              Fox-News
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                <li className="nav-item mx-3">
                  <Link className="nav-Link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                 
                <li className="nav-item mx-3">
                  <Link className="nav-Link" to="about">
                    About
                  </Link>
                
                </li>

                <li className="nav-item mx-3" >
                  <Link className="nav-Link" to="General">
                    General
                  </Link>
                </li>
                <li className="nav-item  mx-3">
                  <Link className="nav-Link" to="Bussiness">
                    Business
                  </Link>
                </li>
                <li className="nav-item mx-3" >
                  <Link className="nav-Link" to="Entertainment">
                    Entertainment
                  </Link>
                </li>
               
                <li className="nav-item mx-3" >
                  <Link className="nav-Link" to="#">
                    Science
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-Link" to="Health">
                    Health
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-Link" to="Sport">
                    Sports
                  </Link>
                </li>

                <li className="nav-item mx-3">
                  <Link className="nav-Link" to="Technology">
                    Technology
                  </Link>
                </li>
              </ul>

              <form className="d-flex " role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
