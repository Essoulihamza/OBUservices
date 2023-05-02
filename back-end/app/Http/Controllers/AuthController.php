<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;

class AuthController extends Controller
{
    use HttpResponses;
    public function Login(LoginUserRequest $request)
    {
        $request->validated($request->all());

        if(!Auth::attempt(['email'=> $request->email, 'password'=> $request->password]) ) {
            return $this->error('', 'Credentials do not match', 401);
        }

        $user = User::where('email' , $request->email)->first();

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('Api Token of ' . $user->name)->plainTextToken
        ], "Logged in succesfully !"); 
        
    }

    public function SignUp(StoreUserRequest $request) 
    {
        $request->validated($request->all());
        $user = User::create([
            'fullName' => $request->fullName,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]); 

        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token of ' . $user->fullName)->plainTextToken
        ], "Signed Up succesfully !");
    }
    
    public function LogOut() 
    {
        Auth::user()->currentAccessToken()->delete();
        return $this->success([
            'message' => 'You have successfully been logged out and your token has been deleted',
        ], "Logged out succesfully !");
    }

    public function update(UpdateUserRequest $request)
    {
        $request->validated($request->all());
        $request = (array) $request->all();
        $user = Auth::user();
        foreach ($request as $key => $value){
            if($key === 'password'){
                $user[$key] = Hash::make($value);
                continue;
            }
            if($key === 'password_confirmation')
                continue;
            $user[$key] = $value;
        }
        $user->save();
        return $this->success([
            'user' => $user
        ], "User updated successfully");
    }
}
