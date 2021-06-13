import React from 'react';
import './App.css';

function App() {
  // let todoList = [];
  const [value, setValue] = React.useState('');
  const [task, setTask] = React.useState([]);
  const addTodo = (text) => {
    const newTodos = [...task, { text }];
    setTask(newTodos);
  };

  const deletetodo = (index) => {
    const newTodos = [...task];
    newTodos.splice(index, 1);
    setTask(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  console.log(task);
  return (
    <>
      <div className="jumbotron jumbotron-fluid py-2">
        <div className="container">
          <h1 className="display-4">Todo App</h1>
        </div>
      </div>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Please enter the task"
            autoComplete="off"
            name="todotask"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-success">
              Add
            </button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {task.map((item, index) => {
          return (
            <li className="list-group-item" key={index}>
              {item.text}
              <button
                className="btn btn-sm btn-outline-danger float-right"
                onClick={() => deletetodo(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
