import { useState } from "react";

const Header = ({ todosState, setTodosState }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return false;
    }

    setTodosState([...todosState, { todo: inputValue, isDone: false }])

    setInputValue("");
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="new-todo"
          name="todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleInputChange}
          value={inputValue}
        />
      </form>
    </header>
  );
}

export default Header;