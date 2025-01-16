import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import ShowItem from './components/ShowItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-200'>
        <Navbar />
        <div className='md:flex'>
        <Filter />
        <ShowItem />
        </div>
  
    </div>
  )
}

export default App
