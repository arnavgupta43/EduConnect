import { Mail, MapPin, Award } from "lucide-react";

const TeacherAbout = ({ teacher }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Biography</h3>
      <p className="text-gray-700 mb-4">
        {teacher.bio ||
          `${teacher.name} is a distinguished professor at Christ University Bengaluru. With ${teacher.profile.previousExperience}, they have made significant contributions in their respective field. Their research focuses on materials.`}
      </p>

      <h3 className="text-xl font-semibold mb-2">Research Interests</h3>
      <p className="text-gray-700 mb-4">
        {teacher.interests ||
          `Materials and their applications in various domains.`}
      </p>

      <h3 className="text-xl font-semibold mb-2">Contact</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
        <div>
          <p className="font-medium">Office</p>
          <p>Christ University Bengaluru</p>
        </div>
        <div>
          <p className="font-medium">Email</p>
          <p>{teacher.email}</p>
        </div>
        <div>
          <p className="font-medium">Age</p>
          <p>{teacher.age || "30"} years</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherAbout;
