import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./style.css";

const TaskItem = ({data, deleteTask}) => {
  
  return (
    <div className="TaskItem">
      <div className="TaskItem-box">
        <div className="d-flex">
          <input className="me-2" type="checkbox" checked={data.status} />
          <h5>{data.title}</h5>
        </div>
        <button onClick={() => {deleteTask(data.id)}}>
        <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};
export default TaskItem;
