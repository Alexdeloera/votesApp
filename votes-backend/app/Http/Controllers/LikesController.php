<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use Exception;
use Illuminate\Http\Request;

class LikesController extends Controller
{
    public function getLikes(Request $request)
    {

        if ($request->has('post_id')) {
            $likes = Likes::where('post_id', $request->post_id)->get();
        } else {
            $likes = Likes::all();
        }
        return response()->json($likes, 200);
    }

    public function setLikes(Request $request)
    {
        $response = ["message" => ""];
        $data = json_decode($request->getContent());
        try {
            Likes::insert([
                'user_id' => $data->user_id,
                'post_id' => $data->post_id
            ]);

            $response["message"] = "Like seted";
            return response()->json($response, 200);
        } catch (Exception $e) {
            return response()->json($e, 400);
        }
    }

    public function deleteLike(Request $request)
    {
        $response = ["message" => ""];

        if ($request->has('user_id') && $request->has('post_id')) {
            try {
                Likes::where('post_id', $request->post_id)
                    ->where('user_id', $request->user_id)
                    ->delete();

                $response["message"] = "Like deleted";
                return response()->json($response, 200);
            } catch (\Exception $e) {
                return response()->json(["message" => "Error deleting like"], 400);
            }
        } else {
            $response["message"] = "Like delete error";
            return response()->json($response, 400);
        }
    }
}
