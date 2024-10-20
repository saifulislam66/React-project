import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Login from "./components/Auth/Login";
import EmployeeDashbord from "./components/Dashboard/EmployeeDashbord";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // });

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@gmail.com" && password == "123") {
      setUser("user");
    } else {
      alert("Your email or Password Wrong");
    }
  };
  AuthContext;
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? <AdminDashboard /> : <EmployeeDashbord />}

      {/* <EmployeeDashbord /> */}
      {/* <AdminDashboard /> */}
    </div>
  );
};
export default App;
