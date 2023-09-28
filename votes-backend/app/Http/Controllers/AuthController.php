<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Exception;
use Illuniante\Support\Facades\Hash;

class AuthController extends Controller
{
    public function singIn(Request $request)
    {
        $response = ["status" => 0, "msg" => ""];
        $data = json_decode($request->getContent());
        $user = User::where("email", $data->email)->first();
        if ($user) {
            if (Hash::check($data->password, $user->password)) {
                $tokens = $user->create_token("example");
                $response["status"] = 1;
                $response["msg"] = $tokens->plainTextToken;
            } else {
                $response["msg"] = "Invalid password";
            }
        } else {
            $response["msg"] = "Invalid email";
        }
        return response()->json($data);
    }

    public function singnUp(Request $request)
    {
        $response = ["status" => 0, "message" => ""];
        $data = json_decode($request->getContent());
        $user = User::where("email", $data->email)->first();

        if ($user) {
            $response["message"] = "User already exist";
            $response["status"] = 400;

            return $response;
        }

        try {
            $password = Hash::make($data->password);

            User::insert([
                'name' => $data->name,
                'email' => $data->email,
                'password' => $password,
                'active' => true
            ]);
            $response["status"] = 200;
            $response["message"] = "User created succesfull";

            return $response;
        } catch (Exception $e) {
            $response["Message"] = "faill to create user " + $e;
        }
    }
}
