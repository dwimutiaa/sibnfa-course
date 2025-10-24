import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link
            to={role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
            className="navbar-brand"
          >
            📚 Book<span>App</span>
          </Link>

          <div className="navbar-links">
            {role === "admin" && (
              <>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/authors">Authors</Link>
                <Link to="/admin/genres">Genres</Link>
              </>
            )}
            {role === "user" && (
              <>
                <Link to="/user/dashboard">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/genres">Genres</Link>
              </>
            )}
          </div>
        </div>

        <div className="navbar-right">
          {localStorage.getItem("user") ? (
            <>
              <span className="navbar-user">
                👤 {user.name || "User"}
              </span>
              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/register" className="btn-register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
