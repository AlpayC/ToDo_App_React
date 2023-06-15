import { useState, useContext } from "react";
import { AllTodosContext } from "../../assets/context/context";
import { OpenTodosContext } from "../../assets/context/context";

const TodoInput = () => {
  const { allTodos, setAllTodos } = useContext(AllTodosContext);
  const { openTodos, setOpenTodos } = useContext(OpenTodosContext);
  const [inputval, setInputVal] = useState("");

  const getInput = (e) => {
    setInputVal(e.target.value);
  };

  const saveTodo = () => {
    setAllTodos((allTodos) => [...allTodos, inputval]); // Füge das Todo direkt hinzu und reiht es im array an
    setOpenTodos((openTodos) => [...openTodos, allTodos]); // Füge das Todo direkt hinzu und reiht es im array an
    setInputVal(""); // Setze das Input-Feld zurück
  };

  return (
    <>
      <input type="text" value={inputval} onChange={getInput} />
      <input type="submit" value="Click" onClick={saveTodo} />
    </>
  );
};

export default TodoInput;
