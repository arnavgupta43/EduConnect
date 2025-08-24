import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import {
  User,
  Mail,
  Calendar,
  Phone,
  Briefcase,
  Upload,
  Plus,
  X,
  Edit3,
  Image as ImageIcon,
  BookOpen,
  FileText,
  Loader,
  Save,
} from "lucide-react";

const EditTeacherForm = ({ teacher, onSubmit }) => {
  const { token } = useAuth();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    age: "",
    mobileNo: "",
    previousExperience: "",
    image: teacher?.image || "",
  });

  const [researchInterests, setResearchInterests] = useState([]);
  const [publications, setPublications] = useState([]);
  const [preview, setPreview] = useState(teacher?.image || "");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (teacher) {
      setForm({
        name: teacher.name,
        username: teacher.username,
        email: teacher.email,
        age: teacher.profile.age,
        mobileNo: teacher.profile.mobileNo,
        previousExperience: teacher.profile.previousExperience,
        image: teacher.profile.photo,
      });
      setResearchInterests(teacher.profile.researchInterests || []);
      setPublications(teacher.profile.publications || []);
    }
  }, [teacher]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const updateResearch = (i, val) => {
    const temp = [...researchInterests];
    temp[i] = val;
    setResearchInterests(temp);
  };

  const updatePublication = (i, val) => {
    const temp = [...publications];
    temp[i] = val;
    setPublications(temp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = form.image;
      if (imageFile) {
        const imgForm = new FormData();
        imgForm.append("image", imageFile);
        const uploadRes = await axios.post(
          `${import.meta.env.VITE_API}/upload/image`,
          imgForm,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );
        imageUrl = uploadRes.data.url;
      }

      const updatedData = {
        ...form,
        photo: imageUrl,
        researchInterests,
        publications,
      };

      await onSubmit(updatedData);
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    { name: "name", label: "Full Name", icon: User, type: "text" },
    { name: "username", label: "Username", icon: User, type: "text" },
    { name: "email", label: "Email", icon: Mail, type: "email" },
    { name: "age", label: "Age", icon: Calendar, type: "number" },
    { name: "mobileNo", label: "Mobile Number", icon: Phone, type: "text" },
    {
      name: "previousExperience",
      label: "Previous Experience",
      icon: Briefcase,
      type: "text",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/20 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Edit3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Edit Teacher Profile
              </h2>
              <p className="text-blue-100 text-sm">
                Update faculty member information
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Basic Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        name={field.name}
                        type={field.type}
                        value={form[field.name]}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <ImageIcon className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Profile Image
              </h3>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Update Profile Photo
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={loading}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center w-full px-6 py-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-600">
                        Click to update image
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {preview && (
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Research Interests */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Research Interests
              </h3>
            </div>

            <div className="space-y-3">
              {researchInterests.map((r, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={r}
                      onChange={(e) => updateResearch(i, e.target.value)}
                      placeholder={`Research interest ${i + 1}`}
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setResearchInterests(
                        researchInterests.filter((_, idx) => idx !== i)
                      )
                    }
                    disabled={loading}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 disabled:opacity-50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setResearchInterests([...researchInterests, ""])}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              <Plus className="w-4 h-4" />
              Add Research Interest
            </button>
          </div>

          {/* Publications */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="p-2 bg-orange-100 rounded-lg">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Publications
              </h3>
            </div>

            <div className="space-y-3">
              {publications.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={p}
                      onChange={(e) => updatePublication(i, e.target.value)}
                      placeholder={`Publication ${i + 1}`}
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setPublications(
                        publications.filter((_, idx) => idx !== i)
                      )
                    }
                    disabled={loading}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 disabled:opacity-50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPublications([...publications, ""])}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              <Plus className="w-4 h-4" />
              Add Publication
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="bg-gray-50 px-8 py-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Updating Profile...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Update Teacher Profile
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTeacherForm;
