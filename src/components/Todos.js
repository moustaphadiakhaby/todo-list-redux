import Todo from "./Todo";
import { useSelector } from "react-redux";
import { memo } from "react";

const Todos = () => {
  const { tasks, sortTasks } = useSelector((store) => store.todo);

  console.log("jme render");

  return (
    <div className="max-w-6xl mx-auto min-h-[400px] bg-slate-300 px-32 py-6 flex flex-col gap-4">
      {sortTasks ? (
        <>
          <h2 className="text-2xl font-bold">Done tasks</h2>
          {tasks.map((task, index) => {
            if (task.isDone) {
              return <Todo task={task} key={index} />;
            } else return null;
          })}
          <h2 className="text-2xl font-bold">Undone tasks</h2>
          {tasks.map((task, index) => {
            if (!task.isDone) {
              return <Todo task={task} key={index} />;
            } else return null;
          })}
        </>
      ) : (
        tasks.map((task, index) => {
          return <Todo task={task} key={index} />;
        })
      )}
    </div>
  );
};

export default memo(Todos);
