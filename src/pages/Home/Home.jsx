import { AllTodosContext } from "../../assets/context/context";
import { OpenTodosContext } from "../../assets/context/context";
import reactLogo from "../../assets/react.svg";
import TodoInput from "../../components/TodoInput/ToDoInput";
import TodoItem from "../../components/TodoItem/TodoItem";
import viteLogo from "/vite.svg";

import "./Home.css";
import { useContext, useState, useEffect } from "react";
const Home = () => {
  const { allTodos, setAllTodos } = useContext(AllTodosContext);
  const { openTodos, setOpenTodos } = useContext(OpenTodosContext);

  console.log(openTodos);
  return (
    <>
      <h1>Website Todo</h1>
      <h2>
        Anzahl Todos: {allTodos.length} davon offen: {openTodos.length}
      </h2>
      <TodoInput />
      <div className="todo-list-container">
        {allTodos.map((item, index) => (
          <TodoItem key={index} todoIndex={index} todoName={item} />
        ))}
        {/* {allTodos ? (
        <section>
          {allTodos.map((item, index) => (
            <h2 key={index}>{item}</h2>
          ))}
        </section>
      ) : (
        <p>Daten werden geladen ...</p>
      )} */}
      </div>
    </>
  );
};

export default Home;
