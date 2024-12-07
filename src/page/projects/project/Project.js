import React, { useContext, useState } from "react";
import { ProjectContext } from "../../../context/ProjectContext";
import CalendarComponent from "../../../components/calendar/CalendarComponent";
import TopBar from "../../../components/topbar/Topbar";
import useProject from "../../../hooks/projects/useProject";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";


const Project = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    assigned_to: [],
    status: "",
    start_date: "",
    end_date: "",
  });
  const { allProjects, setProjects } = useContext(ProjectContext);
  const { loading, addProject} = useProject();

  console.log({allProjects})

  const handleAddClick = () => {
    setShowInputs(!showInputs);
  };

  const handleAddTask = (e) => {
    addProject({ ...form,created_by: "1111111",assigned_to: []});
  };

  const formHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      {/* <CalendarComponent /> */}
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
            name="startDate"
            value={form.startDate}
            onChange={formHandler}
          />
          <input
            className="text-center"
            type="date"
            name="endDate"
            value={form.endDate}
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
      <div className="mt-8">
        {allProjects && allProjects.length > 0 ? (
          allProjects.map((project) => (
            <Link to='/project-details'><div onClick={() => {
              setProjects(project)
            }} key={project._id} className="mb-4 p-4 bg-white shadow rounded-lg flex items-center">
              <div className="w-1/6">
              <CircularProgressbar
                  value={66}
                  text={
                    <tspan>
                      <tspan dy="-10" style={{ fontSize: '16px' }}>{66}%</tspan>
                      <tspan x="50%" dy="20" style={{ fontSize: '10px', fill: '#3490dc' }}>completed</tspan>
                    </tspan>
                  }
                  styles={buildStyles({
                    textSize: '8px',
                    pathColor: '#3490dc',
                    textColor: '#3490dc',
                    trailColor: '#e2e8f0',
                  })}
                />
              </div>
              <div className="w-5/6 ml-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex mt-2 text-sm text-gray-600">
                  <div className="mr-4">Start Date: {new Date(project.start_date).toLocaleDateString()}</div>
                  <div>End Date: {new Date(project.end_date).toLocaleDateString()}</div>
                </div>
              </div>
            </div></Link>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </div>
    </div>
  );
};

export default Project;
