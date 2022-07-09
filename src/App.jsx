import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };



  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <ul className="todo-list-container">
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </ul>
      {todos.length >= 1 && (
        <button className="clear-all-btn" onClick={() => setTodos([])}>CLEAR ALL TODOS</button>
      )}
      {todos.length >= 1 && (
        <h4>Yapılmamış <span className="counter">{todos.length}</span> Adet ToDo'nuz var.</h4>
      )}
      {todos.length == 0 && <h2>Henüz Girilmiş Bir ToDo Yok.</h2>}
    </div>
  );
}

export default App;
