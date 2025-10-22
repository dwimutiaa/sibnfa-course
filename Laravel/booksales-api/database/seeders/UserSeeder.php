<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Buat atau update akun admin
        User::updateOrCreate(
            ['email' => 'admin@example.com'], // kunci unik
            [
                'name' => 'Admin',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );

        // Buat atau update akun user biasa
        User::updateOrCreate(
            ['email' => 'user@example.com'], // kunci unik
            [
                'name' => 'User',
                'password' => Hash::make('password'),
                'role' => 'user',
            ]
        );
    }
}
