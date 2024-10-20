import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Login from "./components/Auth/Login";
import EmployeeDashbord from "./components/Dashboard/EmployeeDashbord";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Login />
      <EmployeeDashbord />
      <AdminDashboard />
    </div>
  );
};
export default App;
