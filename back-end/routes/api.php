<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FeedbackController;


// _________________________________________________________ Protected Routes ______________________________________________________//

Route::group(['middleware' => ['auth:sanctum']], function() 
{
    
    //user ::
    Route::post('User/Logout', [AuthController::class, 'Logout']);
    Route::patch('User/update', [AuthController::class, 'update']);

    // Request :: 
    Route::get('myRequests', [RequestController::class, 'show']);
    Route::post('Request', [RequestController::class, 'store']);
    Route::delete('Request/{request}', [RequestController::class, 'destroy']);
    
    // feedback ::
    Route::post('Feedback', [FeedbackController::class, 'store']);
    Route::patch('Feedback/{feedback}', [FeedbackController::class, 'update']);
    Route::delete('Feedback/{feedback}', [FeedbackController::class, 'destroy']);
});



Route::group(['middleware' => ['auth:sanctum', 'role:admin']], function()
{
    // category ::
    Route::post('Category', [CategoryController::class, 'store']);
    Route::patch('Category/{category}', [CategoryController::class, 'update']);
    Route::delete('Category/{category}', [CategoryController::class, 'destroy']);

    // Service ::
    Route::post('Service', [ServiceController::class, 'store']);
    Route::patch('Service/{service}', [ServiceController::class, 'update']);
    Route::delete('Service/{service}', [ServiceController::class, 'destroy']);

    // Package ::
    Route::patch('Package/{package}', [PackageController::class, 'update']);
    Route::delete('Package/{package}', [PackageController::class, 'destroy']);
    Route::resource('Package', PackageController::class);

    // Request ::
    Route::get('Request', [RequestController::class, 'index']);
    Route::patch('Request/{request}', [RequestController::class , 'update']);

    // Feedback ::
    Route::get('Feedback', [FeedbackController::class, 'index']);
});




// _________________________________________________________ Public Routes ______________________________________________________//

//user ::
Route::post('/User/SignUp', [AuthController::class, 'SignUp']);
Route::post('/User/Login', [AuthController::class, 'Login']);

//category :: 
Route::get('/Category', [CategoryController::class, 'index']);
Route::get('/Category/{category}', [CategoryController::class, 'show']);


//service ::
Route::get('/Service', [ServiceController::class, 'index']);
Route::get('/Service/{service}', [ServiceController::class, 'show']);

//service ::
Route::get('/Package', [PackageController::class, 'index']);
















