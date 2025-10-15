<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas 1 Form Nilai Ujian</title>
<!-- Bagian CSS -->
    <style>
        /* Bagian halaman */
        body {
            font-family: 'Segoe UI', Tahoma, sans-serif;
            background: linear-gradient(135deg, #F8E8EE, #e4f0ff);
            padding: 40px;
        }
        /*container utama*/
        .container {
            width: 360px;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            transition: 0.3s;
        }

        .container:hover {
            transform: scale(1.02);
        }
         /* Judul form */
        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-top: 10px;
            font-weight: bold;
            color: #333;
        }
         /* INPUT */
        input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 6px;
            box-sizing: border-box;
            font-size: 14px;
        }
         /* Tombol Kirim */
        input[type=submit] {
            background-color: #F2BED1;
            color: black;
            border: none;
            cursor: pointer;
            margin-top: 15px;
            font-weight: bold;
        }

        input[type=submit]:hover {
            background-color: #F2BED1;
        }
         /* Hasil Output */
        .hasil {
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            font-size: 15px;
        }
         /* Status Lulus */
        .lulus {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
         /* Status Remidial */
        .remedial {
            background-color: #ff5967ff;
            color: #ffffffff;
            border: 1px solid #ff5967ff;
        }
    </style>
</head>
<body>

<!-- Container utama -->
<div class="container">
    <h2>Form Nilai Ujian</h2>

    <form method="post">
        <label>Nama:</label>
        <input type="text" name="nama" required>

        <label>Email:</label>
        <input type="email" name="email" required>

        <label>Nilai Ujian:</label>
        <input type="number" name="nilai" required min="0" max="100">

        <input type="submit" name="proses" value="Kirim">
    </form>

    <?php
    if (isset($_POST['proses'])) {
        $nama = htmlspecialchars($_POST['nama']);
        $email = htmlspecialchars($_POST['email']);
        $nilai = $_POST['nilai'];

        // Menampilkan hasil input
        echo "<div class='hasil'>";
        echo "<p><strong>Nama:</strong> $nama</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Nilai:</strong> $nilai</p>";

        // Struktur kendali
        if ($nilai > 70) {
            echo "<div class='hasil lulus'><strong>Status:</strong> LULUS </div>";
        } else {
            
            // Jika nilai kurang dari atau sama dengan 70 → Remedial
            echo "<div class='hasil remedial'><strong>Status:</strong> REMEDIAL </div>";
        }

        echo "</div>";
    }
    ?>
</div>

</body>
</html>
