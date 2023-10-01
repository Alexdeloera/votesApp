<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function() {
    /* Post Endpoints*/
    Route::prefix('/post')->group(function() {
        Route::get('/', [PostController::class, 'getPosts']);
        Route::post('/create', [PostController::class, 'createPost']);
        Route::delete('/delete', [PostController::class, 'deletePost']);
    });

    /* Likes Endpoints*/
    Route::prefix('/likes')->group(function(){
        Route::post('/', [LikesController::class, 'getLikes']);
        Route::post('/set', [LikesController::class, 'setLikes']);
        Route::delete('/delete', [LikesController::class, 'deleteLike']);

    });

    Route::post('/user', [AuthController::class, 'getUser']);
});

Route::post('/singn-in', [AuthController::class, 'singnIn']);
Route::post('/singn-up',[AuthController::class,'singnUp']);
