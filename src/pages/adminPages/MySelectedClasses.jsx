import React, { useEffect, useState } from "react";
import useFetchUser from "../../hooks/useFetchUser";
import useFetchAllClass from "../../hooks/useFetchAllClass";
import useFetchAllPayment from "../../hooks/useFetchAllPayment";
import { useAuthProvider } from "../../context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MySelectedClasses = () => {
  const [payments, refetchPayment, isPaymentLoading] = useFetchAllPayment();
  const [user, userRefetch, isFetchUserLoading] = useFetchUser();
  const [allClasses, refetchAllClass, isFetchClassLoading] = useFetchAllClass();
  const { apiPrefixLink, signedInUser } = useAuthProvider();
  const navigate = useNavigate();

  console.log(payments);

  if (isFetchUserLoading || isFetchClassLoading || isPaymentLoading) {
    return "...loading";
  }

  const coursePayHandler = (e, courseId, price, className) => {
    e.preventDefault();

    navigate(`/admin/payment/${price}/${courseId}/${className}`);
  };

  const myClassDelHandler = (e, id) => {
    e.preventDefault();
    console.log(id);

    axios
      .put(
        `${apiPrefixLink}deleteClassId`,
        {
          data: {
            id: id,
            email: signedInUser.email,
          },
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Class successfully deleted",
          showConfirmButton: false,
          timer: 1500,
        });
        refetchAllClass();
        userRefetch();
      });
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
        <div className="mb-4 rounded py-14">
          <div className=" w-full mx-auto px-4">
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
                    <th className="py-3 px-6">Pay</th>
                    <th className="py-3 px-6">Delete</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {user.selectedClassIds.map((classId, idx) => {
                    return allClasses.map((classItem, idxx) => {
                      if (classId === classItem._id) {
                        return (
                          <tr key={idxx} className="divide-x">
                            <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                              {classItem.className}
                            </td>
                            <td className="px-6 py-4 whitespace-wrap">
                              <p className=" w-[200px]">
                                {classItem.description}
                              </p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              ${classItem.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {classItem.availableSeats}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={(e) =>
                                  coursePayHandler(
                                    e,
                                    classItem._id,
                                    classItem.price,
                                    classItem.className
                                  )
                                }
                                className="px-5 py-3 text-white duration-150 bg-[#54C6C4] rounded-lg  active:shadow-lg"
                              >
                                Pay course
                              </button>
                            </td>
                            <td
                              onClick={(e) =>
                                myClassDelHandler(
                                  e,
                                  classItem._id,
                                  classItem.price
                                )
                              }
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              <button className="px-5 py-3 text-white duration-150 bg-[#CF1164] rounded-lg  active:shadow-lg">
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      }
                    });
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClasses;
