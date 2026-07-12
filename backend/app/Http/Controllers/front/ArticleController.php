<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
     public function index(){
    $articles = Article::where('status', 1)->orderBy('created_at', 'DESC')->get();
     return response()->json([
            'status' => true,
            'data' => $articles


        ]);
    
}
// this method will return latest active servieces
public function latestArticles(Request $request){
    $articles = Article::where('status', 1)
    ->orderBy('created_at', 'DESC')->limit($request->limit)->get();
    return response()->json([
            'status' => true,
            'data' => $articles


        ]);
    
}
    
}