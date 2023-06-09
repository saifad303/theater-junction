import React from "react";

const ClassesPage = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Explore Our{" "}
            <span className=" text-white bg-[#F89A2E] px-2">Classes</span>
          </h3>
          <p className="text-gray-600 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* ...start... */}
            {[1, 1, 1, 1, 1, 1].map((val, idx) => (
              <div
                key={idx}
                className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-xl  "
              >
                <div className="flex space-x-4">
                  <img
                    alt=""
                    src="https://source.unsplash.com/100x100/?portrait"
                    className="object-cover w-12 h-12 rounded-full shadow "
                  />
                  <div className="flex flex-col space-y-1">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-sm font-semibold"
                    >
                      Instructor Name
                    </a>
                    <span className="text-xs ">Takes 10 classes</span>
                  </div>
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/random/100x100/?5"
                    alt=""
                    className="object-cover w-full mb-4 h-60 sm:h-96 "
                  />
                  <h2 className="mb-1 text-xl font-semibold text-gray-700">
                    Class Name
                  </h2>
                  <p className="text-sm  text-gray-500">
                    Eu qualisque aliquando mel, id lorem detraxit nec, ad elit
                    minimum pri. Illum ipsum detracto ne cum. Mundi nemore te
                    ius, vim ad illud atqui apeirian...
                  </p>
                </div>
                <span className="bg-[#54C6C4] text-white text-base font-medium mr-2 px-2.5 py-0.5 rounded  w-44">
                  Available seats: 100
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-700 ">
                    $599
                  </span>
                  <a
                    href="#"
                    className="text-white bg-[#CF1164] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            ))}
            {/* ....end..... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesPage;
