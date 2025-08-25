import { BookOpen, Clock, Users } from "lucide-react";

const TeacherCourses = ({ teacher }) => (
  <div className="max-w-4xl mx-auto space-y-8">
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-sm border border-amber-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-amber-100 rounded-xl">
          <BookOpen className="w-7 h-7 text-amber-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Courses</h2>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white/20 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
            <Clock className="w-12 h-12 text-blue-600" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Coming Soon
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
          Course information will be displayed here once the courses module is
          implemented.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <div className="flex items-center gap-2 text-gray-500">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Student Enrollment</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Course Materials</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeacherCourses;
