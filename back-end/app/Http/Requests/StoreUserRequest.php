<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "fullName" => ['required', 'string', 'max:255', 'min:6'],
            "email" => ['required', 'string', 'email', 'max:255', 'min:6', 'unique:users'],
            "password" => ['required', 'confirmed', Password::defaults()]

        ];
    }
}
