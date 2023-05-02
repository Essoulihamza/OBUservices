<?php

namespace App\Http\Controllers;

use App\Models\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\RequestResource;
use App\Http\Requests\StoreRequestRequest;
use App\Http\Requests\UpdateRequestRequest;

class RequestController extends Controller
{
    
    
    public function index()
    {
        return RequestResource::collection(Request::all());
    }


    
    public function store(StoreRequestRequest $request)
    {
        $request->validated($request->all());
        $Request = Request::create([
            'user_id' => Auth::user()->id,
            'package_id' => $request->pack_id,
            'status' => "pending"
        ]); 

        return $this->success([
            'Request' => $Request
        ], 'Service Requested Successfully');
    }


    public function show(){
        return RequestResource::collection(
            Request::where('user_id', Auth::user()->id)->get()
        );  
    }

   
    public function update(UpdateRequestRequest $request, Request $Request)
    {
        $request->validated($request->all());
        $request = (array) $request->all(); 
        $Request->update($request);
        return $this->success([
            'Request' => $Request
        ], "Request updated successfully");
    }

    
    public function destroy(Request $request)
    {
        if(Auth::user()->id !== $request->user_id) {
            return $this->error('', 'You are not authorized to make this request', 403);
        }
        $request->delete();
        return $this->success([], "Request deleted successfully");
    }
}
