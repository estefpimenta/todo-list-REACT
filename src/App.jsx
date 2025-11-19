import { useState } from 'react'

import Todo from './components/Todo.jsx'
import TodoForm from './components/TodoForm.jsx'

import './App.css'

function App() {
  
  const [todos, SetTodos] = useState([
    {
      id: 1,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Fazer compras',
      category: 'Pessoal',
      isCompleted: false
    },
    {   
      id: 3,
      text: 'Criar funcionalidade "X" no sistema "Y"',
      category: 'Trabalho',
      isCompleted: false
    }
  ])

  return (

    <div className="app">


      <h1>Lista de Tarefas</h1>
      
      <div className="todo-list">

        {todos.map((todo) =>(

          <Todo todo={todo} />

        ))} 
        
      </div>

      <TodoForm  />

    </div>
 
  )
}

export default App
