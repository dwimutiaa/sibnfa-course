// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";

function App() {
  return (
    <Router>
      <div>
        {/* navbar */}
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end", // pindah ke kanan
            gap: "20px",
            padding: "15px 30px",
            backgroundColor: "#F2BED1",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
          <Link
            to="/book"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Book
          </Link>
        </nav>

        {/* routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;