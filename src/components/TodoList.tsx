import React, { useState } from 'react';
import InputForm from './InputForm';  // 入力フォームコンポーネントを読み込む
import TodoListDisplay from './TodoListDisplay';  // Todoリスト表示用コンポーネントを読み込む

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // TODOを追加する関数
  const addTodo = (newTodo: string) => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
    }
  };

  // TODOを削除する関数
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // TODOを編集する関数
  const editTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // TODOをソートする関数
  const sortTodos = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      return sortOrder === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text);
    });
    setTodos(sortedTodos);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <InputForm addTodo={addTodo} sortTodos={sortTodos} sortOrder={sortOrder} /> {/* 入力フォーム */}
      <TodoListDisplay todos={todos} onDelete={deleteTodo} onEdit={editTodo} /> {/* TODOリスト表示 */}
    </div>
  );
};

export default TodoList;
