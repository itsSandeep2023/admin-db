import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [tasktitle, setTasktitle] = useState("");
  const [taskdescription, setTaskdescription] = useState("");
  const [taskdate, setTaskdate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  // const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    // setTask({
    //   active: false,
    //   newtask: true,
    //   completed: false,
    //   failed: false,
    //   tasktitle,
    //   taskdescription,
    //   taskdate,
    //   category,
    // });

    const data = userData;

    data.forEach(function (elem) {
      if (asignTo == elem.id) {
        elem.tasks.push({
          active: false,
          newtask: true,
          completed: false,
          failed: false,
          tasktitle,
          taskdescription,
          taskdate,
          category,
        });
        elem.taskCounts.newtask = elem.taskCounts.newtask + 1;
      }
    });

    setUserData(data);
    console.log(data);
    localStorage.setItem("employees", JSON.stringify(data));

    setTasktitle("");
    setTaskdescription("");
    setTaskdate("");
    setCategory("");
    setAsignTo("");
  };

  return (
    <div className="p-5 bg-[#fff] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2 flex flex-col gap-1">
          <div>
            <h3 className="text-sm mb.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              value={tasktitle}
              onChange={(e) => setTasktitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm mb.5">Date</h3>

            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none
              bg-transparent border-[1px] border-gray-400"
              value={taskdate}
              onChange={(e) => setTaskdate(e.target.value)}
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm mb.5">Employee id</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none
              bg-transparent border-[1px] border-gray-400"
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              required
              type="text"
              placeholder="Employee id"
            />
          </div>

          <div>
            <h3 className="text-sm mb.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none
              bg-transparent border-[1px] border-gray-400"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm mb.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            value={taskdescription}
            onChange={(e) => setTaskdescription(e.target.value)}
            name=""
            id=""
          ></textarea>
          <button className="bg-emerald-400 py-3 hover:bg-emerald-500 px-5 roun text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
