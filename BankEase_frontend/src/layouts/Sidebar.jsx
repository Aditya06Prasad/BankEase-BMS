import React from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaHome,
  FaExchangeAlt,
  FaWallet,
  FaHistory,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md min-h-[calc(100vh-4rem)] p-5">
      <ul className="space-y-3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/transfer"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaExchangeAlt />
          <span>Transfer</span>
        </NavLink>
        <NavLink
          to="/accounts"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaWallet />
          <span>Accounts</span>
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaHistory />
          <span>Transactions</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg ${
              isActive
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
