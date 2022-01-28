import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Info from "./components/Info";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { todo: "Make a Todo App", isDone: true },
    { todo: "Drink some coffee", isDone: false },
  ]);
  const [filter, setFilter] = useState("all");

  return (
    <>
      <section className="todoapp">
        <Header todosState={todos} setTodosState={setTodos} />
        <TodoList todosState={todos} setTodosState={setTodos} filterState={filter} />
        <Footer todosState={todos} setTodosState={setTodos} filterState={filter} setFilterState={setFilter} />
      </section>
      <Info />
    </>
  );
}

export default App;