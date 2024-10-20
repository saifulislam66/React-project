import React from "react";
import Head from "./../Other/head";

function AdminDashboard() {
  return (
    <div className="p-10">
      <Head />

      <div className="bg-zinc-600   w-full h-screen">
        <form className=" max-w-[500px] mx-auto flex   flex-col bg-blue-400 ">
          <div>
            <h2>Task Title</h2>
            <input type="text" placeholder="Make a task" />
          </div>
          <div>
            <h2>Description</h2>
            <textarea name="" id=""></textarea>
          </div>
          <div>
            <h2>Date</h2>
            <input type="date" />
          </div>
          <div>
            <h2>Asing to</h2>
            <input type="text" placeholder="Employee Name" />
          </div>
          <div>
            <h2>Category</h2>
            <input type="text" placeholder="design dev etc" />
          </div>
          <button>create task</button>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
