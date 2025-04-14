<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// No need to add the cors middleware explicitly because it's already in the api middleware group

// Your API routes here
Route::get('/test-cors', function () {
    return response()->json(['message' => 'CORS is working!']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Handle preflight OPTIONS requests
Route::options('/{any}', function () {
    return response('', 200);
})->where('any', '.*'); 