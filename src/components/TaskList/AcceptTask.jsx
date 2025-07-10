import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
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
      <div className="flex justify-between mt-6">
        <button className="bg-[var(--base-green)] hover:bg-[var(--dark-green)] rounded font-medium py-1 px-2 mr-2 text-sm drop-shadow-2xl">
          Mark as Completed
        </button>
        <button className=" bg-red-500 hover:bg-red-600 rounded font-medium py-1 px-2 text-sm drop-shadow-2xl">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
