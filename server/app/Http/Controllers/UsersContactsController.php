<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddContactRequest;
use App\Models\UserContacts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsersContactsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function add(AddContactRequest $request)
    {
        $validatedData = $request->validated();

        $user = Auth::user();

        $user_id = $user->id;

        // return response($user_id, 201);


        $contact = UserContacts::create([
            "user" => $user_id,
            "first_name" => $validatedData["first_name"],
            "last_name" => $validatedData["last_name"],
            "mobile_number" => $validatedData["mobile_number"],
            "email" => $validatedData["email"],
        ]);


        $response = [
            "message" => "Registration Successful",
            "contact" => $contact,
            "contacts" => UsersContactsController::getUserContacts($user_id)->original
        ];

        return response($response, 201);

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
    public static function getUserContacts($user)
    {
        $contacts = UserContacts::where('user', $user)->get();
        return response($contacts, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserContacts $userContacts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserContacts $userContacts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserContacts $userContacts)
    {
        //
    }
}