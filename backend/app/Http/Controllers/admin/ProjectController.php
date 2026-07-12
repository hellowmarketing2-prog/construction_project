<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\project;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use SebastianBergmann\CodeCoverage\Report\Xml\Project as XmlProject;

class ProjectController extends Controller
{
    //this method will return all projects
    public function index()
    {
        $projects = Project::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $projects
        ]);
    }
    // this method will insert the project in database

    public function store(Request $request)
    {
        $request->merge([
            'slug' => Str::slug($request->slug)
        ]);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug'
        ]);


        $request->merge(['slug' => Str::slug($request->slug)]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 422);
        }
        $project = new project();
        $project->title = $request->title;
        $project->content = $request->content;
        $project->construction_type = $request->construction_type;
        $project->short_desc = $request->short_desc;
        $project->location = $request->location;
        $project->status = $request->status;
        $project->sector = $request->sector;
        // $project->image = $request->image;
        $project->slug =  Str::slug($request->slug);

        $project->save();
        // save the image here 
        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $filename = strtotime('now') . $project->id . '.' . $ext;
                // create small thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/projects/small/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->coverDown(500, 600);
                $image->save($destPath);

                // create large thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/projects/large/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->scaleDown(1200);
                $image->save($destPath);
                $project->image = $filename;
                $project->save();
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'Project added successfully'
        ]);
    }

    public function update($id, Request $request)
    {
        $project =  project::find($id);

        if ($project == null) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }

        $request->merge([
            'slug' => Str::slug($request->slug)
        ]);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug,' . $id . ',id'
        ]);


        $request->merge(['slug' => Str::slug($request->slug)]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 422);
        }
        $project->title = $request->title;
        $project->content = $request->content;
        $project->construction_type = $request->construction_type;
        $project->short_desc = $request->short_desc;
        $project->location = $request->location;
        $project->status = $request->status;
        $project->sector = $request->sector;
        // $project->image = $request->image;
        $project->slug =  Str::slug($request->slug);

        $project->save();
        // save the image here 
        if ($request->imageId > 0) {
            $oldImage = $project->image;

            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $filename = strtotime('now') . $project->id . '.' . $ext;
                // create small thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/projects/small/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->coverDown(500, 600);
                $image->save($destPath);

                // create large thumbnail here 
                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/projects/large/' . $filename);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->scaleDown(1200);
                $image->save($destPath);
                $project->image = $filename;
                $project->save();
            }
            if ($oldImage != '') {
                File::delete(public_path('uploads/projects/large/' . $oldImage));
                File::delete(public_path('uploads/projects/small/' . $oldImage));
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'Project updated successfully'
        ]);
    }

    public function show($id)
    {
        $project = Project::find($id);

        if ($project == null) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $project
        ]);
    }
    public function destroy($id)
    {
        $project = Project::find($id);
 
        if ($project == null) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }
        File::delete(public_path('uploads/projects/large/' . $project->image));
        File::delete(public_path('uploads/projects/small/' . $project->image));

        $project->delete();
        return response()->json([
            'status' => true,
            'message' => 'Projects deleted successfully.'
        ]);
    }
}