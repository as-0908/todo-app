import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
}

interface TodoListDisplayProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoListDisplay: React.FC<TodoListDisplayProps> = ({ todos, onDelete, onEdit }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TodoListDisplay;
