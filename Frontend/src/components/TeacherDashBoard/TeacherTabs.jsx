import { User, Search, FileText, BookOpen } from "lucide-react";

const tabs = ["about", "research", "publications", "courses"];
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const getTabIcon = (tab) => {
  const iconMap = {
    about: User,
    research: Search,
    publications: FileText,
    courses: BookOpen,
  };
  const Icon = iconMap[tab];
  return Icon ? <Icon className="w-4 h-4" /> : null;
};

const TeacherTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`group relative flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {/* Tab Content */}
              <div className="flex items-center gap-2 z-10">
                <span
                  className={`transition-all duration-300 ${
                    activeTab === tab ? "scale-110" : "group-hover:scale-105"
                  }`}
                >
                  {getTabIcon(tab)}
                </span>
                <span className="text-sm font-semibold tracking-wide">
                  {capitalize(tab)}
                </span>
              </div>

              {/* Active Tab Indicator */}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
              )}

              {/* Hover Background */}
              <div
                className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-50/50"
                    : "bg-transparent group-hover:bg-gray-100/50"
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherTabs;
