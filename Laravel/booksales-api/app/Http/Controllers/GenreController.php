<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'message' => 'List of genres',
            'data' => Genre::all()
        ]);
    }

    public function show($id)
    {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['success' => false, 'message' => 'Genre not found'], 404);
        }

        return response()->json(['success' => true, 'data' => $genre]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        $genre = Genre::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Genre created successfully',
            'data' => $genre
        ]);
    }

    public function update(Request $request, $id)
    {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['success' => false, 'message' => 'Genre not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        $genre->update($validated);

        return response()->json(['success' => true, 'message' => 'Genre updated successfully', 'data' => $genre]);
    }

    public function destroy($id)
    {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['success' => false, 'message' => 'Genre not found'], 404);
        }

        $genre->delete();

        return response()->json(['success' => true, 'message' => 'Genre deleted successfully']);
    }
}
