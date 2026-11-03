<?php

use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\WeatherController;
use Illuminate\Support\Facades\Route;

Route::apiResource('events', EventController::class);
Route::post('/newsletter', [NewsletterController::class, 'subscribe']);

Route::get('/weather', [WeatherController::class, 'getWeather']);
