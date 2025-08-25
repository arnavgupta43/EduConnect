import {
  FileText,
  BookOpen,
  ExternalLink,
  Calendar,
  Award,
} from "lucide-react";

const TeacherPublications = ({ teacher }) => (
  <div className="max-w-4xl mx-auto space-y-8">
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-sm border border-indigo-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-indigo-100 rounded-xl">
          <FileText className="w-7 h-7 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Publications</h2>
      </div>

      {teacher.profile?.publications?.length > 0 ? (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-indigo-600 mb-4">
            <Award className="w-5 h-5" />
            <span className="font-medium">
              {teacher.profile.publications.length} Published Works
            </span>
          </div>

          {teacher.profile.publications.map((publication, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20 hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                    {publication}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Published research work</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        Academic Paper
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white/20 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            No Publications Yet
          </h3>
          <p className="text-gray-500 text-lg">
            Publications will appear here once they are added to the profile.
          </p>
        </div>
      )}
    </div>
  </div>
);

export default TeacherPublications;
