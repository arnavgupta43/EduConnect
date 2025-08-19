import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

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

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-4">
      <Toaster position="top-right" />
      <form
        onSubmit={submit}
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          Create Teacher Profile
        </h2>

        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Username", name: "username", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Age", name: "age", type: "number" },
          { label: "Mobile No", name: "mobileNo", type: "text" },
          {
            label: "Previous Experience",
            name: "previousExperience",
            type: "text",
          },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-slate-700 font-medium mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              required
              className="w-full border border-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
          </div>
        ))}

        <div>
          <label className="block text-slate-700 font-medium mb-1">
            Upload Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            disabled={isLoading}
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-md shadow"
            />
          )}
        </div>

        <div>
          <label className="block text-slate-700 font-medium mb-1">
            Research Interests
          </label>
          {researchInterests.map((r, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={r.value}
                onChange={(e) => handleResearchInterestChange(index, e)}
                required
                className="flex-1 border border-slate-300 px-3 py-2 rounded-md"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => removeResearchInterest(index)}
                className="text-red-600"
                disabled={isLoading}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addResearchInterest}
            className="text-indigo-600 hover:underline"
            disabled={isLoading}
          >
            + Add Interest
          </button>
        </div>

        <div>
          <label className="block text-slate-700 font-medium mb-1">
            Publications
          </label>
          {publications.map((p, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={p.value}
                onChange={(e) => handlePublicationChange(index, e)}
                required
                className="flex-1 border border-slate-300 px-3 py-2 rounded-md"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => removePublication(index)}
                className="text-red-600"
                disabled={isLoading}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addPublication}
            className="text-indigo-600 hover:underline"
            disabled={isLoading}
          >
            + Add Publication
          </button>
        </div>

        <button
          type="submit"
          className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Create Teacher"}
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
