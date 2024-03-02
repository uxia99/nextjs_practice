import React from 'react';
import { Todo } from '../interfaces';

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, setTodos }) => {
  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  const toggleTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    // 전체 아이템을 감싸는 div에 display: flex와 justifyContent: space-between을 적용하여
    // 체크박스를 왼쪽에, 삭제 버튼을 오른쪽에 배치합니다. 목록 내용은 자연스럽게 가운데에 위치합니다.
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '600px', marginBottom: '5px'}}>
      {/* 체크박스를 왼쪽에 배치합니다. marginRight을 적용하여 옆에 있는 요소와의 간격을 조정합니다. */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
        style={{ marginRight: '10px' }} // 체크박스와 목록 내용 사이의 간격 조정
      />
      {/* 목록 내용은 flex-grow를 사용하여 남은 공간을 모두 차지하도록 합니다. 이로 인해 내용이 가운데 정렬됩니다. */}
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1, textAlign: 'left' }}>
        {todo.task}
      </span>
      {/* 삭제 버튼은 자동으로 오른쪽 끝에 배치됩니다. marginLeft을 'auto'로 설정하여 왼쪽 요소와의 간격을 최대로 합니다. */}
      <button onClick={deleteTodo} style={{ marginLeft: 'auto' }}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
