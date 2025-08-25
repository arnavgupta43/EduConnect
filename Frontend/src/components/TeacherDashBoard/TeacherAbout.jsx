import { Mail, MapPin, Award, User, BookOpen, Building } from "lucide-react";

const TeacherAbout = ({ teacher }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Biography Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Biography</h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg">
          {teacher.bio ||
            `${teacher.name} is a distinguished professor at Christ University Bengaluru. With ${teacher.profile.previousExperience}, they have made significant contributions in their respective field. Their research focuses on materials.`}
        </p>
      </div>

      {/* Research Interests Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-sm border border-emerald-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Research Interests
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg">
          {teacher.interests ||
            `Materials and their applications in various domains.`}
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 shadow-sm border border-purple-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Mail className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Contact Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Building className="w-5 h-5 text-orange-600" />
              </div>
              <p className="font-semibold text-gray-900">Office</p>
            </div>
            <p className="text-gray-700 font-medium">
              Christ University Bengaluru
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Email</p>
            </div>
            <p className="text-gray-700 font-medium break-all">
              {teacher.email}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <User className="w-5 h-5 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">Age</p>
            </div>
            <p className="text-gray-700 font-medium">
              {teacher.age || "30"} years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAbout;
