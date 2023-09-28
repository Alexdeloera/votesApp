<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function getPosts(Request $request){
    $posts = Post::all();
    return response()->json($posts, 200);
    }

    public function creratePost(Request $request){
      $response=["status"=>0,"message"=>""];
      $data=json_decode($request->getContent());

    
    }


}
