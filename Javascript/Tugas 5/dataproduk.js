// Pendataan produk awal (min 5 produk) //
let produkList = [
  { id: 1, nama: "Hijab", harga: 120000 },
  { id: 2, nama: "Gamis", harga: 250000 },
  { id: 3, nama: "Kaos Kaki", harga: 20000 },
  { id: 4, nama: "Dress Tunik", harga: 170000 },
  { id: 5, nama: "Ciput hijab", harga: 30000 }
];

// wadah fungsi //
const eventHandler = {
  tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
  hapus: (...id) => hapusProduk(...id),
  tampil: () => tampilkanProduk()
};

// Tambah produk dengan spead operator //
function tambahProduk(id, nama, harga) {
  // Spread operator untuk menambahkan produk baru ke array lama //
  produkList = [...produkList, { id, nama, harga }];
  console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

// Menghapus Produk dengan Rest Parameter //
function hapusProduk(...idList) {
  produkList = produkList.filter(p => !idList.includes(p.id));
  console.log(`Produk dengan id [${idList.join(", ")}] dihapus.`);
}

// Menampilkan produk dengan Destructuring //
function tampilkanProduk() {
  console.log("=== Daftar Produk ===");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga}`);
  });
  console.log("=====================");
}

// contoh penggunaan //
tampilkanProduk();                    // tampilan awal
eventHandler.tambah(6, "Rok panjang", 145000);
tampilkanProduk();                    // setelah ditambahkan produk
eventHandler.hapus(2, 4);             // menghapus produk Gamis & Dress tunik
tampilkanProduk();                    // setelah hapus

// nampilin hasil/tampilan tugas ini lewat terminal lokal = node dataproduk.js