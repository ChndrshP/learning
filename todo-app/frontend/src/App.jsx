import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo/CreateTodo'
import Todos from './components/Todos/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const todo = await res.json();
      setTodos(todo);            
    })
    .catch((err) => console.error("Failed to fetch todos", err));
  },[])  

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App