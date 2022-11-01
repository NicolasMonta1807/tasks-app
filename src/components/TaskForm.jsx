import { useState, useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

function TaskForm() {

    // Destructuring context to get createTask function
    const { createTask } = useContext(TaskContext)

    // Setting state for user input title and desc
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    // Handle the submit action for create new task
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title, description) // Function is received from call
        setTitle('')
        setDescription('')
    }

    // Component function
    return (
        <div className='container max-w-md mx-auto'>
            <form
                className='bg-slate-800 mx-auto p-4 mb-10 grid text-white rounded-md '
                onSubmit={handleSubmit}
            >
                <label className='text-2xl font-bold mb-3'>Create new task: </label>
                <input
                    className='bg-slate-300 p-3 w-full mb2 rounded-md text-slate-800'
                    type="text"
                    placeholder="New task title"
                    onChange={(e) => (setTitle(e.target.value))}
                    value={title}
                />
                <textarea
                    className='bg-slate-300 p-3 mt-3 w-full mb2 rounded-md text-slate-800'
                    placeholder='New task description'
                    onChange={(e) => (setDescription(e.target.value))}
                    value={description}
                >
                </textarea>
                <button
                    className='m-3 bg-red-500 rounded-lg hover:bg-red-400'
                >Submit</button>
            </form>
        </div>
    )
}

export default TaskForm