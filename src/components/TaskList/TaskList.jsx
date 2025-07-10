import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[45%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      {data.tasks.map((e, idx) => {
        if (e.active) {
          return <AcceptTask key={idx} data={e} />;
        }
        if (e.newtask) {
          return <NewTask key={idx} data={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={idx} data={e} />;
        }
        if (e.failed) {
          return <FailedTask key={idx} data={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;
