<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'=>'required|min:3',
            'email'=>'required|email',
            'password'=>'required|min:5'
        ];
    }
    public function messages()
    {
        return[
            'name.requited'=>'El:attribute es obligatorio',
            'email.requited'=>'El:attribute es obligatorio',
            'password.requited'=>'El:attribute es obligatorio',
        ];
    }

    
}
