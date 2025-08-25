import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  UserPlus,
  LogOut,
  Settings,
  Bell,
  ChevronDown,
  User,
  Crown,
} from "lucide-react";

const AdminHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left Section - Welcome */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-gray-900">
                    Welcome back, {user?.name || "Admin"}
                  </h1>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full">
                    <Crown className="w-3 h-3 text-amber-600" />
                    <span className="text-xs font-medium text-amber-700">
                      Admin
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Administrator Dashboard
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-3">
            {/* Create Teacher Button */}
            <button
              onClick={() => navigate("/admin/create")}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Create Teacher</span>
            </button>

            {/* Admin Profile Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-xl transition-all duration-200">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-gray-900" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md flex items-center justify-center">
                      <User className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {user?.name || "Admin"}
                      </p>
                      <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <button
                    onClick={() => navigate("/admin/dashboard")}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200"
                  >
                    DashBoard
                  </button>
                  <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm transition-colors duration-200">
                    System Settings
                  </button>
                  <hr className="my-2 border-gray-200" />
                  <button
                    onClick={logout}
                    className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>System Online</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              EduConnect Admin Panel v2.0
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
