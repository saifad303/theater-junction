import React from "react";

const MyEnrolledClasses = () => {
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
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
        <div className="mb-4 rounded  py-14">
          <div className="w-full mx-auto px-4">
            <div className="max-w-lg">
              <h3 className="text-gray-700 text-xl font-semibold sm:text-3xl">
                My enrolled classes
              </h3>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                  <tr className="divide-x">
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {tableItems.map((item, idx) => (
                    <tr key={idx} className="divide-x">
                      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                        <span>{idx + 1}</span>
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.email}
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

export default MyEnrolledClasses;
