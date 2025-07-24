<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\WeatherController;


Route::apiResource('events', EventController::class);

