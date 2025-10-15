<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index()
    {
        $genres = [
            ['id' => 1, 'name' => 'Fiction'],
            ['id' => 2, 'name' => 'Romance'],
            ['id' => 3, 'name' => 'Science'],
            ['id' => 4, 'name' => 'Fantasy'],
            ['id' => 5, 'name' => 'Mystery'],
        ];

        return view('genre', compact('genres'));
    }
}
