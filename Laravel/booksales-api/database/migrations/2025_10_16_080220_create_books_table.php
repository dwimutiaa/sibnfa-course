<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('publisher');
            $table->integer('year');
            $table->unsignedBigInteger('author_id'); // relasi ke tabel authors
            $table->timestamps();

            // foreign key ke tabel authors
            $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
