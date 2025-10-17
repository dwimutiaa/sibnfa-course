<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = [
            ['id' => 1, 'name' => 'Pramoedya Ananta Toer'],
            ['id' => 2, 'name' => 'Tere Liye'],
            ['id' => 3, 'name' => 'Dee Lestari'],
            ['id' => 4, 'name' => 'Risa Saraswati'],
            ['id' => 5, 'name' => 'Nadine Fatihah'],
        ];

        // Output JSON, bukan view
        return response()->json([
            'success' => true,
            'data' => $authors
        ]);
    }
}