import TodoContainer from "./Components/TodoContainer";
import TodoForm from "./Components/TodoForm";
import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <TodoContainer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
