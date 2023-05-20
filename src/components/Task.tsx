import { Card, CardContent, CardActions, Typography, Stack, Checkbox } from "@mui/material";
import { useState } from "react";

import TaskFooter from "./TaskFooter";
import TaskHeader from "./TaskHeader"
import { onCheckboxChange } from "../handlers/InputHandler";

const Task = (props: {
    taskItem?: {
        id: number;
        status: boolean;
        description: string;
        title: string;
    };
    tasks: any;
    setTasks: any;
    task: any;
    setTask: any;
}) => {
    const [newItem, setNewItem] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean | undefined>(props.taskItem?.status)
    return (
    <Card sx={{ minWidth: 275 }} key={props.taskItem?.id}>
        <TaskHeader task={props.task} setTask={props.setTask} tasks={props.tasks} setTasks={props.setTasks} taskItem={props.taskItem} newItem={newItem} editItem={editItem}/>
        <CardContent>
            <Stack direction="row" spacing={3}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <Checkbox checked={props.taskItem?.status} onClick={(e) => onCheckboxChange(e, "status", props.setTask, props.taskItem, props.tasks, props.setTasks)}  />
                {props.taskItem?.status}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.taskItem?.description}
            </Typography>
            
            </Stack>
            <Typography variant="body2">
            </Typography>
        </CardContent>
        <CardActions
            sx={{
                display: "flex",
                justifyContent: "flex-end",
            }}
        >
            <TaskFooter taskItem={props.taskItem} tasks={props.tasks} task={props.task} setTasks={props.setTasks} setTask={props.setTask} editItem={editItem} setEditItem={setEditItem}/>
        </CardActions>
    </Card>
    );
}

export default Task;