import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="bg-white dark:bg-gray-900 ">
      <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div class="wf-ull lg:w-1/2">
          <h1 class="mt-3 text-2xl font-semibold text-gray-700 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>

          <div class="flex items-center mt-6 gap-x-3">
            <Link
              to="/"
              class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#CF1164] rounded-lg shrink-0 sm:w-auto  "
            >
              Take me home
            </Link>
          </div>
        </div>

        <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img
            class="w-full max-w-lg lg:mx-auto"
            src="/images/not-found.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
