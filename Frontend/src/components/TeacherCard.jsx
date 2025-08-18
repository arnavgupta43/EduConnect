import React from "react";
import { useNavigate } from "react-router-dom";
import stock_teacher from "../assets/stock_teacher.png";
const TeacherCard = ({ teacher, onDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm border">
      <div className="flex items-center space-x-4">
        <img
          src={teacher.profile.photo || stock_teacher}
          alt={teacher.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-semibold text-lg">{teacher.name}</span>
      </div>

      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
          onClick={() => navigate(`/admin/view/${teacher._id}`)}
        >
          View Details
        </button>
        <button
          onClick={() => alert("Edit functionality coming soon")}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(teacher.id)}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TeacherCard;
