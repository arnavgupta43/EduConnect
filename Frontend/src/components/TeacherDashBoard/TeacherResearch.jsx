import { Award } from "lucide-react";

const TeacherResearch = ({ teacher }) => (
  <div className="space-y-8">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">
      Research Interset
    </h2>
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Research Interests
      </h2>
      {teacher.profile?.researchInterests?.length > 0 ? (
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">
            {teacher.name}'s research interests span across multiple areas of
            computer science:
          </p>

          {teacher.profile?.previousExperience && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Previous Experience
              </h3>
              <p className="text-gray-700">
                {teacher.profile.previousExperience}
              </p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-500 italic">No research interests specified.</p>
      )}
    </div>
  </div>
);

export default TeacherResearch;
