import { useState } from 'react'

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
      category: 'Pessoal',
      isCompleted: false
    }
  ])

  return (
    
    <div className="app">


      <h1>Lista de Tarefas</h1>
      
      <div className="todo-list">

        {todos.map((todo) =>(

          <div className="todo">

            <div className="content">

              <p> {todo.text} </p>

            </div>

            <div className="category">
              <p>( {todo.category} )</p>
            </div>

            <div>
              <button>Completar</button>
              <button>X</button>
            </div>

          </div>


        ))} 
        
      </div>

    </div>
 
  )
}

export default App
