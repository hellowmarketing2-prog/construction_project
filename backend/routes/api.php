<?php

use App\Http\Controllers\admin\ArticleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use App\Http\Controllers\front\ProjectController as FrontProjectController;
use App\Http\Controllers\front\ArticleController as FrontArticleController;
use App\Http\Controllers\front\TestimonialController as FrontTestimonialController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\TestimonialController;
use App\Models\Article;
use App\Models\Service;

/*
|-----------------------
| Public Routes
|-----------------------
*/

Route::post('/authenticate', [AuthenticationController::class, 'authenticate']);
// get services
    Route::get('/get_services', [FrontServiceController::class, 'index']);
    Route::get('/get_latest_services', [FrontServiceController::class, 'latestServices']);
    // get articles
    Route::get('/get_articles', [FrontArticleController::class, 'index']);
    Route::get('/get_latest_articles', [FrontArticleController::class, 'latestArticles']);
    // get projects 
    Route::get('/get_projects', [FrontProjectController::class, 'allProjects']);
    Route::get('/get_latest_projects', [FrontProjectController::class, 'latestProjects']);
    // get testimonials 
    Route::get('/get_testimonials', [FrontTestimonialController::class, 'index']);
    Route::get('/get_latest_testimonials', [FrontTestimonialController::class, 'latestTestimonials']);

    

/*
|-----------------------
| Protected Routes
|-----------------------
*/


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::get('/logout', [AuthenticationController::class, 'logout']);
    
// service routes 
    Route::post('services', [ServiceController::class, 'store']);
    Route::get('services', [ServiceController::class, 'index']);
    
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);
    
    // temp image routes
    Route::post('temp_images', [TempImageController::class, 'store']);


    // project routes 
    Route::post('projects', [ProjectController::class, 'store']);
    Route::get('projects', [ProjectController::class, 'index']);
    Route::put('projects/{id}', [ProjectController::class, 'update']);
    Route::get('projects/{id}', [ProjectController::class, 'show']);
    Route::delete('projects/{id}', [ProjectController::class, 'destroy']);

    // Article routes 
    Route::get('articles', [ArticleController::class, 'index']);
    Route::get('articles/{id}', [ArticleController::class, 'show']);
    Route::post('articles', [ArticleController::class, 'store']);
    Route::put('articles/{id}', [ArticleController::class, 'update']);
    Route::delete('articles/{id}', [ArticleController::class, 'destroy']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // testimonials routes 
    Route::post('testimonials', [TestimonialController::class, 'store']);
    Route::get('testimonials', [TestimonialController::class, 'index']);
    Route::get('testimonials/{id}', [TestimonialController::class, 'show']);
    Route::put('testimonials/{id}', [TestimonialController::class, 'update']);
    Route::delete('testimonials/{id}', [TestimonialController::class, 'destroy']);


    

    
    
});