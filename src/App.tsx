import React, { useState } from 'react';
import './App.css';
import InputFeiled from './InputFeiled/InputFeiled';
import { Todo } from './model';
import TodoList from './TodoList/TodoList';

const App: React.FC = () => {
  const [todo,setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone:false}]);
      setTodo("");
    }
   
  };
  return (
    <div className="App">
      <span className="heading">TypeScript</span>
      <InputFeiled todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
