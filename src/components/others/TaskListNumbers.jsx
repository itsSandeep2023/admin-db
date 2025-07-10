import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="overflow-auto flex justify-between gap-5">
      <div className="min-w-40 rounded-xl w-[45%] px-9 py-6 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newtask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="min-w-40 rounded-xl w-[45%] px-9 py-6 bg-blue-400">
        <h2 className="min-w-40 text-3xl font-semibold">
          {data.taskCounts.active}
        </h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="min-w-40 rounded-xl w-[45%] px-9 py-6  bg-[var(--base-green)] ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="min-w-40 rounded-xl w-[45%] px-9 py-6 bg-red-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
