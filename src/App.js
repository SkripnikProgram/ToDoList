import React, { useEffect } from "react";
import ToDoList from "./Todo/ToDoList";
import Context from "./context";
import AddToDo from "./Todo/addToDo";

function App() {
  const [todos, setTodos] = React.useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(responce => responce.json())
    .then(todos => {
      setTodos(todos)
    })
  }, [])
  let toggleToDo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  let removeToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  function addToDo(title) {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeToDo }}>
      <div className="wrapper">
        <h1>Skripnik ToDo</h1>
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleToDo} />
        ) : (
          <p className="NT">No tasks</p>
        )}
        <AddToDo onCreate={addToDo} />
      </div>
    </Context.Provider>
  );
}

export default App;
