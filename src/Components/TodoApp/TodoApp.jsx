import React, { useEffect, useState } from "react";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TaskList from "../TaskList/TaskList";
import FilterFooter from "../FilterFooter/FilterFooter";
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {

    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: 'task 1',
            status: true
        },
        {
            id: uuidv4(),
            title: 'task 2',
            status: false
        }
    ]);


    const addItem = (newItem) => {
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                title: newItem,
                status: false
            }
        ])
        console.log(tasks)
    }

const deleteTask = (taskId) => {
    // let newTasks = tasks;
    // delete newTasks[tasks.findIndex((item) => item.id == taskId)]
    // newTasks.filter((item) => item)
    // setTasks(newTasks)
    const newTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(newTasks);
}
 
    return(
        <div className="TodoApp">
        <AddTaskForm  addItem={addItem}/>
        <TaskList data={tasks} deleteTask={deleteTask}/>
        <FilterFooter data={tasks}/>
        </div>
    )
}
export default TodoApp;