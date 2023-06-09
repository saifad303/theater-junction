import React from "react";

const AddClass = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
        <div className=" p-10 flex items-center justify-center  mb-4 rounded bg-gray-50 ">
          <section class=" w-full p-6 mx-auto bg-[#54C6C4] rounded-md shadow-md  mt-20">
            <h1 class="text-3xl font-bold text-white capitalize ">
              Add course
            </h1>
            <form>
              <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                <div>
                  <label class="text-white text-xl font-medium " for="username">
                    Class Name
                  </label>
                  <input
                    id="username"
                    type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label class="text-white text-xl font-medium " for="username">
                    Available seats
                  </label>
                  <input
                    id="emailAddress"
                    type="number"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label class="text-white text-xl font-medium " for="username">
                    Class Description
                  </label>
                  <textarea
                    id="textarea"
                    type="textarea"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring h-[130px]"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-white">
                    Image
                  </label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer bg-white rounded-md font-medium text-[#CF1164]  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span class=" p-3 text-lg">Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1 text-white">or drag and drop</p>
                      </div>
                      <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-end mt-6">
                <button class="px-6 py-4 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
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
