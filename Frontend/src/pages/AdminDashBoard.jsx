import React, { useEffect, useState } from "react";
import axios from "axios";
import TeacherCard from "../components/TeacherCard";
import { useAuth } from "../hooks/useAuth";
import AdminHeader from "../components/AdminDashboard/AdminHeader";
import { toast, Toaster } from "react-hot-toast";
const AdminDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const { token } = useAuth();
  const limit = 7; // teachers per page

  const fetchTeachers = async (page) => {
    try {
      const res = await axios.get(`http://localhost:3030/dashboard/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },

        params: { page, limit },
      });
      setTeachers(res.data.teachers);
      setPages(res.data.pages);
    } catch (err) {
      toast.error(err.data?.msg || "Invaild Credentials ");
      console.error("Error fetching teachers:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/admin/${id}`);
      fetchTeachers(page);
    } catch (err) {
      console.error("Error deleting teacher:", err);
    }
  };
  useEffect(() => {
    fetchTeachers(page);
  }, [token]);
  useEffect(() => {
    fetchTeachers(page);
  }, [page]);

  return (
    <>
      <Toaster position="top-right" />
      <AdminHeader />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        <div className="space-y-4">
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher._id}
              teacher={teacher}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-gray-600">
            Page {page} of {pages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, pages))}
            disabled={page === pages}
            className="px-4 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
