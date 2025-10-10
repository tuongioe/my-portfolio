import React, { useState, useContext } from "react";
import { TechStackContext } from "../context/TechStackContext";

function TechStackTab() {
  const { techStacks, createTechStack, editTechStack, removeTechStack } =
    useContext(TechStackContext);

  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({ icon: "", name: "", type: "" });

  // 📝 Submit form (thêm hoặc sửa)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await editTechStack(editingItem.id, form);
    } else {
      await createTechStack(form);
    }
    setShowForm(false);
    setEditingItem(null);
    setForm({ icon: "", name: "", type: "" });
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setForm(item);
    setShowForm(true);
  };
  const handleRemove = () => {
    removeTechStack(editingItem.id);
    setShowForm(false);
    setEditingItem(null);
    setForm({ icon: "", name: "", type: "" });
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
        Tech Stacks
      </h2>

      <div className="grid lg:grid-cols-8 grid-cols-2 gap-4">
        {techStacks.map((stack) => (
          <div
            key={stack.id}
            onClick={() => handleEdit(stack)}
            className="border rounded-lg p-4 cursor-pointer bg-gray-800 hover:bg-gray-800/40 border-none"
          >
            <img src={stack.icon} alt={stack.name} className="h-12 mb-2" />
            <div className="font-semibold text-indigo-500">{stack.name}</div>
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
              {editingItem && (
                <button
                  type="button"
                  onClick={handleRemove}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default TechStackTab;
