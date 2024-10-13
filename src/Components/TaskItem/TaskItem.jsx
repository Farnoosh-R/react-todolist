import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./style.css";

const TaskItem = () => {
  return (
    <div className="TaskItem p-3">
      <div className="TaskItem-box">
        <div className="d-flex">
          <input className="me-2" type="checkbox" />
          <h5>build this app</h5>
        </div>
        <FaTrashAlt />
      </div>

      <div className="TaskItem-box">
      <div className="d-flex">
        <input className="me-2" type="checkbox" />
        <h5>build this app</h5>
      </div>
      <FaTrashAlt />
    </div>

    <div className="TaskItem-box">
    <div className="d-flex">
      <input className="me-2" type="checkbox" />
      <h5>build this app</h5>
    </div>
    <FaTrashAlt />
  </div>

  <div className="TaskItem-box">
  <div className="d-flex">
    <input className="me-2" type="checkbox" />
    <h5>build this app</h5>
  </div>
  <FaTrashAlt />
</div>
    </div>
  );
};
export default TaskItem;
