<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use Illuminate\Http\Request;
use App\Models\Post;
use Exception;

class PostController extends Controller
{
  public function getPosts(Request $request)
  {
    if ($request->has('finder')) {
      $posts = Post::select('post.title', 'post.date', 'post.id', 'post.body', 'post.state', 'users.name', Likes::raw('count(likes.id) as like_count'))
        ->leftJoin('users', 'post.user_id', '=', 'users.id')
        ->leftJoin('likes', 'post.id', '=', 'likes.post_id')->where('post.title', 'like', '%' . $request->finder . '%', '||', 'post.state', 'like', '%' . $request->finder . '%')
        ->groupBy('post.title', 'post.date', 'post.id', 'post.body', 'post.state', 'users.name')
        ->get();
    } else {
      $posts = Post::select('post.title', 'post.date', 'post.id', 'post.body', 'post.state', 'users.name', Likes::raw('count(likes.id) as like_count'))
        ->leftJoin('users', 'post.user_id', '=', 'users.id')
        ->leftJoin('likes', 'post.id', '=', 'likes.post_id')
        ->groupBy('post.title', 'post.date', 'post.id', 'post.body', 'post.state', 'users.name')
        ->get();


      return response()->json($posts, 200);
    }
  }

  public function createPost(Request $request)
  {
    $response = ["message" => ""];
    date_default_timezone_set('America/Mexico_City');
    $data = json_decode($request->getContent());

    try {
      Post::insert([
        'title' => $data->title,
        'body' => $data->body,
        'state' => $data->state,
        'date' => $data->date,
        'user_id' => $data->user_id,
      ]);

      $response["message"] = "Post created succesfull";
      return response()->json($response, 200);
    } catch (Exception $e) {
      $response["message"] = "Fail to create Post";
      return response()->json($e, 200);
    }
  }

  public function deletePost(Request $request)
  {
    $response = ["message" => ""];

    if ($request->has('post_id')) {
      $data = json_decode($request->getContent());
      $likes = Likes::where('post_id', $data->post_id)->get();

      if (sizeof($likes) > 0) {
        $response["message"] = "This post cant be deleted";
        return response()->json($response, 400);
      } else {

        try {

          Post::where('id', true)->delete();
          $response["message"] = "This post be deleted";
          return response()->json($response, 200);
        } catch (Exception $e) {
          return response()->json($e, 400);
        }
      }
    }
  }
}
