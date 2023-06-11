import React, { useEffect, useState } from "react";
import useFetchAllClass from "../../hooks/useFetchAllClass";
import { useAuthProvider } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useFetchUser from "../../hooks/useFetchUser";
import axios from "axios";

const ClassesPage = () => {
  const [allClasses, refetchAllClass] = useFetchAllClass();
  const { apiPrefixLink, signedInUser } = useAuthProvider();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const navigate = useNavigate();

  const selectClassHandler = (data) => {
    console.log("data = ", data);
    if (signedInUser === null) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "You have to sign in first!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/sign-in");
    }
    axios
      .put(
        `${apiPrefixLink}classIdCollection`,
        {
          data: {
            email: data.email,
            id: data.id,
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

        if (res.data.modifiedCount === 1) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Great!",
            text: "You have selected the course!",
            showConfirmButton: false,
            timer: 2500,
          });

          axios
            .put(
              `${apiPrefixLink}subtractSeat`,
              {
                data: {
                  id: data.id,
                },
              },
              {
                headers: {
                  "content-type": "application/json",
                },
              }
            )
            .then((res) => {
              // console.log(res.data);
              // console.log("refetching classes...");
              refetchAllClass();
            });
        }

        if (res.data.modifiedCount === 0) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: "You have already selected the course!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  // console.log(allClasses);
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
            {allClasses.map((course, idx) => (
              <div
                key={idx}
                className={`flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-xl ${
                  course.availableSeats === 0 ? "bg-rose-100" : ""
                } `}
              >
                <div>
                  <img
                    src={course.image}
                    alt=""
                    className="object-cover w-full mb-4 h-60 sm:h-96 "
                  />
                  <h2 className="mb-1 text-xl font-semibold text-gray-700">
                    {course.className}
                  </h2>
                  <div className="flex flex-col space-y-1 mb-3">
                    <span>
                      <span className=" text-base font-medium">
                        Instructor name:{" "}
                      </span>{" "}
                      {course.instructorName}
                    </span>
                  </div>
                  <p className="text-sm  text-gray-500">{course.description}</p>
                </div>
                <span className="bg-[#54C6C4] text-white text-base font-medium mr-2 px-2.5 py-0.5 rounded  w-44">
                  Available seats: {course.availableSeats}
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-700 ">
                    ${course.price}
                  </span>
                  {course.availableSeats === 0 && (
                    <button
                      disabled
                      className="text-white bg-[#c05b87] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      No seats available
                    </button>
                  )}

                  {(isAdmin || isInstructor) === true &&
                    course.availableSeats > 0 && (
                      <button
                        disabled
                        className="text-white bg-[#c05b87] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[200px]"
                      >
                        Admin/Instructor not allowed to select class
                      </button>
                    )}

                  {(isAdmin || isInstructor) === false &&
                    course.availableSeats > 0 && (
                      <button
                        onClick={() =>
                          selectClassHandler({
                            id: course._id,
                            email: signedInUser.email,
                          })
                        }
                        className="text-white bg-[#CF1164] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                      >
                        Select Class
                      </button>
                    )}
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
