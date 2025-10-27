import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import Navbar from "../components/Navbar";
import "../styles/AuthorAdmin.css";

export default function AuthorAdmin() {
  const [authors, setAuthors] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", bio: "" });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const fetchAuthors = async () => {
    try {
      const res = await axiosClient.get("/authors");
      setAuthors(res.data.data || []);
    } catch (err) {
      console.error(err);
      setError("Gagal mengambil data author");
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post("/authors", form);
      setForm({ name: "", email: "", bio: "" });
      fetchAuthors();
    } catch (err) {
      console.error(err);
      setError("Gagal menambahkan author");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Hapus penulis ini?")) return;
    try {
      await axiosClient.delete(`/authors/${id}`);
      fetchAuthors();
    } catch (err) {
      console.error(err);
      setError("Gagal menghapus author");
    }
  };

  const handleEdit = (author) => {
    setEditingId(author.id);
    setForm({
      name: author.name,
      email: author.email,
      bio: author.bio || "",
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.put(`/authors/${editingId}`, form);
      setEditingId(null);
      setForm({ name: "", email: "", bio: "" });
      fetchAuthors();
    } catch (err) {
      console.error(err);
      setError("Gagal memperbarui author");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({ name: "", email: "", bio: "" });
  };

  return (
    <>
      <Navbar />
      <div className="author-page-container">
        <h2>Kelola Penulis (Admin)</h2>

        <form
          className="author-form"
          onSubmit={editingId ? handleUpdate : handleCreate}
        >
          <input
            name="name"
            placeholder="Nama Penulis"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="bio"
            placeholder="Bio (opsional)"
            value={form.bio}
            onChange={handleChange}
          />
          <button className="btn-primary" type="submit">
            {editingId ? "Perbarui Penulis" : "Tambah Penulis"}
          </button>
          {editingId && (
            <button className="btn-secondary" type="button" onClick={handleCancel}>
              Batal
            </button>
          )}
        </form>

        {error && <p className="error-text">{error}</p>}

        <table className="author-table">
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
                  <button className="btn-edit" onClick={() => handleEdit(a)}>
                    Edit
                  </button>
                  <button className="btn-danger" onClick={() => handleDelete(a.id)}>
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
