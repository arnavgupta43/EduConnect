import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const AdminHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">
            Welcome, {user?.name || "Admin"} 👋
          </h1>
          <p className="text-sm text-gray-500">
            You're logged in as Administrator
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/create")}
          className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          Create Teacher
        </button>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
