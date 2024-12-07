import React, { useContext, useState } from "react";
import { ProjectContext } from "../../../context/ProjectContext";
import TopBar from "../../../components/topbar/Topbar";
import useProject from "../../../hooks/projects/useProject";

const ProjectDetails = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    assigned_to: [],
    status: "",
    start_date: "",
    end_date: "",
  });
  const [showInputs, setShowInputs] = useState(false);

  const { selectedProject, tasks, projects, setProjects } = useContext(ProjectContext);
  const { loading, addTask } = useProject();

  const handleAddClick = () => {
    setShowInputs(!showInputs);
  };

  const formHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddTask = (e) => {
    addTask({ ...form, project_id: projects._id, assigned_to: [],created_by: "1111111" },setProjects);
  };

  return (
    <div>
      <TopBar onAddClick={handleAddClick} />
      {showInputs && (
        <div className="grid grid-cols-8 gap-4 p-4 bg-gray-100 border-t border-gray-300">
          <input
            className="text-center"
            type="text"
            placeholder="Title..."
            name="title"
            value={form.title}
            onChange={formHandler}
          />
          <input
            className="text-center"
            type="text"
            placeholder="Description..."
            name="description"
            value={form.description}
            onChange={formHandler}
          />
          <input
            className="text-center"
            type="text"
            placeholder="Assigned To"
            name="assigned_to"
            value={form.assigned_to}
            onChange={formHandler}
          />
          <input
            className="text-center"
            type="text"
            placeholder="Status"
            name="status"
            value={form.status}
            onChange={formHandler}
          />
          <input
            className="text-center"
            type="text"
            placeholder="Priority"
            name="priority"
            value={form.priority}
            onChange={formHandler}
          />
          <input
            className="text-center"
            type="date"
            name="start_date"
            value={form.start_date}
            onChange={formHandler}
          />
          <input
            className="text-center"
            type="date"
            name="end_date"
            value={form.end_date}
            onChange={formHandler}
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
      )}
      {projects ? (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            Tasks for {projects.title}
          </h2>
          <ul className="space-y-4">
            {projects.tasks.map((task) => (
              <li
                key={task._id}
                className="border rounded-lg p-6 bg-gray-50 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
                <p className="text-gray-600 mb-4">{task.description}</p>
                <div className="ml-5">
                  <h4 className="font-medium text-lg mb-2">Sub Tasks</h4>
                  <ul className="list-disc space-y-2">
                    {task.subTasks.map((subTask) => (
                      <li key={subTask._id} className="text-gray-700">
                        <h5 className="font-medium text-md">{subTask.title}</h5>
                        <p className="text-gray-500">{subTask.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">Select a project to view tasks</p>
      )}
    </div>
  );
};

export default ProjectDetails;
