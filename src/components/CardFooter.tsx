import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CardFooter = (props: {
  id?: number;
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
}) => (
  <>
    {(props.editItem && props.id === props.itemId) ||
    (props.newItem && props.id === undefined) ? (
      <>
        <Button
          size="small"
          onClick={() => {
            props.handleSave(props.title);
          }}
        >
          Save
        </Button>
        <Button
          size="small"
          onClick={() => (props.setNewItem(false), props.setEditItem(false))}
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
          onClick={() => props.handleEdit(props.id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          aria-label="delete"
          size="large"
          onClick={() => props.handleDelete(props.id)}
        >
          <DeleteIcon />
        </IconButton>
      </>
    )}
  </>
);

export default CardFooter;
