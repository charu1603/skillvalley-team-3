import Home from "./pages/Home";
import Hero from "./components/Hero";
import WorkerD from "./pages/WorkerD";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dash_work } from "./components/Dash_work";
import { Add_job } from "./components/Add_job";
import Dashboard from "./components/Dashboard";
import UpdateProfile from "./components/UpdateProfile";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Hero />}></Route> */}
        <Route path="/" element={<WorkerD />}></Route>
        <Route path="/dashwork" element={<Dash_work />}></Route>

        {/* added by akki  */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addjob" element={<Add_job />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/updateprofile" element={<UpdateProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
