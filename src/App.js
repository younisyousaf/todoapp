import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [ListTodo, setListTodo] = useState([]);
  const listItems = (inputText) => {
    setListTodo([...ListTodo, inputText])
  }
  const deleteListItem = (key) => {
    let newListTodo = [...ListTodo]
    newListTodo.splice(key, 1);
    setListTodo(newListTodo)
  }
  return (
    <div className="App">
      <h1>Todo-List App</h1>
      <TodoInput listItems={listItems} />
      <div className="list-items" >
        {ListTodo.map((listItem, i) => {
          return (
            <TodoList key={i} index={i} item={listItem} deleteListItem={deleteListItem} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
