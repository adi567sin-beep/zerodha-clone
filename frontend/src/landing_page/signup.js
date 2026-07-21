import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  console.log("Signup component loaded");
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.username.trim() === "") {
      setError("Username is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (user.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const res = await axios.post(
        "https://zerodha-clone-2-gbab.onrender.com/signup",
        user
      );

      console.log(res.data);

      setError("");
      setSuccess("Signup Successful!");
      localStorage.setItem("isLoggedIn", "true");
      console.log(localStorage.getItem("isLoggedIn"));
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
  console.log(err.response);
  console.log(err.response?.data);

  if (err.response) {
    console.log(err.response.data.message);

    if (err.response.data.message === "Email already exists") {
      localStorage.setItem("isLoggedIn", "true");
      console.log("Saved:", localStorage.getItem("isLoggedIn"));

      setError("Welcome back!");

      setTimeout(() => {
        navigate("/");
      }, 2000);

      return;
    }

    setError(err.response.data.message);
  } else {
    setError("Server Error");
  }
}
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <h2 className="text-center mb-4">
            Signup
          </h2>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Username
              </label>

              <input
                type="text"
                className="form-control"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Signup
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Signup;