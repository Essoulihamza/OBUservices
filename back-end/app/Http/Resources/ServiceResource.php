<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $feedbacks = [];
        $packages = [];
        foreach ($this->packages as $package) {
            array_push($packages, [
                'id' => $package->id,
                'name' => $package->name,
                'price' => $package->price,
                'features' => explode(',', $package->features)
            ]);           
        }
        foreach ($this->feedbacks as $feedback) {
            array_push($feedbacks, [
                'id' => $feedback->id,
                'content' => $feedback->content,
                'userName' => User::find($feedback->user_id)->fullName,
                'created_at' => $feedback->created_at
            ]);           
        }
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'packages' => $packages,
            'feedbacks' => $feedbacks
        ];
    }
}
