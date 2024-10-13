import TaskItem from "../TaskItem/TaskItem";


const TaskList = ({data}) => {

    return(
        <div className="TaskList">
        {data.map((task, index) => {
            return(
                <TaskItem data={task} key={index}/>
            )
        })}
        
        </div>
    )
}
export default TaskList;