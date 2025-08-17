import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import TeacherImage from "../assets/teacher_login.avif";
const TeacherLoginCard = () => {
  const { login, user, token } = useAuth();
  const [loading, setLoading] = React.useState(false);
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
      const response = await axios.post(
        "http://localhost:3030/auth/teacher",
        userCred
      );
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
      <Toaster position="top-right" />
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 min-h-screen">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto mt-27 px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 overflow-hidden">
                <img
                  src={TeacherImage}
                  alt="Teacher Login"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Teacher Login
                  </h1>
                  <p className="text-gray-600">
                    Welcome back! Please sign in to your account.
                  </p>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white"
                    type="email"
                    id="email"
                    value={userCred.email}
                    onChange={(e) =>
                      setUser({ ...userCred, email: e.target.value })
                    }
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white"
                    type="password"
                    id="password"
                    value={userCred.password}
                    onChange={(e) =>
                      setUser({ ...userCred, password: e.target.value })
                    }
                    placeholder="Enter your password"
                  />
                </div>

                {/* Login Button */}
                <button
                  onClick={OnLogin}
                  disabled={buttonDisable || loading}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                    buttonDisable || loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {loading
                    ? "Signing in..."
                    : buttonDisable
                    ? "Please enter details"
                    : "Sign In"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherLoginCard;
