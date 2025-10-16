<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Author</title>

    <!-- CSS -->
    <style>
        body {
            font-family: "times new roman";
            background: linear-gradient(to right, #F9F5F6, #F2BED1, #F9F5F6 );
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

        h1 {
            text-align: center;
            color: #E8A0BF;
            margin-bottom: 30px;
        }

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

        .btn {
            display: inline-block;
            background-color: #E8A0BF;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 8px;
            margin-top: 20px;
            transition: 0.3s;
        }

        .btn:hover {
            background-color: #E8A0BF;
        }

        .footer {
            text-align: center;
            margin-top: 25px;
            font-size: 14px;
            color: #E8A0BF;
        }
    </style>
</head>
<body>
    <!-- judul halaman -->
<div class="container">
        <h1>Daftar Author</h1>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama Author</th>
                </tr>
            </thead>
            <tbody>
                <!-- Data author -->
                @forelse ($authors as $index => $author)
                    <tr>
                        <td>{{ $index + 1 }}</td>
                        <td>{{ $author['name'] }}</td>

                    </tr>
                @empty
                    <tr>
                        <td colspan="2">Tidak ada data author</td>
                    </tr>
                @endforelse
            </tbody>
        </table> 
        <!-- Tombol navigasi -->
        <div style="text-align:center;">
            <a href="/genres" class="btn"> Lihat Daftar Genre</a>
            <a href="/books" class="btn"> Lihat Daftar Buku</a>
        </div>

        <div class="footer">
            <p>🩷 Laravel | Dwi Mutia Afifah 🩷</p>
        </div>
    </div>
</body>
</html>