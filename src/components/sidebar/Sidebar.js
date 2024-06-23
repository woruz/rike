import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDrag } from "@use-gesture/react";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const bind = useDrag(({ movement: [mx], memo = isOpen }) => {
    if (!isDragging) setIsDragging(true);
    if (mx > 100) setIsOpen(true);
    if (mx < -100) setIsOpen(false);
    return memo;
  });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        {...bind()}
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-[20vw] p-4`}
      >
        <button onClick={toggleSidebar} className="focus:outline-none text-2xl">
          {isOpen ? <span>&#8592;</span> : <span>&#9776;</span>}
        </button>
        <nav className={`${isOpen ? "block" : "hidden"}`}>
          <ul>
            <li className="mb-2">
              <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div
        className={`flex-1 p-4 ${
          isOpen ? "ml-[20vw]" : ""
        } transition-margin duration-300 ease-in-out`}
      >
        <button onClick={toggleSidebar} className="focus:outline-none text-2xl">
          {!isOpen && <span>&#9776;</span>}
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
