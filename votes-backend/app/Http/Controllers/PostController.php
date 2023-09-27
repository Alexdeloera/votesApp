<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserPost;

class postController extends Controller{
  public function index(){
    $posts = UserPost::orderBy('cerated_at','DESC')->get();
    return view('Posts',compact('posts'));
  }
}