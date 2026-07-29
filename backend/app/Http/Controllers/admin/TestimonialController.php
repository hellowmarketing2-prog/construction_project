<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use App\Models\Testimonials;
use Dflydev\DotAccessData\Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class TestimonialController extends Controller
{
    // this method will return all testimonials
    public function index()
    {
        $testimonials = Testimonials::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }
    // this method will return single testimonials

    public function show($id)
    {

        $testimonials = Testimonials::find($id);
        if ($testimonials == null) {
            return response()->json([
                'status' => false,
                'message' => 'Testimonials not found'
            ], 404);
        }
        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }
    // this method will store/insert a testimonials in DB
    public function store(Request $request)
    {


        $validator = Validator::make($request->all(), [
            'testimonial' => 'required',
            'citation' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
        $testimonial = new Testimonials();
        $testimonial->testimonial = $request->testimonial;
        $testimonial->citation = $request->citation;
        $testimonial->designation = $request->designation;

        $testimonial->save();
        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $filename = strtotime('now') . $testimonial->id . '.' . $ext;
                // create small thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/testimonials/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->coverDown(300, 300);
                $image->save($destPath);
                $testimonial->image = $filename;
                $testimonial->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Testimonial added successfully'
        ]);
    }


    public function update($id, Request $request)
    {
        $testimonials = Testimonials::find($id);
        if ($testimonials == null) {
            return response()->json([
                'status' => false,
                'message' => 'Testimonials not found'
            ], 404);
        }
        $validator = Validator::make($request->all(), [
            'testimonial' => 'required',
            'citation' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
        $testimonials->testimonial = $request->testimonial;
        $testimonials->citation = $request->citation;
        $testimonials->designation = $request->designation;
        $testimonials->save();
        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            $oldImage = $testimonials->image;

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $filename = strtotime('now') . $testimonials->id . '.' . $ext;
                // create small thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/testimonials/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->coverDown(300, 300);
                $image->save($destPath);


                $testimonials->image = $filename;
                $testimonials->save();

                if ($oldImage != '') {
                    File::delete(public_path('uploads/testimonials/' . $oldImage));
                    // File::delete(public_path('uploads/articles/small/' . $oldImage));
                }
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'Testimonial updated successfully'
        ]);

    }
    public function destroy($id){
     $testimonials = Testimonials::find($id);
 
        if ($testimonials == null) {
            return response()->json([
                'status' => false,
                'message' => 'Testimonial not found'
            ]);
        }
        File::delete(public_path('uploads/testimonial/' . $testimonials->image));

        $testimonials->delete();
        return response()->json([
            'status' => true,
            'message' => 'Testimonial deleted successfully.'
        ]);
    
}
}