import { useState } from "react";

const TodoList = ({ todosState, setTodosState, filterState }) => {
  const filteredList = todosState.filter((item, index, array) => {
    switch (filterState) {
      case "all":
        return array;
        break;

      case "true":
        return item.isDone;

      case "false":
        return !item.isDone;

      default:
        return array;
        break;
    }
  });

  const hanldeToggleAll = (e) => {
    const newStatus = e.target.checked;
    const newTodoList = todosState.map(item => {
      return { ...item, isDone: newStatus }
    });
    setTodosState(newTodoList);
  }

  const handleCheckboxChange = (index) => {
    const changedTodo = todosState.find((item, ind) => ind === index);
    changedTodo.isDone = !changedTodo.isDone;
    const newTodos = [...todosState];
    newTodos[index] = changedTodo;
    setTodosState(newTodos);
  }

  const handleDestroyClick = (index) => {
    const newTodos = todosState.filter((item, ind) => ind !== index);
    setTodosState(newTodos);
  }

  const allTodosDone = (todosState.filter(item => !item.isDone).length) ? false : true;

  return (
    <section className="main">
      <input
        type="checkbox"
        className="toggle-all"
        id="toggle-all"
        onChange={hanldeToggleAll}
        checked={allTodosDone}
      />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className="todo-list">
        {
          filteredList.map((item, index) => (
            <li key={index} className={item.isDone ? "completed" : ""}>
              <div className="view">
                <input
                  type="checkbox"
                  className="toggle"
                  checked={item.isDone}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label>{item.todo}</label>
                <button className="destroy" onClick={() => handleDestroyClick(index)} />
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default TodoList;