import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-pink">
        <div className="container">
          <Link className="navbar-brand" to="/">Dwi Hotel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            </div>
        </div>
      </nav>

      <main className="py-5">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </main>

      <footer className="bg-pink py-4">
        <div className="container text-center text-muted">© {new Date().getFullYear()} Dwi Mutia Afifah - Tugas 1</div>
      </footer>
    </div>
  )
}