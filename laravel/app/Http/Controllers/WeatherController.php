<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function getWeather(Request $request)
    {
        $request->validate([
            'location' => 'required|string',
        ]);

        $response = Http::get(
            'https://api.weatherapi.com/v1/current.json',
            [
                'key' => config('services.weather.key'),
                'q' => $request->location,
                'aqi' => 'no',
            ]
        );

        if (!$response->successful()) {
            return response()->json([
                'message' => 'Unable to fetch weather.',
            ], 502);
        }

        return response()->json($response->json());
    }
}
