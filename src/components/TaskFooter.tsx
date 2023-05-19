import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { handleDelete, handleSave, handleEdit } from "../handlers/Crud";

const TaskFooter = (props: {
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
  editItem: boolean;
  setEditItem: any;
}) => (
  <>
    {(props.editItem)  ? (
      <>
        <Button
          size="small"
          onClick={() => {
            //props.handleSave(props.title);
          }}
        >
          Save
        </Button>
        <Button
          size="small"
          onClick={() => (props.setEditItem(false))}
        >
          Cancel
        </Button>
      </>
    ) : (
      <>
        <IconButton
          color="primary"
          aria-label="delete"
          size="large"
          onClick={() => handleEdit(props.taskItem, props.setTask, props.setEditItem)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          aria-label="delete"
          size="large"
          onClick={() => handleDelete(props.tasks, props.setTasks, props.taskItem)}
        >
          <DeleteIcon />
        </IconButton>
      </>
    )}
  </>
);

export default TaskFooter;
