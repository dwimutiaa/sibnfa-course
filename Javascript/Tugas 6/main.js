// main.js //
import { index, store, destroy } from "./controller.js";

const main = () => {
    console.log('=== Daftar User Awal ===');
    index(); // Menampilkan data awal //

    console.log('\n=== Menambah Data ===');
    store(); // Menambahkan dua data //

    console.log('\n=== Daftar User Setelah Ditambah ===');
    index(); // Menampilkan data setelah dilakukannya tambah data //

    console.log('\n=== Menghapus Data ===');
    destroy(); // Menghapus data terakhir //

    console.log('\n=== Daftar User Setelah Dihapus ===');
    index(); // Menampilkan data setelah dilakukannya penghapusan
}

main();