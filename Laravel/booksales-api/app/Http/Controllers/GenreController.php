<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index()
    {
        
        if (Genre::count() === 0) {
            $defaultGenres = [
                ['name' => 'Fiction', 'description' => 'Cerita rekaan atau imajinatif.'],
                ['name' => 'Romance', 'description' => 'Berkisah tentang cinta dan hubungan.'],
                ['name' => 'Science', 'description' => 'Berkaitan dengan ilmu pengetahuan.'],
                ['name' => 'Fantasy', 'description' => 'Mengandung unsur magis dan dunia imajinatif.'],
                ['name' => 'Mystery', 'description' => 'Penuh teka-teki dan penyelidikan.'],
            ];

            foreach ($defaultGenres as $genre) {
                Genre::create($genre);
            }
        }

        return response()->json(Genre::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $genre = Genre::create($validated);

        return response()->json([
            'message' => 'Genre created successfully',
            'data' => $genre,
        ]);
    }
}