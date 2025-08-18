import React, { useState, useEffect } from "react";
import TeacherHeader from "../components/TeacherDashBoard/TeacherHeader";
import TeacherTabs from "../components/TeacherDashBoard/TeacherTabs";
import TeacherAbout from "../components/TeacherDashBoard/TeacherAbout";
import TeacherResearch from "../components/TeacherDashBoard/TeacherResearch";
import TeacherPublications from "../components/TeacherDashBoard/TeacherPublications";
import TeacherCourses from "../components/TeacherDashBoard/TeacherCourses";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_BASE_URL;
const TeacherDashBoard = () => {
  const { token, logout, user } = useAuth();
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  const fetchTeacher = async () => {
    try {
      const res = await axios.get(`${API}/dashboard/teacher`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTeacher(res.data.teacher);
    } catch (err) {
      toast.error("Failed to fetch profile");
    }
  };

  const logoutFunction = async () => {
    try {
      logout();
      window.location.href = "/teacher/login";
    } catch {
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await axios.get(`${API}/auth/verifyTeacher`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchTeacher();
      } catch (error) {
        logout();
        navigate("/teacher/login");
      }
    };

    verifyAuth();
  }, [token]);

  if (!teacher) return <p className="p-6">Loading teacher profile...</p>;
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <TeacherHeader teacher={teacher} logout={logoutFunction} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <TeacherTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="px-6 py-6">
            {activeTab === "about" && <TeacherAbout teacher={teacher} />}
            {activeTab === "research" && <TeacherResearch teacher={teacher} />}
            {activeTab === "publications" && (
              <TeacherPublications teacher={teacher} />
            )}
            {activeTab === "courses" && <TeacherCourses />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeacherDashBoard;
