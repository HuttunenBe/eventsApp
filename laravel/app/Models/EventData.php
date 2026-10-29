<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventData extends Model
{
    use HasFactory;

    protected $table = 'event_data';

    protected $fillable = [
   'name',
        'date',
        'description',
        'location',
        'type',
        'price',
        'image',
        'long_description',
    ];
}
