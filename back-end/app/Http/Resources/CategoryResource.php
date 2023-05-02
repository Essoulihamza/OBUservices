<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $services = [];
        foreach ($this->services as $service) {
            array_push($services, $service);           
        }
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'services' => $services
        ];
    }
}
