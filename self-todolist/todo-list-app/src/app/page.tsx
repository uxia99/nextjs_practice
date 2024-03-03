"use client";

import Head from 'next/head';
import { useState } from 'react';
import TodoForm from '../app/components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from '../app/interfaces'; // Todo 인터페이스를 정의해야 합니다.

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div style={{backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '50px'}}>
      <Head>
        <title>Todo List</title>
      </Head>

      <main>
        <TodoForm addTodo={(todo: Todo) => setTodos([...todos, todo])} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}
