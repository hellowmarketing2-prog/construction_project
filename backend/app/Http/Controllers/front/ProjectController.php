<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function allProjects(){
    $projects = project::where('status', 1)->orderBy('created_at', 'DESC')->get();
     return response()->json([
            'status' => true,
            'data' => $projects


        ]);
    
}
// this method will return latest active servieces
public function latestProjects(Request $request){
    $projects = project::where('status', 1)
    ->orderBy('created_at', 'DESC')->limit($request->limit)->get();
    return response()->json([
            'status' => true,
            'data' => $projects


        ]);
    
}

}