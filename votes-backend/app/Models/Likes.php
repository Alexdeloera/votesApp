<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Likes extends Model
{
    use HasFactory;

    protected $fillable=[
        'user_id',
        'post_id'
    ];

    public function user():BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

}
