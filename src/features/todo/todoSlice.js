import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  numberOfDoneTasks: 0,
  numberOfUndoneTasks: 0,
  lastState: null,
  sortTasks: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    ADD_TASK: (state, action) => {
      state.lastState = { ...state };

      const { payload } = action;
      const newTab = [...state.tasks, { name: payload, isDone: false }];
      state.tasks = newTab;
      state.numberOfUndoneTasks++;
    },
    REMOVE_TASK: (state, action) => {
      state.lastState = { ...state };
      const { payload } = action;
      if (payload.isDone) {
        state.numberOfDoneTasks--;
      } else {
        state.numberOfUndoneTasks--;
      }
      state.tasks = state.tasks.filter((elem) => elem.name !== payload.name);
    },
    TOGGLE_TASK: (state, action) => {
      state.lastState = { ...state };
      const { payload } = action;

      const newTab = [...state.tasks];

      newTab.find((task) => {
        if (task.name === payload.name) {
          task.isDone = !task.isDone;
        }
        return null;
      });

      if (payload.isDone) {
        state.numberOfDoneTasks--;
        state.numberOfUndoneTasks++;
      } else {
        state.numberOfDoneTasks++;
        state.numberOfUndoneTasks--;
      }

      state.tasks = newTab;
    },
    RESET: (state) => {
      state.tasks = [];
      state.numberOfDoneTasks = 0;
      state.numberOfUndoneTasks = 0;
      state.lastState = null;
      state.sortTasks = false;
    },
    TOGGLE_SORT_TASKS: (state) => {
      state.sortTasks = !state.sortTasks;
    },
    UNDO_LAST_EVENT: (state) => {
      const { tasks, numberOfDoneTasks, numberOfUndoneTasks, sortTasks } =
        state.lastState;

      state.tasks = current(tasks);
      state.numberOfDoneTasks = numberOfDoneTasks;
      state.numberOfUndoneTasks = numberOfUndoneTasks;
      state.lastState = null;
      state.sortTasks = sortTasks;
    },
  },
});

export default todoSlice.reducer;

export const {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  RESET,
  TOGGLE_SORT_TASKS,
  UNDO_LAST_EVENT,
} = todoSlice.actions;
