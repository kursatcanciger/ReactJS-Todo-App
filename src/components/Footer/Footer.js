const Footer = ({ todosState, setTodosState, filterState, setFilterState }) => {
  const todosCount = todosState.filter(item => !item.isDone).length;
  const todosDoneCount = todosState.filter(item => item.isDone).length;

  const handleFilterClick = (value) => {
    setFilterState(value);
  }

  const handleClearClick = () => {
    setTodosState(todosState.filter((item) => {
      return !item.isDone
    }));
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todosCount}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <a
            onClick={() => handleFilterClick("all")}
            className={filterState === "all" ? "selected" : ""}
          >All</a>
        </li>
        <li>
          <a
            onClick={() => handleFilterClick("false")}
            className={filterState === "false" ? "selected" : ""}
          >Active</a>
        </li>
        <li>
          <a
            onClick={() => handleFilterClick("true")}
            className={filterState === "true" ? "selected" : ""}
          >Completed</a>
        </li>
      </ul>

      {todosDoneCount ? (
        <button
          onClick={handleClearClick}
          className="clear-completed"
        >
          Clear completed
        </button>
      ) : (
        null
      )}
    </footer>
  );
}

export default Footer;