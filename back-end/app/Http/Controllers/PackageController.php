<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Http\Resources\PackageResource;
use App\Http\Requests\StorePackageRequest;
use App\Http\Requests\UpdatePackageRequest;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PackageResource::collection(Package::all());
    }


    
    public function store(StorePackageRequest $request)
    {
        $request->validated($request->all());
        $featues = implode(',', $request->features);
        
        
        $Package = Package::create([
            'name' => $request->name,
            'price' => $request->price,
            'features' => $featues,
            'service_id' => $request->service,
        ]); 

        return $this->success([
            'Package' => $Package,
        ], 'Package added successfully');
    }


    public function update(UpdatePackageRequest $request, Package $package)
    {
        $request->validated($request->all());
        $request = (array) $request->all();
        if(isset($request['features'])){
            $featues = implode(',', $request["features"]);
            $request['features'] = $featues;
        }
        $package->update($request);
        return $this->success([
            'package' => $package
        ], "Package updated successfully");
    }


    public function destroy(Package $package)
    {
        $package->delete();
        return $this->success([], "package deleted successfully");
    }
}
