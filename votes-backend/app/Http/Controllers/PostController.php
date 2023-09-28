<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Exception;

class PostController extends Controller
{
    public function getPosts(Request $request){
    $posts = Post::all();
    return response()->json($posts, 200);
    }

    public function createPost(Request $request){
      $response=["message"=>""];
      date_default_timezone_set('America/Mexico_City');
      $data=json_decode($request->getContent());

      try {
        Post::insert([
          'title'=>$data->title,
          'body'=>$data->body,
          'user_id'=>$data->user_id,
        ]);

        $response["message"]="Post created succesfull";
        return response()->json($response,200);

      } catch (Exception $e) {
        $response["message"]="Fail to create Post";
        return response()->json($e);
      }

    
    }


}
