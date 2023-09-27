<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuniante\Support\Facades\Hash;

class ApiController extends Controller{

  public function users(Request $request){
    $users=User::all();
    return response()->json($users,200);
  }

  // public function login(Request $request){
  //   $response = ["status"=>0,"msg"=>""];
  //   $data=json_decode($request->getContent());
  //   $user=User::where("email",$data->email)->first();
  //   if($user){
  //   if(Hash::check($data->password,$user->password)){
  //       $tokens=$user->create_token("example");
  //       $response["status"]=1;
  //       $response["msg"]=$tokens->plainTextToken;
  //     }else{
  //       $response["msg"]="Invalid password";
  //     }
  //   }else{
  //     $response["msg"]="Invalid email";
  //   }
  // return response()->json($data);
  // }
}