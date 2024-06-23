import { Route, Routes } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/sidebar/Sidebar.js";
import RikeCalendar from "./page/rikeCalendar/RikeCalendar.js";

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/calendar" element={<RikeCalendar />}/>
      </Routes>
    </Sidebar>
  );
}

export default App;
