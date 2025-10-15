<!DOCTYPE html>
<html>
<head>
    <title>Daftar Author</title>
    <style>
        body {
            font-family: 'times new roman';
            background-color: #f8fafc;
            color: #333;
            margin: 40px auto;
            max-width: 600px;
            text-align: center;
        }
        h1 {
            color: #E8A0BF;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            background: #F8E8EE;
            margin: 8px 0;
            padding: 10px;
            border-radius: 8px;
        }
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
    <h1>Daftar Author</h1>
    <ul>
        @foreach ($authors as $author)
            <li>{{ $author['id'] }} - {{ $author['name'] }}</li>
        @endforeach
    </ul>

    <a href="/">Kembali ke Daftar Genre</a>
</body>
</html>
