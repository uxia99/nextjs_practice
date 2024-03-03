import { useState } from 'react';
import { Todo } from '../interfaces';

interface Props {
  addTodo: (todo: Todo) => void;
}

export default function TodoForm({ addTodo }: Props) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    addTodo({
      id: Date.now(), // 간단한 ID 생성 방법
      task: text, // 'text' 대신 'task'를 사용
      completed: false,
    });    
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

