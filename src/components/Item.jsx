import React, { useState } from 'react'

function Item(props) {
    const { id, task, isFinished, deleteTask } = props;
    const [done, setDone] = useState(false);

    const onClinkDone = () => {
        setDone(done => !done)
    }

    const onClickDelete = () => {
        deleteTask(id);
    }

    return (
        <div className='flex justify-between items-center bg-blue-100 w-[70vw] mx-auto my-5 rounded-md'>
            <h1 className={`text-lg mx-5 ${done ? "line-through" : ""}`}>{task}</h1>
            <div>
                <button
                    className={`bg-green-400 hover:bg-green-900 hover:text-white p-2 rounded-md ${done ? "bg-green-950 text-white" : ""}`}
                    onClick={onClinkDone}>Done</button>
                <button className='bg-red-400 hover:bg-red-900 hover:text-white p-2 rounded-md'
                    onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Item
