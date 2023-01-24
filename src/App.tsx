import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import "./App.css";
import CardGenerator from "./components/CardGenerator";

function App() {
  const dummy_list = [
    { id: 1, status: true, description: "I need to do this!" },
    { id: 2, status: false, description: "I need to do this too!" },
  ];

  const [count, setCount] = useState(0);

  return (
    <Box>
      <Stack spacing={2}>
        {dummy_list.map((dummy) => (
          <CardGenerator entry={dummy} />
        ))}
      </Stack>
    </Box>
  );
}

export default App;
