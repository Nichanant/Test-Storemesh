import React, { useState } from 'react'

function InputForm(props) {

    const [newTask, setNewTask] = useState("");
    
    const addHandler = () => {
        const getTask = {
            task: newTask,
            isFinished: true
        }

        console.log(newTask);

        props.addNewTodo(getTask);
        setNewTask("");
    }


    return (
        <div className='flex w-[70vw] justify-center mx-auto'>
            <input type="text"
                className='w-[50vw] border-2 border-blue-500 rounded-md'
                placeholder='Add Task'
                value={newTask} onChange={(e) => setNewTask(e.target.value)} />

            <button className='bg-blue-400 hover:bg-blue-900 hover:text-white mx-2 p-2 rounded-md'
                onClick={addHandler}>Add Task</button>
        </div>
    )
}

export default InputForm
