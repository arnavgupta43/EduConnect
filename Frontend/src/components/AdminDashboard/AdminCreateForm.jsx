import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Calendar, 
  Briefcase, 
  Upload, 
  Plus, 
  Minus, 
  UserPlus,
  Image as ImageIcon,
  BookOpen,
  FileText,
  Loader
} from "lucide-react";

const API = import.meta.env.VITE_API_BASE_URL;

const CreateForm = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    age: "",
    mobileNo: "",
    previousExperience: "",
  });

  const [researchInterests, setResearchInterests] = useState([{ value: "" }]);
  const [publications, setPublications] = useState([{ value: "" }]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleResearchInterestChange = (index, event) => {
    const newInterests = [...researchInterests];
    newInterests[index].value = event.target.value;
    setResearchInterests(newInterests);
  };

  const handlePublicationChange = (index, event) => {
    const newPublications = [...publications];
    newPublications[index].value = event.target.value;
    setPublications(newPublications);
  };

  const addResearchInterest = () => {
    setResearchInterests([...researchInterests, { value: "" }]);
  };

  const removeResearchInterest = (index) => {
    setResearchInterests(researchInterests.filter((_, i) => i !== index));
  };

  const addPublication = () => {
    setPublications([...publications, { value: "" }]);
  };

  const removePublication = (index) => {
    setPublications(publications.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!image || researchInterests.length < 1 || publications.length < 1) {
        toast.error("All fields are required.");
        setIsLoading(false);
        return;
      }

      const imageData = new FormData();
      imageData.append("image", image);

      const imageRes = await axios.post(`${API}/upload/image`, imageData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await axios.post(
        `${API}/admin/create`,
        {
          ...formData,
          image: imageRes.data.url,
          researchInterests: researchInterests.map((r) => r.value),
          publications: publications.map((p) => p.value),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Teacher profile created successfully!");
      setTimeout(() => navigate("/admin/dashboard"), 1000);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Error creating profile.");
    } finally {
      setIsLoading(false);
    }
  };

  const formFields = [
    { label: "Full Name", name: "name", type: "text", icon: User, placeholder: "Enter teacher's full name" },
    { label: "Username", name: "username", type: "text", icon: User, placeholder: "Enter unique username" },
    { label: "Email Address", name: "email", type: "email", icon: Mail, placeholder: "Enter email address" },
    { label: "Password", name: "password", type: "password", icon: Lock, placeholder: "Create a secure password" },
    { label: "Age", name: "age", type: "number", icon: Calendar, placeholder: "Enter age" },
    { label: "Mobile Number", name: "mobileNo", type: "text", icon: Phone, placeholder: "Enter mobile number" },
    { label: "Previous Experience", name: "previousExperience", type: "text", icon: Briefcase, placeholder: "Describe previous experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <Toaster position="top-right" />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Teacher Profile</h1>
          <p className="text-gray-600 text-lg">Add a new faculty member to the system</p>
        </div>

        <form onSubmit={submit} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* Basic Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
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
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required
                          disabled={isLoading}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <ImageIcon className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Profile Image</h2>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Profile Photo
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      disabled={isLoading}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex items-center justify-center w-full px-6 py-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                    >
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-600">Click to upload image</p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
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

            {/* Research Interests Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Research Interests</h2>
              </div>

              <div className="space-y-3">
                {researchInterests.map((r, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={r.value}
                        onChange={(e) => handleResearchInterestChange(index, e)}
                        placeholder={`Research interest ${index + 1}`}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeResearchInterest(index)}
                      disabled={isLoading || researchInterests.length === 1}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addResearchInterest}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
                Add Research Interest
              </button>
            </div>

            {/* Publications Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FileText className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Publications</h2>
              </div>

              <div className="space-y-3">
                {publications.map((p, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={p.value}
                        onChange={(e) => handlePublicationChange(index, e)}
                        placeholder={`Publication ${index + 1}`}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removePublication(index)}
                      disabled={isLoading || publications.length === 1}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addPublication}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Creating Profile...
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  Create Teacher Profile
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;