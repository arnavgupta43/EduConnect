import {
  FileText,
} from "lucide-react";

const TeacherPublications = ({ teacher }) => (
  <div className="space-y-8">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Publications</h2>
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Publications</h2>
      {teacher.profile?.publications?.length > 0 ? (
        <div className="space-y-4">
          {teacher.profile.publications.map((publication, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">{publication}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Published research work
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No publications available.</p>
      )}
    </div>
  </div>
);

export default TeacherPublications;
