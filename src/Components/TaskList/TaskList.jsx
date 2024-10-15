import TaskItem from "../TaskItem/TaskItem";


const TaskList = ({data, deleteTask}) => {

    return(
        <div className="TaskList">
        {data.map((task, index) => {
            return(
                <TaskItem data={task} key={index} deleteTask={deleteTask}/>
            )
        })}
        
        </div>
    )
}
export default TaskList;