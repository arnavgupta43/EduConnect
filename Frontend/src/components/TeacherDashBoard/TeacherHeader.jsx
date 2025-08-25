import { BookOpen, LogOut, Award, MapPin } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import React from "react";

const TeacherHeader = ({ teacher, logout, displayLogout }) => {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 px-6 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-6">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-1">
              <img
                src={teacher.profile.photo}
                alt={teacher.name}
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
          </div>

          {/* Teacher Info */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-gray-900">
                {teacher.name}
              </h2>
              <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Faculty
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen className="w-4 h-4" />
              <p className="text-lg font-medium">
                Professor of Computer Science
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 group">
                <Award className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium hover:underline">
                  Ph.D., Christ University Bengaluru
                </span>
              </a>

              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          {displayLogout === "display" && (
            <div className="flex items-center">
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherHeader;
