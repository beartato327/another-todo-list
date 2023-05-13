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
  const [editItem, setEditItem] = useState(false);
  const [title, setTitle] = useState<string | null>(null);
  const [itemList, setItemList] = useState(dummy_list);
  const [itemId, setItemId] = useState(0);

  const handleSave = (title: string) => {
    let newItem = {
      id: itemList.length + 1,
      status: false,
      title: title,
      description: "new!",
    };
    itemList.unshift(newItem);
    setItemList(itemList);
    setNewItem(false);
  };
  console.log(title);
  const handleEdit = (id: number) => {
    setEditItem(true);
    setItemId(id);

    setTitle(
      itemList
        .filter((index) => index.id === id)
        .map((obj) => obj.title)
        .toString()
    );
  };

  const handleDelete = (id: number) => {
    setItemList(itemList.filter((index) => index.id !== id));
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
            <ItemCard
              title={title}
              setTitle={setTitle}
              itemId={itemId}
              editItem={editItem}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSave={handleSave}
              setNewItem={setNewItem}
              newItem={newItem}
            />
          ) : (
            <div></div>
          )}
          {itemList.map((itemList) => (
            <ItemCard
              title={title}
              setTitle={setTitle}
              entry={itemList}
              itemId={itemId}
              editItem={editItem}
              setEditItem={setEditItem}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSave={handleSave}
              setNewItem={setNewItem}
              newItem={newItem}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
