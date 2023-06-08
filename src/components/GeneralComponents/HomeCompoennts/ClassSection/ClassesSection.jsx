import React from "react";

const ClassesSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className=" mb-10">
        <h1 className="text-2xl text-center font-semibold text-gray-700 capitalize lg:text-3xl dark:text-white">
          explore our awesome{" "}
          <span className=" text-white bg-[#F89A2E] px-2">Classes</span>
        </h1>

        <p className="mt-4 text-gray-500 text-center xl:mt-6 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {[1, 1, 1, 1, 1, 1].map((v, idx) => (
          <div key={idx} className="rounded overflow-hidden shadow-lg">
            <a href="#">
              <div className="relative">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-[#CF1164] px-4 py-2 text-white text-base font-medium hover:bg-white hover:text-[#CF1164] transition duration-500 ease-in-out">
                    Enroll
                  </div>
                </a>
                <a href="!#">
                  <div className="text-sm absolute top-0 right-0 bg-[#CF1164] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3  transition duration-500 ease-in-out">
                    <span className="font-bold text-base">15</span>
                    <small>Students</small>
                  </div>
                </a>
              </div>
            </a>
            <div className="px-6 py-4">
              <a
                href="#"
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Best Salad Images ever
              </a>
              <p className="text-gray-500 text-sm">
                The collection of best salads of town in pictures
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <span
                href="#"
                className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
              >
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
      c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
      c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      />
                    </g>
                  </g>
                </svg>
                <span className="ml-1">6 mins read</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesSection;
