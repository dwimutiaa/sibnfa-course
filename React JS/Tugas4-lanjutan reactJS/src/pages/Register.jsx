import React, { useState } from "react";
import axiosClient from "../api/axiosClient";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axiosClient.post("/register", form);
      setSuccess("Registrasi berhasil! Silakan login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      const msg =
        err?.response?.data?.message ||
        (err?.response?.data?.errors
          ? JSON.stringify(err.response.data.errors)
          : "Registrasi gagal");
      setError(msg);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Daftar Akun</h2>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <label>Nama Lengkap</label>
        <input
          name="name"
          placeholder="Masukkan nama lengkap"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Masukkan email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Kata Sandi</label>
        <input
          name="password"
          type="password"
          placeholder="Masukkan kata sandi"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Peran</label>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" className="register-button">
          Daftar
        </button>

        <p className="register-footer">
          Sudah punya akun? <Link to="/login">Masuk</Link>
        </p>
      </form>
    </div>
  );
}
