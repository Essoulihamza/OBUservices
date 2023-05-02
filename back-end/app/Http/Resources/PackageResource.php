<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PackageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $features = explode(',', $this->features);
        return [
          'id' => $this->id,
          'name' => $this->name,
          'price' => $this->price,
          'features' => (array) $features,
          'service' => $this->service->name, 
          'service_id' => $this->service->id, 
        ];
    }
}
