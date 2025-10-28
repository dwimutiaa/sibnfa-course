import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import Navbar from "../components/Navbar";
import "../styles/GenreAdmin.css";

export default function GenreAdmin() {
  const [genres, setGenres] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const fetchGenres = async () => {
    try {
      const res = await axiosClient.get("/genres");
      setGenres(res.data.data || []);
    } catch (err) {
      console.error(err);
      setError("Gagal mengambil data genre");
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post("/genres", form);
      setForm({ name: "", description: "" });
      fetchGenres();
    } catch (err) {
      console.error(err);
      setError("Gagal menambahkan genre");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Hapus genre ini?")) return;
    try {
      await axiosClient.delete(`/genres/${id}`);
      fetchGenres();
    } catch (err) {
      console.error(err);
      setError("Gagal menghapus genre");
    }
  };

  const handleEdit = (genre) => {
    setEditingId(genre.id);
    setForm({ name: genre.name, description: genre.description || "" });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.put(`/genres/${editingId}`, form);
      setEditingId(null);
      setForm({ name: "", description: "" });
      fetchGenres();
    } catch (err) {
      console.error(err);
      setError("Gagal memperbarui genre");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({ name: "", description: "" });
  };

  return (
    <>
      <Navbar />
      <div className="genre-page-container">
        <h2>Kelola Genre (Admin)</h2>

        <form
          className="genre-form"
          onSubmit={editingId ? handleUpdate : handleCreate}
        >
          <input
            type="text"
            name="name"
            placeholder="Nama Genre"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Deskripsi (opsional)"
            value={form.description}
            onChange={handleChange}
          />
          <button className="btn-primary" type="submit">
            {editingId ? "Perbarui Genre" : "Tambah Genre"}
          </button>
          {editingId && (
            <button className="btn-secondary" type="button" onClick={handleCancel}>
              Batal
            </button>
          )}
        </form>

        {error && <p className="error-text">{error}</p>}

        <table className="genre-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((g) => (
              <tr key={g.id}>
                <td>{g.name}</td>
                <td>{g.description || "-"}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(g)}>
                    Edit
                  </button>
                  <button className="btn-danger" onClick={() => handleDelete(g.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
