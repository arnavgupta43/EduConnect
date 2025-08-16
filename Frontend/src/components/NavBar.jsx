import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react"; // or use any icon

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  const linkStyle = (path) =>
    `cursor-pointer px-3 py-2 transition-colors font-medium ${
      currentPath === path
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-xl font-bold text-gray-900 cursor-pointer"
              onClick={() => navigate("/")}
            >
              EduConnect
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <span
              onClick={() => navigate("/about")}
              className={linkStyle("/about")}
            >
              About
            </span>
            <span
              onClick={() => navigate("/contact")}
              className={linkStyle("/contact")}
            >
              Contact
            </span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
