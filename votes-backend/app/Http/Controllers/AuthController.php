<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignInRequest;
use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Hash as FacadesHash;

class AuthController extends Controller
{
    public function singnIn(SignInRequest $request)
    {
        if (!Auth::attempt($request->only('email','password')))
        {
            return response()
                ->json(["success"=>false,"message"=>"Singn in unsuccessful"],401);
        }
        $user=User::where('email',$request['email'])->firstOrFail();
        $token=$user->createToken('aunth_token')->plainTextToken;

        return response()
            ->json([
                "success"=>true,
                "message"=>"Singn in successful",
                "access_token"=>$token,
                "token_type"=>'Bearer',
                "user"=>[
                    "name"=>$user->name,
                    "email"=>$user->email,
                    "createdAt"=>$user->created_at
                ]
            ]);
    }

    public function singnUp(SignUpRequest $request)
    {
        $userFound = User::where("email", $request->email)->first();

        if ($userFound) {
            return response()->json([
                "message" => "User already exist",
                "success" => false,
            ], 400);
        }

        $hashPassword = FacadesHash::make($request->password);

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $hashPassword,
            "active" => true,
        ]);

        return response()->json([
            "user" => $user,
            "message" => "User created succesfull",
            "success" => true,
        ], 202);
    }
}
