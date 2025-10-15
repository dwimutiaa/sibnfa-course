<!DOCTYPE html>
<html>
<head>
    <title>Daftar Genre</title>

    <!-- CSS -->
    <style>
        body {
            font-family: 'times new roman';
            background-color: #f8fafc;
            color: #333;
            margin: 40px auto;
            max-width: 600px;
            text-align: center;
        }

        /* Judul */
        h1 {
            color: #E8A0BF;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            background: #F8E8EE;
            margin: 5px 0;
            padding: 10px;
            border-radius: 8px;
        }

        /* tombol navigasi genre */
        a {
            display: inline-block;
            margin-top: 20px;
            color: white;
            background-color: #F2BED1;
            padding: 10px 20px;
            border-radius: 6px;
            text-decoration: none;
        }
        a:hover {
            background-color: #F2BED1;
        }
    </style>
</head>
<body>
    <!-- judul halaman -->
    <h1>Daftar Genre</h1>
    <ul>
        @foreach ($genres as $genre)
            <li>{{ $genre['id'] }} - {{ $genre['name'] }}</li>
        @endforeach
    </ul>
    <!-- tombol menuju halaman author -->
    <a href="/authors">Lihat Daftar Author</a>
</body>
</html>
