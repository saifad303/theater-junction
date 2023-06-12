import React from "react";

const Classes = () => {
  return (
    <section className="bg-white dark:bg-black ">
      <div className="container px-6 py-10 mx-auto">
        <div>
          <h1 className="dark:text-white text-2xl text-center font-semibold text-gray-700 capitalize lg:text-3xl ">
            explore our awesome{" "}
            <span className=" text-white bg-[#F89A2E] px-2">Services</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((value, idx) => (
            <div
              key={idx}
              className="p-8 space-y-3 border-2 border-[#CF1164]  rounded-xl group hover:border-[#F89A2E]"
            >
              <span className="inline-block text-[#CF1164] group-hover:text-[#F89A2E] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 className="dark:text-white text-xl font-semibold text-gray-700 capitalize ">
                Explore the Possibilities and Unleash Your Potential
              </h1>

              <p className="text-gray-500 dark:text-white">
                Discover an unforgettable summer adventure with our exceptional
                range of services. At our summer camp, we offer a diverse array
                of activities and programs tailored to create lifelong memories
                for children and teenagers.
              </p>

              <a
                href="#"
                className="inline-flex p-2 text-[#CF1164] group-hover:text-white capitalize transition-colors duration-300 transform bg-[#eecada] rounded-full rtl:-scale-x-100  group-hover:bg-[#F89A2E]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
