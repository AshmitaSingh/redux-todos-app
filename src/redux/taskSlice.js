import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: uuidv4(),
        task: action.payload.task,
        completed: false
      };
      state.push(newTask);
      console.log(newTask);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      return state.map((item) => item.id === action.payload.id ? {...item, task: action.payload.task} : item
      );
    },
    toggleTodo: (state, action) => {
      state.map((item) => {
        if(item.id === action.payload.id) {
          item.completed = !action.payload.completed;
        }
      })
      return state;
    }
  }
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } = taskSlice.actions;
export default taskSlice.reducer;
