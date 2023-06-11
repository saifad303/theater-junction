import React, { useState } from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import axios from "axios";
import { useAuthProvider } from "../../context/AuthProvider";
import Spinner from "../../components/GeneralComponents/Loader/Spinner";

const ManageUsers = () => {
  const [users, refetchUsersData, isUsersLoading] = useFetchUsers();
  const [isLoading, setIsLoading] = useState(false);
  const { apiPrefixLink } = useAuthProvider();
  console.log(users);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const changeRoleHandler = (e, data) => {
    setIsLoading(true);
    e.preventDefault();
    console.log("data = ", data);
    axios
      .put(
        `${apiPrefixLink}usersRole`,
        {
          data: data,
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: localStorage.getItem("access-token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        refetchUsersData();
        setIsLoading(false);
      });
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
        <div className="flex items-center justify-center mb-4 rounded bg-gray-50 p-10">
          <div className="w-full mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
              <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                  All Users
                </h3>
              </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                  <tr>
                    <th className="py-3 px-6">Username</th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Current Role</th>
                    <th className="py-3 px-6">Student / Instructor</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {users.map((item, idx) => (
                    <tr key={idx}>
                      <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                        <img
                          src={item.avatar}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <span className="block text-gray-700 text-sm font-medium">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.role === "admin" && (
                          <>
                            <button
                              onClick={(e) =>
                                changeRoleHandler(e, {
                                  id: item._id,
                                  role: "student",
                                })
                              }
                              className="py-2 leading-none px-3 font-medium text-white rounded-lg bg-[#54C6C4]"
                            >
                              Make Student
                            </button>
                            &nbsp;&nbsp;
                            <button
                              onClick={(e) =>
                                changeRoleHandler(e, {
                                  id: item._id,
                                  role: "instructor",
                                })
                              }
                              className="py-2 leading-none px-3 font-medium text-white rounded-lg bg-[#F89A2E]"
                            >
                              Make Instructor
                            </button>
                          </>
                        )}
                        {item.role === "student" && (
                          <>
                            <button
                              onClick={(e) =>
                                changeRoleHandler(e, {
                                  id: item._id,
                                  role: "admin",
                                })
                              }
                              className="py-2 leading-none px-3 font-medium text-white rounded-lg bg-[#CF1164]"
                            >
                              Make Admin
                            </button>
                            &nbsp;&nbsp;
                            <button
                              onClick={(e) =>
                                changeRoleHandler(e, {
                                  id: item._id,
                                  role: "instructor",
                                })
                              }
                              className="py-2 leading-none px-3 font-medium text-white rounded-lg bg-[#F89A2E]"
                            >
                              Make Instructor
                            </button>
                          </>
                        )}
                        {item.role === "instructor" && (
                          <>
                            <button
                              onClick={(e) =>
                                changeRoleHandler(e, {
                                  id: item._id,
                                  role: "admin",
                                })
                              }
                              className="py-2 leading-none px-3 font-medium text-white rounded-lg bg-[#CF1164]"
                            >
                              Make Admin
                            </button>
                            &nbsp;&nbsp;
                            <button
                              onClick={(e) =>
                                changeRoleHandler(e, {
                                  id: item._id,
                                  role: "student",
                                })
                              }
                              className="py-2 leading-none px-3 font-medium text-white rounded-lg bg-[#54C6C4]"
                            >
                              Make Student
                            </button>
                          </>
                        )}
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

export default ManageUsers;
