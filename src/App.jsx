import { useEffect, useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import ListItem from './components/ListItem'

let count = 4;

function uniqueId() {
  count = count + 1;
  return count;
}

const INITIAL_TODO = [
  {
    id: 1,
    task: "Practice Coding",
    isFinished: false,
  },
  {
    id: 2,
    task: "Yoka",
    isFinished: true,
  },
  {
    id: 3,
    task: "Cooking",
    isFinished: true,
  },
  {
    id: 4,
    task: "go for a walk",
    isFinished: true,
  },
];



function App() {
  const [todoList, setTodoList] = useState(INITIAL_TODO);

  const addNewTodo = (getTask) => {
    const newTodoItem = {
      id: uniqueId(),
      ...getTask
    }

    console.log("เพิ่มTask =", newTodoItem)
    setTodoList([newTodoItem, ...todoList])
  }

  const deleteTask = (id) => {
    console.log("get ID =",id)
    const deleteItem = todoList.filter((e)=>e.id !== id);
    setTodoList(deleteItem)
  }

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList])

  console.log(todoList)

  return (
    <div className='flex-col justify-center'>
      <h1 className='text-center text-3xl text-blue-900 font-bold my-5'>TO DO APP</h1>

      <InputForm addNewTodo={addNewTodo} />
      <ListItem todoList={todoList} deleteTask={deleteTask} />
    </div>
  )
}

export default App
