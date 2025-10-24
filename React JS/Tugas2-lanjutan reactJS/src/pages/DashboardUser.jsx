import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";

export default function DashboardUser() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>Assalamu'alaikum {user.name || "user"}</h1>
        <Home />
      </div>
    </>
  );
}
