<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthenticationController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        if (User::count() >= 2) {
            return response()->json([
                'status' => false,
                'message' => 'Only two admin allowed.'
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('token')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'User registered successfully',
            'token' => $token,
            'user' => $user
        ]);
    }

    public function admins()
    {
        $admins = User::select('id', 'name', 'email', 'created_at')->orderBy('created_at', 'asc')->get();

        return response()->json([
            'status' => true,
            'data' => $admins,
        ]);
    }

    public function deleteAdmin(Request $request, $id)
    {
        $request->validate([
            'password' => 'required|string',
        ]);

        $currentUser = Auth::user();

        if (!$currentUser) {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        if (!Hash::check($request->password, $currentUser->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Your password is incorrect.',
            ], 403);
        }

        $admin = User::find($id);

        if (!$admin) {
            return response()->json([
                'status' => false,
                'message' => 'Admin not found.',
            ], 404);
        }

        if ((int) $currentUser->id === (int) $admin->id) {
            return response()->json([
                'status' => false,
                'message' => 'You cannot delete your own account from this screen.',
            ], 422);
        }

        if (User::count() <= 1) {
            return response()->json([
                'status' => false,
                'message' => 'At least one admin account must remain.',
            ], 422);
        }

        $admin->delete();

        return response()->json([
            'status' => true,
            'message' => 'Admin deleted successfully.',
        ]);
    }

    public function authenticate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::attempt($credentials)) {

            $user = User::find(Auth::user()->id);

            $token = $user->createToken('token')->plainTextToken;

            return response()->json([
                'status' => true,
                'token' => $token,
                'user' => $user
            ]);
        } else {

            return response()->json([
                'status' => false,
                'message' => 'Either Email/Password is incorrect'
            ]);
        }
    }
    public function logout()
    {
        $user = User::find(Auth::user()->id);
        $user->tokens()->delete();
        return response()->json([
            'status' => true,
            'message' => 'Logout Successfully'
        ]);
    }
}
