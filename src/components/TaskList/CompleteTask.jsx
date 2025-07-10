import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-[300px] p-5 bg-[var(--base-green)] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-purple-500 text-sm px-3 py-1 rounded drop-shadow-2xl">
          {data.category}
        </h3>
        <h4 className="bg-cyan-500 py-1 px-2 rounded  text-sm drop-shadow-2xl">
          {data.taskdate}
        </h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.tasktitle}</h2>
      <p className="text-sm mt-2">{data.taskdescription}</p>
      <div className="mt-6">
        <button className="w-full rounded font-medium bg-[var(--dark-green)]  py-1 px-2 text-sm">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
