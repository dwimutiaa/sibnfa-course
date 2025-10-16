<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Book; // <--- Tambahkan ini biar Book dikenal

class Author extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // Relasi ke Book
    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
