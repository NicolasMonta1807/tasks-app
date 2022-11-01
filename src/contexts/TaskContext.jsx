import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    // Creating state for loading tasks from file
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    //Handling tasks on the list 
    function createTask(taskTitle, taskDesc) {
        setTasks([...tasks, {
            title: taskTitle,
            desc: taskDesc,
            id: tasks.length
        }])
    }

    function deleteTask(taskId) {
        setTasks(
            tasks.filter(task => task.id !== taskId)
        )
    }

    // Component function
    return (
        <TaskContext.Provider value={{
            // Adding values and functions to context
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext