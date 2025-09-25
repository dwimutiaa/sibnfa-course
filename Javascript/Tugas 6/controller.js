// controller.js
import users from "./data.js";

const index = () => {
    // Tampilkan data menggunakan map() //
    const userList = users.map((user, index) => {
        console.log(`User ${index + 1}:`);
        console.log(`Nama: ${user.nama}`);
        console.log(`Umur: ${user.umur}`);
        console.log(`Alamat: ${user.alamat}`);
        console.log(`Email: ${user.email}`);
        console.log('-------------------');
        return user;
    });
    return userList;
}

const store = () => { 
    // Tambahkan data dengan detail yang spesifik //
    const newUsers = [
        { 
            nama: 'Bilqisti Azizah', 
            umur: 19, 
            alamat: 'Jl. Indah No. 99, Medan', 
            email: 'azizah@gmail.com' 
        },
        { 
            nama: 'Wulandari', 
            umur: 25, 
            alamat: 'Jl. Kusuma No. 67, Makassar', 
            email: 'wulandari@gmail.com' 
        },
        { 
            nama: 'Asma Nadia', 
            umur: 30, 
            alamat: 'Jl. Mahali No. 09, Jambi', 
            email: 'asmanadia@gmail.com' 
        }
    ];

    // Tampilkan data yang akan ditambahkan didalam format objek //
    console.log('Data yang akan ditambahkan:');
    newUsers.forEach((user) => {
        console.log(user);
    });

    // Mengirim data baru ke array users //
    users.push(...newUsers);
    
    console.log('\nData berhasil ditambahkan!');
    return users;
}

const destroy = () => {
    // Menghapus data terakhir //
    const removedUser = users.pop();
    
    console.log('Data terakhir yang dihapus:');
    console.log(removedUser);
    
    return users;
}

export { index, store, destroy };