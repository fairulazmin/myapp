"use client";

import { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import DeleteIcon from "@mui/icons-material/Delete";

import { useStore } from "@/hooks/use-todo-store";

const useStyles = makeStyles((theme) => ({
  headerTextStyles: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  textBoxStyles: {
    marginBottom: theme.spacing(1),
  },
  addButtonStyles: {
    marginBottom: theme.spacing(2),
  },
  completedTodoStyles: {
    textDecoration: "line-through",
  },
}));

const TodosPage = () => {
  const {
    headerTextStyles,
    textBoxStyles,
    addButtonStyles,
    completedTodoStyles,
  } = useStyles();
  const [todoText, setTodoText] = useState("");
  const { addTodo, removeTodo, toggleCompletedState, todos } = useStore();

  return (
    <Container maxWidth="xs">
      <Typography variant="h3" className={headerTextStyles}>
        To-Do's
      </Typography>
      <TextField
        className={textBoxStyles}
        label="Todo Description"
        required
        variant="outlined"
        fullWidth
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodoText(e.target.value)
        }
        value={todoText}
      />
      <Button
        className={addButtonStyles}
        fullWidth
        variant="outlined"
        color="primary"
        onClick={() => {
          if (todoText.length) {
            addTodo(todoText);
            setTodoText("");
          }
        }}
      >
        Add Item
      </Button>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                onChange={() => toggleCompletedState(todo.id)}
              />
            </ListItemIcon>
            <ListItemText
              className={todo.completed ? completedTodoStyles : ""}
              key={todo.id}
            >
              {todo.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  removeTodo(todo.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodosPage;
