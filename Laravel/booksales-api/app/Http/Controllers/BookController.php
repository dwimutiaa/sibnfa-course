<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with(['author', 'genre'])->get();

        return response()->json([
            'success' => true,
            'message' => 'List of books',
            'data' => $books
        ]);
    }

    public function show($id)
    {
        $book = Book::with(['author', 'genre'])->find($id);

        if (!$book) {
            return response()->json(['success' => false, 'message' => 'Book not found'], 404);
        }

        return response()->json(['success' => true, 'data' => $book]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author_id' => 'required|integer',
            'genre_id' => 'required|integer',
            'price' => 'required|numeric',
            'publisher' => 'nullable|string|max:255',
            'year' => 'nullable|string|max:4',
        ]);

        $book = Book::create($validated);

        return response()->json(['success' => true, 'message' => 'Book created successfully', 'data' => $book]);
    }

    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['success' => false, 'message' => 'Book not found'], 404);
        }

        $book->update($request->all());

        return response()->json(['success' => true, 'message' => 'Book updated successfully', 'data' => $book]);
    }

    public function destroy($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['success' => false, 'message' => 'Book not found'], 404);
        }

        $book->delete();

        return response()->json(['success' => true, 'message' => 'Book deleted successfully']);
    }
}
