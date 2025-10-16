<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorSeeder extends Seeder
{
    public function run(): void
    {
        Author::insert([
            ['name' => 'Pramoedya Ananta Toer', 'email' => 'pram@gmail.com', 'bio' => 'Penulis legendaris Indonesia.'],
            ['name' => 'Tere Liye', 'email' => 'tereliye@gmail.com', 'bio' => 'Penulis novel populer.'],
            ['name' => 'Dee Lestari', 'email' => 'dee@gmail.com', 'bio' => 'Penulis dan musisi Indonesia.'],
            ['name' => 'Andrea Hirata', 'email' => 'andrea@gmail.com', 'bio' => 'Penulis Laskar Pelangi.'],
            ['name' => 'Nadine Fatihah', 'email' => 'nadine@gmail.com', 'bio' => 'Penulis muda inspiratif.'],
        ]);
    }
}
