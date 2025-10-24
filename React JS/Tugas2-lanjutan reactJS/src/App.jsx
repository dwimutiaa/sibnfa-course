import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import semua halaman
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardUser from "./pages/DashboardUser";
import AuthorAdmin from "./pages/AuthorAdmin";
import GenreAdmin from "./pages/GenreAdmin";
import GenreUser from "./pages/GenreUser";
import Book from "./pages/Book";

// import komponen proteksi
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* redirect default ke login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* halaman publik */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* area admin */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute role="admin">
              <DashboardAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/authors"
          element={
            <PrivateRoute role="admin">
              <AuthorAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/genres"
          element={
            <PrivateRoute role="admin">
              <GenreAdmin />
            </PrivateRoute>
          }
        />

        {/* area user */}
        <Route
          path="/user/dashboard"
          element={
            <PrivateRoute role="user">
              <DashboardUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/books"
          element={
            <PrivateRoute role="user">
              <Book />
            </PrivateRoute>
          }
        />
        <Route
          path="/genres"
          element={
            <PrivateRoute role="user">
              <GenreUser />
            </PrivateRoute>
          }
        />

        {/* fallback ke login jika route tidak ditemukan */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
