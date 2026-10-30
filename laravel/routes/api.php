<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\WeatherController;



Route::apiResource('events', EventController::class);
Route::post('/newsletter', [NewsletterController::class, 'subscribe']);

Route::get('/weather', [WeatherController::class, 'getWeather']);