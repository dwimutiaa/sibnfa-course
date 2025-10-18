<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        Book::insert([
            [
                'author_id' => 2,
                'genre_id' => 1,
                'publisher' => 'Gramedia',
                'title' => 'Bumi',
                'year' => 2014,
                'price' => 85000,
            ],
            [
                'author_id' => 3,
                'genre_id' => 2,
                'publisher' => 'Bentang Pustaka',
                'title' => 'Perahu Kertas',
                'year' => 2009,
                'price' => 90000,
            ],
            [
                'author_id' => 2,
                'genre_id' => 1,
                'publisher' => 'Lentera Hati',
                'title' => 'Pulang',
                'year' => 2015,
                'price' => 78000,
            ],
            [
                'author_id' => 1,
                'genre_id' => 3,
                'publisher' => 'Hasta Mitra',
                'title' => 'Anak Semua Bangsa',
                'year' => 1980,
                'price' => 65000,
            ],
            [
                'author_id' => 4,
                'genre_id' => 4,
                'publisher' => 'Bukune',
                'title' => 'Danur',
                'year' => 2011,
                'price' => 72000,
            ],
        ]);
    }
}
