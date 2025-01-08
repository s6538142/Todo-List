import React, { useRef, useEffect } from 'react';
import './css/TodoList.css';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  const listRef = useRef(null);

  // 每次事項更新後自動滾動到最底部
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos]);

  return (
    <div ref={listRef} className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span
            className={todo.completed ? 'completed' : ''}
          >
            {todo.text}
          </span>
          <button className="listbtn" onClick={() => deleteTodo(todo.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;