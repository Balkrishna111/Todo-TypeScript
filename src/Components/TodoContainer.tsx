import TodoItem from "./TodoItems/TodoItem";
type Todo = {
  id: number;
  title: string;
  description: string;
};
interface TodoContainerProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <TodoItem />
    </div>
  );
};
export default TodoContainer;
