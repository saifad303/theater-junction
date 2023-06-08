import React from "react";

const Classes = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div>
          <h1 class="text-2xl text-center font-semibold text-gray-700 capitalize lg:text-3xl dark:text-white">
            explore our awesome{" "}
            <span class=" text-white bg-[#F89A2E] px-2">Services</span>
          </h1>

          <p class="mt-4 text-gray-500 text-center xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((value, idx) => (
            <div class="p-8 space-y-3 border-2 border-[#CF1164] dark:border-blue-300 rounded-xl group hover:border-[#F89A2E]">
              <span class="inline-block text-[#CF1164] group-hover:text-[#F89A2E] dark:text-[#CF1164]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Simple & clean designs
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <a
                href="#"
                class="inline-flex p-2 text-[#CF1164] group-hover:text-white capitalize transition-colors duration-300 transform bg-[#eecada] rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white group-hover:bg-[#F89A2E]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
