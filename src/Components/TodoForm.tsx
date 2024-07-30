interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
type Todo = {
  id: number;
  title: string;
  description: string;
};

const TodoForm: React.FC<TodoFormProps> = ({ setTodos }) => {
  return (
    <div className='container py-5 w-100 h-100 d-flex justify-content-center align-items-center'>
      <div className='bg-light p-3 rounded' style={{ width: "70vw" }}>
        <div className='heading fs-3 fw-bold text-center my-2 text-decoration-underline'>
          Todo List
        </div>
        <form>
          <label className='form-label' htmlFor='title'>
            Todo:
          </label>
          <input
            type='text'
            className='form-control my-3'
            name='title'
            id='title'
          />
          <label className='form-label' htmlFor='description'>
            Todo Description:
          </label>
          <textarea
            className='form-control my-3'
            rows={4}
            name='description'
          ></textarea>
        </form>
      </div>
    </div>
  );
};
export default TodoForm;
