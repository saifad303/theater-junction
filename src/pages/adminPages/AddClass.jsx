import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuthProvider } from "../../context/AuthProvider";

const AddClass = () => {
  const img_token = import.meta.env.VITE_IMAGE_TOKEN;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`;
  const { apiPrefixLink, signedInUser } = useAuthProvider();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          const { cname, availableSeats, cdesc, price } = data;
          const newItem = {
            className: cname,
            availableSeats: parseInt(availableSeats),
            description: cdesc,
            price: parseInt(price),
            totalEnrolled: 0,
            image: imgURL,
            status: "pending",
            feedback: "No feedback",
            instructorName: signedInUser.displayName,
            instructorEmail: signedInUser.email,
          };
          console.log(newItem);
          axios.post(`${apiPrefixLink}classes`, newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Class added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
        <div className=" p-10 flex items-center justify-center  mb-4 rounded bg-gray-50 ">
          <section className=" w-full p-6 mx-auto bg-[#54C6C4] rounded-md shadow-md  mt-20">
            <h1 className="text-3xl font-bold text-white capitalize ">
              Add course
            </h1>
            <h3 className="text-lg font-bold text-white capitalize ">
              Name: {signedInUser.displayName}
            </h3>
            <h3 className="text-lg font-bold text-white ">
              Email: {signedInUser.email}
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                <div>
                  <label
                    className="text-white text-xl font-medium "
                    for="username"
                  >
                    Class Name
                  </label>
                  <input
                    {...register("cname")}
                    required
                    id="username"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    required
                    className="text-white text-xl font-medium "
                    for="username"
                  >
                    Price
                  </label>
                  <input
                    {...register("price")}
                    required
                    id="emailAddress"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    required
                    className="text-white text-xl font-medium "
                    for="username"
                  >
                    Available seats
                  </label>
                  <input
                    {...register("availableSeats")}
                    required
                    id="emailAddress"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-white text-xl font-medium "
                    for="username"
                  >
                    Class Description
                  </label>
                  <textarea
                    {...register("cdesc", { maxLength: "250" })}
                    required
                    id="textarea"
                    type="textarea"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring h-[130px]"
                  ></textarea>
                  {errors.cdesc?.type === "required" && (
                    <p className="text-red-600">Name is required</p>
                  )}

                  {errors.cdesc?.type === "maxLength" && (
                    <p className="text-red-600">Description max length 250</p>
                  )}
                </div>
                <div>
                  <label
                    className="text-white text-xl font-medium "
                    for="username"
                  >
                    Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <div className="form-control w-full my-4">
                        <input
                          type="file"
                          {...register("image")}
                          className="file-input file-input-bordered w-full "
                        />
                      </div>
                      <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="px-6 py-4 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                >
                  Save Class
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
