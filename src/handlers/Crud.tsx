

export const handleSave = (tasks: any, task: any) =>{
    let _tasks = [...tasks];
    let _task = [...task];
    if(task.id){}else{
        _task.id = tasks.length + 1
    }
}

export const handleEdit = (taskItem: any, setTask: any, setEditItem: any) => {
    setEditItem(true);
    console.log({...taskItem})
    setTask({...taskItem})
}

export const handleDelete = (tasks: any, setTasks: any, taskItem: any) =>{
    console.log(tasks)
    console.log(taskItem)
    setTasks(tasks.filter((index: { id: number; }) => index.id !== taskItem.id));
}