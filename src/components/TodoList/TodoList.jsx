import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';

const TodoList = ({ todos, setTodos }) => {
  const [edit, setEdit] = useState({
    id: '',
    value: '',
    isCompleted: false,
  });

  if (edit.id) {
    return (
      <TodoForm
        setTodos={setTodos}
        todos={todos}
        edit={edit}
        setEdit={setEdit}
      />
    );
  }

  return (
    <>
      {todos.map((todo, i) => (
        <Todo
          key={i}
          todos={todos}
          setTodos={setTodos}
          setEdit={setEdit}
          todo={todo}
          i={i}
        />
      ))}
    </>
  );
};

export default TodoList;
