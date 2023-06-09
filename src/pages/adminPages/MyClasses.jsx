import React from "react";

const MyClasses = () => {
  const tableItems = [
    {
      name: "Liam James",
      email: "liamjames@example.com",
      position: "Software engineer",
      salary: "$100K",
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      position: "Product designer",
      salary: "$90K",
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      position: "Front-end developer",
      salary: "$80K",
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      position: "Laravel engineer",
      salary: "$120K",
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      position: "Open source manager",
      salary: "$75K",
    },
  ];

  return (
    <div className=" p-4 sm:ml-64">
      <div className=" p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
        <div className="mb-4 rounded  py-14 ">
          <div className="w-full mx-auto">
            <div className="max-w-lg">
              <h3 className="text-gray-700 text-xl font-semibold sm:text-3xl">
                My selected classes
              </h3>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                  <tr className="divide-x">
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Description</th>
                    <th className="py-3 px-6">Price</th>
                    <th className="py-3 px-6">Available seats</th>
                    <th className="py-3 px-6">Total enrolled</th>
                    <th className="py-3 px-6">Course status</th>
                    <th className="py-3 px-6">Admin Feedback</th>
                    <th className="py-3 px-6">Delete</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {tableItems.map((item, idx) => (
                    <tr key={idx} className="divide-x">
                      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                        <span>{idx + 1}</span>
                        {item.name}
                      </td>
                      <td className="px-6 whitespace-nowrap">{item.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.position}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.salary}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.salary}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-[#ffdfbb] text-[#ff8800] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                          Pending
                        </span>
                        <br />
                        <br />
                        <span className="border border-[#54C6C4] text-[#54C6C4] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                          Accepted
                        </span>
                        <br />
                        <br />
                        <span className="border border-[#CF1164] text-[#CF1164] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                          Denied
                        </span>
                      </td>
                      <td className="px-6 py-3 ">
                        <p className=" w-52">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-wrap">
                        <button className="px-5 py-3 w-32 text-white duration-150 bg-[#CF1164] rounded-lg  active:shadow-lg">
                          Delete course
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
