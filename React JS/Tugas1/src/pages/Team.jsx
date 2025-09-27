import React from "react";
import profil1Img from "../assets/Team/profil1.jpg"; 
import profil2Img from "../assets/Team/profil2.jpg";
import profil3Img from "../assets/Team/profil3.jpg";

const members = [
  {
    name: "Dwi",
    role: "founder & frontend dev",
    img: profil1Img,
  },
  {
    name: "Mutia",
    role: "ui/ux designer",
    img: profil2Img,
  },
  {
    name: "Afifah",
    role: "backend dev",
    img: profil3Img,
  },
];

export default function Team() {
  return (
    <section>
      <h2 className="mb-4">Tim Kami</h2>
      <p className="text-muted">
        Tim kecil yang berdedikasi untuk membuat pengalaman menginap terbaik.
      </p>

      <div className="row">
        {members.map((m, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm border-0">
              <img
                src={m.img}
                className="card-img-top rounded-circle mx-auto mt-4"
                style={{ width: 120, height: 120, objectFit: "cover" }}
                alt={m.name}
              />
              <div className="card-body">
                <h5 className="card-title text-capitalize">{m.name}</h5>
                <p className="card-text text-muted">{m.role}</p>
                <p className="small">
                  Bio singkat: suka ngoding dan ngopi, fokus ke kualitas dan UX.
                </p>
                <div>
                  <a className="btn btn-outline-pink btn-sm me-2" href="#">
                    Lihat github
                  </a>
                  <a className="btn btn-pink btn-sm" href="#">
                    Hubungi
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
