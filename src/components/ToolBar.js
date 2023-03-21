import {
  ADD_TASK,
  RESET,
  TOGGLE_SORT_TASKS,
  UNDO_LAST_EVENT,
} from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const ToolBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const { lastState } = useSelector((store) => store.todo);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(ADD_TASK(input));
    setInput("");
  };

  return (
    <div className="max-w-6xl mx-auto py-7 px-5 my-4 flex gap-4 justify-center bg-white w-max">
      <button
        onClick={() => {
          dispatch(RESET());
          setInput("");
        }}
        className="bg-red-500 text-white py-3 px-6  h-[50px]"
      >
        Reset
      </button>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex gap-4 justify-center"
      >
        <input
          className="border-2 border-black w-96 px-5 h-[50px]"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="add your task"
        />
      </form>
      <div className="flex flex-col gap-2">
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="bg-green-500 text-white  h-[50px]  py-3 px-6"
        >
          Register Task
        </button>
        <button
          onClick={() => {
            dispatch(TOGGLE_SORT_TASKS());
          }}
          className="bg-blue-500 text-white  h-[50px]  py-3 px-6"
        >
          Sort Tasks
        </button>
        {lastState && (
          <button
            onClick={() => {
              dispatch(UNDO_LAST_EVENT());
            }}
            className="bg-gray-500 text-white  h-[50px]  py-3 px-6"
          >
            Undo event
          </button>
        )}
      </div>
    </div>
  );
};

export default ToolBar;
