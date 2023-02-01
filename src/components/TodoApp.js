import React from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <Paper style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
    }}
        elevation={0}
    >
        <AppBar style={{ backgroundColor: '#a7c957' }} position='static'>
            <Toolbar>
                <Typography sx={{ color: 'white' }} variant="h6">TODO APP WITH REDUX</Typography>
            </Toolbar>
        </AppBar>
        <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                    <AddTodo />
                    <TodoList />
            </Grid>
        </Grid>
    </Paper>
  );
}

export default TodoApp;
