import React from "react";
import { useSelector } from "react-redux";
import { Paper, List, Divider } from "@mui/material";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.tasks);
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            // To add a key to a fragment, we have to use the long-hand version
            // rather than <> </>, we have to use <React.Fragment>
            <React.Fragment key={todo.id}>
              <TodoItem
                {...todo}
                key={todo.id}
              />
              {index < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  }
}

export default TodoList;
