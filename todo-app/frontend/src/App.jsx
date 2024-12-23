import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo/CreateTodo'
import Todos from './components/Todos/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
