import TaskCard from "./TaskCard"
import { TaskContext } from '../contexts/TaskContext'
import { useContext } from "react"

function TaskList() {

    // Destructuring context to get tasks info
    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return (
            <h2 className="text-white text-center bg-slate-700 rounded-md font-bold text-2xl">¡There are no tasks yet!</h2>
        )
    }

    // Create a card for each task
    return (
        <div className="grid grid-cols-4 gap-2">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}></TaskCard>
            ))}
        </div>
    )
}

export default TaskList