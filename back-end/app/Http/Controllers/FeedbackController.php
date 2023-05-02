<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\FeedbackResource;
use App\Http\Requests\StoreFeedbackRequest;
use App\Http\Requests\UpdateFeedbackRequest;
use Illuminate\Foundation\Validation\ValidatesRequests;

class FeedbackController extends Controller
{
    use HttpResponses, ValidatesRequests;
    
    public function index()
    {
        FeedbackResource::collection(Feedback::all());
    }

    
    public function store(StoreFeedbackRequest $request)
    {
        $request->validated($request->all());
        $Feedback = Feedback::create([
            'content' => $request->content,
            'service_id' => $request->service_id,
            'user_id' => Auth::user()->id,
        ]); 

        return $this->success([
            'Feedback' => $Feedback,
        ], 'Feedback added successfully');
    }

    public function show(){
        return FeedbackResource::collection(
            Feedback::where('user_id', Auth::user()->id)->get()
        );
    }


    public function update(UpdateFeedbackRequest $request, Feedback $feedback)
    {
        if(Auth::user()->id !== $feedback->user_id) {
            return $this->error('', 'You are not authorized to make this request', 403);
        }
        $feedback->update((array) $request);
        return $this->success([
            'Feedback' => $feedback
        ], "Feedback updated successfully");
    }


    public function destroy(Feedback $feedback)
    {
        if(Auth::user()->id !== $feedback->user_id) {
            return $this->error('', 'You are not authorized to make this request', 403);
        }
        $feedback->delete();
        return $this->success([], "Feedback deleted successfully");
    }
}
