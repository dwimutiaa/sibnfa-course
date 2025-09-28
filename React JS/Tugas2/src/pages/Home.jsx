import React from "react";
import profilImg from "../assets/Home/profil.jpg"; 
import breakfastImg from "../assets/Home/breakfast.jpg";
import poolImg from "../assets/Home/pool.jpg";

export default function Home() {
  return (
    <section>
      {/* Hero */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="display-5">Selamat Datang Di Dwi Hotel</h1>
          <p className="lead">
            Kita membuat tampilan home yang rapi: hero, fitur, dan galeri. isi
            teks dan gambar bisa disesuaikan sesuai kreativitas.
          </p>
          <p>Alamat: Jl. contoh no. 1, Jakarta · telepon: (021) 555-0123</p>
          <a className="btn btn-pink" href="#features">
            Lihat fitur
          </a>
        </div>
        <div className="col-md-6">
          <img
            src={profilImg}
            alt="hotel room"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Features */}
      <div id="features" className="row text-center mb-5">
        <div className="col-md-4 mb-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Kamar nyaman</h5>
              <p className="card-text">
                Kamar luas, AC, wifi cepat, dan layanan kebersihan 24 jam.
              </p>
              <a href="#!" className="btn btn-pink">
                Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Sarapan Pagi</h5>
              <p className="card-text">
                Sarapan prasmanan pilihan lokal dan internasional setiap pagi.
              </p>
              <a href="#!" className="btn btn-pink">
                Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Lokasi Strategis</h5>
              <p className="card-text">
                Mudah dijangkau dari stasiun dan bandara.
              </p>
              <a href="#!" className="btn btn-pink">
                Detail
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="row g-3">
        <div className="col-md-4">
          <img
            src={profilImg}  
            className="img-fluid rounded"
            alt="profil"
          />
        </div>
        <div className="col-md-4">
          <img
            src={breakfastImg}
            className="img-fluid rounded"
            alt="breakfast"
          />
        </div>
        <div className="col-md-4">
          <img
            src={poolImg}
            className="img-fluid rounded"
            alt="pool"
          />
        </div>
      </div>
    </section>
  );
}