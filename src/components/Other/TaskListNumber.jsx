import React from "react";

function TaskListNumber() {
  return (
    <div className="flex gap-5 screen justify-between  mt-10">
      <div className="w-[45%] p-10 bg-red-400 rounded-xl">
        <h2 className="font-semibold text-3xl">0</h2>
        <h2 className="text-3xl">New Task</h2>
      </div>
      <div className="w-[45%] p-10 bg-blue-400 rounded-xl">
        <h2 className="font-semibold text-3xl">0</h2>
        <h2 className="text-3xl">New Task</h2>
      </div>
      <div className="w-[45%] p-10 bg-green-400 rounded-xl">
        <h2 className="font-semibold text-3xl">0</h2>
        <h2 className="text-3xl">New Task</h2>
      </div>
      <div className="w-[45%] p-10 bg-amber-400 rounded-xl">
        <h2 className="font-semibold text-3xl">0</h2>
        <h2 className="text-3xl">New Task</h2>
      </div>
    </div>
  );
}

export default TaskListNumber;
