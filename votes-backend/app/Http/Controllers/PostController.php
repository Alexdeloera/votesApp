<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function ShowPost(Request $request){
    $posts = Post::all();
    return response()->json($posts, 200);
  }
}
