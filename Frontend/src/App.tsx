import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import TeacherLogin from "./pages/TeacherLogin";
import AdminLogin from "./pages/AdminLogin";
import TeacherDashboard from "./pages/TeacherDashboard";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teacher/login" element={<TeacherLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/teacher/dashboard"
        element={
          <PrivateRoute>
            <TeacherDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
