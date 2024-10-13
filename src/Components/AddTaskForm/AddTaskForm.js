import React, { useState } from "react";


const AddTaskForm = ({addItem}) => {

    const [value, setValue] = useState('');

const handleChange = (e) => {
    if (e){
        e.preventDefault();
        setValue(e.target.value);
    }
    console.log(value)
}
const handleSubmit = () => {
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