<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Http\Resources\ServiceResource;
use App\Http\Resources\ServicesResource;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;

class ServiceController extends Controller
{

    public function index()
    {
        return ServicesResource::collection(Service::all());
    }

    public function show(Service $service)
    {
        return ServiceResource::make($service);
    }
    
    
    public function store(StoreServiceRequest $request)
    {
        $request->validated($request->all());
        $Service = Service::create([
            'name' => $request->name,
            'description' => $request->description,
            'category_id' => $request->category
        ]);

        return $this->success([
            'Service' => $Service
        ], 'Service added successfully');
    }


    
    
    public function update(UpdateServiceRequest $request, Service $service)
    {
        $request->validated($request->all());
        $request = (array) $request->all(); 
        foreach ($request as $key => $value)
            $service[$key] = $value;
        $service->save();
        return $this->success([
            'service' => $service
        ], "service updated successfully");
    }

    
    
    public function destroy(Service $service)
    {
        $service->delete();
        return $this->success([], "Service deleted successfully");
    }
}
