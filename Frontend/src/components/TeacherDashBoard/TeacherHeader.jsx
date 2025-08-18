import { BookOpen } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import React from "react";

const TeacherHeader = ({ teacher, logout }) => {
  return (
    <div className="bg-white bg-b-slate-950 px-6 py-4 flex items-center space-x-4 shadow-sm">
      <img
        src={teacher.profile.photo}
        alt={teacher.name}
        className="w-20 h-20 rounded-full"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{teacher.name}</h2>
        <p className="text-gray-500">Professor of Computer Science</p>
        <a className="text-blue-600 text-sm hover:underline">
          Ph.D., Christ University Bengaluru
        </a>
      </div>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 border-black text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default TeacherHeader;
