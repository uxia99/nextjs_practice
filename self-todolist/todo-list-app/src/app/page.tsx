"use client";

import Head from 'next/head';
import { useState } from 'react';
import TodoForm from '../app/components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from '../app/interfaces'; // Todo 인터페이스를 정의해야 합니다.

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <div style={{
        position: 'fixed', // 페이지를 벗어나지 않고 고정시킵니다.
        top: 0,
        left: 0,
        width: '100%', // 너비를 화면 전체로 설정
        height: '100%', // 높이를 화면 전체로 설정
        backgroundImage: 'url("/images/sky.jpg")', // public 폴더 내의 이미지 사용
        backgroundSize: 'cover', // 이미지가 화면을 꽉 채우도록 설정
        backgroundPosition: 'center', // 이미지를 화면 중앙에 위치시킵니다.
        zIndex: -1, // 다른 내용물들이 이미지 위에 오도록 설정
      }}></div> {}
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '10px', padding: '40px' }}>
        <Head>
          <title>Todo List</title>
        </Head>

        <main>
          <TodoForm addTodo={(todo: Todo) => setTodos([...todos, todo])} />
          <TodoList todos={todos} setTodos={setTodos} />
        </main>
      </div>
    </>
  );
}
