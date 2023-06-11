import React, { useState } from "react";
import useFetchAllClass from "../../hooks/useFetchAllClass";
import axios from "axios";
import { useAuthProvider } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import FeedbackModal from "../../components/GeneralComponents/Modal/FeedbackModal";

const ManageClasses = () => {
  const [allClasses, refetchAllClass] = useFetchAllClass();
  const { apiPrefixLink } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedElementId, setSelectedElementId] = useState(null);
  // console.log("allClasses = ", allClasses);

  const handleSubmit = (elementId, feedback) => {
    axios
      .put(
        `${apiPrefixLink}feedback`,
        {
          data: {
            id: elementId,
            feedback: feedback,
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
        refetchAllClass();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Feedback successfully inserted.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const roleChangeHandler = (e, id) => {
    e.preventDefault();
    if (e.target.value === "") {
      return;
    }
    // console.log("data coming...", e.target.value);
    // console.log("data id = ", id);

    axios
      .put(
        `${apiPrefixLink}allClasses`,
        {
          data: {
            id: id,
            status: e.target.value,
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
        refetchAllClass();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Status has successfully been changed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

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
                    <th className="py-3 px-6">Class Name</th>
                    <th className="py-3 px-6">Description</th>
                    <th className="py-3 px-6">Price</th>
                    <th className="py-3 px-6">Available seats</th>
                    <th className="py-3 px-6">Total enrolled</th>
                    <th className="py-3 px-6">Select Status</th>
                    <th className="py-3 px-6">Current status</th>
                    <th className="py-3 px-6">Instructor email</th>
                    <th className="py-3 px-6">Admin Feedback</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {allClasses.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {selectedElementId && (
                        <FeedbackModal
                          isOpen={modalIsOpen}
                          onRequestClose={() => setModalIsOpen(false)}
                          onSubmit={handleSubmit}
                          elementId={selectedElementId}
                        />
                      )}
                      <FeedbackModal
                        isOpen={modalIsOpen}
                        onRequestClose={handleCloseModal}
                        onSubmit={handleSubmit}
                        elementId={item._id}
                      />
                      <tr key={idx} className="divide-x">
                        <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                          {item.className}
                        </td>
                        <td className="px-6 whitespace-wrap">
                          <p className="w-[200px]">{item.description}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ${item.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.availableSeats}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.totalEnrolled}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            onChange={(e) => roleChangeHandler(e, item._id)}
                            name=""
                            id=""
                            className=" border-[3px] border-[#CF1164] text-[#CF1164] rounded-lg px-6 py-3"
                          >
                            <option
                              value=""
                              className=" font-medium text-base text-[#F89A2E]"
                            >
                              Select Role
                            </option>
                            <option
                              value="pending"
                              className=" font-medium text-base text-[#F89A2E]"
                            >
                              Pending
                            </option>
                            <option
                              value="accepted"
                              className=" font-medium text-base text-[#54C6C4]"
                            >
                              Accept
                            </option>
                            <option
                              value="denied"
                              className=" font-medium text-base text-[#CF1164]"
                            >
                              Denied
                            </option>
                          </select>
                        </td>
                        <td className="px-6 py-3 ">
                          {item.status === "pending" && (
                            <span className="bg-[#ffdfbb] text-[#ff8800] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                              Pending
                            </span>
                          )}

                          {item.status === "accepted" && (
                            <span className="border border-[#54C6C4] text-[#54C6C4] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                              Accepted
                            </span>
                          )}

                          {item.status === "denied" && (
                            <span className="border border-[#CF1164] text-[#CF1164] text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                              Denied
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-wrap">
                          <p className=" w-40">{item.instructorEmail}</p>
                        </td>
                        <td className="px-6 whitespace-wrap">
                          <p className="w-[200px]">{item.feedback}</p>
                          <button
                            onClick={() => {
                              setSelectedElementId(item._id);
                              setModalIsOpen(true);
                            }}
                            data-modal-target="defaultModal"
                            data-modal-toggle="defaultModal"
                            className=" mt-2 w-28 px-1 py-1 text-white duration-150 bg-[#54C6C4] rounded-lg  active:shadow-lg text-sm"
                          >
                            Add Feedback
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
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

export default ManageClasses;
