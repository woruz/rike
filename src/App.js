import { Route, Routes } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/sidebar/Sidebar.js";
import RikeCalendar from "./page/rikeCalendar/RikeCalendar.js";
import Project from "./page/projects/project/Project.js";
import { ProjectProvider } from "./context/ProjectContext.js";
import ProjectDetails from "./page/projects/projectDetails/ProjectDetails.js";

function App() {
  return (
    <ProjectProvider>
      <Sidebar>
        <Routes>
          <Route path="/project" element={<Project />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/calendar" element={<RikeCalendar />} />
        </Routes>
      </Sidebar>
    </ProjectProvider>
  );
}

export default App;
