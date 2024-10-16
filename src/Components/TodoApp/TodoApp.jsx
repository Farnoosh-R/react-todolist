import React, { useEffect, useState } from "react";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TaskList from "../TaskList/TaskList";
import FilterFooter from "../FilterFooter/FilterFooter";
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {

    const [filter, setFilter] = useState('all');
    const [filteredTask, setFilteredTask] = useState([]);
    const [refresh, setrefresh] = useState(0);

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


useEffect(() => {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        storedTasks = JSON.parse(storedTasks);
        setTasks(storedTasks);
    }
})

    const addItem = (newItem) => {
        const newTasks = [
            ...tasks,
            {
                id: uuidv4(),
                title: newItem,
                status: false
            }
        ]
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        console.log(tasks)
    }

        useEffect(() => {
            if (filter === 'all'){
                setFilteredTask(tasks);
            } else if (filter === 'completed'){
                setFilteredTask(tasks.filter(item => item.status))
            }else if (filter === 'active'){
                setFilteredTask(tasks.filter(item => !item.status))
            }
          console.log(filter)  
        }, [filter, tasks, refresh])

const deleteTask = (taskId) => {

    const newTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}

const handleChecked = (taskId) => {
    let newTaskschecked = tasks;
    const taskIndex = tasks.findIndex((item) => item.id == taskId)
    newTaskschecked[taskIndex].status = !newTaskschecked[taskIndex].status;
    setTasks(newTaskschecked);
    setrefresh(refresh + 1);
    localStorage.setItem('tasks', JSON.stringify(newTaskschecked));
}

 
    return(
        <div className="TodoApp">
        <AddTaskForm  addItem={addItem}/>
        <TaskList data={filteredTask} deleteTask={deleteTask} handleChecked={handleChecked}/>
        <FilterFooter data={filteredTask} updateFilter={setFilter}/>
        </div>
    )
}
export default TodoApp;