import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Calendar from "./page/calendar/Calendar";

function App() {
  return (
    <>
      <Sidebar />
      {/* <Routes>
        <Route />
        <Route />
        <Route />
        <Route path="/calendar" element={<Calendar />}/>
      </Routes> */}
    </>
  );
}

export default App;
