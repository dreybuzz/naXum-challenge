<?php

use App\Http\Controllers\AdminsController;
use App\Http\Controllers\UsersContactsController;
use App\Http\Controllers\UsersController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Public Routes
Route::post("/login", [UsersController::class, "login"]);
Route::post("/admin-login", [AdminsController::class, "login"]);


// Protected Routes
Route::group(["middleware" => ["auth:sanctum"]], function () {

    Route::get("/contacts/{user}", [UsersContactsController::class, "getUserContacts"]);

    Route::post("/contacts", [UsersContactsController::class, "add"]);

    Route::post("/register", [UsersController::class, "register"]);

    Route::get("/users", [UsersController::class, "index"]);

});