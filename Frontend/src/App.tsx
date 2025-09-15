import Home from "./pages/Home";
import MainLayout from "./layouts/mainLayout";
import TeacherLogin from "./pages/TeacherLogin";
import AdminLogin from "./pages/AdminLogin";
import TeacherDashboard from "./pages/TeacherDashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/AdminDashBoard";
import AdminViewTeacher from "./pages/AdminViewTeacher";
import AdminCreateTeacher from "./pages/AdminCreateTeacher";
import AdminUpdate from "./pages/AdminUpdate";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Route>
      <Route
        path="/admin/view/:id"
        element={
          <PrivateRoute>
            <AdminViewTeacher />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/update/:id"
        element={
          <PrivateRoute>
            <AdminUpdate />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/create"
        element={
          <PrivateRoute>
            <AdminCreateTeacher />
          </PrivateRoute>
        }
      />
      <Route
        path="/teacher/dashboard"
        element={
          <PrivateRoute>
            <TeacherDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
