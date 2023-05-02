<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Traits\HttpResponses;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoriesResource;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{
    use HttpResponses;
   
    public function index()
    {
        return CategoriesResource::collection(Category::all());
    }

    public function show(Category $category){
        return CategoryResource::make($category);
    }

    public function store(StoreCategoryRequest $request)
    {
        $request->validated($request->all());
        $image = $request->file('image');
        $imageName = date('mdYHis') . uniqid();
        $imagePath = public_path() . '/images';
        $image->move($imagePath, $imageName);
        $Category = Category::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => env('APP_URL') . 'images/' . $imageName
        ]); 

        return $this->success([
            'Category' => $Category,
        ], 'Category added successfully');
    }


   
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $request->validated($request->all());
        $request = (array) $request->all(); 
        $category->update($request);
        return $this->success([
            'category' => $category
        ], "Category updated successfully");
    }

    
    public function destroy(Category $category)
    {
        $category->delete();
        return $this->success([], "Category deleted successfully");
    }
}
