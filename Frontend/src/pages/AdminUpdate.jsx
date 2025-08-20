import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import EditTeacherForm from "../components/AdminDashboard/AdminEditForm";
import axios from "axios";
import toast from "react-hot-toast";

const API = import.meta.env.VITE_API_BASE_URL;

const AdminUpdate = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await axios.get(`${API}/admin/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTeacher(res.data.teacher);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch teacher details");
      }
    };

    fetchTeacher();
  }, [id, token]);

  const handleUpdateTeacher = async (updatedData) => {
    try {
      const res = await axios.patch(
        `${API}/admin/${teacher._id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Teacher updated successfully");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update teacher");
    }
  };

  return (
    <>
      {teacher ? (
        <EditTeacherForm teacher={teacher} onSubmit={handleUpdateTeacher} />
      ) : (
        <div className="text-center py-10 text-gray-600 text-lg">
          Loading...
        </div>
      )}
    </>
  );
};

export default AdminUpdate;
