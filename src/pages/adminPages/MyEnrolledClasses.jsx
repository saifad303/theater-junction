import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthProvider } from "../../context/AuthProvider";
import useFetchAllPayment from "../../hooks/useFetchAllPayment";

const MyEnrolledClasses = () => {
  const { apiPrefixLink, signedInUser } = useAuthProvider();

  const [payments, refetchPayment, isPaymentLoading] = useFetchAllPayment();

  if (isPaymentLoading) {
    return "Loading...";
  }

  console.log(payments);

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
                    <th className="py-3 px-6">Course ID</th>
                    <th className="py-3 px-6">Class Name</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {payments.map((payment, idx) => (
                    <tr key={idx} className="divide-x">
                      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                        <span>{idx + 1}</span>
                        {payment.courseId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {payment.courseName}
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
