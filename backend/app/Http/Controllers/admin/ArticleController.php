<?php

namespace App\Http\Controllers\admin;
use Illuminate\Support\Str;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
class ArticleController extends Controller
{
// This method will fetch all the article in the database    
public function index(){
     $article = Article::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $article
        ]);
}

// This method will fetch single  article in the database    
public function show($id){
    
     $article = Article::find($id);
     if($article == null){
        return response()->json([
            'status' => false,
            'message' => 'Article not found'
        ], 404);
     }
        return response()->json([
            'status' => true,
            'data' => $article
        ]);
}
// this methode will insert article in db 
public function store(Request $request){
     $request->merge([
            'slug' => Str::slug($request->slug)
        ]);
    $validator = Validator::make($request->all(),[
        'title' => 'required',
        'slug' => 'required|unique:articles,slug'

    ]);
    
        $request->merge(['slug' => Str::slug($request->slug)]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 422);
        }
        $article = new article();
        $article->title = $request->title;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->author = $request->author;
        $article->image = $request->image;
        $article->slug =  Str::slug($request->slug);
        $article->save();

         if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $filename = strtotime('now') . $article->id . '.' . $ext;
                // create small thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/articles/small/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->coverDown(450, 300);
                $image->save($destPath);

                // create large thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/articles/large/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->scaleDown(1200);
                $image->save($destPath);
                $article->image = $filename;
                $article->save();
            }
        }
         return response()->json([
            'status' => true,
            'message' => 'Article added successfully'
        ]);

}
public function update($id , Request $request){
    $article = Article::find($id);
    if($article == null){
        return response()->json([
            'status' => false,
            'message' => 'Article not found'
        ], 404);
    }
            $oldImage = $article->image;
    
    $request->merge([
        'slug' => Str::slug($request->slug)
    ]);
    $validator = Validator::make($request->all(),[
        'title' => 'required',
        'slug' => 'required|unique:articles,slug,'.$id.',id'

    ]);
    
        $request->merge(['slug' => Str::slug($request->slug)]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 422);
        }
        $article->title = $request->title;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->author = $request->author;
        $article->image = $request->image;
        $article->slug =  Str::slug($request->slug);
        $article->save();

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $filename = strtotime('now') . $article->id . '.' . $ext;
                // create small thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/articles/small/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->coverDown(450, 300);
                $image->save($destPath);

                // create large thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/articles/large/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->scaleDown(1200);
                $image->save($destPath);
                $article->image = $filename;
                $article->save();
            }
              if ($oldImage != '') {
                File::delete(public_path('uploads/articles/large/' . $oldImage));
                File::delete(public_path('uploads/articles/small/' . $oldImage));
            }
        }
         return response()->json([
            'status' => true,
            'message' => 'Article updated successfully'
        ]);
    
}
public function destroy($id){
     $articles = Article::find($id);
 
        if ($articles == null) {
            return response()->json([
                'status' => false,
                'message' => 'Article not found'
            ]);
        }
        File::delete(public_path('uploads/articles/large/' . $articles->image));
        File::delete(public_path('uploads/articles/small/' . $articles->image));

        $articles->delete();
        return response()->json([
            'status' => true,
            'message' => 'Article deleted successfully.'
        ]);
    
}

}