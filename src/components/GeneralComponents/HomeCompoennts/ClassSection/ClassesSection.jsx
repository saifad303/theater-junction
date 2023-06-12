import React from "react";
import useFetchAllClassesForHome from "../../../../hooks/useFetchAllClassesForHome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ClassesSection = () => {
  const [topSixClasses, refetchSixClass, isSixClassLoading] =
    useFetchAllClassesForHome();

  console.log(topSixClasses);
  return (
    <div className=" dark:bg-black max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className=" mb-10">
        <h1 className="dark:text-white text-2xl text-center font-semibold text-gray-700 capitalize lg:text-3xl ">
          explore our top{" "}
          <span className="dark:text-white text-white bg-[#F89A2E] px-2">
            Classes
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {topSixClasses.map((value, idx) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={idx}
            className="rounded overflow-hidden shadow-lg dark:border dark:border-[#F89A2E]"
          >
            <a href="#">
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-[250px]"
                  src={value.image}
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                <a href="!#">
                  <div className="text-sm absolute top-0 right-0 bg-[#CF1164] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3  transition duration-500 ease-in-out">
                    <span className="font-bold text-base">
                      {value.totalEnrolled}
                    </span>
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
                {value.className}
              </a>
              <p className="text-gray-500 dark:text-white text-sm">
                {value.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className=" w-full text-center">
        <Link
          to="/classes"
          className=" line-clamp-3 mt-6 bg-[#CF1164] text-white px-10 py-3 rounded-lg inline-block"
        >
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default ClassesSection;
