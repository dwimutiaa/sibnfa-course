import React, { useState, useEffect } from "react";
import books from "../utils/books";

export default function Book() {
  const [role, setRole] = useState("");
  const [modalBook, setModalBook] = useState(null); // untuk menampung buku yang dibaca

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);

  const openModal = (book) => {
    setModalBook(book);
  };

  const closeModal = () => {
    setModalBook(null);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>📚 Daftar Buku</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
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
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: "100px",
                height: "130px",
                borderRadius: "6px",
                objectFit: "cover",
              }}
            />
            <h3 style={{ margin: "10px 0", color: "#222" }}>{book.title}</h3>
            <p><b>Penulis:</b> {book.author}</p>
            <p><b>Tahun:</b> {book.year}</p>
            
            {/* cuplikan cerita */}
            {book.story && (
              <p style={{ fontSize: "0.9rem", color: "#555", margin: "8px 0" }}>
                {book.story.length > 100 
                  ? book.story.substring(0, 100) + "..." 
                  : book.story}
              </p>
            )}

            {role === "user" && (
              <button
                onClick={() => openModal(book)}
                style={{
                  backgroundColor: "#F2BED1",
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#E89DBF")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#F2BED1")
                }
              >
                📖 Baca
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal baca buku */}
      {modalBook && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>{modalBook.title}</h2>
            <p style={{ fontStyle: "italic", color: "#555" }}>by {modalBook.author} ({modalBook.year})</p>
            <p style={{ marginTop: "15px", lineHeight: "1.5" }}>{modalBook.story}</p>
            <button
              onClick={closeModal}
              style={{
                marginTop: "20px",
                padding: "8px 16px",
                backgroundColor: "#F2BED1",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ✖ Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
