import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
//import "./App.css";
import ItemCard from "./components/ItemCard";
import NewCard from "./components/NewCard";
import Task from "./components/Task";
import { Slide, Typography } from "@mui/material";

function App() {
  const dummy_list = [
    { id: 1, status: true, title: "TEST", description: "I need to do this!" },
    {
      id: 2,
      status: false,
      title: "TEST2",
      description: "I need to do this too!",
    },
  ];

  let emptyTask = {
    id: null,
    title: "",
    description: "",
    status: false,
  };

  const [newItem, setNewItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [title, setTitle] = useState<string | null>(null);
  const [tasks, setTasks] = useState(dummy_list);
  const [task, setTask] = useState(emptyTask);
  const [itemId, setItemId] = useState(0);

  const handleSave = (title: string) => {
    let newItem = {
      id: tasks.length + 1,
      status: false,
      title: title,
      description: "new!",
    };
    tasks.unshift(newItem);
    setTasks(tasks);
    setNewItem(false);
  };
  console.log(tasks)

  return (
    <Box sx={{ mx: "auto", width: "100vw" }}>
      <Container sx={{ width: "40vw" }}>
        <Box
          sx={{
            height: 100,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {newItem ? (
            <div></div>
          ) : (
            <Button
              onClick={() => setNewItem(!newItem)}
              variant="contained"
              color="success"
              sx={{ display: "block", my: "auto" }}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <AddIcon />
                <Typography>New Todo</Typography>
              </Stack>
            </Button>
          )}
        </Box>
        <Stack spacing={2}>
          {newItem ? (
            <Task />
           /*  <ItemCard
              title={title}
              setTitle={setTitle}
              itemId={itemId}
              editItem={editItem}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSave={handleSave}
              setNewItem={setNewItem}
              newItem={newItem}
            /> */
          ) : (
            <div></div>
          )}
          {tasks.map((taskItem) => (
            <Task taskItem={taskItem} tasks={tasks} task={task} setTasks={setTasks} setTask={setTask}/>
            
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
