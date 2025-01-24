import React from 'react'
import Item from './Item';

function ListItem(props) {
    const todoList = props.todoList;

    return (
        <div>
            {todoList.map((e) => (
                <Item key={e.id} task={e.task} id={e.id} isFinished={e.isFinished} deleteTask={props.deleteTask}/>
            ))}
        </div>
    )
}

export default ListItem
