<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\TempImage;

use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;


class MemberController extends Controller
{
    // this method will return all members
    public function index()
    {
        $member = Member::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $member
        ]);
    }
    // this method will store team members in DB
    public function store(Request $request)
    {
        $validater = Validator::make($request->all(), [
            'name' => 'required',
            //  'status' => 'required',
            'job_title' => 'required'
        ]);
        if ($validater->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validater->errors()
            ]);
        }
        $member  = new Member();
        $member->name = $request->name;
        $member->status = $request->status;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->save();

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $filename = strtotime('now') . $member->id . '.' . $ext;

                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/members/' . $filename);

                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->coverDown(400, 500);
                $image->save($destPath);

                $member->image = $filename;
                $member->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Member added successfully'
        ]);
    }
    // this method will return single member data
    public function show($id) {
         $member = Member::find($id);

        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found'
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $member
        ]);
    }
    // this method will update the member
    public function update($id, Request $request) {
        $member =  Member::find($id);
        
          $validater = Validator::make($request->all(), [
            'name' => 'required',
            //  'status' => 'required',
            'job_title' => 'required'
        ]);
        if ($validater->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validater->errors()
            ]);
        }
        $member->name = $request->name;
        $member->status = $request->status;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->save();

        if ($request->imageId > 0) {
            $oldImage = $member->image;

            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {

                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);

                $filename = strtotime('now') . $member->id . '.' . $ext;

                $soursePath = public_path('uploads/temp/' . $tempImage->name);
                $destPath = public_path('uploads/members/' . $filename);

                $manager = new ImageManager(Driver::class);
                $image = $manager->read($soursePath);
                $image->coverDown(400, 500);
                $image->save($destPath);

                $member->image = $filename;
                $member->save();
                
                 if ($oldImage != '') {
                File::delete(public_path('uploads/members/' . $oldImage));
                File::delete(public_path('uploads/members/' . $oldImage));
            }
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Member updated successfully'
        ]);
    }
    // this method will delete a member from DB
    public function destroy($id) {
          $member = Member::find($id);
 
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found'
            ]);
        }
        if($member->image != ''){
            
            File::delete(public_path('uploads/members/' . $member->image));
        }

        $member->delete();
        return response()->json([
            'status' => true,
            'message' => 'Member deleted successfully.'
        ]);
    }
}