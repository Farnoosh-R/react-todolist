import TaskItem from "../TaskItem/TaskItem";


const TaskList = ({data, deleteTask, handleChecked}) => {

    return(
        <div className="TaskList">
        {data.map((task, index) => {
            return(
                <TaskItem data={task} key={index} deleteTask={deleteTask} handleChecked={handleChecked}/>
            )
        })}
        
        </div>
    )
}
export default TaskList;