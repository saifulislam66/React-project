import React from "react";

function CreateTask() {
  return (
    <div className="mt-10">
      <form className=" py-10 rounded-xl w-full flex items-center justify-between bg-zinc-600">
        <div className="w-1/2 px-20">
          <div>
            <h2>Task Title</h2>
            <input
              className="w-full h-10 bg-transparent outline-none border-[1px] border-zinc-400 mb-5 px-5 text-zinc-100 rounded-xl"
              type="text"
              placeholder="Make a task"
            />
          </div>
          <div>
            <h2>Date</h2>
            <input
              className="w-full h-10 bg-transparent outline-none border-[1px] border-zinc-400 mb-5 px-5 text-zinc-100 rounded-xl"
              type="date"
            />
          </div>
          <div>
            <h2>Asing to</h2>
            <input
              className="w-full h-10 bg-transparent outline-none border-[1px] border-zinc-400 mb-5 px-5 text-zinc-100 rounded-xl"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h2>Category</h2>
            <input
              className="w-full h-10 bg-transparent outline-none border-[1px] border-zinc-400 mb-5 px-5 text-zinc-100 rounded-xl"
              type="text"
              placeholder="design dev etc"
            />
          </div>
        </div>

        <div className="w-1/2 px-32">
          <div className="">
            <h2 className="text-2xl mb-5">Description</h2>
            <textarea
              className="w-full min-h-48 mb-5 rounded-xl bg-transparent border-[1px] border-gray outline-none p-5"
              name=""
              id=""
            ></textarea>{" "}
            <br />
            <button className="w-full text-xl bg-green-400 capitalize rounded-xl">
              create task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
