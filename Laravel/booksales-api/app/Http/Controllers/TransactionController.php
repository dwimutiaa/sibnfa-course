<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TransactionController extends Controller
{
    // Create (hanya customer)
    public function store(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'total_amount' => 'required|numeric',
        ]);

        $transaction = Transaction::create([
            'order_number' => 'ORD-' . strtoupper(Str::random(8)),
            'user_id' => auth()->id(),
            'book_id' => $request->book_id,
            'total_amount' => $request->total_amount,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Transaction created successfully',
            'data' => $transaction
        ]);
    }

    // Show (hanya customer)
    public function show($id)
    {
        $transaction = Transaction::where('user_id', auth()->id())->findOrFail($id);
        return response()->json($transaction);
    }

    // Update (hanya customer)
    public function update(Request $request, $id)
    {
        $transaction = Transaction::where('user_id', auth()->id())->findOrFail($id);
        $transaction->update($request->only('total_amount', 'book_id'));
        return response()->json(['message' => 'Transaction updated successfully']);
    }

    // Read All (admin only)
    public function index()
    {
        return response()->json(Transaction::with(['user', 'book'])->get());
    }

    // Delete (admin only)
    public function destroy($id)
    {
        $transaction = Transaction::findOrFail($id);
        $transaction->delete();
        return response()->json(['message' => 'Transaction deleted successfully']);
    }
}
