<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Buku</title>

    <style>
        /* Tampilan halaman */
        body {
            font-family: "times new roman";
            background: linear-gradient(to right, #F9F5F6, #F2BED1, #F9F5F6);
            margin: 0;
            padding: 0;
        }

        .container {
            width: 80%;
            margin: 50px auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
        }

        /* Judul Halaman */
        h1 {
            text-align: center;
            color: #E8A0BF;
            margin-bottom: 30px;
        }

        /* Tabel data buku */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: center;
        }

        th {
            background-color: #E8A0BF;
            color: white;
            text-transform: uppercase;
        }

        tr:nth-child(even) {
            background-color: #FFF0F5;
        }

        tr:hover {
            background-color: #FDCEDF;
            transition: 0.3s;
        }

        /* Tombol navigasi */
        .nav-buttons {
            text-align: center;
            margin-top: 25px;
        }

        .nav-buttons a {
            display: inline-block;
            background-color: #E8A0BF;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 8px;
            margin: 0 10px;
            transition: 0.3s;
        }

        .nav-buttons a:hover {
            background-color: #F2BED1;
        }

        /* footer */
        .footer {
            text-align: center;
            margin-top: 25px;
            font-size: 14px;
            color: #E8A0BF;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Judul Halaman -->
        <h1>Daftar Buku</h1>

        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Judul Buku</th>
                    <th>Penerbit</th>
                    <th>Tahun</th>
                    <th>Author ID</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($books as $index => $book)
                    <tr>
                        <td>{{ $index + 1 }}</td>
                        <td>{{ $book->title }}</td>
                        <td>{{ $book->publisher }}</td>
                        <td>{{ $book->year }}</td>
                        <td>{{ $book->author_id }}</td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5">Tidak ada data buku</td>
                    </tr>
                @endforelse
            </tbody>
        </table>

        <!-- tombol navigasi -->
        <div class="nav-buttons">
        <div style="text-align:center;">
            <a href="/authors" class="btn"> Lihat Daftar Author</a>
            <a href="/genres" class="btn"> Lihat Daftar Genre</a>
        </div>

        <!-- footer -->
        <div class="footer">
            <p>🩷 Laravel | Dwi Mutia Afifah 🩷</p>
        </div>
    </div>
</body>
</html>
