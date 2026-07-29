import React, { useState, useRef, useMemo } from "react";
import Footer from "../../common/Footer";
import Sidebar from "../../common/Sidebar";
import Header from "../../common/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl, fileUrl, token } from "../../common/http";
import { toast } from "react-toastify";
// import JoditEditor from "jodit-react";

const Create = ({ placeholder }) => {
  //   const editor = useRef(null);
  //   const [content, setContent] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const params = useParams();
  const config = useMemo(
    () => ({
      //   readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      //   placeholder: placeholder || "Content",
    }),
    [placeholder],
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await fetch(apiUrl + "testimonials/" + params.id, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      // setTestimonials(result.data.testimonial);
      setTestimonials(result.data);
      return {
        testimonial: result.data.testimonial,
        citation: result.data.citation,
        designation: result.data.designation,
        // image: result.data.image,
        status: result.data.status,
      };
    },
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
  const newData = {
    ...data,
    imageId: imageId,
  };

  const res = await fetch(
    apiUrl + "testimonials/" + params.id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    }
  );

  const result = await res.json();

//   console.log("Update Result:", result);

  if (result.status === true) {
    toast.success(result.message);
    navigate("/admin/testimonials");
  } else {
    toast.error(result.message || "Update failed");
  }
};
  const handleFile = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);
    setIsDisable(true);
    await fetch(apiUrl + "temp_images", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setIsDisable(false);

        // console.log(result);

        if (result.status === false) {
          toast.error(result.errors.image[0]);
        } else {
          setImageId(result.data.id); // ya jo backend bhej raha ho

          // toast.success("Image uploaded successfully");
        }
      });
  };

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 ">
              <div className="card shadow border-0 ">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Testimonials / Create</h4>
                    <Link to="/admin/testimonials" className="btn btn-primary">
                      Back
                    </Link>
                  </div>
                  <hr />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Testimonial
                      </label>
                      <textarea
                        {...register("testimonial", {
                          required: "The testimonial field is required",
                        })}
                        type="text"
                        placeholder="testimonial"
                        className={`form-control  ${
                          errors.testimonial && "is-invalid"
                        }`}
                      ></textarea>

                      {errors.testimonial && (
                        <p className="invalid-feedback">
                          {errors.testimonial.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Citation
                      </label>
                      <input
                        {...register("citation", {
                          required: "The citation field is required",
                        })}
                        type="text"
                        placeholder="Citation"
                        className={`form-control ${
                          errors.citation && "is-invalid"
                        }`}
                      />
                      {errors.citation && (
                        <div className="invalid-feedback">
                          {errors.citation.message}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Designation
                      </label>
                      <input
                        {...register("designation")}
                        type="text"
                        placeholder="designation"
                        className={`form-control`}
                      />
                    </div>
                    {/* <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Short Description
                      </label>
                      <textarea
                        placeholder="Short Description"
                        name=""
                        {...register("short_desc")}
                        className="form-control"
                        rows={2}
                        id=""
                      ></textarea>
                    </div> */}
                    {/* <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Citation
                      </label>

                      <textarea
                        name=""
                        placeholder="citation"
                     {...register("citation", {
                          required: "The citation field is required",
                        })}
                        className="form-control"
                        rows={2}
                        id=""
                      ></textarea> */}
                    {/* <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                      /> */}
                    {/* </div> */}
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Image
                      </label>
                      <br />
                      <input onChange={handleFile} type="file" />
                    </div>
                   <div className="pb-3">
  {testimonials && testimonials.image && (
    <img
      src={fileUrl + "uploads/testimonials/" + testimonials.image}
      alt="Testimonial"
      width="120"
    />
  )}
</div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Status
                      </label>
                      <select className="form-control" {...register("status")}>
                        <option value="1">Active</option>
                        <option value="0">Block</option>
                      </select>
                    </div>
                    <button disabled={isDisable} className="btn btn-primary">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Create;
