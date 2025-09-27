import React from "react";

export default function Contact() {
  return (
    <section>
      <h2 className="mb-3">Hubungi kami</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Nama</label>
              <input className="form-control" placeholder="nama lengkap" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="email@contoh.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Pesan</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="tulis pesanmu..."
              />
            </div>
            <button type="button" className="btn btn-pink">
              Kirim
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h5>Alamat</h5>
          <p>Jl. contoh raya no. 1, jakarta</p>
          <h5>Jam operasional</h5>
          <p>Senin - Minggu: 07.00 - 23.00</p>
          <h5>Social</h5>
          <p>
            <a href="#" className="me-2">
              Instagram
            </a>
            <a href="#" className="me-2">
              Twitter
            </a>
            <a href="#">Github</a>
          </p>
        </div>
      </div>
    </section>
  );
}
