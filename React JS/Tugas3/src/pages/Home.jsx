// src/pages/Home.jsx
import React, { useState } from "react";
import books from "../utils/books";

function Home() {
  const [notif, setNotif] = useState("");

  const handleClick = () => {
    setNotif("✅ produk baru berhasil ditambahkan!");
    setTimeout(() => setNotif(""), 3000); // notif hilang setelah 3 detik
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <h1>Halaman Home</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: "3px solid #F2BED1",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{ width: "100px", height: "130px" }}
            />
            <h3>{book.title}</h3>
            <br />
            <p><b>Penulis:</b> {book.author}</p>
            <p><b>Tahun:</b> {book.year}</p>
            <p style={{ fontSize: "0.9em", color: "#555" }}>
              {book.description}
            </p>
          </div>
        ))}
      </div>

      {/* tombol bawah tengah */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        {notif && (
          <p style={{ color: "green", fontWeight: "bold", marginBottom: "10px" }}>
            {notif}
          </p>
        )}
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#F2BED1",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ➕ Tambah Produk Baru
        </button>
      </div>
    </div>
  );
}

export default Home;