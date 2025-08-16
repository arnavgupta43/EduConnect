const tabs = ["about", "research", "publications", "courses"];
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const TeacherTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b px-6">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 border-b-2 font-medium transition-colors ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-500"
            }`}
          >
            {capitalize(tab)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeacherTabs;
