import { useState } from 'react'

import Todo from './components/Todo.jsx'
import TodoForm from './components/TodoForm.jsx'
import Search from './components/search.jsx'

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

  const [search, setSearch] = useState('');


  const addTodo = (text, category) => {

    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false
      }
    ];
    SetTodos(newTodos);  
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    SetTodos(filteredTodos)
    
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);   
    SetTodos(newTodos);
  }



  return (

    <div className="app">


      <h1>Lista de Tarefas</h1>

      <Search search={search} setSearch={setSearch} />
      
      <div className="todo-list">

        {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .map((todo) =>(

          <Todo key={todo.id} todo={todo} removeTodo = {removeTodo} completeTodo = {completeTodo} />

        ))} 
        
      </div>

      <TodoForm  addTodo={addTodo} />

    </div>
 
  )
}

export default App
