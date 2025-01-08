import React, { useState } from 'react';
import './css/TodoAdd.css';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Add to list"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='addbtn' onClick={handleAdd}>+</button>
    </div>
  );
};

export default TodoInput;
