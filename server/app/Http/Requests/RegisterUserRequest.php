<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterUserRequest extends FormRequest
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
            "username" => "required|string|unique:users,mobile_number",
            "password" => "required|string",
            "name" => "required|string",
            "email" => "email",
            "mobile_number" => "required|string|unique:users,mobile_number",
        ];
    }
}