import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import TeacherImage from "../assets/teacher_login.avif";
import { GraduationCap, Mail, Lock, Eye, EyeOff, BookOpen } from "lucide-react";

const API = import.meta.env.VITE_API_BASE_URL;

const TeacherLoginCard = () => {
  const { login, user, token } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const [buttonDisable, setButtonDisable] = React.useState(true);
  const [userCred, setUser] = React.useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token && user?.role === "teacher") {
      navigate("/teacher/dashboard");
    }
  }, [token, user, navigate]);

  useEffect(() => {
    if (userCred.email.length > 0 && userCred.password.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [userCred]);

  const OnLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${API}/auth/teacher`, userCred);
      login(response.data.user, response.data.token);
      toast.success("Login successful!");
      navigate("/teacher/dashboard");
    } catch (error) {
      console.log("Login Failed", error.message);
      toast.error(error.response?.data?.msg || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#f9fafb",
            borderRadius: "12px",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-2xl -translate-x-32 -translate-y-32"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-4 py-12 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100/50 to-teal-100/50 backdrop-blur-sm rounded-3xl p-8 overflow-hidden border border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <img
                  src={TeacherImage}
                  alt="Teacher Login"
                  className="relative z-10 w-full h-auto rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-teal-300 to-green-300 rounded-full animate-ping"></div>
            </div>

            {/* Right Side - Login Form */}
            <div className="relative">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Teacher Portal
                    </h1>
                    <p className="text-gray-600 text-lg">
                      Access your educational dashboard and resources
                    </p>
                  </div>

                  {/* Welcome Banner */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <BookOpen className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">
                        Welcome Back, Educator!
                      </span>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-semibold text-gray-700"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        className="w-full pl-12 pr-4 py-4 bg-white/80 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 hover:bg-white hover:border-gray-300"
                        type="email"
                        id="email"
                        value={userCred.email}
                        onChange={(e) =>
                          setUser({ ...userCred, email: e.target.value })
                        }
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-semibold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        className="w-full pl-12 pr-12 py-4 bg-white/80 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 hover:bg-white hover:border-gray-300"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={userCred.password}
                        onChange={(e) =>
                          setUser({ ...userCred, password: e.target.value })
                        }
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Login Button */}
                  <button
                    onClick={OnLogin}
                    disabled={buttonDisable || loading}
                    className={`w-full py-4 px-3 rounded-xl font-semibold text-white text-lg transition-all duration-200 ${
                      buttonDisable || loading
                        ? "bg-gray-400 cursor-not-allowed opacity-50"
                        : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl transform"
                    } relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-teal-600 to-emerald-600 transition-all duration-300 ease-out group-hover:w-full"></div>
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {loading && (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      )}
                      <span>
                        {loading
                          ? "Signing in..."
                          : buttonDisable
                          ? "Please enter credentials"
                          : "Enter Teaching Portal"}
                      </span>
                    </span>
                  </button>

                  {/* Additional Info */}
                  <div className="text-center pt-4 space-y-2">
                    <p className="text-sm text-gray-500">
                      🎓 Empowering education through technology
                    </p>
                    <div className="flex justify-center space-x-4 text-xs text-gray-400">
                      <span>✓ Secure Login</span>
                      <span>✓ Data Protected</span>
                      <span>✓ Always Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherLoginCard;
