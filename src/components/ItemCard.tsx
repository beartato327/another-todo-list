import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardHeader,
  IconButton,
  TextField,
} from "@mui/material";

import CardFooter from "./TaskFooter";

export default function Item(props: {
  entry?: {
    id: number;
    status: boolean;
    description: string;
    title: string;
  };
  title: string;
  setTitle: (val: string) => void;
  itemId: number;
  editItem: boolean;
  setEditItem: (val: boolean) => void;
  handleDelete: any;
  handleEdit: any;
  handleSave: any;
  setNewItem: (val: boolean) => void;
  newItem: boolean;
}) {
  return (
    <Card sx={{ minWidth: 275 }} key={props.entry?.id}>
      <CardHeader
        title={
          (props.editItem && props.entry?.id === props.itemId) ||
          (props.newItem && props.entry?.id === undefined) ? (
            <TextField
              id="standard-basic"
              label="Task Name"
              variant="standard"
              size="small"
              sx={{ width: "80%" }}
              value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
            />
          ) : (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.entry?.title}
            </Typography>
          )
        }
      ></CardHeader>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.entry?.description}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.entry?.title}
        </Typography>
        <Typography variant="body2">
          {props.entry?.status ? "True" : "False"}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CardFooter
          title={props.title}
          setTitle={props.setTitle}
          id={props.entry?.id}
          itemId={props.itemId}
          editItem={props.editItem}
          setEditItem={props.setEditItem}
          handleDelete={props.handleDelete}
          handleEdit={props.handleEdit}
          handleSave={props.handleSave}
          setNewItem={props.setNewItem}
          newItem={props.newItem}
        />
      </CardActions>
    </Card>
  );
}
