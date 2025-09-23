// class sesuai yang diinginkan //
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }
}

// untuk menyimpan data pelanggan (isi langsung dengan dummy data) //
const daftarPelanggan = [
  new Pelanggan("Dwi", "0812345", "Mobil"),
  new Pelanggan("Sinta", "0823456", "Motor"),
  new Pelanggan("Budi", "0834567", "Bus"),
  new Pelanggan("Andi", "0845678", "Sepeda"),
  new Pelanggan("Rina", "0856789", "Helikopter")
];

// Fungsi yang digunakan untuk menambahkan pelanggan baru //
function tambahPelanggan(nama, telepon, kendaraan) {
  const pelangganBaru = new Pelanggan(nama, telepon, kendaraan);
  daftarPelanggan.push(pelangganBaru);
  tampilkanDaftar();
}

// Fungsi yang digunakan untuk menampilkan daftar pelanggan ke tampilan tabel
function tampilkanDaftar() {
  const tbody = document.getElementById("daftarPelanggan");
  tbody.innerHTML = "";

  daftarPelanggan.forEach((p, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${p.nama}</td>
      <td>${p.nomorTelepon}</td>
      <td>${p.kendaraanDisewa}</td>
    `;
    tbody.appendChild(row);
  });
}

// yang digunakan untuk submit //
document.getElementById("formPenyewaan").addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const telepon = document.getElementById("telepon").value.trim();
  const kendaraan = document.getElementById("kendaraan").value;

  if (nama && telepon && kendaraan) {
    tambahPelanggan(nama, telepon, kendaraan);
    e.target.reset(); // untuk mengosongkan form //
  }
});

// tampilkan data dummy saat halaman pertama kali dibuka
tampilkanDaftar();
