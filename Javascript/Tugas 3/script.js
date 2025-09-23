// Produk awal yang akan ditampilkan di tabel produk //
let produk = [
  {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
  {id: 2, nama: "Mouse",  harga: 200000,  stok: 10},
  {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

function renderTabel() {
  const tbody = document.getElementById('tabelProduk');
  tbody.innerHTML = "";
  produk.forEach(p => {
    tbody.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.nama}</td>
        <td>${p.harga.toLocaleString()}</td>
        <td>${p.stok}</td>
      </tr>`;
  });
}

document.getElementById('formTambah').addEventListener('submit', e => {
  e.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const harga = parseInt(document.getElementById('harga').value);
  const stok = parseInt(document.getElementById('stok').value);
  const idBaru = produk.length ? produk[produk.length-1].id + 1 : 1;
  produk.push({id: idBaru, nama, harga, stok});
  e.target.reset();
  renderTabel();
});

document.getElementById('formHapus').addEventListener('submit', e => {
  e.preventDefault();
  const idHapus = parseInt(document.getElementById('idHapus').value);
  produk = produk.filter(p => p.id !== idHapus);
  e.target.reset();
  renderTabel();
});

renderTabel();