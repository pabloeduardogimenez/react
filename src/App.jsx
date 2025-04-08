import { useState } from 'react';

import Todo from './components/Todo';

import "./App.css";
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text:"Criar Funcionalidade X no sistemas",
      category: "Trabalho",
      isStatus: false,
    },
    {
      id: 2,
      text:"Criar Funcionalidade Y no sistemas",
      category: "Home",
      isStatus: false,
    },
    {
      id: 3,
      text:"Criar Funcionalidade Z no sistemas",
      category: "Casa",
      isStatus: false,
    },
  ])

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="Todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
   
  );
}

export default App
