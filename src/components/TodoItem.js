import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/taskSlice";
import useToggle from "../hooks/useToggle";
import EditTodo from "./EditTodo";

function TodoItem({ id, task, completed }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [isEditing, toggle] = useToggle(false);

  const handleDeleteTodo = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  const handleToggle = () => {
    setChecked(!checked);
    dispatch(
      toggleTodo({
        id: id,
        completed: completed,
      })
    );
  };

  return (
    <ListItem style={{ height: '52px' }}>
      {isEditing ? (
        <EditTodo id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox tabIndex={-1} checked={checked} onClick={handleToggle} />
          <ListItemText
            style={{ textDecoration: checked ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={handleDeleteTodo}>
              <DeleteIcon sx={{ color: '#f44e3f' }}/>
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon sx={{ color: '#BBDEFB' }}/>
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;
