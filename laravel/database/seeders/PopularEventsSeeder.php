<?php

namespace Database\Seeders;

use App\Models\EventData;
use Illuminate\Database\Seeder;

class PopularEventsSeeder extends Seeder
{
    public function run(): void
    {
        $events = [
            [
                'name' => 'Dance Festival',
                'description' => 'Celebrate dance and music at a lively festival in Helsinki.',
                'long_description' => 'Enjoy an exciting dance festival featuring music, performances and dancing.',
                'date' => date('Y').'-01-25',
                'location' => 'Helsinki, FI',
                'type' => 'Music & Entertainment',
                'price' => 25,
                'image' => 'https://images.pexels.com/photos/28987833/pexels-photo-28987833.jpeg',
            ],
            [
                'name' => 'Art Expo',
                'description' => 'Discover creative artwork and exhibitions in Tampere.',
                'long_description' => 'Explore an art exhibition showcasing creativity, visual arts and inspiring works.',
                'date' => date('Y').'-11-10',
                'location' => 'Tampere, FI',
                'type' => 'Hobbies & DIY',
                'price' => 10,
                'image' => 'https://images.pexels.com/photos/29901209/pexels-photo-29901209.jpeg',
            ],
            [
                'name' => 'Midnight Run',
                'description' => 'Join an exciting evening running event in Turku.',
                'long_description' => 'Experience a memorable night run through the streets of Turku.',
                'date' => date('Y').'-08-20',
                'location' => 'Turku, FI',
                'type' => 'Sports & Games',
                'price' => 15,
                'image' => 'https://images.pexels.com/photos/5310917/pexels-photo-5310917.jpeg',
            ],
            [
                'name' => 'Winter Jazz Festival',
                'description' => 'Enjoy live jazz music in Oulu.',
                'long_description' => 'Experience an atmospheric winter jazz festival with live performances.',
                'date' => date('Y').'-12-05',
                'location' => 'Oulu, FI',
                'type' => 'Music & Entertainment',
                'price' => 30,
                'image' => 'https://images.pexels.com/photos/13108389/pexels-photo-13108389.jpeg',
            ],
            [
                'name' => 'Summer Festival',
                'description' => 'Celebrate music and entertainment in Espoo.',
                'long_description' => 'Join a festival filled with music, entertainment and community activities.',
                'date' => date('Y').'-10-25',
                'location' => 'Espoo, FI',
                'type' => 'Music & Entertainment',
                'price' => 20,
                'image' => 'https://images.pexels.com/photos/1299438/pexels-photo-1299438.jpeg',
            ],
            [
                'name' => 'Lapland Hike',
                'description' => 'Explore the beautiful nature of Lapland near Rovaniemi.',
                'long_description' => 'Discover the landscapes of Lapland on an outdoor hiking adventure.',
                'date' => date('Y').'-12-25',
                'location' => 'Rovaniemi, FI',
                'type' => 'Outdoor & Nature',
                'price' => 0,
                'image' => 'https://images.pexels.com/photos/10809314/pexels-photo-10809314.jpeg',
            ],
            [
                'name' => 'Chemistry Fair',
                'description' => 'Discover science and chemistry in Jyväskylä.',
                'long_description' => 'Explore chemistry through educational activities and science demonstrations.',
                'date' => date('Y').'-04-25',
                'location' => 'Jyväskylä, FI',
                'type' => 'Learning & Networking',
                'price' => 5,
                'image' => 'https://images.pexels.com/photos/7869452/pexels-photo-7869452.jpeg',
            ],
        ];

        foreach ($events as $event) {
            EventData::updateOrCreate(
                ['name' => $event['name']],
                $event
            );
        }
    }
}
