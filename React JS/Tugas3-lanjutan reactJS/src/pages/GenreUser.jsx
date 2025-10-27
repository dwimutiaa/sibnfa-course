import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import Navbar from "../components/Navbar";
import "../styles/GenreUser.css";

export default function GenreAdmin() {
  const [genres, setGenres] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [error, setError] = useState("");

  const fetchGenres = async () => {
    try {
      const res = await axiosClient.get("/genres");
      setGenres(res.data.data || []);
    } catch (err) {
      console.error(err);
      setError("Gagal ambil genre");
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post("/genres", form);
      setForm({ name: "", description: "" });
      fetchGenres();
    } catch (err) {
      console.error(err);
      setError("Gagal tambah genre");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Hapus genre?")) return;
    try {
      await axiosClient.delete(`/genres/${id}`);
      fetchGenres();
    } catch (err) {
      console.error(err);
      setError("Gagal hapus");
    }
  };

  const handleEdit = async (g) => {
    const name = prompt("Nama", g.name);
    const description = prompt("Deskripsi", g.description || "");
    if (name == null) return;
    try {
      await axiosClient.put(`/genres/${g.id}`, { name, description });
      fetchGenres();
    } catch (err) {
      console.error(err);
      setError("Gagal update");
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h2>Kelola Genre (admin)</h2>

        <form className="simple-form" onSubmit={handleCreate}>
          <input name="name" placeholder="Nama Genre" value={form.name} onChange={handleChange} required />
          <input name="description" placeholder="Deskripsi" value={form.description} onChange={handleChange} />
          <button className="btn-primary" type="submit">Tambah Genre</button>
        </form>

        {error && <div className="error-text">{error}</div>}

        <ul className="genre-list">
          {genres.map((g) => (
            <li key={g.id}>
              <b>{g.name}</b> — {g.description}
              <div style={{ marginTop: 8 }}>
                <button className="btn" onClick={() => handleEdit(g)}>edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(g.id)}>hapus</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
