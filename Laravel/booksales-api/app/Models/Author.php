<?php

namespace App\Models;

class Author
{
    public static function all()
    {
        return [
            ['id' => 1, 'name' => 'Pramoedya Ananta Toer'],
            ['id' => 2, 'name' => 'Tere Liye'],
            ['id' => 3, 'name' => 'Dee Lestari'],
            ['id' => 4, 'name' => 'Risa Saraswati'],
            ['id' => 5, 'name' => 'Nadine Fatihah'],
        ];
    }
}
