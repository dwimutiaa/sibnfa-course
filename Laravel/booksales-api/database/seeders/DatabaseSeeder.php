<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // ✅ Membuat user admin
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'), // password = 'password'
            'role' => 'admin'
        ]);

        // ✅ Membuat user biasa
        User::create([
            'name' => 'User',
            'email' => 'user@example.com',
            'password' => Hash::make('password'), // password = 'password'
            'role' => 'user'
        ]);

        // ✅ Memanggil seeder lain
        $this->call([
            AuthorSeeder::class,
            BookSeeder::class,
        ]);
    }
}
