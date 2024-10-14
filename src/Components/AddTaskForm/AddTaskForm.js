import React, { useState } from "react";


const AddTaskForm = ({addItem}) => {


const [value, setValue] = useState('');

const handleChange = (e) => {
    setValue(e.target.value);
}
const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || value === ''){
        return
    }
    addItem(value);
}



    return(
        <div className="AddTaskForm">
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} className="form-control w-50 d-inline-block" type="text" placeholder="enter new todo"/>
        <button className="p-2" type="submit">Add</button>
        </form>
        </div>
    )
}
export default AddTaskForm;