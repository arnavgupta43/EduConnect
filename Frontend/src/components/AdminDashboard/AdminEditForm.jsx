import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
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

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Teacher</h2>

      <div className="grid grid-cols-2 gap-4">
        {[
          "name",
          "username",
          "email",
          "age",
          "mobileNo",
          "previousExperience",
        ].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      <div className="my-4">
        <label className="block mb-2 font-medium">Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <img src={preview} alt="Preview" className="w-24 mt-2 rounded-md" />
        )}
      </div>

      <div className="my-4">
        <h3 className="text-md font-medium">Research Interests</h3>
        {researchInterests.map((r, i) => (
          <div key={i} className="flex gap-2 items-center mb-2">
            <input
              type="text"
              value={r}
              onChange={(e) => updateResearch(i, e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              onClick={() =>
                setResearchInterests(
                  researchInterests.filter((_, idx) => idx !== i)
                )
              }
              className="text-red-600"
            >
              ✖
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setResearchInterests([...researchInterests, ""])}
          className="text-sm text-blue-600 mt-1"
        >
          + Add Research Interest
        </button>
      </div>

      <div className="my-4">
        <h3 className="text-md font-medium">Publications</h3>
        {publications.map((p, i) => (
          <div key={i} className="flex gap-2 items-center mb-2">
            <input
              type="text"
              value={p}
              onChange={(e) => updatePublication(i, e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              onClick={() =>
                setPublications(publications.filter((_, idx) => idx !== i))
              }
              className="text-red-600"
            >
              ✖
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setPublications([...publications, ""])}
          className="text-sm text-blue-600 mt-1"
        >
          + Add Publication
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        {loading ? "Updating..." : "Update Teacher"}
      </button>
    </form>
  );
};

export default EditTeacherForm;
