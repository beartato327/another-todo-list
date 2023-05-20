
export const onInputChange = (e: any, name: string, setTask: any, task:any) =>{
    const val = (e.target && e.target.value) || '';
    let _task = {...task};
    _task[`${name}`] = val;
    console.log(_task)
    console.log(task)
   
    setTask(_task);
    //this.setState({ product });
}

export const onFocusLoss = () => {let index = -1;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === _task.id) {
          index = i;
          break;
        }
      }
    tasks[index] = _task
    setTasks([..._task]);}

export const onCheckboxChange = (e: any, name: string,  setTask: any, task: any, tasks: any, setTasks: any ) => {
    const {checked} = e?.target;
    let _task = {...task};
    
    _task[`${name}`] = checked;
    
    let index = -1;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === _task.id) {
          index = i;
          break;
        }
      }
      console.log(_task)
    tasks[index] = _task
    console.log(tasks)

    setTasks([...tasks]);
}
