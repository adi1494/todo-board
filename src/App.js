import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}></Form>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
