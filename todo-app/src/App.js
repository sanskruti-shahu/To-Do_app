import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleTextChange = (e) => {
    return setText(e.target.value);
  }
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Inside handle create " + text);
    setTodos([...todos, { todotext: text, id: Math.random() * 10 }]);
    setText("");
    return
  }
  return (
    <div className="Header">
      <h2 className="Heading">My TODO App</h2>
      <div className="Body">
        <form className="form">
          <input className="inputTxt" type="text" value={text} placeholder="Type your TODO" onChange={handleTextChange}></input>
          <input className="SubmitBtn" onClick={handleCreate} type="submit" value="Create"></input>
        </form>
        <h3 className="midHeading">Your TODOs</h3>
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos} todotext={todo.todotext} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
