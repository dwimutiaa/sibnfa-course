import React, { useState, useEffect } from "react";
import books from "../utils/books";

function Home() {
  const [notif, setNotif] = useState("");
  const [role, setRole] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setToken(localStorage.getItem("token"));
  }, []);

  const handleBuy = async (bookId, price) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          book_id: bookId,
          total_amount: price,
        }),
      });

      if (!response.ok) throw new Error("Gagal membuat transaksi");

      const data = await response.json();
      setNotif(`✅ Transaksi berhasil! Kode: ${data.data.order_number}`);
      setTimeout(() => setNotif(""), 3000);
    } catch (err) {
      console.error(err);
      setNotif("❌ Gagal melakukan transaksi");
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>📚 Halaman Home</h1>

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

            {role === "user" && (
              <>
                <p><b>Harga:</b> Rp{book.price.toLocaleString()}</p>
                <button
                  onClick={() => handleBuy(book.id, book.price)}
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
                  🛒 Beli
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {notif && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fff",
            border: "2px solid #F2BED1",
            padding: "10px 20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {notif}
        </div>
      )}
    </div>
  );
}

export default Home;

