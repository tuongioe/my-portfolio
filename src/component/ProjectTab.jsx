import React, { useEffect, useState } from "react";

function ProjectTab() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({
    preview: "",
    link: "",
    name: "",
    tech_icons: [],
  });
  const [techIconInput, setTechIconInput] = useState("");

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5100/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingItem ? "PUT" : "POST";
    const url = editingItem
      ? `http://localhost:5100/api/projects/${editingItem.id}`
      : `http://localhost:5100/api/projects`;

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    });

    setShowForm(false);
    setEditingItem(null);
    setForm({ preview: "", link: "", name: "", tech_icons: [] });
    fetchProjects();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setForm(item);
    setShowForm(true);
  };

  const addTechIconToArray = () => {
    if (techIconInput.trim() !== "") {
      setForm({ ...form, tech_icons: [...form.tech_icons, techIconInput] });
      setTechIconInput("");
    }
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>

      <div className="grid grid-cols-3 gap-4">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => handleEdit(proj)}
            className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
          >
            <img
              src={proj.preview}
              alt={proj.name}
              className="h-32 object-cover mb-2"
            />
            <div className="font-semibold">{proj.name}</div>
            <div className="text-sm text-gray-500 break-words">{proj.link}</div>
            <div className="tech-icons flex gap-2 mt-2">
              {proj.tech_icons.map((tech_icon, index) => (
                <img
                  key={index}
                  src={tech_icon}
                  alt="tech icon"
                  className="w-6 h-6"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Nút Add New */}
      <button
        onClick={() => {
          setShowForm(true);
          setEditingItem(null);
          setForm({ preview: "", link: "", name: "", tech_icons: [] });
        }}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
      >
        + Add Project
      </button>

      {/* Form Add/Edit */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-[500px] space-y-4"
          >
            <h3 className="text-xl font-semibold mb-2">
              {editingItem ? "Edit Project" : "Add Project"}
            </h3>
            <input
              type="text"
              placeholder="Preview URL"
              className="border w-full p-2 rounded"
              value={form.preview}
              onChange={(e) => setForm({ ...form, preview: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Project Link"
              className="border w-full p-2 rounded"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Project Name"
              className="border w-full p-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            {/* Tech icons array */}
            <div>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Tech icon URL"
                  className="border flex-1 p-2 rounded"
                  value={techIconInput}
                  onChange={(e) => setTechIconInput(e.target.value)}
                />
                <button
                  type="button"
                  onClick={addTechIconToArray}
                  className="px-3 bg-green-600 text-white rounded"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.tech_icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt=""
                    className="h-8 w-8 object-cover border rounded"
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                {editingItem ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProjectTab;
