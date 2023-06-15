import "./TodoItem.css";
import { AllTodosContext } from "../../assets/context/context";
import { OpenTodosContext } from "../../assets/context/context";
import { useState, useContext, useEffect } from "react";

const TodoItem = (props) => {
  const { allTodos, setAllTodos } = useContext(AllTodosContext);
  const { openTodos, setOpenTodos } = useContext(OpenTodosContext);

  const [done, setDone] = useState(false);
  const deleteByIndex = (index) => {
    setAllTodos((allTodos) => {
      return allTodos.filter((_, i) => i !== index);
    });
  };

  function erledigt() {
    setDone((prev) => !prev);
    setOpenTodos((prev) => prev.length - 1);
  }

  return (
    <>
      <div className="todo-item-container">
        <input className="checkbox" type="checkbox" onClick={erledigt}></input>
        <h3
          style={
            done
              ? {
                  textDecoration: "line-through",
                  textDecorationThickness: "0.4rem",
                  textDecorationColor: "red",
                }
              : {}
          }
          className="todo-description"
        >
          {props.todoName}
        </h3>
        <button
          className="delete-btn"
          onClick={() => deleteByIndex(props.todoIndex)}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
