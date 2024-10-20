import React from "react";
import Head from "../Other/head";
import TaskListNumber from "../Other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashbord() {
  return (
    <div className="bg-zinc-600 h-screen p-10">
      <Head />
      <TaskListNumber />
      <TaskList />
    </div>
  );
}

export default EmployeeDashbord;
