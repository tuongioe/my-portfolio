import React, { useEffect, useState } from "react";

function TechStackTab() {
  const [techStacks, setTechStacks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({ icon: "", name: "", type: "" });

  // 🧠 Lấy danh sách tech stack từ BE
  const fetchTechStacks = async () => {
    const res = await fetch("http://localhost:5000/api/tech-stacks");
    const data = await res.json();
    setTechStacks(data);
  };

  useEffect(() => {
    fetchTechStacks();
  }, []);

  // 📝 Submit form (thêm hoặc sửa)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingItem ? "PUT" : "POST";
    const url = editingItem
      ? `http://localhost:5000/api/tech-stacks/${editingItem.id}`
      : `http://localhost:5000/api/tech-stacks`;

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
    setForm({ icon: "", name: "", type: "" });
    fetchTechStacks();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setForm(item);
    setShowForm(true);
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-semibold mb-4">Tech Stacks</h2>

      <div className="grid grid-cols-3 gap-4">
        {techStacks.map((stack) => (
          <div
            key={stack.id}
            onClick={() => handleEdit(stack)}
            className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
          >
            <img src={stack.icon} alt={stack.name} className="h-12 mb-2" />
            <div className="font-semibold">{stack.name}</div>
            <div className="text-sm text-gray-500">{stack.type}</div>
          </div>
        ))}
      </div>

      {/* Nút Add New */}
      <button
        onClick={() => {
          setShowForm(true);
          setEditingItem(null);
          setForm({ icon: "", name: "", type: "" });
        }}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
      >
        + Add Tech Stack
      </button>

      {/* Form Add/Edit */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4"
          >
            <h3 className="text-xl font-semibold mb-2">
              {editingItem ? "Edit Tech Stack" : "Add Tech Stack"}
            </h3>
            <input
              type="text"
              placeholder="Icon URL"
              className="border w-full p-2 rounded"
              value={form.icon}
              onChange={(e) => setForm({ ...form, icon: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Name"
              className="border w-full p-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Type"
              className="border w-full p-2 rounded"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              required
            />
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

export default TechStackTab;
