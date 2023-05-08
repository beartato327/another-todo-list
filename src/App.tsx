import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
//import "./App.css";
import Item from "./components/Item";
import NewCard from "./components/NewCard";
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

  const [newItem, setNewItem] = useState(false);
  const [title, setTitle] = useState("");
  const [itemList, setItemList] = useState(dummy_list);

  console.log(title);
  const save = (title: string) => {
    console.log(dummy_list);
    const id = dummy_list.length + 1;
    let newItem = {
      id: id,
      status: false,
      title: title,
      description: "new!",
    };
    dummy_list.unshift(newItem);
    setItemList(dummy_list);
  };

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
            <NewCard
              title={title}
              setTitle={setTitle}
              setNewItem={setNewItem}
              save={save}
            />
          ) : (
            <div></div>
          )}
          {itemList.map((itemList) => (
            <Item entry={itemList} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
