import React, { useState } from 'react';
import TodoInput from './components/TodoAdd';
import TodoList from './components/TodoList';
import ProgressBar from './components/ProgressBar';
import ToggleSwitch from './components/ToggleSwitch';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isSortedByStatus, setIsSortedByStatus] = useState(false);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const completedPercentage = Math.round(
    (todos.filter((todo) => todo.completed).length / todos.length) * 100 || 0
  );

  const sortedTodos = isSortedByStatus
    ? [...todos].sort((a, b) => a.completed - b.completed)
    : todos;

  return (
    <div className="app">
      <h1 >Todo List</h1>
      <h6>Add things to do</h6>
      <ProgressBar percentage={completedPercentage} />
      <TodoList
        todos={sortedTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
      <ToggleSwitch
        isSortedByStatus={isSortedByStatus}
        setIsSortedByStatus={setIsSortedByStatus}
      />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default App;
