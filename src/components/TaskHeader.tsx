import {CardHeader, TextField, Typography} from "@mui/material";
import { onInputChange } from "../handlers/InputHandler";

const TaskHeader = (props:{
  taskItem?: {
    id: number;
    status: boolean;
    description: string;
    title: string;
};
task: any;
setTask: any;
setTasks: any;
newItem: any;
editItem: any;
}) => {
    
    return(
        <CardHeader
        title={
          (props.newItem || props.editItem) ? (
            <TextField
              id="standard-basic"
              label="Task Name"
              variant="standard"
              size="small"
              sx={{ width: "80%" }}
              value={props.task?.title}
              onChange={(e) => onInputChange(e, 'title', props.setTask, props.taskItem)}
            />
          ) : (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.taskItem?.title}
            </Typography>
          )
        }
      ></CardHeader>
    )
}

export default TaskHeader;