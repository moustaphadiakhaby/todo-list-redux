import { useDispatch } from "react-redux";
import { REMOVE_TASK, TOGGLE_TASK } from "../features/todo/todoSlice";

const Todo = ({ task }) => {
  const dispatch = useDispatch();

  const { name, isDone } = task;

  const handleDone = () => {
    dispatch(TOGGLE_TASK(task));
  };

  const handleDelete = () => {
    dispatch(REMOVE_TASK(task));
  };

  console.log(isDone);

  return (
    <div className="flex justify-between w-1/2 pl-3">
      <input
        className="cursor-pointer"
        type="checkbox"
        checked={isDone}
        onChange={handleDone}
      />
      <p className={`${isDone && "line-through"}`}>{name}</p>
      <p onClick={handleDelete} className="cursor-pointer">
        X
      </p>
    </div>
  );
};

export default Todo;
