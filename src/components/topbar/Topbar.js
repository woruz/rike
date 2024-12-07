import React from "react";

const TopBar = ({ onAddClick }) => {
  return (
    <div className="grid grid-cols-8 gap-4 p-4 bg-gray-100 border-b border-gray-300">
      <div className="text-center font-bold">Title</div>
      <div className="text-center font-bold">Description</div>
      <div className="text-center font-bold">Assigned To</div>
      <div className="text-center font-bold">Status</div>
      <div className="text-center font-bold">Priority</div>
      <div className="text-center font-bold">Start Date</div>
      <div className="text-center font-bold">End Date</div>
      <button onClick={onAddClick} className="text-lg font-bold text-blue-500">
        +
      </button>
    </div>
  );
};

export default TopBar;