import { useSelector, useDispatch } from "react-redux";
import { SWITCH_THEME } from "../features/theme/themeSlice";

const Header = () => {
  const { numberOfDoneTasks, numberOfUndoneTasks } = useSelector(
    (store) => store.todo
  );

  const dispatch = useDispatch();

  return (
    <div className="max-w-6xl mx-auto p-5 flex justify-center items-center bg-purple-600 text-white gap-7">
      <button
        onClick={() => {
          dispatch(SWITCH_THEME());
        }}
        className="bg-orange-500 text-white  h-[50px]  py-3 px-6"
      >
        Switch Theme
      </button>
      <h1 className="text-3xl font-bold">My Todo List</h1>
      <div className="bg-white py-3 px-7">
        <p className="text-green-500 font-semibold">
          Done : {numberOfDoneTasks}
        </p>
        <p className="text-red-500 font-semibold">
          Undone : {numberOfUndoneTasks}
        </p>
        <p className="text-black font-semibold">
          Total : {numberOfDoneTasks + numberOfUndoneTasks}
        </p>
      </div>
    </div>
  );
};

export default Header;
