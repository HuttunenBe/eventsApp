<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'consent' => ['required', 'accepted'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Please enter a valid email and agree to subscribe.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $apiKey = config('services.mailjet.key');
        $secretKey = config('services.mailjet.secret');
        $listId = config('services.mailjet.list_id');

        if (!$apiKey || !$secretKey || !$listId) {
            return response()->json([
                'message' => 'Newsletter service is not configured.',
            ], 500);
        }

        $response = Http::withBasicAuth(
            $apiKey,
            $secretKey
        )->post(
            'https://api.mailjet.com/v3/REST/contactslist/'
                . $listId
                . '/managemanycontacts',
            [
                'Action' => 'addnoforce',
                'Contacts' => [
                    [
                        'Email' => $request->input('email'),
                        'IsExcludedFromCampaigns' => false,
                    ],
                ],
            ]
        );

        if ($response->failed()) {
            return response()->json([
                'message' => 'Unable to subscribe right now. Please try again.',
            ], 502);
        }

        return response()->json([
            'message' => 'Your subscription request was received.',
        ]);
    }
}
