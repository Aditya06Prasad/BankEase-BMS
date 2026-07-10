import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <nav className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold text-blue-600">
        BankEase
      </h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="font-medium">Aditya</span>
        </div>

        <Button text="Logout" variant="danger" />
      </div>
    </nav>
  );
};

export default Navbar;