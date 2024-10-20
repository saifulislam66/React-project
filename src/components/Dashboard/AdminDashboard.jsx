import React from "react";
import Head from "./../Other/head";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

function AdminDashboard() {
  return (
    <div className="p-10 mb-10">
      <Head />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
