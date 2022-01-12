import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbars() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/home">
        Ist SITE
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <Link to="/home" class="nav-link">
              Home{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/About" class="nav-link ">
              about
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link ">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
