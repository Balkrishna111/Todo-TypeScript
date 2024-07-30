import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const TodoItem = () => {
  const [title, setTitle] = useState<string>("asdfasdf asfdasdf asfdasf");
  const [description, setDescription] = useState<string>(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi deleniti odit quam possimus quidem dolore illum, quisquam eaquesapiente cumque aspernatur earum dolores culpa necessitatibuscupiditate ipsum. Excepturi, culpa."
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [seeMoreStatus, setSeeMoreStatus] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div
      className={"container px-3 py-2 bg-light"}
      style={{ width: "70vw", position: "relative" }}
    >
      <div className='upper d-flex flex-row justify-content-between'>
        <div className='title-container w-100'>
          {isEditing ? (
            <div className='my-3'>
              <label className='form-label fs-5' htmlFor='edit-title'>
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                name='edit-title'
                id='edit-title'
                className='form-control'
              />
            </div>
          ) : (
            <div className='todo-title fs-4 fw-bold'>{`1.  ${title}`}</div>
          )}
        </div>
        <button
          className='btn btn-secondary py-auto px-3 text-center'
          style={{
            fontSize: "0.8rem",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          onClick={() => setSeeMoreStatus(!seeMoreStatus)}
        >
          {"Details "}
          {seeMoreStatus ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        </button>
      </div>
      {seeMoreStatus && (
        <div className='w-100'>
          {isEditing ? (
            <div className='my-3'>
              <label htmlFor='edit-description' className='input-label fs-5'>
                Todo Description
              </label>
              <textarea
                value={description}
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
                name='edit-description'
                id='edit-description'
                className='w-100 form-control'
              ></textarea>
            </div>
          ) : (
            <div className='todo-description text-secondary my-3 text-start'>
              {description}
            </div>
          )}
        </div>
      )}

      <div
        className='todo-btns d-flex flex-row justify-content-around align-items-center py-3'
        style={{ fontSize: "0.8rem" }}
      >
        <button
          className='btn btn-success'
          onClick={() => setIsChecked(!isChecked)}
        >
          {isChecked ? "Uncheck" : "Check"}
        </button>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className='btn btn-warning'
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className='btn btn-danger'>remove</button>
      </div>
    </div>
  );
};
export default TodoItem;
