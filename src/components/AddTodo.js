import React from "react";
import { Paper, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/taskSlice";
import useInputState from "../hooks/useInputState";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";

function AddTodo() {
  const dispatch = useDispatch();
  const [value, handleChange, reset] = useInputState("");

  const addNewTask = (e) => {
    e.preventDefault();
    // Check if input field is empty
    if (value.trim().length === 0) {
      alert("Please Enter A Task!");
      reset();
      return;
    }
    // disptaching the action of adding a new task to the list
    dispatch(
      addTodo({
        task: value,
      })
    );
    // To empty the input field after hitting the button
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={addNewTask} style={{ display: "flex", gap: "0.5rem" }}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
        <button
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <IconButton aria-label="Add">
            <AddCircleIcon fontSize="large" sx={{ color: "#a7c957" }} />
          </IconButton>
        </button>
      </form>
    </Paper>
  );
}

export default AddTodo;
