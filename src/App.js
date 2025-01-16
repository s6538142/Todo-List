import React, { useState } from 'react';
import TodoInput from './components/TodoAdd';
import TodoList from './components/TodoList';
import ProgressBar from './components/ProgressBar';
import ToggleSwitch from './components/ToggleSwitch';
import './App.css';

const App = () => {
  // 定義狀態來存儲待辦事項列表
  const [todos, setTodos] = useState([]);

  // 定義狀態來判斷是否按完成狀態排序
  const [isSortedByStatus, setIsSortedByStatus] = useState(false);

  // 新增待辦事項的函數
  const addTodo = (text) => {
    // 創建一個新的待辦事項物件，包含唯一的 id 和預設未完成狀態
    const newTodo = { id: Date.now(), text, completed: false };
    // 將新的待辦事項添加到現有列表中
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // 切換待辦事項完成狀態的函數
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 刪除待辦事項的函數
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 計算完成度並轉換成百分比
  const completedPercentage = Math.round(
    (todos.filter((todo) => todo.completed).length / todos.length) * 100 || 0
  );

  // 根據是否排序的狀態來返回已排序或未排序的待辦事項列表
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
