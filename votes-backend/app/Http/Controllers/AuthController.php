<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignInRequest;
use App\Http\Requests\SignUpRequest;
use Illuminate\Http\Request;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash as FacadesHash;
use Illuniante\Support\Facades\Hash;

class AuthController extends Controller
{
    public function singnIn(SignInRequest $request)
    {
        $response = ["message" => ""];
        $data = json_decode($request->getContent());
        $user = User::where("email", $data->email)->first();

        if ($user) {
            if (FacadesHash::check($data->password, $user->password)) {
                $tokens = $user->createToken("Authorization");

                return response()->json([
                    "token" => $tokens->plainTextToken
                ], 200);
            } else {
                $response["message"] = "Invalid password";
            }
        } else {
            $response["message"] = "Invalid email";
        }

        return response()->json($response, 400);
    }

    public function singnUp(SignUpRequest $request)
    {
        $response = ["message" => ""];
        $data = json_decode($request->getContent());
        $user = User::where("email", $data->email)->first();

        if ($user) {
            $response["message"] = "User already exist";

            return response()->json($response, 400);
        }

        try {
            $password = FacadesHash::make($data->password);

            User::insert([
                'name' => $data->name,
                'email' => $data->email,
                'password' => $password,
                'active' => true
            ]);

            $response["message"] = "User created succesfull";

            return response()->json($response, 202);
        } catch (Exception $e) {
            $response["message"] = "Fail to create user " + $e;

            return response()->json($response, 400);
        }
    }
}
