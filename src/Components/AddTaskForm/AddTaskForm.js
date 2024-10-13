import React from "react";

const AddTaskForm = () => {
    return(
        <div className="AddTaskForm">
        <form action="">
        <input className="form-control w-50 d-inline-block" type="text" placeholder="enter new todo"/>
        <button className="p-2" type="submit">Add</button>
        </form>
        </div>
    )
}
export default AddTaskForm;