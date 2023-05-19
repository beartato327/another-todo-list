
export const onInputChange = (e: any, name: string, setTask: any, task:any) =>{
    const val = (e.target && e.target.value) || '';
    let _task = {...task};
    _task[`${name}`] = val;
    console.log(_task)
    console.log(task)

    setTask(_task);
    //this.setState({ product });
}
