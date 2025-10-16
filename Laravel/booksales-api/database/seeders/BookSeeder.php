<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        Book::insert([
            ['title' => 'Bumi', 'publisher' => 'Gramedia', 'year' => 2014, 'author_id' => 2],
            ['title' => 'Perahu Kertas', 'publisher' => 'Bentang Pustaka', 'year' => 2009, 'author_id' => 3],
            ['title' => 'Pulang', 'publisher' => 'Lentera Hati', 'year' => 2015, 'author_id' => 2],
            ['title' => 'Anak Semua Bangsa', 'publisher' => 'Hasta Mitra', 'year' => 1980, 'author_id' => 1],
            ['title' => 'Danur', 'publisher' => 'Bukune', 'year' => 2011, 'author_id' => 4],
        ]);
    }
}
