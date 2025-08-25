import React from "react";
import { useNavigate } from "react-router-dom";
import stock_teacher from "../assets/stock_teacher.png";
import { useAuth } from "../hooks/useAuth";
import { Eye, Edit3, Trash2, User, GraduationCap } from "lucide-react";

const TeacherCard = ({ teacher, onDelete }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-between">
        {/* Teacher Info */}
        <div className="flex items-center space-x-4">
          {/* Enhanced Profile Image */}
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-blue-200 transition-all duration-300">
              <img
                src={teacher.profile?.photo || stock_teacher}
                alt={teacher.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
          </div>

          {/* Teacher Details */}
          <div className="space-y-1">
            <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {teacher.name}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <GraduationCap className="w-4 h-4" />
              <span>Faculty Member</span>
            </div>
            {teacher.profile?.department && (
              <p className="text-sm text-gray-500">
                {teacher.profile.department}
              </p>
            )}
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* View Details Button */}
          <button
            className="group/btn bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
            onClick={() => navigate(`/admin/view/${teacher._id}`)}
          >
            <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            <span className="hidden sm:inline">View</span>
          </button>

          {/* Edit Button */}
          <button
            onClick={() => navigate(`/admin/update/${teacher._id}`)}
            className="group/btn bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
          >
            <Edit3 className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
            <span className="hidden sm:inline">Edit</span>
          </button>

          {/* Delete Button */}
          <button
            onClick={() => onDelete(teacher._id)}
            className="group/btn bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <Trash2 className="w-4 h-4 relative z-10 group-hover/btn:scale-110 transition-transform duration-200" />
            <span className="hidden sm:inline relative z-10">Delete</span>
          </button>
        </div>
      </div>

      {/* Enhanced hover effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
      <div
        className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"
        style={{ animationDelay: "200ms" }}
      ></div>
    </div>
  );
};

export default TeacherCard;
