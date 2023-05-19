import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { useState } from "react";

import TaskFooter from "./TaskFooter";
import TaskHeader from "./TaskHeader"

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
    const [newItem, setNewItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    return (
    <Card sx={{ minWidth: 275 }} key={props.taskItem?.id}>
        <TaskHeader task={task} setTask={props.setTask} setTasks={props.setTasks} taskItem={props.taskItem} newItem={newItem} editItem={editItem}/>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.taskItem?.description}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.taskItem?.title}
            </Typography>
            <Typography variant="body2">
                {props.taskItem?.status ? "True" : "False"}
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
            <TaskFooter taskItem={props.taskItem} tasks={props.tasks} task={props.task} setTasks={props.setTasks} setTask={props.setTask} editItem={editItem} setEditItem={setEditItem}/>
        </CardActions>
    </Card>
    );
}

export default Task;