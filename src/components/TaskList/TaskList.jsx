import React from "react";

function TaskList() {
  return (
    <div
      id="tasklist"
      className="w-full h-[50%] flex items-center gap-5 overflow-x-auto mt-10 py-10 "
    >
      <div className="h-full shrink-0 p-5  bg-red-500 rounded-xl w-[300px]">
        <div className="flex justify-between mb-5 ">
          <h3 className="text-3xl">Heigh</h3>
          <h4 className="text-1xl">20 sep 2024</h4>
        </div>
        <h2 className="text-2xl">Make a youtube vido</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nemo!
        </p>
      </div>
    </div>
  );
}

export default TaskList;
