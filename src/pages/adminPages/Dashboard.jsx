import React from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const [isStudent, isStudentLoading] = useStudent();

  if (isAdminLoading || isInstructorLoading || isStudentLoading) {
    return "Loading...";
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
        {isAdmin === true && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Link
              to="/admin/manage-classes"
              className=" cursor-pointer flex items-center justify-center rounded bg-[#CF1164] h-28 "
            >
              <p className="text-2xl text-white ">Manage Class</p>
            </Link>
            <Link
              to="/admin/manage-users"
              className="cursor-pointer flex items-center justify-center rounded bg-[#54C6C4] h-28 "
            >
              <p className="text-2xl text-white ">Manage User</p>
            </Link>
          </div>
        )}

        {isInstructor === true && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Link
              to="/admin/add-class"
              className=" cursor-pointer flex items-center justify-center rounded bg-[#CF1164] h-28 "
            >
              <p className="text-2xl text-white ">Add Class</p>
            </Link>
            <Link
              to="/admin/my-class"
              className="cursor-pointer flex items-center justify-center rounded bg-[#54C6C4] h-28 "
            >
              <p className="text-2xl text-white ">My Classes</p>
            </Link>
          </div>
        )}

        {isStudent === true && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Link
              to="/admin/selected-classes"
              className=" cursor-pointer flex items-center justify-center rounded bg-[#CF1164] h-28 "
            >
              <p className="text-2xl text-white ">My selected Classes</p>
            </Link>
            <Link
              to="/admin/enrolled-classes"
              className="cursor-pointer flex items-center justify-center rounded bg-[#54C6C4] h-28 "
            >
              <p className="text-2xl text-white ">My Enrolled Classes</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
