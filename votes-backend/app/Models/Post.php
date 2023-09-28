<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    use HasFactory;
    protected $table='post';
    protected $fillable = [
        'title',
        'body',
        'user_id',
    ];

    public function post(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
