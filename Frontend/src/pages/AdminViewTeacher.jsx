import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TeacherHeader from "../components/TeacherDashBoard/TeacherHeader";
import TeacherTabs from "../components/TeacherDashBoard/TeacherTabs";
import TeacherAbout from "../components/TeacherDashBoard/TeacherAbout";
import TeacherResearch from "../components/TeacherDashBoard/TeacherResearch";
import TeacherPublications from "../components/TeacherDashBoard/TeacherPublications";
import TeacherCourses from "../components/TeacherDashBoard/TeacherCourses";
import AdminHeader from "../components/AdminDashboard/AdminHeader";
import { useAuth } from "../hooks/useAuth";
const AdminViewTeacher = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [teacher, setTeacher] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/admin/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTeacher(res.data.teacher);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTeacher();
  }, [id]);

  if (!teacher) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <TeacherHeader teacher={teacher} logout={null} displayLogout={"hidden"} />
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

export default AdminViewTeacher;
