import React, { useState } from 'react';
import { Card, CardContent, Button, TextField } from '@mui/material';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
  };
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false); // 編集モードかどうか
  const [editText, setEditText] = useState(todo.text); // 編集中のテキスト

  // 編集を保存する
  const handleEditSave = () => {
    onEdit(todo.id, editText); // 編集内容を親に渡して保存
    setIsEditing(false); // 編集モード終了
  };

  // 編集をキャンセルする
  const handleEditCancel = () => {
    setEditText(todo.text); // 編集内容をリセット
    setIsEditing(false); // 編集モード終了
  };

  return (
    <Card>
      <CardContent>
        {isEditing ? (
          <div>
            <TextField value={editText} onChange={(e) => setEditText(e.target.value)} />
            <Button onClick={handleEditSave}>保存</Button>
            <Button onClick={handleEditCancel}>キャンセル</Button>
          </div>
        ) : (
          <div>
            {todo.text}
            <Button onClick={() => setIsEditing(true)}>編集</Button>
            <Button onClick={() => onDelete(todo.id)}>削除</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TodoItem;
