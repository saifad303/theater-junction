import React from "react";

const List = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
        <div>List</div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 ">
          <p className="text-2xl text-gray-400 ">+</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 ">
          <p className="text-2xl text-gray-400 ">+</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
            <p className="text-2xl text-gray-400 ">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
