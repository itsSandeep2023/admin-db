import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
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
        <button className="w-full rounded font-medium bg-red-500 py-1 px-2 text-sm">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
