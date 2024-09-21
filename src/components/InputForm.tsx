import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface InputFormProps {
  addTodo: (newTodo: string) => void;
  sortTodos: () => void;
  sortOrder: 'asc' | 'desc';
}

const InputForm: React.FC<InputFormProps> = ({ addTodo, sortTodos, sortOrder }) => {
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    addTodo(input); // TodoList.tsxから渡されたaddTodo関数を実行
    setInput('');
  };

  return (
    <div>
      <TextField label="TODOを追加" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={handleAddTodo}>追加</Button>
      <Button onClick={sortTodos}>並び替え ({sortOrder === 'asc' ? '昇順' : '降順'})</Button>
    </div>
  );
};

export default InputForm;
