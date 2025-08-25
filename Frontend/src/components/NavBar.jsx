import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookOpen, Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = location.pathname;

  const linkStyle = (path) =>
    `cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 font-medium relative ${
      currentPath === path
        ? "text-blue-600 font-semibold bg-blue-50 border border-blue-200"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100/50 w-full sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                EduConnect
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                Education Portal
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
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
            </div>

            {/* Enhanced CTA Button */}
            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-white/90 backdrop-blur-sm rounded-b-2xl shadow-lg">
              <span
                onClick={() => {
                  navigate("/about");
                  setIsMenuOpen(false);
                }}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer font-medium"
              >
                About
              </span>
              <span
                onClick={() => {
                  navigate("/contact");
                  setIsMenuOpen(false);
                }}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer font-medium"
              >
                Contact
              </span>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
