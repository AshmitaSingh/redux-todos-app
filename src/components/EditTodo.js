import React from "react";
import { TextField } from "@mui/material";
import useInputState from "../hooks/useInputState";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/taskSlice";

function EditTodo({ id, task, toggleEditForm }) {
  const dispatch = useDispatch();
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          updateTodo({
            id: id,
            task: value,
          })
        );
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodo;
