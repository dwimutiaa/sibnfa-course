<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    protected static function booted()
    {
        static::creating(function ($genre) {
           
            $genre->name = ucfirst($genre->name);
        });

        static::retrieved(function () {
        
        });

           if (self::count() === 0) {
            $defaultGenres = [
                ['name' => 'Fiction',  'description' => 'Cerita rekaan atau imajinatif.'],
                ['name' => 'Romance',  'description' => 'Berkisah tentang cinta dan hubungan.'],
                ['name' => 'Science',  'description' => 'Berkaitan dengan ilmu pengetahuan.'],
                ['name' => 'Fantasy',  'description' => 'Mengandung unsur magis dan dunia imajinatif.'],
                ['name' => 'Mystery',  'description' => 'Penuh teka-teki dan penyelidikan.'],
            ];

            foreach ($defaultGenres as $genre) {
                self::create($genre);
            }
        }
    }
}