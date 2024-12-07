import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([])
  const [allProjects, setAllProjects] = useState([])

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject, tasks, setTasks, setProjects, projects, setAllProjects, allProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
