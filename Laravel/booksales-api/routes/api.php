<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\TransactionController;

// ---------- AUTH ----------
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// ---------- PROTECTED ----------
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // ---------- AUTHORS ----------
    Route::get('/authors', [AuthorController::class, 'index']);
    Route::get('/authors/{id}', [AuthorController::class, 'show']);

    Route::middleware('admin')->group(function () {
        Route::post('/authors', [AuthorController::class, 'store']);
        Route::put('/authors/{id}', [AuthorController::class, 'update']);
        Route::delete('/authors/{id}', [AuthorController::class, 'destroy']);
    });

    // ---------- GENRES ----------
    Route::get('/genres', [GenreController::class, 'index']);
    Route::get('/genres/{id}', [GenreController::class, 'show']);

    Route::middleware('admin')->group(function () {
        Route::post('/genres', [GenreController::class, 'store']);
        Route::put('/genres/{id}', [GenreController::class, 'update']);
        Route::delete('/genres/{id}', [GenreController::class, 'destroy']);
    });

    // ---------- BOOKS ----------
    Route::get('/books', [BookController::class, 'index']);
    Route::get('/books/{id}', [BookController::class, 'show']);

    Route::middleware('admin')->group(function () {
        Route::post('/books', [BookController::class, 'store']);
        Route::put('/books/{id}', [BookController::class, 'update']);
        Route::delete('/books/{id}', [BookController::class, 'destroy']);
    });

    // ---------- TRANSACTIONS ----------
    // hanya user biasa
    Route::middleware('user')->group(function () {
        Route::post('/transactions', [TransactionController::class, 'store']);
        Route::get('/transactions/{id}', [TransactionController::class, 'show']);
        Route::put('/transactions/{id}', [TransactionController::class, 'update']);
    });

    // hanya admin
    Route::middleware('admin')->group(function () {
        Route::get('/transactions', [TransactionController::class, 'index']);
        Route::delete('/transactions/{id}', [TransactionController::class, 'destroy']);
    });
});
