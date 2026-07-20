import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = false; // Replace this with your actual login check

  const handleDashboard = () => {
    if (!isLoggedIn) {
      alert("Please sign up or log in to access the dashboard.");
      navigate("/signup");
      return;
    }
    window.location.href = "http://localhost:3001";
  };
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <a class="navbar-brand" href="#">
          <img
            src="media/images/logo2.png"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">

                <a class="nav-link active" aria-current="page" href="/signup">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/products">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/support">
                  Support
                </a>
              </li>

              <li class="nav-item">
                <a href="http://localhost:3001" onclick={(e) => {
                  e.preventDefault();
                  handleDashboard();
                }} style={{ textDecoration: "none", color: "black", marginLeft: "40px", marginTop: "8px", display: "inline-block" }}>
                  Dashboard
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;