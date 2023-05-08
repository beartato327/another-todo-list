import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
  CardHeader,
} from "@mui/material";

export default function Item(props: {
  entry: {
    id: number;
    status: boolean;
    description: string;
    title: string;
  };
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={
          props.newItem ? (
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
              {props.entry.title}
            </Typography>
          )
        }
      ></CardHeader>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.entry.description}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.entry.title}
        </Typography>
        <Typography variant="body2">
          {props.entry.status ? "True" : "False"}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
