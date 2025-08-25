import { Award, Search, Lightbulb, TrendingUp, Briefcase } from "lucide-react";
import { FileText } from "lucide-react";

const TeacherResearch = ({ teacher }) => (
  <div className="max-w-4xl mx-auto space-y-8">
    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 shadow-sm border border-emerald-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-emerald-100 rounded-xl">
          <Search className="w-7 h-7 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Research Interests</h2>
      </div>

      {teacher.profile?.researchInterests?.length > 0 ? (
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Lightbulb className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Overview</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {teacher.name}'s research interests span across multiple areas of
              computer science:
            </p>
          </div>

          {/* Research Areas Grid */}
          <div className="grid gap-6">
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">
                {teacher.profile.researchInterests.length} Active Research Areas
              </span>
            </div>

            {teacher.profile.researchInterests.map((interests, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300">
                    <FileText className="w-6 h-6 text-emerald-600" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      {interests}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Active research focus with ongoing publications and
                      projects
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                        Research Area
                      </div>
                      <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Experience */}
          {teacher.profile?.previousExperience && (
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 shadow-sm border border-orange-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Briefcase className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Previous Experience
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {teacher.profile.previousExperience}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white/20 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            No Research Interests Specified
          </h3>
          <p className="text-gray-500 text-lg">
            Research interests will be displayed here once they are added to the
            profile.
          </p>
        </div>
      )}
    </div>
  </div>
);

export default TeacherResearch;
