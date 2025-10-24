import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/DashboardAdmin.css"; // <-- panggil css dari folder styles

export default function DashboardAdmin() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>Assalamu'alaikum, {user.name || "admin"}</h1>
        <p>Ini Dashboard Admin — Admin Bisa Kelola Author & Genre.</p>

        <div className="admin-links">
          <Link className="btn-primary" to="/admin/authors">Kelola Author</Link>
          <Link className="btn-primary" to="/admin/genres">Kelola Genre</Link>
        </div>
      </div>
    </>
  );
}
