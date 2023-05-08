import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
  CardHeader,
} from "@mui/material";

const NewCard = (props: {
  title: string;
  setTitle: (val: string) => void;
  setNewItem: (val: boolean) => void;
  save: any;
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={
          <TextField
            id="standard-basic"
            label="Task Name"
            variant="standard"
            size="small"
            sx={{ width: "80%" }}
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
          />
        }
      ></CardHeader>
      <CardContent>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="body2">
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <hr style={{ width: "80%", border: "1px solid black" }} />
      <CardActions sx={{ display: "flex", justifyContent: "flex-end", pr: 5 }}>
        <Button
          size="small"
          onClick={() => {
            props.save(props.title);
          }}
        >
          Save
        </Button>
        <Button size="small" onClick={() => props.setNewItem(false)}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewCard;
