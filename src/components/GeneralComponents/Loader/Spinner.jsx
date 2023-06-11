import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <div
        style={{ borderTopColor: "transparent" }}
        className=" w-40 h-40 border-4 border-red-400 border-double rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Spinner;
