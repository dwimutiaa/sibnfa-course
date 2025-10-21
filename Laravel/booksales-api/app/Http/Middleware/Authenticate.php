<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo($request)
{
    if (! $request->expectsJson()) {
        // Daripada redirect ke halaman login (yang tidak ada),
        // kita kembalikan response JSON error API
        abort(response()->json([
            'success' => false,
            'message' => 'Unauthorized. Please login first.'
        ], 401));
    }
}

}
