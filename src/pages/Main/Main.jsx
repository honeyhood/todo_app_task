import s from './Main.module.scss';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useAuth } from '../../contexts/AuthContext';

const Main = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const { nameValue } = useAuth();

  return (
    <div className={s.todos}>
      <div className={s.headingWrapper}>
        <p className={s.headingWrapper__heading}>
          Hello, {nameValue}. <br />
          Create a task
        </p>
      </div>
      <div className={s.createTodo}>
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Main;
