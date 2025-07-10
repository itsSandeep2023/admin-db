import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="p-5 rounded mt-5 drop-shadow-2xl">
      <div className="border-2 bg-red-400  mb-2 py-2 px-4 flex justify-between rounded ">
        <h1 className="text-lg font-medium w-1/5 text-sky-600 text-center">
          id
        </h1>
        <h1 className="text-lg font-medium w-1/5 text-purple-800 text-center">
          Employees
        </h1>
        <h3 className="text-lg font-medium w-1/5 text-yellow-800 text-center">
          New Task
        </h3>
        <h2 className="text-lg font-medium w-1/5 text-blue-800 text-center">
          Active Task
        </h2>
        <h4 className="text-lg font-medium w-1/5 text-green-800 text-center ">
          Completed
        </h4>
        <h5 className="text-lg font-medium w-1/5 text-red-800 text-center">
          Failed
        </h5>
        <h5 className="text-lg font-medium w-1/5 text-red-800 text-center">
          email
        </h5>
      </div>
      <div>
        {userData.map((e, idx) => {
          return (
            <div
              key={idx}
              className="border-2 bg-amber-400 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h1 className="text-lg font-medium w-1/5 text-sky-600 text-center">
                {e.id}
              </h1>

              <h1 className="text-lg font-medium w-1/5 text-purple-800 text-center">
                {e.firstname}
              </h1>
              <h3 className="text-lg font-medium w-1/5 text-yellow-800 text-center">
                {e.taskCounts.newtask}
              </h3>
              <h2 className="text-lg font-medium w-1/5 text-blue-800 text-center">
                {e.taskCounts.active}
              </h2>
              <h4 className="text-lg font-medium w-1/5 text-green-800 text-center ">
                {e.taskCounts.completed}
              </h4>
              <h5 className="text-lg font-medium w-1/5 text-red-800 text-center">
                {e.taskCounts.failed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-violet-800 text-center">
                {e.email}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
