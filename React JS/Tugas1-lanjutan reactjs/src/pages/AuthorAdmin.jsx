import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import Navbar from "../components/Navbar";
import "../styles/AuthorAdmin.css"; // <-- panggil css

export default function AuthorAdmin() {
  const [authors, setAuthors] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", bio: "" });
  const [error, setError] = useState("");

  const fetchAuthors = async () => {
    try {
      const res = await axiosClient.get("/authors");
      setAuthors(res.data.data || []);
    } catch (err) {
      console.error(err);
      setError("gagal mengambil data author");
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post("/authors", form);
      setForm({ name: "", email: "", bio: "" });
      fetchAuthors();
    } catch (err) {
      console.error(err);
      setError("gagal menambahkan author");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("hapus penulis ini?")) return;
    try {
      await axiosClient.delete(`/authors/${id}`);
      fetchAuthors();
    } catch (err) {
      console.error(err);
      setError("gagal menghapus author");
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h2>kelola author (admin)</h2>

        <form className="simple-form" onSubmit={handleCreate}>
          <input name="name" placeholder="nama penulis" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="email" value={form.email} onChange={handleChange} required />
          <input name="bio" placeholder="bio (opsional)" value={form.bio} onChange={handleChange} />
          <button className="btn-primary" type="submit">tambah penulis</button>
        </form>

        {error && <p className="error-text">{error}</p>}

        <table className="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Bio</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((a) => (
              <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.bio || "-"}</td>
                <td>
                  <button className="btn-danger" onClick={() => handleDelete(a.id)}>hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
