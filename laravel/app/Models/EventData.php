<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventData extends Model
{
    use HasFactory;

    protected $table = 'events';

    protected $fillable = [
        'name',
        'description',
        'long_description',
        'date',
        'location',
        'type',
        'price',
        'image',
    ];
}
