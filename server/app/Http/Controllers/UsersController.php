<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Models\Admin;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UsersController extends Controller
{

    public function check_is_admin()
    {
        // Check If Authenticated User Is An Admin
        $user = Auth::user();

        $admin = Admin::where('id', $user->id)->first();

        return $admin;

    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return response($users, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function register(RegisterUserRequest $request)
    {
        $validatedData = $request->validated();

        $admin = $this->check_is_admin();

        if ($admin) {
            // The user is an admin
            $user = User::create([
                "email" => $validatedData["email"] ?? null,
                "mobile_number" => $validatedData["mobile_number"],
                "username" => $validatedData["username"],
                "name" => $validatedData["name"] ?? null,
                "password" => bcrypt($validatedData["password"]),
            ]);

            $token = $user->createToken("access_token")->plainTextToken;

            $response = [
                "message" => "Registration Successful",
                "user" => $user,
                "token" => $token
            ];

            return response($response, 201);
            // return response()->json(['message' => 'The token belongs to an admin.']);
        } else {
            // The user is not an admin
            return response()->json(['message' => 'Unauthorized'], 401);
        }



    }


    /**
     * Login User.
     */
    public function login(LoginUserRequest $request)
    {
        $request->validated($request->all());

        $user = User::where('username', $request->username)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            // Password matches, user authenticated
            $token = $user->createToken("access_token")->plainTextToken;

            return response(["user" => $user, "token" => $token], 200);
        } else {
            // Password does not match, authentication failed
            return response([$request->username], 401);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}